import s from "../../../../styles/main.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import { Button } from "reactstrap";
import AlikeOffersCard from "./AlikeOffersCard";

const TradePage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [adsSwiper, setAdsSwiper] = useState();
  const prevAdRef = useRef();
  const nextAdRef = useRef();

  const photos = [
    { src: "/assets/trades/trade-1.png" },
    { src: "/assets/trades/trade-2.png" },
    { src: "/assets/trades/trade-1.png" },
    { src: "/assets/trades/trade-2.png" },
    { src: "/assets/trades/trade-1.png" },
    { src: "/assets/trades/trade-1.png" },
    { src: "/assets/trades/trade-1.png" },
  ];

  useEffect(() => {
    if (adsSwiper) {
      console.log("Swiper instance:", adsSwiper);
      adsSwiper.params.navigation.prevEl = prevAdRef.current;
      adsSwiper.params.navigation.nextEl = nextAdRef.current;
      adsSwiper.navigation.init();
      adsSwiper.navigation.update();
    }
  }, [adsSwiper]);

  return (
    <>
      <div className={s.trade_page}>
        <div className={s.main_title}>
          <h1>بی ام دبلیو ۵۱۰</h1>
        </div>

        <div style={{ display: "flex", width: "100%", gap: "20px" }}>
          <div className={s.main_content}>
            <div className={s.gallery}>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={50}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {photos.map((ph, index) => (
                  <SwiperSlide className={s.slide} key={Math.random() * index}>
                    <Image src={ph.src} alt="" width={600} height={400} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={50}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {photos.map((ph, index) => (
                  <SwiperSlide className={s.slide2} key={Math.random() * index}>
                    <Image src={ph.src} alt="" width={200} height={150} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className={s.main_details}>
              <div className={s.title}>
                <span>
                  <Image
                    src={"/assets/trades/triangle.svg"}
                    alt=""
                    width={15}
                    height={15}
                  />
                </span>{" "}
                <p>اطلاعات کلی</p>
              </div>

              <div className={s.boxes}>
                <div className={s.box}>
                  <Image
                    src={"/assets/trades/speed.png"}
                    alt=""
                    width={24}
                    height={24}
                  />
                  <p>۱۷,۰۰۰</p>
                  <p>کیلومتر</p>
                </div>
                <div className={s.line}></div>
                <div className={s.box}>
                  <Image
                    src={"/assets/trades/calendar.png"}
                    alt=""
                    width={24}
                    height={24}
                  />
                  <p>۱۳۹۲</p>
                  <p>تولید</p>
                </div>
                <div className={s.line}></div>
                <div className={s.box}>
                  <Image
                    src={"/assets/trades/color-palette.png"}
                    alt=""
                    width={24}
                    height={24}
                  />
                  <p>مشکی</p>
                  <p>رنگ</p>
                </div>
                <div className={s.line}></div>
                <div className={s.box}>
                  <Image
                    src={"/assets/trades/transmission.png"}
                    alt=""
                    width={24}
                    height={24}
                  />
                  <p>چوری</p>
                  <p>گیربکس</p>
                </div>
                <div className={s.line}></div>
                <div className={s.box}>
                  <Image
                    src={"/assets/trades/setting.png"}
                    alt=""
                    width={24}
                    height={24}
                  />
                  <p>اتوماتیک</p>
                  <p>دنده</p>
                </div>
                <div className={s.line}></div>
                <div className={s.box}>
                  <Image
                    src={"/assets/trades/fuel.png"}
                    alt=""
                    width={24}
                    height={24}
                  />
                  <p>۴۵ لیتر</p>
                  <p>حجم سوخت</p>
                </div>
              </div>
            </div>

            <div className={s.tech_details}>
              <div className={s.title}>
                <span>
                  <Image
                    src={"/assets/trades/triangle.svg"}
                    alt=""
                    width={15}
                    height={15}
                  />
                </span>{" "}
                <p>مشخصات فنی</p>
              </div>

              <div className={s.table}>
                <section className={s.table_row}>
                  <div className={s.key}>جنس بدنه</div>
                  <div className={s.value}>آلومینیوم</div>
                </section>
                <section className={s.table_row}>
                  <div className={s.key}>جنس بدنه</div>
                  <div className={s.value}>آلومینیوم</div>
                </section>
                <section className={s.table_row}>
                  <div className={s.key}>جنس بدنه</div>
                  <div className={s.value}>آلومینیوم</div>
                </section>
                <section className={s.table_row}>
                  <div className={s.key}>جنس بدنه</div>
                  <div className={s.value}>آلومینیوم</div>
                </section>
                <section className={s.table_row}>
                  <div className={s.key}>جنس بدنه</div>
                  <div className={s.value}>آلومینیوم</div>
                </section>
                <section className={s.table_row}>
                  <div className={s.key}>جنس بدنه</div>
                  <div className={s.value}>آلومینیوم</div>
                </section>
              </div>
            </div>
          </div>

          <div className={s.other_details}>
            <div className={s.image}>
              <Image
                src={"/assets/trades/other-detail-1.png"}
                alt=""
                width={400}
                height={200}
              />
            </div>

            <div className={s.image}>
              <Image
                src={"/assets/trades/other-detail-1.png"}
                alt=""
                width={400}
                height={200}
              />
            </div>

            <div className={s.fan_club}>
              <div className={s.title}>
                {" "}
                <Image
                  src={"/assets/trades/polygon.svg"}
                  alt=""
                  width={20}
                  height={20}
                />
                <p>پست‌های باشگاه هواداران</p>
              </div>

              <div className={s.cards}>
                <div className={s.card}>
                  <div className={s.image}>
                    <Image
                      src={"/assets/trades/fan-club-car.png"}
                      alt=""
                      width={100}
                      height={70}
                    />
                  </div>

                  <div className={s.texts}>
                    <div className={s.title}> تاریخچه خودروهای قدیمی</div>
                    <div className={s.detail}>
                      <span>۱۴۰۲/۰۸/۰۱</span>
                      <Button>
                        مشاهده{" "}
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

        <div className={s.alike_offers}>
          <div className={s.title}>
            <span>
              <Image
                src={"/assets/trades/triangle.svg"}
                alt=""
                width={15}
                height={15}
              />
            </span>{" "}
            <p>آگهی‌های مشابه</p>
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
              slidesPerView={3.5}
              navigation={{
                prevEl: prevAdRef?.current,
                nextEl: nextAdRef?.current,
              }}
              modules={[Navigation]}
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

export default TradePage;
