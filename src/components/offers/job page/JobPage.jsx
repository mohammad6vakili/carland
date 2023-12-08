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
import { FreeMode, Navigation } from "swiper/modules";
import ReactStars from "react-rating-stars-component";
import CommentCard from "./CommentCard";
import SendComment from "./SendComment";
import { useEffect, useRef, useState } from "react";
import Map from "./map/Map";
import SuggestCard from "../../suggest card";
import { useRouter } from "next/router";
import useHttp, { url } from "@/src/axiosConfig/useHttp";
import {
  convertTime,
  handleCopy,
  toPersianString,
} from "@/src/hooks/functions";

const JobPage = () => {
  const { httpService } = useHttp();
  const [jobData, setJobData] = useState([]);
  const [photos, setPhotos] = useState([]);
  const router = useRouter();

  const tableTime = [
    { day: "شنبه", start: "", end: "", isOpen: true },
    { day: "یکشنبه", start: "", end: "", isOpen: true },
    { day: "دوشنبه", start: "", end: "", isOpen: true },
    { day: "سه شنبه", start: "", end: "", isOpen: true },
    { day: "چهارشنبه", start: "", end: "", isOpen: true },
    { day: "پنجشنبه", start: "", end: "", isOpen: true },
    { day: "جمعه", start: "", end: "", isOpen: false },
  ];

  //swiper
  const [adsSwiper, setAdsSwiper] = useState();
  const prevAdRef = useRef();
  const nextAdRef = useRef();
  useEffect(() => {
    if (adsSwiper) {
      adsSwiper.params.navigation.prevEl = prevAdRef.current;
      adsSwiper.params.navigation.nextEl = nextAdRef.current;
      adsSwiper.navigation.init();
      adsSwiper.navigation.update();
    }
  }, [adsSwiper]);

  //handle photos
  useEffect(() => {
    jobData.length !== 0 ? setPhotos(jobData.images.split(",")) : null;
    console.log(photos);
  }, [jobData]);

  //handle job id
  useEffect(() => {
    const id = router.query.job;
    if (id) {
      httpService.get(`service/${id}`).then((res) => {
        res.status === 200 ? setJobData(res.data.data) : null;
      });
    }
  }, [router]);

  if (jobData.length !== 0) {
    return (
      <>
        <div className={s.job_page}>
          <div className={s.gallery}>
            <Swiper className={s.my_swiper} spaceBetween={50}>
              {photos
                ? photos.map((ph, index) => (
                    <SwiperSlide
                      className={s.slide}
                      key={Math.random() * index}
                    >
                      <Image
                        src={url + ph}
                        alt=""
                        width={1000}
                        height={700}
                        className={s.my_swiper}
                      />
                      <div className={s.details}>
                        <div className={s.title}>{jobData.title}</div>

                        <div className="d-flex">
                          <div className={s.rate}>
                            <StarFilled style={{ color: "#FFD029" }} />{" "}
                            {jobData.rate}
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
                        <div
                          onClick={() => handleCopy(jobData.phone)}
                          className={s.call}
                        >
                          <a href={`tel:${jobData.phone}`}>
                            <Image
                              src={"/assets/jobs/call.svg"}
                              alt=""
                              width={30}
                              height={30}
                            />
                          </a>
                        </div>
                        <div className={s.sms}>
                          <a href={`sms:/*${jobData.phone}*/?body=/* سلام */`}>
                            <Image
                              src={"/assets/jobs/sms.svg"}
                              alt=""
                              width={30}
                              height={30}
                            />
                          </a>
                        </div>
                        <div className={s.location}>
                          <Image
                            src={"/assets/offers/location.png"}
                            alt=""
                            width={15}
                            height={15}
                          />{" "}
                          {jobData.city}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                : null}
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
              <p>{jobData.descriptions}</p>
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
                {tableTime.map((day, index) => (
                  <div className={s.table_row}>
                    <span>{day.day}</span>

                    {!day.isOpen ? (
                      <span style={{ color: "#FF1033" }}>{"بسته"}</span>
                    ) : (
                      <>
                        <span>
                          شروع کار
                          <span style={{ color: "#1BC217" }}>
                            {toPersianString(convertTime(jobData.timeFrom))}
                          </span>
                        </span>
                        <span>
                          اتمام کار
                          <span style={{ color: "#FF1033" }}>
                            {toPersianString(convertTime(jobData.timeTo))}
                          </span>
                        </span>
                      </>
                    )}
                  </div>
                ))}
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
              <div>{jobData.address}</div>

              {jobData.longitude && jobData.longitude ? (
                <div className={s.map}>
                  <Map />
                </div>
              ) : null}
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
                  <ArrowLeftOutlined
                    style={{ color: "#4A80E8", zIndex: "2" }}
                  />
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
                freeMode
                modules={[Navigation, FreeMode]}
                className="mySwiper2"
                onSwiper={setAdsSwiper}
              >
                {photos.map((offer, index) => (
                  <SwiperSlide key={Math.random() * index}>
                    <SuggestCard
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
  } else {
    null;
  }
};

export default JobPage;
