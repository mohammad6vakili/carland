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
import { useReportWebVitals } from "next/web-vitals";
import MySkeleton from "../skeleton/Skeleton";
import Head from "next/head";

const Main = ({ jobCategories }) => {
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

  const calculateTime = (date1, date2) => {
    //Get 1 day in milliseconds
    let one_day = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    let date1_ms = date1;
    let date2_ms = date2;
    // Calculate the difference in milliseconds
    let difference_ms = date2_ms - date1_ms;

    // Convert back to days and return
    return Math.round(difference_ms / one_day);
  };

  //requests
  useEffect(() => {
    httpService
      .post("advertisements")
      .then((res) => {
        res.status === 200 ? setAds(res.data.data.data) : null;
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

    console.log();

    getLocal("serviceCat") === "null" ||
    calculateTime(
      parseInt(JSON.parse(formatStringJSON(getLocal("updateTime")))),
      new Date().getTime()
    ) > 2
      ? httpService
          .get("categories")
          .then((res) => {
            res.status === 200 ? setServiceCat(res.data.data) : null;
            setLocal(
              "serviceCat",
              formatStringJSON(JSON.stringify(res.data.data))
            );
            setLocal(
              "updateTime",
              formatStringJSON(JSON.stringify(new Date().getTime()))
            );
          })
          .catch((err) => toast.error("خطا در ارتباط"))
      : setServiceCat(JSON.parse(formatStringJSON(getLocal("serviceCat"))));
  }, []);

  //swipers
  const [adsSwiper, setAdsSwiper] = useState();
  // useEffect(() => {
  //   if (adsSwiper) {
  //     adsSwiper.params.navigation.prevEl = prevAdRef.current;
  //     adsSwiper.params.navigation.nextEl = nextAdRef.current;
  //     adsSwiper.navigation.init();
  //     adsSwiper.navigation.update();
  //   }
  // }, [adsSwiper]);

  useReportWebVitals((metric) => {
    console.log(metric);
  });

  return (
    <>
      <Head>
        <meta property="og:image" content={url + "/"} />
        <meta name="keywords" content={jobCategories?.keywords} />
        <meta name="description" content={jobCategories?.descriptions} />
      </Head>
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
              loop
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
              }}
              speed={10000}
              modules={[Navigation, Pagination, Autoplay]}
              className={styles.my_swiper2}
            >
              {serviceCat.map((item, index) => (
                <SwiperSlide
                  key={Math.random() * index}
                  className={styles.swiper_slide2}
                >
                  <Link
                    href={"/offers/jobs"}
                    onClick={() => setLocal("jobCategory", item.id)}
                    key={index}
                    className={styles.service}
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
                  </Link>
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
                prevEl: "#swiper_prev",
                nextEl: "#swiper_next",
                clickable: true,
              }}
              spaceBetween={15}
              slidesPerView={"auto"}
              grabCursor={true}
              modules={[Navigation]}
              className={styles.my_swiper}
            >
              {ads.length !== 0 ? (
                ads.map((ad, index) => (
                  <SwiperSlide
                    className={styles.slide}
                    key={Math.random() * index}
                  >
                    <AdsCard
                      image={ad.mainImage !== "undefined" ? ad.mainImage : ""}
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
                      myAdds={false}
                    />
                  </SwiperSlide>
                ))
              ) : (
                <>
                  <SwiperSlide className={styles.slide}>
                    <MySkeleton width={"260px"} height={"300px"} />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <MySkeleton width={"260px"} height={"300px"} />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <MySkeleton width={"260px"} height={"300px"} />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <MySkeleton width={"260px"} height={"300px"} />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <MySkeleton width={"260px"} height={"300px"} />
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <MySkeleton width={"260px"} height={"300px"} />
                  </SwiperSlide>
                </>
              )}
            </Swiper>
            <div className={styles.swiper_next} id="swiper_next">
              <ArrowLeftOutlined style={{ color: "#fff" }} />
            </div>
            <div className={styles.swiper_prev} id="swiper_prev">
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

        {/* <div className={styles.market}>
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
        </div> */}

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
                nextEl: "#club_next",
                prevEl: "#club_prev",
                clickable: true,
              }}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              grabCursor={true}
              modules={[Navigation, Autoplay]}
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

            <div className={styles.next} id="club_next">
              <ArrowLeftOutlined style={{ color: "#fff" }} />
            </div>
            <div className={styles.prev} id="club_prev">
              <ArrowRightOutlined style={{ color: "#fff" }} />
            </div>
          </section>
        </div>

        <div className={styles.club_link}>
          {clubs.length !== 0
            ? clubs.map((club, index) => (
                <>
                  {index <= 2 ? (
                    <ClubCard
                      key={Math.random() * index}
                      image={club.image_url}
                      description={club.description}
                      authorName={club.AuthorName}
                      id={club.id}
                      title={club.title}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        textAlign: "center",
                        fontSize: "1.3em",
                      }}
                    >
                      <Link href={"/clubs"}>مشاهده همه کلوپ ها</Link>
                    </div>
                  )}
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
