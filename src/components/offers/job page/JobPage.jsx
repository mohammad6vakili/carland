import s from "../../../../styles/main.module.scss";
import {
  StarFilled,
  InstagramFilled,
  LinkOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { Button } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ReactStars from "react-rating-stars-component";
import CommentCard from "./CommentCard";
import SendComment from "./SendComment";
import AlikeOffersCard from "../trade page/AlikeOffersCard";
import { useEffect, useRef, useState } from "react";

const JobPage = () => {
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

  return (
    <>
      <div className={s.job_page}>
        <div className={s.gallery}>
          <Swiper spaceBetween={50}>
            {photos.map((ph, index) => (
              <SwiperSlide className={s.slide} key={Math.random()}>
                <Image
                  src={"/assets/trades/trade-1.png"}
                  alt=""
                  width={1000}
                  height={700}
                  className={s.my_swiper}
                />
                <div className={s.details}>
                  <div className={s.title}>لوازم یدکی میلاد</div>

                  <div className="d-flex">
                    <div className={s.rate}>
                      <StarFilled style={{ color: "#FFD029" }} /> ۴.۵
                    </div>
                    <div className={s.badge}>
                      <Image
                        src={"/assets/jobs/badge.png"}
                        alt=""
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                </div>

                <div className={s.contatcs}>
                  <div className={s.call}>
                    <Image
                      src={"/assets/jobs/call.svg"}
                      alt=""
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className={s.sms}>
                    <Image
                      src={"/assets/jobs/sms.svg"}
                      alt=""
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className={s.location}>
                    <Image
                      src={"/assets/offers/location.png"}
                      alt=""
                      width={15}
                      height={15}
                    />{" "}
                    تهران
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={s.about_us}>
          <div className={s.title}>
            <span>
              <Image
                src={"/assets/trades/triangle.svg"}
                alt=""
                width={15}
                height={15}
              />
            </span>{" "}
            <p>درباره ما</p>
          </div>

          <div className={s.texts}>
            <p>
              به نام خدا، بنده مهزیار رازه ۳ سال و نیم تجربه در زمینه طراحی رابط
              کاربری، طراحی سایت و مباحث مرتبط با آن را دارم و تسلط کافی به نرم
              افزارهای گرافیکی مانند فیگما، فتوشاپ و ادوبی اکس دی دارا می‌باشم.
              همچنین علاقه زیادی به یادگیری، مطالعه و پیشرفت روزانه دارم. از
              کارهای گروهی لذت می‌برم و همکاری با شرکت‌های دارای ایده و هدف‌دار
              را دوست دارم.
            </p>
            <p>
              به نام خدا، بنده مهزیار رازه ۳ سال و نیم تجربه در زمینه طراحی رابط
              کاربری، طراحی سایت و مباحث مرتبط با آن را دارم و تسلط کافی به نرم
              افزارهای گرافیکی مانند فیگما، فتوشاپ و ادوبی اکس دی دارا می‌باشم.
              همچنین علاقه زیادی به یادگیری، مطالعه و پیشرفت روزانه دارم. از
              کارهای گروهی لذت می‌برم و همکاری با شرکت‌های دارای ایده و هدف‌دار
              را دوست دارم.
            </p>
          </div>
        </div>

        <div className={s.skills}>
          <div className={s.title}>
            <span>
              <Image
                src={"/assets/trades/triangle.svg"}
                alt=""
                width={15}
                height={15}
              />
            </span>{" "}
            <p>مهارت‌ها</p>
          </div>

          <div className={s.tags}>
            <div className={s.tag}>تست فنی</div>
            <div className={s.tag}>تست فنی</div>
            <div className={s.tag}>تست فنی</div>
          </div>
        </div>

        <section className={s.address_times}>
          <div className={s.work_time}>
            <div className={s.title}>
              <span>
                <Image
                  src={"/assets/trades/triangle.svg"}
                  alt=""
                  width={15}
                  height={15}
                />
              </span>
              <p>ساعت کاری</p>
            </div>

            <div className={s.table}>
              <div className={s.table_row}>
                <span>شنبه</span>
                <span>
                  شروع کار
                  <span style={{ color: "#1BC217" }}>۹:۰۰</span>
                </span>
                <span>
                  اتمام کار
                  <span style={{ color: "#FF1033" }}>۹:۰۰</span>
                </span>
              </div>
              <div className={s.table_row}>
                <span>یکشنبه</span>
                <span>
                  شروع کار
                  <span style={{ color: "#1BC217" }}>۹:۰۰</span>
                </span>
                <span>
                  اتمام کار
                  <span style={{ color: "#FF1033" }}>۹:۰۰</span>
                </span>
              </div>
              <div className={s.table_row}>
                <span>دوشنبه</span>
                <span>
                  شروع کار
                  <span style={{ color: "#1BC217" }}>۹:۰۰</span>
                </span>
                <span>
                  اتمام کار
                  <span style={{ color: "#FF1033" }}>۹:۰۰</span>
                </span>
              </div>
              <div className={s.table_row}>
                <span>سه شنبه</span>
                <span>
                  شروع کار
                  <span style={{ color: "#1BC217" }}>۹:۰۰</span>
                </span>
                <span>
                  اتمام کار
                  <span style={{ color: "#FF1033" }}>۹:۰۰</span>
                </span>
              </div>
              <div className={s.table_row}>
                <span>چهارشنبه</span>
                <span>
                  شروع کار
                  <span style={{ color: "#1BC217" }}>۹:۰۰</span>
                </span>
                <span>
                  اتمام کار
                  <span style={{ color: "#FF1033" }}>۹:۰۰</span>
                </span>
              </div>
              <div className={s.table_row}>
                <span>پنجشنبه</span>
                <span>
                  شروع کار
                  <span style={{ color: "#1BC217" }}>۹:۰۰</span>
                </span>
                <span>
                  اتمام کار
                  <span style={{ color: "#FF1033" }}>۹:۰۰</span>
                </span>
              </div>
              <div className={s.table_row}>
                <span>جمعه</span>
                <span>
                  <span style={{ color: "#FF1033" }}>بسته</span>
                </span>
              </div>
            </div>

            <div className={s.links}>
              <Button className={s.link}>
                <InstagramFilled />
              </Button>
            </div>
          </div>

          <div className={s.address}>
            <div className={s.title}>
              <div>
                <Image
                  src={"/assets/trades/triangle.svg"}
                  alt=""
                  width={15}
                  height={15}
                />
              </div>
              <p>آدرس</p>
            </div>
            <div>تهران، میدان پیروزی، خیابان آزادی، روبروی سینما ازادی</div>

            <div className={s.map}>
              <Image
                src={"/assets/jobs/map.png"}
                alt="map"
                width={700}
                height={250}
              />
            </div>
          </div>
        </section>

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

          <div className={s.rate}>
            <ReactStars
              count={5}
              // onChange={ratingChanged}
              size={24}
              emptyIcon={<i className="far fa-star"></i>}
              // halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            ۴.۶(امتیاز){" "}
          </div>
        </div>

        <div className={s.comments}>
          <div className={s.not_logged_in}>
            <div className={s.circle}></div>
            <p>برای ارسال دیدگاه لازم است ابتدا وارد شده یا ثبت نام کنید!</p>

            <Button className={s.btn}>
              ورود/ثبت نام{" "}
              <div>
                <ArrowLeftOutlined style={{ color: "#4A80E8", zIndex: "2" }} />
                <Image
                  src={"/assets/jobs/rectangle.svg"}
                  alt=""
                  width={20}
                  height={30}
                  className={s.back}
                />
              </div>
            </Button>
          </div>

          <section className={s.comments}>
            <CommentCard
              profile={"/assets/jobs/profile.png"}
              name={"مهزیار رازه"}
              content={
                "میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای آن پیش آمده تمام قطعات رو اینجا پیدا کنید. البته  برای دانلودسریع و بهتر آن میتوانید از لینک مستقیم یا اپ کافه بازا استفاده درموبایل خود انجام دهید."
              }
              date={"۸ مرداد ۱۴۰۲"}
              rate={"۴.۶"}
              reactions={{ likes: "۲۱", dislikes: "۷" }}
            />

            <CommentCard
              profile={"/assets/jobs/profile.png"}
              name={"مهزیار رازه"}
              content={
                "میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای آن پیش آمده تمام قطعات رو اینجا پیدا کنید. البته  برای دانلودسریع و بهتر آن میتوانید از لینک مستقیم یا اپ کافه بازا استفاده درموبایل خود انجام دهید."
              }
              date={"۸ مرداد ۱۴۰۲"}
              rate={"۴.۶"}
              reactions={{ likes: "۲۱", dislikes: "۷" }}
              reply={{
                name: "ادمین کارلند",
                content:
                  "میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای آن پیش آمده تمام قطعات رو اینجا پیدا کنید. البته  برای دانلودسریع و بهتر آن میتوانید از لینک مستقیم یا اپ کافه بازا استفاده درموبایل خود انجام دهید.",
              }}
            />
          </section>
        </div>

        <SendComment />

        <div className={s.around_jobs}>
          <div className={s.title}>
            <span>
              <Image
                src={"/assets/trades/triangle.svg"}
                alt=""
                width={15}
                height={15}
              />
            </span>{" "}
            <p>کسب و کارهای نزدیک</p>
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
              className="mySwiper2"
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

export default JobPage;
