import s from "../../../styles/main.module.scss";
import MarketCard from "../main/MarketCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import {
  Button,
  Card,
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
import BuySaleCard from "./BuySaleCard";
import JobsCard from "./JobsCard";
import { useWindowSize } from "@uidotdev/usehooks";
import HCarousel from "../main/HCarousel";

const offers = () => {
  const marketItems = [
    {
      image: "/assets/main/market-1.png",
      off: "30%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "30%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "30%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "30%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "30%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "30%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "30%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "30%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
  ];
  const brandsFillters = [
    { name: "ورچیتو", selected: "0" },
    { name: "ورچیتو", selected: "0" },
    { name: "ورچیتو", selected: "0" },
    { name: "ورچیتو", selected: "0" },
    { name: "ورچیتو", selected: "0" },
    { name: "ورچیتو", selected: "0" },
    { name: "ورچیتو", selected: "0" },
  ];
  const categoryFillters = [
    { name: "خودرو", selected: "0" },
    { name: "خودرو", selected: "0" },
    { name: "خودرو", selected: "0" },
    { name: "خودرو", selected: "0" },
    { name: "خودرو", selected: "0" },
    { name: "خودرو", selected: "0" },
    { name: "خودرو", selected: "0" },
  ];
  const size = useWindowSize();

  const [cSelected, setCSelected] = useState([]);
  const [categorySelected, setcategorySelected] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [offers, setOffers] = useState("کسب و کار");
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [filters, setFilters] = useState("جدیدترین");
  //control filters collapse
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [brandsOpen, setBrandsOpen] = useState(true);
  const [yearsOpen, setYearsOpen] = useState(true);
  const [priceRangeOpen, setPriceRangeOpen] = useState(true);
  const [colorSelectOpen, setColorSelectOpen] = useState(true);
  //range input control
  const [minPriceValue, setMinPriceValue] = useState(10);
  const [maxPriceValue, setMaxPiceValue] = useState(100);
  const handleInput = (e) => {
    setMinPriceValue(e.minValue);
    setMaxPiceValue(e.maxValue);
  };

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };

  const handleCatCBClick = (selected) => {
    const index = categorySelected.indexOf(selected);
    if (index < 0) {
      categorySelected.push(selected);
    } else {
      categorySelected.splice(index, 1);
    }
    setcategorySelected([...categorySelected]);
  };

  useEffect(() => console.log(offers), [offers]);

  const handleFilterValidate = (value) => {
    if (filters === value) {
      return true;
    } else {
      return false;
    }
  };

  const handleFilterStyle = (value) => {
    if (filters === value) {
      return { borderBottom: "2px solid blue" };
    } else return { border: "" };
  };

  return (
    <div className={s.offers}>
      <HCarousel />

      <section className={s.market}>
        <div className={s.market_filters}>
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
                {categoryFillters.map((cat, index) => (
                  <section key={Math.random() * index} className={s.list_item}>
                    <Button
                      onClick={() => handleCatCBClick(index + 1)}
                      active={categorySelected.includes(index + 1)}
                    ></Button>{" "}
                    {cat.name}
                  </section>
                ))}
              </div>
            </Collapse>
          </section>

          <section className={s.brands}>
            <div onClick={() => setBrandsOpen(!brandsOpen)} className={s.title}>
              {brandsOpen ? <DownOutlined /> : <UpOutlined />}
              برندها
            </div>
            <Collapse
              style={{ width: "100%", overflow: "hidden" }}
              isOpen={brandsOpen}
            >
              <div className={s.list}>
                {brandsFillters.map((cat, index) => (
                  <section key={Math.random() * index} className={s.list_item}>
                    <Button
                      onClick={() => onCheckboxBtnClick(index + 1)}
                      active={cSelected.includes(index + 1)}
                    ></Button>{" "}
                    {cat.name}
                  </section>
                ))}
              </div>
            </Collapse>
          </section>

          <section className={s.year}>
            <div onClick={() => setYearsOpen(!yearsOpen)} className={s.title}>
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
            {offers === "خرید و فروش"
              ? marketItems.map((item, index) => (
                  <BuySaleCard
                    key={Math.random() * index}
                    createYear={"۱۳۹۲"}
                    image={"/assets/offers/banner-buy-sale.png"}
                    title={"ام وی ام"}
                    description={"ام وی ام اتوماتیک ۹۲"}
                    timePosted={"۲ هفته پیش"}
                    location={"تهران"}
                    price={"۹,۹۰۰,۰۰۰,۰۰۰"}
                  />
                ))
              : offers === "کسب و کار"
              ? marketItems.map((item, index) => (
                  <JobsCard
                    key={Math.random() * index}
                    image={"/assets/offers/jobs-1.png"}
                    rate={"۴.۵"}
                    title={"لوازم یدکی میلاد"}
                    description={
                      "تکمیل فرآیند خرید از محل سامانه ، به صورت غیر حضوری و ..."
                    }
                    isOpen={true}
                    location={"تهران"}
                    workTime={"ساعت کاری: ۹ تا ۲۲"}
                  />
                ))
              : marketItems.map((item, index) => (
                  <MarketCard
                    key={Math.random() * index}
                    image={item.image}
                    off={item.off}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    index={index + 1}
                  />
                ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default offers;
