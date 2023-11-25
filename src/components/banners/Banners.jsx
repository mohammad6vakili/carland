import s from "../../../styles/main.module.scss";
import MarketCard from "../main/MarketCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { LeftOutlined, DownOutlined } from "@ant-design/icons";
import { useState } from "react";

const Banners = () => {
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
  ];
  const [cSelected, setCSelected] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [banners, setBanners] = useState("فروش");

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

  return (
    <div className={s.banners}>
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
            <div className={s.title}>
              دسته بندی <DownOutlined />
            </div>
            <div className={s.list}>
              <section className={s.list_item}>خودرو</section>
              <section className={s.list_item}>خودرو</section>
              <section className={s.list_item}>خودرو</section>
              <section className={s.list_item}>خودرو</section>
              <section className={s.list_item}>خودرو</section>
              <section className={s.list_item}>خودرو</section>
              <section className={s.list_item}>خودرو</section>
            </div>
          </section>

          <section className={s.brands}>
            <div className={s.title}>
              برندها <DownOutlined />
            </div>
            <div className={s.list}>
              <section className={s.list_item}>ورچیتو</section>
              <section className={s.list_item}>هلیا</section>
              <section className={s.list_item}>بلو</section>
              <section className={s.list_item}>سامسونگ</section>
            </div>
          </section>

          <section className={s.year}>
            <div className={s.title}>
              سال <DownOutlined />
            </div>
            <div className={s.list}>
              <div className={s.list_item}>
                <Button
                  onClick={() => onCheckboxBtnClick(1)}
                  active={cSelected.includes(1)}
                ></Button>{" "}
                1402
              </div>
              <div className={s.list_item}>
                <Button
                  onClick={() => onCheckboxBtnClick(2)}
                  active={cSelected.includes(2)}
                ></Button>{" "}
                1402
              </div>
              <div className={s.list_item}>
                <Button
                  onClick={() => onCheckboxBtnClick(3)}
                  active={cSelected.includes(3)}
                ></Button>{" "}
                1402
              </div>
              <div className={s.list_item}>
                <Button
                  onClick={() => onCheckboxBtnClick(4)}
                  active={cSelected.includes(4)}
                ></Button>{" "}
                1402
              </div>
              <div className={s.list_item}>
                <Button
                  onClick={() => onCheckboxBtnClick(5)}
                  active={cSelected.includes(5)}
                ></Button>{" "}
                1402
              </div>
            </div>
          </section>

          <section className={s.price_range}>
            <div className={s.title}>
              محدوده قیمت <DownOutlined />
            </div>
            <div className={s.range}>
              <span className={s.from}>۲۰,۶۰۰,۰۰۰ تومان</span>
              <div className={s.range_input}></div>
              <span className={s.to}>۲۰,۶۰۰,۰۰۰ تومان</span>
            </div>
          </section>

          <section className={s.color_select}>
            <div className={s.title}>
              انتخاب رنگ <DownOutlined />
            </div>
            <div className={s.color_list}>
              <div className={s.color_box}></div>
              <div className={s.color_box}></div>
              <div className={s.color_box}></div>
              <div className={s.color_box}></div>
            </div>
          </section>
        </div>
        <div className={s.market_items}>
          <div className={s.tabs}>
            <section className={s.tabs_names}>
              <p>
                <Image
                  src={"/assets/banners/setting.svg"}
                  alt=""
                  width={15}
                  height={18}
                />
                پیش فرض
              </p>
              <span>جدیدترین</span>
              <span>پرفروش‌ترین</span>
              <span>ارزان‌ترین</span>
              <span>گران‌ترین</span>
            </section>

            <div className="d-flex p-3">
              <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={"up"}>
                <DropdownToggle caret>صفحات آگهی</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={() => setBanners("sale")}>
                    {" "}
                    فروش
                  </DropdownItem>
                  <DropdownItem onClick={() => setBanners("buy-sale")}>
                    {" "}
                    خرید و فروش
                  </DropdownItem>
                  <DropdownItem onClick={() => setBanners("service")}>
                    {" "}
                    خدمات
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>

          {banners !== "buy-sale"
            ? marketItems.map((item, index) => (
                <MarketCard
                  key={Math.random * index}
                  image={item.image}
                  off={item.off}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  index={index + 1}
                />
              ))
            : marketItems.map((item, index) => (
                <MarketCard
                  key={Math.random * index}
                  createYear={item.createYear}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  timePosted={item.timePosted}
                  location={item.location}
                  price={item.price}
                />
              ))}
        </div>
      </section>
    </div>
  );
};

export default Banners;
