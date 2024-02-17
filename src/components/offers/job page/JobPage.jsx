import s from "../../../../styles/main.module.scss";
import {
  StarFilled,
  InstagramFilled,
  LinkOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  PhoneFilled,
} from "@ant-design/icons";
import Image from "next/image";
import { Button } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import ReactStars from "react-rating-stars-component";
import CommentCard from "../../comments/CommentCard";
import SendComment from "../../comments/SendComment";
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
import CommentCards, { convertDate } from "../../comments/CommentCards";
import { useSelector } from "react-redux";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useWindowSize } from "@uidotdev/usehooks";
import toast from "react-hot-toast";
import MySkeleton from "../../skeleton/Skeleton";

const JobPage = ({ jobData }) => {
  const pathname = usePathname();
  const size = useWindowSize();
  const { httpService } = useHttp(true);
  // const [jobData, setJobData] = useState([]);
  const [aroundJobs, setAroundJobs] = useState(null);
  const [photos, setPhotos] = useState([]);
  const router = useRouter();
  const isAuth = useSelector((state) => state.isAuth.isAuth);

  // const tableTime = [
  //   { day: "شنبه", start: "", end: "", isOpen: true },
  //   { day: "یکشنبه", start: "", end: "", isOpen: true },
  //   { day: "دوشنبه", start: "", end: "", isOpen: true },
  //   { day: "سه شنبه", start: "", end: "", isOpen: true },
  //   { day: "چهارشنبه", start: "", end: "", isOpen: true },
  //   { day: "پنجشنبه", start: "", end: "", isOpen: true },
  //   { day: "جمعه", start: "", end: "", isOpen: false },
  // ];

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
  }, [jobData]);

  useEffect(() => {
    const formData = new FormData();
    formData.append("state", jobData.state);
    formData.append("city", jobData.city);

    httpService
      .post("services/search", formData)
      .then((res) => {
        res?.status === 200 ? setAroundJobs(res.data.data.data) : null;
      })
      .catch(() => {
        setAroundJobs([]);
      });
  }, [jobData]);

  //handle job id
  // useEffect(() => {
  //   const id = router.query.jobId;
  //   if (id) {
  //     httpService.get(`service/${id}`).then((res) => {
  //       res.status === 200 ? setJobData(res.data.data) : null;
  //     });
  //   }
  // }, [router]);

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
                        loading="eager"
                      />
                      <div className={s.details}>
                        <div className={s.title}>{jobData.title}</div>

                        <div className="d-flex">
                          <div className={s.rate}>
                            <StarFilled style={{ color: "#FFD029" }} />
                            {toPersianString(jobData.average_rating)}
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
                        <a href={`tel:${jobData.phone}`}>
                          <div
                            onClick={() => handleCopy(jobData.phone)}
                            className={s.call}
                          >
                            <Image
                              src={"/assets/jobs/call.svg"}
                              alt=""
                              width={30}
                              height={30}
                            />
                          </div>
                        </a>

                        <a
                          href={`sms:/*${jobData.phone}*/?body=/*${url}/${jobData.id}*/`}
                        >
                          <div
                            onClick={() =>
                              handleCopy(
                                jobData?.phone,
                                "شماره با موفقیت کپی شد"
                              )
                            }
                            className={s.sms}
                          >
                            <Image
                              src={"/assets/jobs/sms.svg"}
                              alt=""
                              width={30}
                              height={30}
                            />
                          </div>
                        </a>
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
            {/* <div className={s.work_time}>
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
            </div> */}

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
              <a href={`whatsapp://send?text=https://carland.ir${pathname}`}>
                <div>
                  <FaWhatsapp />
                </div>
              </a>
              <div
                onClick={() =>
                  handleCopy(`carland.ir/jobs${pathname}`, "با موفقیت کپی شد")
                }
              >
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

          {/* <div className={s.comments}>
            {isAuth ? (
              <section className={s.comments}>
                <CommentCards comments={jobData.user_ratings} />
              </section>
            ) : (
              <div className={s.not_logged_in}>
                <div className={s.circle}></div>
                <p>
                  برای ارسال دیدگاه لازم است ابتدا وارد شده یا ثبت نام کنید!
                </p>

                <Link href={"/login"}>
                  <Button className={s.btn}>
                    ورود/ثبت نام
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
                </Link>
              </div>
            )}
          </div> */}

          <SendComment page={"jobs"} />

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
                spaceBetween={35}
                slidesPerView={"auto"}
                freeMode
                modules={[Navigation, FreeMode]}
                className="mySwiper2"
                onSwiper={setAdsSwiper}
              >
                {aroundJobs ? (
                  !!aroundJobs.length ? (
                    aroundJobs.map((item, index) => (
                      <SwiperSlide
                        style={{ width: "max-content" }}
                        key={Math.random() * index}
                      >
                        <SuggestCard
                          image={url + item.images.split(",")[0]}
                          title={item.title}
                          description={item.descriptions}
                          href={`/jobs/${item.id}`}
                        />
                      </SwiperSlide>
                    ))
                  ) : (
                    <>
                      <SwiperSlide>
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <span>شغلی وجود ندارد</span>
                        </div>
                      </SwiperSlide>
                    </>
                  )
                ) : (
                  <SwiperSlide>
                    <MySkeleton width={"250px"} height={"350px"} />
                  </SwiperSlide>
                )}
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
