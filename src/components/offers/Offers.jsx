import s from "../../../styles/main.module.scss";
import MarketCard from "../main/MarketCard";
import Image from "next/image";
import {
  Button,
  Collapse,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { LeftOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import BuySaleCard from "./cards/BuySaleCard";
import JobsCard from "./cards/JobsCard";
import { useWindowSize } from "@uidotdev/usehooks";
import HCarousel from "../main/HCarousel";
import useHttp from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";
import {
  formatStringJSON,
  getLocal,
  removeLocal,
  setLocal,
} from "@/src/hooks/functions";
import OfferCardSkeleton from "../skeleton/OfferCardSkeleton";
import CardRenderer from "./cards/CardRenderer";
import { useRouter } from "next/router";

const offers = () => {
  const router = useRouter();
  const { httpService } = useHttp();
  const [loading, setLoading] = useState(true);
  const size = useWindowSize();

  const [adsFilter, setAdsFilter] = useState();
  const [adsfilterSelected, setAdsfilterSelected] = useState({
    fuel: "",
    color: "",
    bodyCondition: "",
    gearBoxType: "",
  });
  const [jobsCategory, setJobsCategory] = useState([]);
  const [jobFiltersSlected, setJobFiltersSlected] = useState({
    categoryId: "",
    filter: "",
    title: "",
  });
  const [offers, setOffers] = useState("خرید و فروش");
  const [filters, setFilters] = useState("جدیدترین");
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  //control filters collapse
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [colorsFilterOpen, setColorsFilterOpen] = useState(true);
  const [desFilterOpen, setDesFilterOpen] = useState(true);
  const [yearsOpen, setYearsOpen] = useState(true);
  const [gearBoxOpen, setGearBoxOpen] = useState(true);
  const [priceRangeOpen, setPriceRangeOpen] = useState(true);
  const [colorSelectOpen, setColorSelectOpen] = useState(true);
  const [filterOpen, setFilterOpen] = useState(true);
  //range input control
  const [minPriceValue, setMinPriceValue] = useState(10);
  const [maxPriceValue, setMaxPiceValue] = useState(100);
  const handleInput = (e) => {
    setMinPriceValue(e.minValue);
    setMaxPiceValue(e.maxValue);
  };

  useEffect(
    () => console.log(jobFiltersSlected, jobsCategory),
    [jobFiltersSlected]
  );

  //handle requests
  useEffect(() => {
    if (offers === "خرید و فروش") {
      httpService
        .get("getCarFiltersData")
        .then((res) => {
          res.status === 200 ? setAdsFilter(res.data) : null;
          setJobsCategory(null);
          setLoading(false);
          setLocal("adsFilter", JSON.stringify(res.data));
        })
        .catch((err) => toast.error(err.message));
    }

    if (offers === "کسب و کار") {
      httpService.get("categories").then((res) => {
        let data = [];
        res.status === 200
          ? res.data.data.map((cat) => {
              data = [
                ...data,
                {
                  id: cat.id,
                  title: cat.title,
                  filters: cat.filters.split(","),
                },
              ];
            })
          : null;
        setJobsCategory(data);
        setAdsFilter(null);
      });
      getLocal("jobCategory") !== "null"
        ? (setJobFiltersSlected({ categoryId: getLocal("jobCategory") }),
          removeLocal("jobCategory"))
        : null;
    }
  }, [offers]);

  useEffect(() => {
    const offersGroup = router.query.adGroup;
    if (offersGroup === "trades") {
      setOffers("خرید و فروش");
    } else if (offersGroup === "jobs") {
      setOffers("کسب و کار");
    } else if (offersGroup === "market") {
      setOffers("بازارچه");
    }
  }, [router]);

  useEffect(() => console.log(jobFiltersSlected), [jobFiltersSlected]);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  //jobs filters
  const handleJobsFilters = (cat, filter, title) => {
    setJobFiltersSlected({ categoryId: cat, filter: filter });
  };

  //ads filters
  const handleAdsFilterClick = (selected, category) => {
    switch (category) {
      case "color":
        setAdsfilterSelected({ ...adsfilterSelected, color: selected });
        break;
      case "fuel":
        setAdsfilterSelected({ ...adsfilterSelected, fuel: selected });
        break;
      case "bodyCondition":
        setAdsfilterSelected({ ...adsfilterSelected, bodyCondition: selected });
        break;
      case "gearBoxType":
        setAdsfilterSelected({ ...adsfilterSelected, gearBoxType: selected });
        break;
    }
  };
  const handleFilterValidate = (value) => {
    if (filters === value) {
      return true;
    } else {
      return false;
    }
  };
  const handleFilterStyle = (value) => {
    if (filters === value) {
      return { borderBottom: "2px solid #142D5D", color: "#142D5D" };
    } else return { border: "" };
  };

  return (
    <div className={s.offers}>
      <HCarousel />

      <section className={s.market}>
        <div className={s.market_filters}>
          {offers === "خرید و فروش" && adsFilter && !loading ? (
            <>
              <section className={s.categories}>
                <div
                  onClick={() => setCategoryOpen(!categoryOpen)}
                  className={s.title}
                >
                  {categoryOpen ? <DownOutlined /> : <UpOutlined />}
                  سوخت
                </div>
                <Collapse
                  style={{ width: "100%", overflow: "hidden" }}
                  isOpen={categoryOpen}
                >
                  <div className={s.list}>
                    {adsFilter["fuels"].map((filter, index) => (
                      <section
                        key={Math.random() * index}
                        className={s.list_item}
                      >
                        <Button
                          onClick={() => handleAdsFilterClick(filter, "fuel")}
                          active={adsfilterSelected.fuel === filter}
                        ></Button>{" "}
                        {filter}
                      </section>
                    ))}
                  </div>
                </Collapse>
              </section>

              <section className={s.categories}>
                <div
                  onClick={() => setColorsFilterOpen(!colorsFilterOpen)}
                  className={s.title}
                >
                  {colorsFilterOpen ? <DownOutlined /> : <UpOutlined />}
                  رنگ ها
                </div>

                <Collapse
                  style={{ width: "100%", overflow: "hidden" }}
                  isOpen={colorsFilterOpen}
                >
                  <div className={s.list}>
                    {adsFilter["colors"].map((filter, index) => (
                      <section
                        key={Math.random() * index}
                        className={s.list_item}
                      >
                        <Button
                          onClick={() => handleAdsFilterClick(filter, "color")}
                          active={adsfilterSelected.color === filter}
                        ></Button>{" "}
                        {filter}
                      </section>
                    ))}
                  </div>
                </Collapse>
              </section>

              <section className={s.categories}>
                <div
                  onClick={() => setDesFilterOpen(!desFilterOpen)}
                  className={s.title}
                >
                  {desFilterOpen ? <DownOutlined /> : <UpOutlined />}
                  وضعیت بدنه
                </div>

                <Collapse
                  style={{ width: "100%", overflow: "hidden" }}
                  isOpen={desFilterOpen}
                >
                  <div className={s.list}>
                    {adsFilter["body_conditions"].map((filter, index) => (
                      <section
                        key={Math.random() * index}
                        className={s.list_item}
                      >
                        <Button
                          onClick={() =>
                            handleAdsFilterClick(filter, "bodyCondition")
                          }
                          active={adsfilterSelected.bodyCondition === filter}
                        ></Button>{" "}
                        {filter}
                      </section>
                    ))}
                  </div>
                </Collapse>
              </section>

              <section className={s.categories}>
                <div
                  onClick={() => setGearBoxOpen(!gearBoxOpen)}
                  className={s.title}
                >
                  {gearBoxOpen ? <DownOutlined /> : <UpOutlined />}
                  جعبه دنده
                </div>

                <Collapse
                  style={{ width: "100%", overflow: "hidden" }}
                  isOpen={gearBoxOpen}
                >
                  <div className={s.list}>
                    {adsFilter["gearbox"].map((filter, index) => (
                      <section
                        key={Math.random() * index}
                        className={s.list_item}
                      >
                        <Button
                          onClick={() =>
                            handleAdsFilterClick(filter, "gearBoxType")
                          }
                          active={adsfilterSelected.gearBoxType === filter}
                        ></Button>{" "}
                        {filter}
                      </section>
                    ))}
                  </div>
                </Collapse>
              </section>

              <section className={s.year}>
                <div
                  onClick={() => setYearsOpen(!yearsOpen)}
                  className={s.title}
                >
                  {yearsOpen ? <DownOutlined /> : <UpOutlined />}
                  سال
                </div>
                <Collapse
                  isOpen={yearsOpen}
                  style={{ width: "100%", overflow: "hidden" }}
                >
                  <div className={s.list}>
                    <div className={s.list_item}>
                      <Button
                      // onClick={() => onCheckboxBtnClick(1)}
                      // active={cSelected.includes(1)}
                      ></Button>{" "}
                      1402
                    </div>
                    <div className={s.list_item}>
                      <Button
                      // onClick={() => onCheckboxBtnClick(2)}
                      // active={cSelected.includes(2)}
                      ></Button>{" "}
                      1402
                    </div>
                    <div className={s.list_item}>
                      <Button
                      // onClick={() => onCheckboxBtnClick(3)}
                      // active={cSelected.includes(3)}
                      ></Button>{" "}
                      1402
                    </div>
                    <div className={s.list_item}>
                      <Button
                      // onClick={() => onCheckboxBtnClick(4)}
                      // active={cSelected.includes(4)}
                      ></Button>{" "}
                      1402
                    </div>
                    <div className={s.list_item}>
                      <Button
                      // onClick={() => onCheckboxBtnClick(5)}
                      // active={cSelected.includes(5)}
                      ></Button>{" "}
                      1402
                    </div>
                  </div>
                </Collapse>
              </section>

              <section className={s.price_range}>
                <div
                  onClick={() => setPriceRangeOpen(!priceRangeOpen)}
                  className={s.title}
                >
                  {priceRangeOpen ? <DownOutlined /> : <UpOutlined />}
                  محدوده قیمت
                </div>
                <Collapse
                  isOpen={priceRangeOpen}
                  style={{ width: "100%", overflow: "hidden" }}
                >
                  <div className={s.range}>
                    <span className={s.from}>۲۰,۶۰۰,۰۰۰ تومان</span>
                    {/* <div className={s.range_input}> */}
                    <Input style={{ background: "none" }} type="range" />
                    {/* </div> */}
                    <span className={s.to}>۲۰,۶۰۰,۰۰۰ تومان</span>
                  </div>
                </Collapse>
              </section>

              <section className={s.color_select}>
                <div
                  onClick={() => setColorSelectOpen(!colorSelectOpen)}
                  className={s.title}
                >
                  {colorSelectOpen ? <DownOutlined /> : <UpOutlined />}
                  انتخاب رنگ
                </div>
                <Collapse
                  isOpen={colorSelectOpen}
                  style={{ width: "100%", overflow: "hidden" }}
                >
                  <div className={s.color_list}>
                    <div className={s.color_box}></div>
                    <div className={s.color_box}></div>
                    <div className={s.color_box}></div>
                    <div className={s.color_box}></div>
                  </div>
                </Collapse>
              </section>
            </>
          ) : offers === "کسب و کار" && jobsCategory && !loading ? (
            <>
              <section className={s.categories}>
                <div
                  onClick={() => setCategoryOpen(!categoryOpen)}
                  className={s.title}
                >
                  {categoryOpen ? <DownOutlined /> : <UpOutlined />}
                  دسته بندی
                </div>
                <Collapse
                  style={{ width: "100%", overflow: "hidden" }}
                  isOpen={categoryOpen}
                >
                  <div className={s.list}>
                    {jobsCategory.map((cat, index) => (
                      <section
                        key={Math.random() * index}
                        className={s.list_item}
                      >
                        <Button
                          onClick={() => handleJobsFilters(cat.id, "")}
                          active={jobFiltersSlected.categoryId == cat.id}
                        ></Button>{" "}
                        {cat.title}
                      </section>
                    ))}
                  </div>
                </Collapse>
              </section>

              {jobFiltersSlected.categoryId ? (
                <section className={s.categories}>
                  <div
                    onClick={() => setCategoryOpen(!categoryOpen)}
                    className={s.title}
                  >
                    {categoryOpen ? <DownOutlined /> : <UpOutlined />}
                    فیلتر ها
                  </div>
                  <Collapse
                    style={{ width: "100%", overflow: "hidden" }}
                    isOpen={filterOpen}
                  >
                    <div className={s.list}>
                      {jobsCategory[
                        `${jobFiltersSlected.categoryId}`
                      ].filters.map((filter, index) => (
                        <section
                          key={Math.random() * index}
                          className={s.list_item}
                        >
                          <Button
                            onClick={() =>
                              handleJobsFilters(
                                jobFiltersSlected.categoryId,
                                filter
                              )
                            }
                            active={jobFiltersSlected.filter === filter}
                          ></Button>{" "}
                          {filter}
                        </section>
                      ))}
                    </div>
                  </Collapse>
                </section>
              ) : null}
            </>
          ) : (
            <>
              <OfferCardSkeleton width={"250px"} height={"250px"} />
              <OfferCardSkeleton width={"250px"} height={"250px"} />
              <OfferCardSkeleton width={"250px"} height={"250px"} />
            </>
          )}
        </div>

        <div className={s.market_items}>
          <div className={s.tabs}>
            {size.width > 1000 ? (
              <Nav className={s.tabs_names}>
                {offers === "کسب و کار" ? (
                  <>
                    <NavItem onClick={() => setFilters("پیش فرض")}>
                      <NavLink
                        disabled={!handleFilterValidate("پیش فرض")}
                        style={handleFilterStyle("پیش فرض")}
                      >
                        <Image
                          src={"/assets/offers/setting.svg"}
                          alt=""
                          width={15}
                          height={18}
                        />
                        پیش فرض
                      </NavLink>
                    </NavItem>

                    <NavItem onClick={() => setFilters("جدیدترین")}>
                      <NavLink
                        disabled={!handleFilterValidate("جدیدترین")}
                        style={handleFilterStyle("جدیدترین")}
                      >
                        جدیدترین
                      </NavLink>
                    </NavItem>

                    <NavItem onClick={() => setFilters("پرفروش‌ترین")}>
                      <NavLink
                        style={handleFilterStyle("پرفروش‌ترین")}
                        disabled={!handleFilterValidate("پرفروش‌ترین")}
                      >
                        پرفروش‌ترین
                      </NavLink>
                    </NavItem>

                    <NavItem onClick={() => setFilters("نزدیک‌ترین")}>
                      <NavLink
                        disabled={!handleFilterValidate("نزدیک‌ترین")}
                        style={handleFilterStyle("نزدیک‌ترین")}
                      >
                        نزدیک‌ترین
                      </NavLink>
                    </NavItem>

                    <NavItem onClick={() => setFilters("بهترین")}>
                      <NavLink
                        disabled={!handleFilterValidate("بهترین")}
                        style={handleFilterStyle("بهترین")}
                      >
                        بهترین
                      </NavLink>
                    </NavItem>
                  </>
                ) : (
                  <>
                    <NavItem onClick={() => setFilters("پیش فرض")}>
                      <NavLink
                        disabled={!handleFilterValidate("پیش فرض")}
                        style={handleFilterStyle("پیش فرض")}
                      >
                        <Image
                          src={"/assets/offers/setting.svg"}
                          alt=""
                          width={15}
                          height={18}
                        />
                        پیش فرض
                      </NavLink>
                    </NavItem>

                    <NavItem onClick={() => setFilters("جدیدترین")}>
                      <NavLink
                        disabled={!handleFilterValidate("جدیدترین")}
                        style={handleFilterStyle("جدیدترین")}
                      >
                        جدیدترین
                      </NavLink>
                    </NavItem>

                    <NavItem onClick={() => setFilters("پرفروش‌ترین")}>
                      <NavLink
                        style={handleFilterStyle("پرفروش‌ترین")}
                        disabled={!handleFilterValidate("پرفروش‌ترین")}
                      >
                        پرفروش‌ترین
                      </NavLink>
                    </NavItem>

                    <NavItem onClick={() => setFilters("ارزان ترین")}>
                      <NavLink
                        disabled={!handleFilterValidate("ارزان ترین")}
                        style={handleFilterStyle("ارزان ترین")}
                      >
                        ارزان ترین
                      </NavLink>
                    </NavItem>

                    <NavItem onClick={() => setFilters("گران ترین")}>
                      <NavLink
                        disabled={!handleFilterValidate("گران ترین")}
                        style={handleFilterStyle("گران ترین")}
                      >
                        گران ترین
                      </NavLink>
                    </NavItem>
                  </>
                )}
              </Nav>
            ) : (
              <div className="d-flex align-items=center">
                <Dropdown
                  isOpen={filterDropdownOpen}
                  toggle={() => setFilterDropdownOpen(!filterDropdownOpen)}
                  direction={"down"}
                >
                  <DropdownToggle caret>{filters}</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => setFilters("پیش فرض")}>
                      {" "}
                      پیش فرض
                    </DropdownItem>
                    <DropdownItem onClick={() => setFilters("پرفروش‌ترین")}>
                      {" "}
                      پرفروش‌ترین
                    </DropdownItem>
                    <DropdownItem onClick={() => setFilters("ارزان‌ترین")}>
                      {" "}
                      ارزان‌ترین
                    </DropdownItem>
                    <DropdownItem onClick={() => setFilters("گران‌ترین")}>
                      {" "}
                      گران‌ترین
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            )}
            <div className="d-flex">
              <Dropdown
                isOpen={dropdownOpen}
                toggle={toggle}
                direction={"down"}
              >
                <DropdownToggle caret>{offers}</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={() => setOffers("فروش")}>
                    {" "}
                    فروش
                  </DropdownItem>
                  <DropdownItem onClick={() => setOffers("خرید و فروش")}>
                    {" "}
                    خرید و فروش
                  </DropdownItem>
                  <DropdownItem onClick={() => setOffers("خدمات")}>
                    {" "}
                    خدمات
                  </DropdownItem>
                  <DropdownItem onClick={() => setOffers("کسب و کار")}>
                    {" "}
                    کسب و کار
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>

          <div className={s.market_cards}>
            <CardRenderer
              offers={offers}
              adsFilter={adsfilterSelected}
              jobsFilter={jobFiltersSlected}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default offers;
