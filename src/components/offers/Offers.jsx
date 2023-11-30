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
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { LeftOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import BuySaleCard from "./BuySaleCard";
import JobsCard from "./JobsCard";
// import MultiRangeSlider from "multi-range-slider-react";

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
  const [cSelected, setCSelected] = useState([]);
  const [categorySelected, setcategorySelected] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [offers, setOffers] = useState("خرید و فروش");
  //control filters collapse
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [brandsOpen, setBrandsOpen] = useState(true);
  const [yearsOpen, setYearsOpen] = useState(true);
  const [priceRangeOpen, setPriceRangeOpen] = useState(true);
  const [colorSelectOpen, setColorSelectOpen] = useState(true);
  //range input control
  const [minPriceValue, setMinPriceValue] = useState(0);
  const [maxPriceValue, setMaxPiceValue] = useState(20000000);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
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

  return (
    <div className={s.offers}>
      <div className={s.head_carousel}>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className={s.mySwiper}
        >
          <SwiperSlide>
            <Image
              src={"/assets/main/head-carousel-background.svg"}
              alt=""
              width={1000}
              height={386}
              className={s.background}
            />

            <div className={s.content}>
              <div className={s.texts}>
                <h1>کارلند بهترین فروشگاه خودروی ایران</h1>
                <p>
                  میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای
                  آن پیش آمده تمام قطعات رو اینجا پیدا کنید.
                </p>

                <Button className={s.btn}>
                  لوازم ماشین
                  <div>
                    <LeftOutlined style={{ color: "#fff" }} />
                  </div>
                </Button>
              </div>

              <Image
                src={"/assets/main/car-1.svg"}
                alt=""
                width={386}
                height={386}
                className={s.car}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={"/assets/main/head-carousel-background.svg"}
              alt=""
              width={1000}
              height={386}
              className={s.background}
            />

            <div className={s.content}>
              <div className={s.texts}>
                <h1>کارلند بهترین فروشگاه خودروی ایران</h1>
                <p>
                  میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای
                  آن پیش آمده تمام قطعات رو اینجا پیدا کنید.
                </p>

                <Button className={s.btn}>
                  لوازم ماشین
                  <div>
                    <LeftOutlined style={{ color: "#fff" }} />
                  </div>
                </Button>
              </div>

              <Image
                src={"/assets/main/car-1.svg"}
                alt=""
                width={386}
                height={386}
                className={s.car}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={"/assets/main/head-carousel-background.svg"}
              alt=""
              width={1000}
              height={386}
              className={s.background}
            />

            <div className={s.content}>
              <div className={s.texts}>
                <h1>کارلند بهترین فروشگاه خودروی ایران</h1>
                <p>
                  میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای
                  آن پیش آمده تمام قطعات رو اینجا پیدا کنید.
                </p>

                <Button className={s.btn}>
                  لوازم ماشین
                  <div>
                    <LeftOutlined style={{ color: "#fff" }} />
                  </div>
                </Button>
              </div>

              <Image
                src={"/assets/main/car-1.svg"}
                alt=""
                width={386}
                height={386}
                className={s.car}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={"/assets/main/head-carousel-background.svg"}
              alt=""
              width={1000}
              height={386}
              className={s.background}
            />

            <div className={s.content}>
              <div className={s.texts}>
                <h1>کارلند بهترین فروشگاه خودروی ایران</h1>
                <p>
                  میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای
                  آن پیش آمده تمام قطعات رو اینجا پیدا کنید.
                </p>

                <Button className={s.btn}>
                  لوازم ماشین
                  <div>
                    <LeftOutlined style={{ color: "#fff" }} />
                  </div>
                </Button>
              </div>

              <Image
                src={"/assets/main/car-1.svg"}
                alt=""
                width={386}
                height={386}
                className={s.car}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={"/assets/main/head-carousel-background.svg"}
              alt=""
              width={1000}
              height={386}
              className={s.background}
            />

            <div className={s.content}>
              <div className={s.texts}>
                <h1>کارلند بهترین فروشگاه خودروی ایران</h1>
                <p>
                  میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای
                  آن پیش آمده تمام قطعات رو اینجا پیدا کنید.
                </p>

                <Button className={s.btn}>
                  لوازم ماشین
                  <div>
                    <LeftOutlined style={{ color: "#fff" }} />
                  </div>
                </Button>
              </div>

              <Image
                src={"/assets/main/car-1.svg"}
                alt=""
                width={386}
                height={386}
                className={s.car}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={"/assets/main/head-carousel-background.svg"}
              alt=""
              width={1000}
              height={386}
              className={s.background}
            />

            <div className={s.content}>
              <div className={s.texts}>
                <h1>کارلند بهترین فروشگاه خودروی ایران</h1>
                <p>
                  میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای
                  آن پیش آمده تمام قطعات رو اینجا پیدا کنید.
                </p>

                <Button className={s.btn}>
                  لوازم ماشین
                  <div>
                    <LeftOutlined style={{ color: "#fff" }} />
                  </div>
                </Button>
              </div>

              <Image
                src={"/assets/main/car-1.svg"}
                alt=""
                width={386}
                height={386}
                className={s.car}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <section className={s.market}>
        <div className={s.market_filters}>
          <section className={s.categories}>
            <div
              onClick={() => setCategoryOpen(!categoryOpen)}
              className={s.title}
            >
              دسته بندی
              {categoryOpen ? <DownOutlined /> : <UpOutlined />}
            </div>
            <Collapse
              style={{ width: "100%", overflow: "hidden" }}
              isOpen={categoryOpen}
            >
              <div className={s.list}>
                {categoryFillters.map((cat, index) => (
                  <section key={Math.random() * index} className={s.list_item}>
                    {cat.name}
                    <Button
                      onClick={() => handleCatCBClick(index + 1)}
                      active={categorySelected.includes(index + 1)}
                    ></Button>{" "}
                  </section>
                ))}
              </div>
            </Collapse>
          </section>

          <section className={s.brands}>
            <div onClick={() => setBrandsOpen(!brandsOpen)} className={s.title}>
              برندها
              {brandsOpen ? <DownOutlined /> : <UpOutlined />}
            </div>
            <Collapse
              style={{ width: "100%", overflow: "hidden" }}
              isOpen={brandsOpen}
            >
              <div className={s.list}>
                {brandsFillters.map((cat, index) => (
                  <section key={Math.random() * index} className={s.list_item}>
                    {cat.name}
                    <Button
                      onClick={() => onCheckboxBtnClick(index + 1)}
                      active={cSelected.includes(index + 1)}
                    ></Button>{" "}
                  </section>
                ))}
              </div>
            </Collapse>
          </section>

          <section className={s.year}>
            <div onClick={() => setYearsOpen(!yearsOpen)} className={s.title}>
              سال
              {yearsOpen ? <DownOutlined /> : <UpOutlined />}
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
              محدوده قیمت
              {priceRangeOpen ? <DownOutlined /> : <UpOutlined />}
            </div>
            <Collapse
              isOpen={priceRangeOpen}
              style={{ width: "100%", overflow: "hidden" }}
            >
              <div className={s.range}>
                <span className={s.from}>۲۰,۶۰۰,۰۰۰ تومان</span>
                {/* <div className={s.range_input}></div> */}
                {/* <MultiRangeSlider
                  min={0}
                  max={100}
                  step={5}
                  minValue={minValue}
                  maxValue={maxValue}
                  onInput={(e) => {
                    handleInput(e);
                  }}
                /> */}
                <span className={s.to}>۲۰,۶۰۰,۰۰۰ تومان</span>
              </div>
            </Collapse>
          </section>

          <section className={s.color_select}>
            <div
              onClick={() => setColorSelectOpen(!colorSelectOpen)}
              className={s.title}
            >
              انتخاب رنگ
              {colorSelectOpen ? <DownOutlined /> : <UpOutlined />}
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
            <Nav className={s.tabs_names}>
              <NavItem>
                <NavLink disabled>
                  <Image
                    src={"/assets/offers/setting.svg"}
                    alt=""
                    width={15}
                    height={18}
                  />
                  پیش فرض
                </NavLink>
              </NavItem>
              <NavItem style={{ height: "100%" }}>
                <NavLink
                  style={{
                    borderBottom: "2px solid blue",
                  }}
                  active
                >
                  جدیدترین
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled>پرفروش‌ترین</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled>ارزان‌ترین</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled>گران‌ترین</NavLink>
              </NavItem>
            </Nav>

            <div className="d-flex p-3">
              <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={"up"}>
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
      </section>
    </div>
  );
};

export default offers;
