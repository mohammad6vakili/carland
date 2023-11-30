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
import { FreeMode, Navigation } from "swiper/modules";
import { Button } from "reactstrap";

const Magazine = () => {
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
              <Swiper>
                {photos.map((item, index) => (
                  <SwiperSlide key={Math.random() * index} className={s.slide}>
                    <Image
                      src={"/assets/magazine/magazine-1.png"}
                      alt=""
                      width={700}
                      height={500}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

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
              slidesPerView={3.5}
              navigation={{
                prevEl: prevAdRef?.current,
                nextEl: nextAdRef?.current,
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
