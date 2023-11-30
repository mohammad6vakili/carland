import Image from "next/image";
import s from "../../../styles/main.module.scss";
import {
  InstagramFilled,
  LinkOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { SwiperSlide, Swiper } from "swiper/react";
import AlikeOffersCard from "../offers/trade page/AlikeOffersCard";
import { useState, useRef, useEffect } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Button } from "reactstrap";

const Magazine = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [adsSwiper, setAdsSwiper] = useState();
  const prevAdRef = useRef();
  const nextAdRef = useRef();

  useEffect(() => {
    if (adsSwiper) {
      console.log("Swiper instance:", adsSwiper);
      adsSwiper.params.navigation.prevEl = prevAdRef.current;
      adsSwiper.params.navigation.nextEl = nextAdRef.current;
      adsSwiper.navigation.init();
      adsSwiper.navigation.update();
    }
  }, [adsSwiper]);

  const photos = [
    { src: "/assets/trades/trade-1.png" },
    { src: "/assets/trades/trade-2.png" },
    { src: "/assets/trades/trade-1.png" },
    { src: "/assets/trades/trade-2.png" },
    { src: "/assets/trades/trade-1.png" },
    { src: "/assets/trades/trade-1.png" },
    { src: "/assets/trades/trade-1.png" },
  ];
  const latestClubs = [{}, {}, {}];

  return (
    <>
      <div className={s.magazine_page}>
        <div className={s.main_title}>
          <h1>رونمایی از جدیدترین محصول BMW</h1>
        </div>

        <div className={s.contents}>
          <div className={s.main_content}>
            <div className={s.gallery}>
              <div className={s.photos}>
                <Swiper
                  grabCursor
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  spaceBetween={50}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className={s.my_swiper}
                >
                  {photos.map((item, index) => (
                    <SwiperSlide
                      key={Math.random() * index}
                      className={s.slide}
                    >
                      <Image src={item.src} alt="" width={700} height={500} />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <Swiper
                  grabCursor
                  direction="vertical"
                  onSwiper={setThumbsSwiper}
                  spaceBetween={50}
                  slidesPerView={5}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className={s.my_swiper2}
                >
                  {photos.map((ph, index) => (
                    <SwiperSlide
                      className={s.slide2}
                      key={Math.random() * index}
                    >
                      <Image src={ph.src} alt="" width={100} height={100} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className={s.magazine_details}>
                <p className={s.name}>مهزیار رازه</p>
                <p>۸ مرداد ۱۴۰۲</p>
                <p>
                  زمان مطالعه: <span>۸ دقیقه</span>
                </p>
              </div>
            </div>

            <div className={s.texts}>
              <div className={s.title}>رونمایی از جدیدترین محصول BMW</div>
              <p className={s.descriptions}>
                میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای آن
                پیش آمده تمام قطعات رو اینجا پیدا کنید. همچنین برای دانلودسریع و
                بهتر آن میتوانید از لینک مستقیم یا اپ کافه بازا استفاده درموبایل
                خود انجام دهید.میتوانید به راحتی خودروی خود را خریداری کنید و
                اگر مشکلی برای آن پیش آمده تمام قطعات رو اینجا پیدا کنید. همچنین
                برای دانلودسریع و بهتر آن میتوانید از لینک مستقیم یا اپ کافه
                بازا استفاده درموبایل خود انجام دهید.میتوانید به راحتی خودروی
                خود را خریداری کنید و اگر مشکلی برای آن پیش آمده تمام قطعات رو
                اینجا پیدا کنید. همچنین برای دانلودسریع و بهتر آن میتوانید از
                لینک مستقیم یا اپ کافه بازا استفاده درموبایل خود انجام
                دهید.میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی
                برای آن پیش آمده تمام قطعات رو اینجا پیدا کنید. همچنین برای
                دانلودسریع و بهتر آن میتوانید از لینک مستقیم یا اپ کافه بازا
                استفاده درموبایل خود انجام دهید.
              </p>
            </div>

            <div className={s.share}>
              <div className={s.links}>
                <p>اشتراک گذاری:</p>
                <div>
                  <InstagramFilled />
                </div>
                <div>
                  <LinkOutlined />
                </div>
              </div>

              <div className={s.text}>
                این مجله را با دوستان خود به اشتراک بگذارید
              </div>
            </div>
          </div>

          <div className={s.other_contents}>
            <div className={s.latest_clubs}>
              <div className={s.title}>
                <span>
                  <Image
                    src={"/assets/trades/triangle.svg"}
                    alt=""
                    width={15}
                    height={15}
                  />
                </span>{" "}
                <p>آخرین کلوپ‌ها</p>
              </div>

              <div className={s.list}>
                <div className={s.image}>
                  <Image
                    src={"/assets/magazine/latest-club.png"}
                    alt=""
                    width={300}
                    height={150}
                  />
                  <span>
                    کلاسیک <span></span>
                  </span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="62"
                      viewBox="0 0 362 62"
                      fill="none"
                    >
                      <g filter="url(#filter0_b_1375_15567)">
                        <path
                          d="M117.888 17.9911H239.837C241.256 17.9911 242.673 17.8905 244.077 17.6901L361 1V46C361 54.2843 354.284 61 346 61H16C7.71574 61 1 54.2843 1 46V1L113.491 17.6672C114.947 17.8829 116.416 17.9911 117.888 17.9911Z"
                          fill="white"
                          fill-opacity="0.2"
                        />
                        <path
                          d="M117.888 17.9911H239.837C241.256 17.9911 242.673 17.8905 244.077 17.6901L361 1V46C361 54.2843 354.284 61 346 61H16C7.71574 61 1 54.2843 1 46V1L113.491 17.6672C114.947 17.8829 116.416 17.9911 117.888 17.9911Z"
                          stroke="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_b_1375_15567"
                          x="-34.5"
                          y="-34.5791"
                          width="431"
                          height="131.079"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feGaussianBlur
                            in="BackgroundImageFix"
                            stdDeviation="17.5"
                          />
                          <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_1375_15567"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_1375_15567"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>

                {latestClubs.map((item, index) => (
                  <div key={Math.random()} className={s.list_item}>
                    <div className={s.title}>
                      <span>
                        <Image
                          src={"/assets/trades/triangle.svg"}
                          alt=""
                          width={15}
                          height={15}
                        />
                      </span>{" "}
                      <p>تاریخچه خودروهای مدرن</p>
                    </div>

                    <div className={s.description}>
                      تاریخچه خودروهای قدیمی را در کارلند دنبال کنید!
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={s.image}>
              <Image
                src={"/assets/trades/other-detail-1.png"}
                alt=""
                width={300}
                height={150}
              />
            </div>

            <div className={s.best_clubs}>
              <div className={s.title}>
                <span>
                  <Image
                    src={"/assets/trades/triangle.svg"}
                    alt=""
                    width={15}
                    height={15}
                  />
                </span>{" "}
                <p>برترین کلوپ‌ها</p>
              </div>

              <div className={s.list}>
                <div className={s.card}>
                  <div className={s.image}>
                    <Image
                      src={"/assets/trades/fan-club-car.png"}
                      alt=""
                      width={30}
                      height={30}
                    />
                  </div>

                  <div className={s.texts}>
                    <div className={s.title}> تاریخچه خودروهای قدیمی</div>
                    <div className={s.detail}>
                      <span>۱۴۰۲/۰۸/۰۱</span>
                      <Button>
                        <p>مشاهده</p>
                        <div>
                          <Image
                            src={"/assets/main/see-more.svg"}
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={s.suggested_clubs}>
          <div className={s.title}>
            <span>
              <Image
                src={"/assets/trades/triangle.svg"}
                alt=""
                width={15}
                height={15}
              />
            </span>{" "}
            <p>کلوپ‌های پیشنهادی</p>
            <div className={s.next_prev_offers}>
              <div className={s.prev} ref={prevAdRef}>
                <ArrowRightOutlined />
              </div>
              <div className={s.next} ref={nextAdRef}>
                <ArrowLeftOutlined />
              </div>
            </div>
          </div>

          <div className={s.cards}>
            <Swiper
              navigation={{
                prevEl: prevAdRef?.current,
                nextEl: nextAdRef?.current,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.8,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3.2,
                  spaceBetween: 50,
                },
                1360: {
                  slidesPerView: 3.8,
                  spaceBetween: 50,
                },
              }}
              modules={[Navigation, FreeMode]}
              className="mySwiper"
              onSwiper={setAdsSwiper}
            >
              {photos.map((offer, index) => (
                <SwiperSlide key={Math.random() * index}>
                  <AlikeOffersCard
                    image={"/assets/main/car-2.png"}
                    title={"ام وی ام، X55 PRO"}
                    description={
                      "تکمیل فرآیند خرید از محل سامانه ، به صورت غیر حضوری و فوری از طریق مجموعه شعب نمایندگی 777 انجام می شود"
                    }
                    time={"۱۴۰۲/۰۸/۰۱"}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Magazine;
