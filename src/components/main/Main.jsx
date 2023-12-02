import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../styles/main.module.scss";
import {
  Autoplay,
  Navigation,
  Pagination,
  A11y,
  FreeMode,
} from "swiper/modules";
import {
  LeftOutlined,
  RightOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { Button } from "reactstrap";
import BannersCard from "./BannersCard";
import MarketCard from "./MarketCard";
import HCarousel from "./HCarousel";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

const Main = () => {
  const testArray = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    ,
    1,
  ];
  const ads = [
    {
      image: "/assets/main/car-2.png",
      title: "ام وی ام، X55 PRO",
      details: {
        kms: "۱۷,۰۰۰",
        createYear: "۱۳۹۲",
        color: "مشکی",
      },
      location: "کرج",
      time: "2 هفته پیش",
      rate: "4.5",
    },
    {
      image: "/assets/main/car-2.png",
      title: "ام وی ام، X55 PRO",
      details: {
        kms: "۱۷,۰۰۰",
        createYear: "۱۳۹۲",
        color: "مشکی",
      },
      location: "کرج",
      time: "2 هفته پیش",
      rate: "4.5",
    },
    {
      image: "/assets/main/car-2.png",
      title: "ام وی ام، X55 PRO",
      details: {
        kms: "۱۷,۰۰۰",
        createYear: "۱۳۹۲",
        color: "مشکی",
      },
      location: "کرج",
      time: "2 هفته پیش",
      rate: "4.5",
    },
    {
      image: "/assets/main/car-2.png",
      title: "ام وی ام، X55 PRO",
      details: {
        kms: "۱۷,۰۰۰",
        createYear: "۱۳۹۲",
        color: "مشکی",
      },
      location: "کرج",
      time: "2 هفته پیش",
      rate: "4.5",
    },
    {
      image: "/assets/main/car-2.png",
      title: "ام وی ام، X55 PRO",
      details: {
        kms: "۱۷,۰۰۰",
        createYear: "۱۳۹۲",
        color: "مشکی",
      },
      location: "کرج",
      time: "2 هفته پیش",
      rate: "4.5",
    },
    {
      image: "/assets/main/car-2.png",
      title: "ام وی ام، X55 PRO",
      details: {
        kms: "۱۷,۰۰۰",
        createYear: "۱۳۹۲",
        color: "مشکی",
      },
      location: "کرج",
      time: "2 هفته پیش",
      rate: "4.5",
    },
    {
      image: "/assets/main/car-2.png",
      title: "ام وی ام، X55 PRO",
      details: {
        kms: "۱۷,۰۰۰",
        createYear: "۱۳۹۲",
        color: "مشکی",
      },
      location: "کرج",
      time: "2 هفته پیش",
      rate: "4.5",
    },
  ];
  const marketItems = [
    {
      image: "/assets/main/market-1.png",
      off: "۳۰%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "۳۰%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "۳۰%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "۳۰%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "۳۰%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "۳۰%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
  ];
  const clubs = [
    { src: "/assets/main/club.svg" },
    { src: "/assets/main/club.svg" },
    { src: "/assets/main/club.svg" },
    { src: "/assets/main/club.svg" },
    { src: "/assets/main/club.svg" },
    { src: "/assets/main/club.svg" },
    { src: "/assets/main/club.svg" },
    { src: "/assets/main/club.svg" },
    { src: "/assets/main/club.svg" },
    { src: "/assets/main/club.svg" },
    { src: "/assets/main/club.svg" },
    { src: "/assets/main/club.svg" },
    { src: "/assets/main/club.svg" },
    { src: "/assets/main/club.svg" },
  ];

  const size = useWindowSize();
  const [adsSwiper, setAdsSwiper] = useState();
  const [marketRSwiper, setMarketRSwiper] = useState();
  const [marketBSwiper, setMarketBSwiper] = useState();
  const [fanClubSwiper, setFanClubSwiper] = useState();
  const prevAdRef = useRef();
  const nextAdRef = useRef();
  const prevMarketRRef = useRef();
  const nextMarketRRef = useRef();
  const prevMarketBRef = useRef();
  const nextMarketBRef = useRef();
  const nextFanClubRef = useRef();
  const prevFanClubRef = useRef();

  useEffect(() => {
    if (adsSwiper) {
      console.log("Swiper instance:", adsSwiper);
      adsSwiper.params.navigation.prevEl = prevAdRef.current;
      adsSwiper.params.navigation.nextEl = nextAdRef.current;
      adsSwiper.navigation.init();
      adsSwiper.navigation.update();
    }
  }, [adsSwiper]);
  useEffect(() => {
    if (marketRSwiper) {
      marketRSwiper.params.navigation.prevEl = prevMarketRRef.current;
      marketRSwiper.params.navigation.nextEl = nextMarketRRef.current;
      marketRSwiper.navigation.init();
      marketRSwiper.navigation.update();
    }
  }, [marketRSwiper]);
  useEffect(() => {
    if (marketBSwiper) {
      marketBSwiper.params.navigation.prevEl = prevMarketBRef.current;
      marketBSwiper.params.navigation.nextEl = nextMarketBRef.current;
      marketBSwiper.navigation.init();
      marketBSwiper.navigation.update();
    }
  }, [marketBSwiper]);
  useEffect(() => {
    if (fanClubSwiper) {
      fanClubSwiper.params.navigation.prevEl = prevFanClubRef.current;
      fanClubSwiper.params.navigation.nextEl = nextFanClubRef.current;
      fanClubSwiper.navigation.init();
      fanClubSwiper.navigation.update();
    }
  }, [fanClubSwiper]);

  return (
    <>
      <section className={styles.main}>
        <HCarousel />

        <div className={styles.service_category}>
          <section className={styles.title}>
            <span>دسته بندی خدمات</span>
            <div className={styles.pagination}></div>
          </section>
          {size.width > 1000 ? (
            <Swiper
              spaceBetween={30}
              modules={[Navigation, Pagination]}
              className={styles.mySwiper}
            >
              <SwiperSlide>
                <div className={styles.content}>
                  <section className={styles.service_list}>
                    {testArray.map((item, index) => (
                      <div key={index} className={styles.service}>
                        <Image
                          alt=""
                          width={100}
                          height={100}
                          src={"/assets/main/service-1.png"}
                        />
                        <span>بیمه ماشین</span>
                      </div>
                    ))}
                  </section>

                  <section className={styles.down_content}>
                    <div className={styles.speed_ometeres}>
                      <div className={styles.small_speedometer}>
                        <Image
                          alt=""
                          width={350}
                          height={350}
                          src={"/assets/main/service-speed.png"}
                        />
                      </div>
                      <div className={styles.big_speedometer}>
                        <Image
                          alt=""
                          width={350}
                          height={350}
                          src={"/assets/main/service-speed-2.png"}
                        />
                      </div>
                    </div>

                    <div className={styles.texts}>
                      <p>000049km</p>
                    </div>

                    <div className={styles.speed_ometeres}>
                      <div className={styles.big_speedometer}>
                        <Image
                          alt=""
                          width={350}
                          height={350}
                          src={"/assets/main/service-speed-1.png"}
                        />
                      </div>
                      <div className={styles.small_speedometer}>
                        <Image
                          alt=""
                          width={350}
                          height={350}
                          src={"/assets/main/service-speed.png"}
                        />
                      </div>
                    </div>
                  </section>
                </div>
              </SwiperSlide>
            </Swiper>
          ) : (
            <></>
          )}
          {size.width < 1000 ? (
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Pagination, Autoplay]}
              className={styles.mySwiper2}
            >
              {clubs.map(() => (
                <SwiperSlide>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "1rem 0",
                    }}
                  >
                    <Image
                      alt=""
                      width={80}
                      height={80}
                      src={"/assets/main/service-1.png"}
                    />
                    <p style={{ color: "#fff", fontSize: "1.1em" }}>بیمه</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <></>
          )}
        </div>

        <div className={styles.ads}>
          <section className={styles.title}>
            <h1>ثبت آگهی</h1>
            <Button>مشاهده همه</Button>
          </section>

          <section className={styles.cards}>
            <Swiper
              navigation={{
                prevEl: prevAdRef?.current,
                nextEl: nextAdRef?.current,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.8,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3.8,
                  spaceBetween: 50,
                },
                1360: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              grabCursor={true}
              modules={[Navigation]}
              onSwiper={setAdsSwiper}
              className="mySwiper"
            >
              {ads.map((ad, index) => (
                <SwiperSlide
                  className={styles.slide}
                  key={Math.random() * index}
                >
                  <BannersCard
                    image={ad.image}
                    name={ad.title}
                    details={ad.details}
                    location={ad.location}
                    time={ad.time}
                    rate={"۴.۵"}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.swiper_next} ref={nextAdRef}>
              <ArrowLeftOutlined style={{ color: "#fff" }} />
            </div>
            <div className={styles.swiper_prev} ref={prevAdRef}>
              <ArrowRightOutlined style={{ color: "#fff" }} />
            </div>
            <div className={styles.opacity}></div>
          </section>
        </div>

        <div className={styles.infos}>
          <div className={styles.info_black}>
            <div className={styles.background}>
              <Image
                src={"/assets/main/infos/info-back-1.svg"}
                alt=""
                width={500}
                height={230}
              />
            </div>
            <section className={styles.texts}>
              <h1>
                همین الان
                <span>فروشنده شو!</span>
              </h1>
              <p>
                میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای آن
                پیش آمده تمام قطعات رو اینجا پیدا کنید.
              </p>

              <Button className={styles.btn}>
                لوازم ماشین
                <div>
                  <LeftOutlined style={{ color: "#fff" }} />
                </div>
              </Button>
            </section>

            <div className={styles.image}>
              <Image
                src={"/assets/main/infos/info-1.png"}
                alt=""
                width={100}
                height={220}
              />
            </div>
          </div>

          <div className={styles.info}>
            <section className={styles.texts}>
              <h1>خرید سایپا ساینا اس</h1>
              <p>
                میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای آن
                پیش آمده تمام قطعات رو اینجا پیدا کنید.
              </p>

              <Button className={styles.btn}>
                خرید ماشین
                <div>
                  <LeftOutlined style={{ color: "#fff" }} />
                </div>
              </Button>
            </section>

            <div className={styles.image}>
              <Image
                src={"/assets/main/infos/info-2.png"}
                alt=""
                width={100}
                height={220}
              />
            </div>
          </div>
        </div>

        <div className={styles.market}>
          <div className={styles.title}>
            <div>
              <h1 className={styles.selected}>بازارچه </h1>
              <div className={styles.line}></div>
              <h1>فروش</h1>
            </div>

            <Button>مشاهده همه</Button>
          </div>

          <div className={styles.market_materials1}>
            <Swiper
              navigation={{
                prevEl: prevMarketRRef?.current,
                nextEl: nextMarketRRef?.current,
              }}
              slidesPerView={1.1}
              breakpoints={{
                640: {
                  slidesPerView: 1.8,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 50,
                },
                1360: {
                  slidesPerView: 4.5,
                  spaceBetween: 50,
                },
              }}
              freeMode
              grabCursor={true}
              modules={[Navigation, FreeMode]}
              onSwiper={setMarketRSwiper}
              className="mySwiper"
            >
              {marketItems.map((item, index) => (
                <SwiperSlide key={Math.random() * index}>
                  <MarketCard
                    image={item.image}
                    off={item.off}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    index={index}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.swiper_next} ref={nextMarketRRef}>
              <ArrowLeftOutlined style={{ color: "#fff" }} />
            </div>
            <div className={styles.swiper_prev} ref={prevMarketRRef}>
              <ArrowRightOutlined style={{ color: "#fff" }} />
            </div>
          </div>

          <div className={styles.market_materials2}>
            <Swiper
              navigation={{
                prevEl: prevMarketBRef?.current,
                nextEl: nextMarketBRef?.current,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 50,
                },
                1360: {
                  slidesPerView: 4.5,
                  spaceBetween: 50,
                },
              }}
              freeMode
              grabCursor={true}
              modules={[Navigation, FreeMode]}
              onSwiper={setMarketBSwiper}
              className="mySwiper"
            >
              {marketItems.map((item, index) => (
                <SwiperSlide key={Math.random() * index}>
                  <MarketCard
                    image={item.image}
                    off={item.off}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    index={index}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.swiper_next} ref={nextMarketBRef}>
              <ArrowLeftOutlined style={{ color: "#fff" }} />
            </div>
            <div className={styles.swiper_prev} ref={prevMarketBRef}>
              <ArrowRightOutlined style={{ color: "#fff" }} />
            </div>
          </div>
        </div>

        <div className={styles.magazine}>
          <section className={styles.title}>
            <h1>مجله</h1>

            <div className={styles.btns}>
              <Button type="primary">
                <RightOutlined style={{ color: "#fff" }} />
              </Button>
              <Button>
                <LeftOutlined style={{ color: "#fff" }} />
              </Button>
            </div>
          </section>

          <div className={styles.content}>
            <div className={styles.solid_pic}>
              <Image
                src={"/assets/main/mag-back.png"}
                alt=""
                width={500}
                height={480}
              />
              <div className={styles.caption}>
                <div className={styles.title}>
                  <Image
                    src={"/assets/main/quotation.svg"}
                    alt=""
                    width={18}
                    height={18}
                  />{" "}
                  <span>رونمایی از جدیدترین محصول BMW</span>
                </div>
                <div className={styles.description}>
                  <span>
                    میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی
                    برای آن پیش آمده تمام قطعات رو اینجا پیدا کنید. همچنین برای
                    دانلودسریع و ...
                  </span>
                  <Image
                    src={"/assets/main/quotation.svg"}
                    alt=""
                    width={18}
                    height={18}
                  />
                </div>
              </div>
            </div>

            <div className={styles.mag_options}>
              <section className={styles.option}>
                <div className={styles.pic}>
                  <Image
                    src={"/assets/main/mag-back.png"}
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>

                <div className={styles.texts}>
                  <div className={styles.title}>تاریخچه خودروهای قدیمی</div>
                  <p className={styles.description}>
                    تاریخچه خودروهای قدیمی را در کارلند دنبال کنید!
                  </p>
                  <div className={styles.refrences}>
                    <span>۱۴۰۲/۰۸/۰۱</span>
                    <Button>
                      مشاهده{" "}
                      <div>
                        <Image
                          src={"/assets/main/see-more.svg"}
                          alt=""
                          width={15}
                          height={15}
                        />
                      </div>
                    </Button>
                  </div>
                </div>
              </section>
              <section className={styles.option}>
                <div className={styles.pic}>
                  <Image
                    src={"/assets/main/mag-back.png"}
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>

                <div className={styles.texts}>
                  <div className={styles.title}>تاریخچه خودروهای قدیمی</div>
                  <p className={styles.description}>
                    تاریخچه خودروهای قدیمی را در کارلند دنبال کنید!
                  </p>
                  <div className={styles.refrences}>
                    <span>۱۴۰۲/۰۸/۰۱</span>
                    <Button>
                      مشاهده{" "}
                      <div>
                        <Image
                          src={"/assets/main/see-more.svg"}
                          alt=""
                          width={15}
                          height={15}
                        />
                      </div>
                    </Button>
                  </div>
                </div>
              </section>
              <section className={styles.option}>
                <div className={styles.pic}>
                  <Image
                    src={"/assets/main/mag-back.png"}
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>

                <div className={styles.texts}>
                  <div className={styles.title}>تاریخچه خودروهای قدیمی</div>
                  <p className={styles.description}>
                    تاریخچه خودروهای قدیمی را در کارلند دنبال کنید!
                  </p>
                  <div className={styles.refrences}>
                    <span>۱۴۰۲/۰۸/۰۱</span>
                    <Button>
                      مشاهده{" "}
                      <div>
                        <Image
                          src={"/assets/main/see-more.svg"}
                          alt=""
                          width={15}
                          height={15}
                        />
                      </div>
                    </Button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className={styles.infos}>
          <div className={styles.info}>
            <div className={styles.background}>
              <Image
                src={"/assets/main/infos/info-back-1.svg"}
                alt=""
                width={500}
                height={230}
              />
            </div>
            <section className={styles.texts}>
              <h1>همین الان فروشنده شو!</h1>
              <p>
                میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای آن
                پیش آمده تمام قطعات رو اینجا پیدا کنید.
              </p>

              <Button className={styles.btn}>
                لوازم ماشین
                <div>
                  <LeftOutlined style={{ color: "#fff" }} />
                </div>
              </Button>
            </section>

            <div className={styles.image}>
              <Image
                src={"/assets/main/infos/info-1.png"}
                alt=""
                width={100}
                height={220}
              />
            </div>
          </div>

          <div className={styles.info}>
            <section className={styles.texts}>
              <h1>خرید سایپا ساینا اس</h1>
              <p>
                میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای آن
                پیش آمده تمام قطعات رو اینجا پیدا کنید.
              </p>

              <Button className={styles.btn}>
                خرید ماشین
                <div>
                  <LeftOutlined style={{ color: "#fff" }} />
                </div>
              </Button>
            </section>

            <div className={styles.image}>
              <Image
                src={"/assets/main/infos/info-2.png"}
                alt=""
                width={100}
                height={220}
              />
            </div>
          </div>
        </div>

        <div className={styles.fan_club}>
          <section className={styles.title}>
            <h1>
              کلوب هواداران <div className={styles.line}></div>
            </h1>
          </section>

          <section className={styles.club_list}>
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              navigation={{
                nextEl: nextFanClubRef?.current,
                prevEl: prevFanClubRef?.current,
              }}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 50,
                },
                1360: {
                  slidesPerView: 7.5,
                  spaceBetween: 50,
                },
              }}
              grabCursor={true}
              modules={[Navigation, Autoplay]}
              onSwiper={setFanClubSwiper}
              className={styles.mySwiper}
            >
              {clubs.map((club, index) => (
                <SwiperSlide key={Math.random() * index}>
                  <div className={styles.box}>
                    <Image src={club.src} alt="" width={50} height={50} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className={styles.next} ref={nextFanClubRef}>
              <ArrowLeftOutlined style={{ color: "#fff" }} />
            </div>
            <div className={styles.prev} ref={prevFanClubRef}>
              <ArrowRightOutlined style={{ color: "#fff" }} />
            </div>
          </section>
        </div>

        <div className={styles.club_link}>
          <section className={styles.link}>
            <div className={styles.pic}>
              <Image
                src={"/assets/main/mag-back.png"}
                alt=""
                width={50}
                height={50}
              />
            </div>

            <div className={styles.texts}>
              <h1>تاریخچه خودروهای قدیمی</h1>
              <div className={styles.refrences}>
                <div className={styles.name_profile}>
                  <div className={styles.profile}></div>
                  <span>مهزیار رازه </span>
                </div>
                <Button>
                  مشاهده{" "}
                  <div>
                    <Image
                      src={"/assets/main/see-more.svg"}
                      alt=""
                      width={15}
                      height={15}
                    />
                  </div>
                </Button>
              </div>
            </div>
          </section>
          <section className={styles.link}>
            <div className={styles.pic}>
              <Image
                src={"/assets/main/mag-back.png"}
                alt=""
                width={50}
                height={50}
              />
            </div>

            <div className={styles.texts}>
              <h1>تاریخچه خودروهای قدیمی</h1>
              <div className={styles.refrences}>
                <div className={styles.name_profile}>
                  <div className={styles.profile}></div>
                  <span>مهزیار رازه </span>
                </div>
                <Button>
                  مشاهده{" "}
                  <div>
                    <Image
                      src={"/assets/main/see-more.svg"}
                      alt=""
                      width={15}
                      height={15}
                    />
                  </div>
                </Button>
              </div>
            </div>
          </section>
          <section className={styles.link}>
            <div className={styles.pic}>
              <Image
                src={"/assets/main/mag-back.png"}
                alt=""
                width={50}
                height={50}
              />
            </div>

            <div className={styles.texts}>
              <h1>تاریخچه خودروهای قدیمی</h1>
              <div className={styles.refrences}>
                <div className={styles.name_profile}>
                  <div className={styles.profile}></div>
                  <span>مهزیار رازه </span>
                </div>
                <Button>
                  مشاهده{" "}
                  <div>
                    <Image
                      src={"/assets/main/see-more.svg"}
                      alt=""
                      width={15}
                      height={15}
                    />
                  </div>
                </Button>
              </div>
            </div>
          </section>
          <section className={styles.link}>
            <div className={styles.pic}>
              <Image
                src={"/assets/main/mag-back.png"}
                alt=""
                width={50}
                height={50}
              />
            </div>

            <div className={styles.texts}>
              <h1>تاریخچه خودروهای قدیمی</h1>
              <div className={styles.refrences}>
                <div className={styles.name_profile}>
                  <div className={styles.profile}></div>
                  <span>مهزیار رازه </span>
                </div>
                <Button>
                  مشاهده{" "}
                  <div>
                    <Image
                      src={"/assets/main/see-more.svg"}
                      alt=""
                      width={15}
                      height={15}
                    />
                  </div>
                </Button>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.install_app}>
          <div className={styles.texts}>
            <div>
              <span className={styles.title}>
                دانلود اپلیکیشن <span>کارلند سرزمین خودرو</span>
              </span>
              <p>
                میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای آن
                پیش آمده تمام قطعات رو اینجا پیدا کنید. همچنین برای دانلود سریع
                و بهتر آن میتوانید از لینک مستقیم یا اپ کافه بازا استفاده در
                موبایل خود انجام دهید.
              </p>
            </div>

            <div className={styles.btns}>
              <Button type="secondary">
                <Image
                  src={"/assets/logos/bazzar.png"}
                  alt=""
                  width={50}
                  height={30}
                />
              </Button>
              <Button>
                <Image
                  src={"/assets/logos/sib-app.svg"}
                  alt=""
                  width={60}
                  height={15}
                />
              </Button>
              <Button>
                <Image
                  src={"/assets/logos/google-play.png"}
                  alt=""
                  width={75}
                  height={40}
                />
              </Button>
              <Button>
                <Image
                  src={"/assets/logos/app-store.png"}
                  alt=""
                  width={25}
                  height={25}
                />
                اپ استور
              </Button>
              <Button>
                <Image
                  src={"/assets/logos/miket.png"}
                  alt=""
                  width={22}
                  height={22}
                />
                مایکت
              </Button>
              <Button style={{ height: "50px" }} color="main-secondary">
                دانلود مستقیم
                <div>
                  <LeftOutlined style={{ color: "#000" }} />
                </div>
              </Button>
            </div>
          </div>

          <div className={styles.pics}>
            <Image
              src={"/assets/main/install-app/install-app-1.png"}
              alt=""
              width={300}
              height={600}
            />
            <Image
              src={"/assets/main/install-app/install-app-2.png"}
              alt=""
              width={300}
              height={600}
            />
            <Image
              src={"/assets/main/install-app/arrow-down.svg"}
              alt=""
              width={20}
              height={60}
              className={styles.arrowDown}
            />
            <Image
              src={"/assets/main/install-app/arrow-up.svg"}
              alt=""
              width={20}
              height={60}
              className={styles.arrowUp}
            />
            <Image
              src={"/assets/main/install-app/maze.svg"}
              alt=""
              width={70}
              height={70}
              className={styles.maze}
            />
            <Image
              src={"/assets/main/install-app/square-box.png"}
              alt=""
              width={60}
              height={60}
              className={styles.square1}
            />
            <Image
              src={"/assets/main/install-app/square-box.png"}
              alt=""
              width={60}
              height={60}
              className={styles.square2}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
