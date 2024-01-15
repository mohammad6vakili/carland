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
import { DownOutlined, UpOutlined } from "@ant-design/icons";
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

  const [filterStep, setFilterStep] = useState(1);
  const [adsFilter, setAdsFilter] = useState();
  const [adsfilterSelected, setAdsfilterSelected] = useState({
    fuel: "",
    color: "",
    bodyCondition: "",
    gearBoxType: "",
    state: "",
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
  const statesNames = [
    "آذربایجان شرقی",
    "آذربایجان غربی",
    "اردبیل",
    "اصفهان",
    "البرز",
    "ایلام",
    "بوشهر",
    "تهران",
    "چهارمحال و بختیاری",
    "خراسان جنوبی",
    "خراسان رضوی",
    "خراسان شمالی",
    "خوزستان",
    "زنجان",
    "سمنان",
    "سیستان و بلوچستان",
    "فارس",
    "قزوین",
    "قم",
    "کردستان",
    "کرمان",
    "کرمانشاه",
    "کهگیلویه و بویراحمد",
    "گلستان",
    "گیلان",
    "لرستان",
    "مازندران",
    "مرکزی",
    "هرمزگان",
    "همدان",
    "یزد",
  ];
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
    console.log(selected);
    setFilterStep((current) => current + 1);
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
      case "state":
        setAdsfilterSelected({ ...adsfilterSelected, state: selected });
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
  const handleStep = (step) => {
    if (step === filterStep) {
      return true;
    } else {
      return false;
    }
  };
  const clearFilters = () => {
    setAdsfilterSelected({
      fuel: "",
      color: "",
      bodyCondition: "",
      gearBoxType: "",
      state: "",
    });
    setJobFiltersSlected({
      categoryId: "",
      filter: "",
      title: "",
    });
  };

  return (
    <>
      <div className={s.offers}>
        <HCarousel />

        <section className={s.market}>
          <div className={s.market_filters}>
            {offers === "خرید و فروش" && adsFilter && !loading ? (
              <>
                <h2 className={s.main_title}>
                  فیلتر ها <Button onClick={() => clearFilters()}>-</Button>
                </h2>
                {size.width < 700 && (
                  <>
                    {handleStep(1) && (
                      <Input
                        onChange={(e) =>
                          handleAdsFilterClick(e.target.value, "state")
                        }
                        type="select"
                      >
                        <option selected value="" disabled>
                          انتخاب استان
                        </option>
                        {statesNames.map((state, index) => (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        ))}
                      </Input>
                    )}

                    {handleStep(2) && (
                      <Input
                        onChange={(e) =>
                          handleAdsFilterClick(e.target.value, "fuel")
                        }
                        type="select"
                      >
                        <option defaultValue value="" disabled>
                          انتخاب نوع سوخت
                        </option>

                        {adsFilter["fuels"].map((filter, index) => (
                          <option
                            key={Math.random() * index}
                            className={s.list_item}
                          >
                            {filter}
                          </option>
                        ))}
                      </Input>
                    )}

                    {handleStep(3) && (
                      <Input
                        onChange={(e) =>
                          handleAdsFilterClick(e.target.value, "fuel")
                        }
                        type="select"
                      >
                        <option defaultValue value="" disabled>
                          انتخاب نوع سوخت
                        </option>

                        {adsFilter["gearBox"].map((filter, index) => (
                          <option
                            key={Math.random() * index}
                            className={s.list_item}
                          >
                            {filter}
                          </option>
                        ))}
                      </Input>
                    )}

                    {handleStep(4) && (
                      <Input
                        onChange={(e) =>
                          handleAdsFilterClick(e.target.value, "fuel")
                        }
                        type="select"
                      >
                        <option defaultValue value="" disabled>
                          انتخاب نوع سوخت
                        </option>

                        {adsFilter["bodyCondition"].map((filter, index) => (
                          <option
                            key={Math.random() * index}
                            className={s.list_item}
                          >
                            {filter}
                          </option>
                        ))}
                      </Input>
                    )}

                    {handleStep(5) && (
                      <Input
                        onChange={(e) =>
                          handleAdsFilterClick(e.target.value, "fuel")
                        }
                        type="select"
                      >
                        <option defaultValue value="" disabled>
                          انتخاب نوع سوخت
                        </option>

                        {adsFilter["color"].map((filter, index) => (
                          <option
                            key={Math.random() * index}
                            className={s.list_item}
                          >
                            {filter}
                          </option>
                        ))}
                      </Input>
                    )}
                  </>
                )}
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
                      onClick={() => setFilterOpen(!filterOpen)}
                      className={s.title}
                    >
                      {filterOpen ? <DownOutlined /> : <UpOutlined />}
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
                <OfferCardSkeleton width={"90%"} height={"250px"} />
                <OfferCardSkeleton width={"90%"} height={"250px"} />
                <OfferCardSkeleton width={"90%"} height={"250px"} />
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
    </>
  );
};

export default offers;
