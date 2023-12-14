import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../styles/main.module.scss";
import { Autoplay, Navigation, Pagination, FreeMode } from "swiper/modules";
import {
  LeftOutlined,
  RightOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { Button } from "reactstrap";
import AdsCard from "./AdsCard";
import MarketCard from "./MarketCard";
import HCarousel from "./HCarousel";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import useHttp, { url } from "@/src/axiosConfig/useHttp";
import toast, { ToastBar } from "react-hot-toast";
import { formatStringJSON, getLocal, setLocal } from "@/src/hooks/functions";
import MainPageMagazine from "./magazines/MainPageMagazine";
import Loading from "../loader/Loading";
import Link from "next/link";
import ClubCard from "./ClubCard";

const Main = () => {
  //datas
  const [ads, setAds] = useState([]);
  const [magazines, setMagazines] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [serviceCat, setServiceCat] = useState([]);
  const [loading, setLoading] = useState(true);
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
  const clubsCategory = [
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

  const { httpService } = useHttp();
  const size = useWindowSize();

  //requests
  useEffect(() => {
    httpService
      .post("advertisements")
      .then((res) => {
        res.status === 200 ? setAds(res.data.data) : null;
        setLoading(false);
      })
      .catch((err) => {
        toast.error("خطا در ارتباط با سرور");
      });

    httpService
      .get("magazines")
      .then((res) => {
        res.status === 200 ? setMagazines(res.data.data) : null;
        setLoading(false);
      })
      .catch((err) => {
        toast.error("خطا در ارتباط با سرور");
      });

    httpService
      .get("clubs")
      .then((res) => {
        res.status === 200 ? setClubs(res.data.data) : null;
        setLoading(false);
      })
      .catch((err) => {
        toast.error("خطا در ارتباط با سرور");
      });

    getLocal("serviceCat") === "null"
      ? httpService
          .get("categories")
          .then((res) => {
            res.status === 200 ? setServiceCat(res.data.data) : null;
            setLocal("serviceCat", JSON.stringify(res.data.data));
          })
          .catch((err) => ToastBar.error("خطا در ارتباط"))
      : setServiceCat(JSON.parse(formatStringJSON(getLocal("serviceCat"))));
  }, []);

  useEffect(() => console.log(loading), [loading]);

  //swipers
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
        {loading ? <Loading /> : null}

        <HCarousel />

        <div className={styles.service_category}>
          <section className={styles.title}>
            <span>دسته بندی خدمات</span>
            <div className={styles.pagination}></div>
          </section>
          {size.width > 1000 && serviceCat.length !== 0 ? (
            <Swiper
              spaceBetween={30}
              modules={[Navigation, Pagination]}
              className={styles.my_swiper}
            >
              <SwiperSlide>
                <div className={styles.content}>
                  <section className={styles.service_list}>
                    {serviceCat.map((item, index) => (
                      <Link
                        href={"/offers/jobs"}
                        onClick={() => setLocal("jobCategory", item.id)}
                        key={index}
                        className={styles.service}
                      >
                        <Image
                          alt=""
                          width={48}
                          height={48}
                          src={url + item.serviceIcon}
                        />
                        <span>{item.title}</span>
                      </Link>
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
              slidesPerView={"auto"}
              spaceBetween={25}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Pagination, Autoplay]}
              className={styles.my_swiper2}
            >
              {serviceCat.map((item, index) => (
                <SwiperSlide
                  key={Math.random() * index}
                  className={styles.swiper_slide2}
                >
                  <Image
                    alt=""
                    width={38}
                    height={38}
                    src={url + item.serviceIcon}
                  />
                  <p style={{ color: "#fff", fontSize: "14px" }}>
                    {item.title}
                  </p>
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
            <Link href={"/offers/trade"}>
              <Button>مشاهده همه</Button>
            </Link>
          </section>

          <section className={styles.cards}>
            <Swiper
              navigation={{
                prevEl: prevAdRef?.current,
                nextEl: nextAdRef?.current,
              }}
              spaceBetween={15}
              slidesPerView={"auto"}
              grabCursor={true}
              modules={[Navigation]}
              onSwiper={setAdsSwiper}
              className={styles.my_swiper}
            >
              {ads.length !== 0 ? (
                ads.map((ad, index) => (
                  <SwiperSlide
                    className={styles.slide}
                    key={Math.random() * index}
                  >
                    <AdsCard
                      image={ad.mainImage}
                      name={ad.car_name}
                      details={{
                        kms: ad.kilometers,
                        createYear: ad.production_year,
                        color: ad.color,
                      }}
                      location={ad.location}
                      time={ad.timeAgo}
                      rate={"۴.۵"}
                      id={ad.id}
                    />
                  </SwiperSlide>
                ))
              ) : (
                <>
                  <SwiperSlide className={styles.slide}>
                    <AdsCard image={undefined} />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <AdsCard image={undefined} />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <AdsCard image={undefined} />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <AdsCard image={undefined} />
                  </SwiperSlide>
                </>
              )}
            </Swiper>
            <div className={styles.swiper_next} ref={nextAdRef}>
              <ArrowLeftOutlined style={{ color: "#fff" }} />
            </div>
            <div className={styles.swiper_prev} ref={prevAdRef}>
              <ArrowRightOutlined style={{ color: "#fff" }} />
            </div>
            {/* <div className={styles.opacity}></div> */}
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
              freeMode
              slidesPerView={"auto"}
              spaceBetween={15}
              grabCursor={true}
              modules={[Navigation, FreeMode]}
              onSwiper={setMarketRSwiper}
              className={styles.my_swiper}
            >
              {marketItems.map((item, index) => (
                <SwiperSlide
                  className={styles.swiper_slide}
                  key={Math.random() * index}
                >
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
              freeMode
              slidesPerView={"auto"}
              spaceBetween={15}
              grabCursor={true}
              modules={[Navigation, FreeMode]}
              onSwiper={setMarketBSwiper}
              className={styles.my_swiper2}
            >
              {marketItems.map((item, index) => (
                <SwiperSlide
                  className={styles.swiper_slide2}
                  key={Math.random() * index}
                >
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

        <div className={styles.magazine_container}>
          <MainPageMagazine
            magazines={magazines}
            method={"magazine"}
            overflowedDes={true}
            header={true}
          />
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
              spaceBetween={12}
              slidesPerView={"auto"}
              navigation={{
                nextEl: nextFanClubRef?.current,
                prevEl: prevFanClubRef?.current,
              }}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              grabCursor={true}
              modules={[Navigation, Autoplay]}
              onSwiper={setFanClubSwiper}
              className={styles.my_swiper}
            >
              {clubsCategory.map((club, index) => (
                <SwiperSlide
                  className={styles.slide}
                  key={Math.random() * index}
                >
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
          {clubs.length !== 0
            ? clubs.map((club, index) => (
                <>
                  <ClubCard
                    key={Math.random() * index}
                    image={club.image_url}
                    description={club.description}
                    id={club.id}
                    title={club.title}
                  />
                </>
              ))
            : null}
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
