import Image from "next/image";
import s from "../../../styles/main.module.scss";
import {
  InstagramFilled,
  LinkOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { SwiperSlide, Swiper } from "swiper/react";
import { useState, useRef, useEffect } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Button } from "reactstrap";
import { useWindowSize } from "@uidotdev/usehooks";
import SuggestCard from "../suggest card";
import { useRouter } from "next/router";
import useHttp, { url } from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";
import MySkeleton from "../skeleton/Skeleton";
import { usePathname } from "next/navigation";
import { handleCopy, toPersianString } from "@/src/hooks/functions";
import CommentCards, { convertDate } from "../comments/CommentCards";
import SendComment from "../comments/SendComment";
import CommentCard from "../comments/CommentCard";
import { useSelector } from "react-redux";
import Link from "next/link";
import Head from "next/head";
import ReactPlayer from "react-player";

const Club = () => {
  const size = useWindowSize();
  const router = useRouter();
  const pathname = usePathname();
  const isAuth = useSelector((state) => state.isAuth.isAuth);
  const { httpService } = useHttp();

  const latestClubs = [{}, {}, {}];
  const [clubData, setClubData] = useState([]);
  const [photos, setPhotos] = useState([]);

  //handleRequests
  useEffect(() => {
    const id = router.query.clubId;
    if (id) {
      httpService
        .get(`club/${id}`)
        .then((res) => {
          res.status === 200 ? setClubData(res.data) : null;
          handlePhotos(res.data.data.image_url, res.data.data.imageAddresses);
        })
        .catch((err) => toast.error("خطا در پیدا کردن اطلاعات کلوپ مورد نظر"));
    }
  }, [router]);

  const handleDescription = (text) => {
    let texts = text.split("\n");
    return texts.map((text, index) => (
      <>
        <p>{text}</p>
        <br />
      </>
    ));
  };

  const handlePhotos = (banner, images) => {
    const data = [];

    images
      ? images.split(",").map((ph) => {
          let converted = ph.replace("https://api.carland.ir/", "");
          data.push(converted.replace(" ", ""));
        })
      : null;
    data.push(banner);

    setPhotos(data);
  };

  //swiper
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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

  if (clubData.length !== 0) {
    return (
      <>
        <Head>
          <title>{clubData.data.title}</title>
          <meta
            property="og:image"
            content={url + "/" + clubData.data.image_url}
          />
          <meta name="keywords" content={clubData.data.keywords} />
          <meta name="description" content={clubData.data.description} />
        </Head>
        <div className={s.magazine_page}>
          <div className={s.main_title}>
            <h1>{clubData.data.title}</h1>
          </div>

          <div className={s.contents}>
            <div className={s.main_content}>
              <div className={s.gallery}>
                <div className={s.photos}>
                  <Swiper
                    grabCursor
                    spaceBetween={50}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className={s.my_swiper}
                  >
                    {photos.map((ph, index) => (
                      <SwiperSlide
                        key={Math.random() * index}
                        className={s.slide}
                      >
                        <Image
                          src={url + "/" + ph}
                          alt=""
                          width={700}
                          height={500}
                        />
                      </SwiperSlide>
                    ))}
                    {clubData.data
                      ? clubData.data.video_url &&
                        clubData.data.video_url.length !== 0 && (
                          <SwiperSlide className={s.slide}>
                            <ReactPlayer
                              width={"100%"}
                              height={"100%"}
                              controls
                              url={url + "/" + clubData.data.video_url}
                            />
                          </SwiperSlide>
                        )
                      : null}
                  </Swiper>

                  {clubData.data.imageAddresses ? (
                    <Swiper
                      autoHeight
                      grabCursor
                      direction={"vertical"}
                      onSwiper={setThumbsSwiper}
                      slidesPerView={4}
                      freeMode={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className={s.my_swiper2}
                    >
                      {photos.map((ph, index) => (
                        <SwiperSlide
                          className={s.slide2}
                          key={Math.random() * index}
                        >
                          <Image
                            src={url + "/" + ph}
                            alt=""
                            width={100}
                            height={100}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : null}
                </div>

                <div className={s.magazine_details}>
                  <p className={s.name}>{clubData.data.AuthorName}</p>
                  <p>{convertDate(clubData.data.created_at)}</p>
                  <p>
                    زمان مطالعه:{" "}
                    <span>
                      {toPersianString(clubData.data.StudyTime)} دقیقه
                    </span>
                  </p>
                </div>
              </div>

              <div className={s.texts}>
                <div className={s.title}>{clubData.data.title}</div>
                <p className={s.descriptions}>
                  {handleDescription(clubData.data.description)}
                </p>
              </div>

              <div className={s.share}>
                <div className={s.links}>
                  <p>اشتراک گذاری:</p>
                  <a>
                    <Button>
                      <InstagramFilled />
                    </Button>
                  </a>
                  <a
                    href={`https://telegram.me/share/url?url=https://t.me&text=carland.ir/club${pathname}`}
                  >
                    <Button>
                      <FaTelegramPlane />
                    </Button>
                  </a>
                  <a
                    target="blank"
                    href={`whatsapp://send?text=https://carland.ir${pathname}`}
                  >
                    <Button>
                      <FaWhatsapp />
                    </Button>
                  </a>
                  <Button
                    onClick={() => handleCopy(`https://carlan.ir${pathname}`)}
                  >
                    <LinkOutlined />
                  </Button>
                </div>

                <div className={s.text}>
                  این مجله را با دوستان خود به اشتراک بگذارید
                </div>
              </div>

              <div className={s.comments}>
                {isAuth ? (
                  <section className={s.comments}>
                    <div className={s.comments}>
                      {clubData.comments
                        ? clubData.comments.map((comment, index) => (
                            <CommentCard
                              content={comment.content}
                              name={comment.user.name}
                              profile={comment.user.image_profile}
                              rate={"۴.۶"}
                              date={toPersianString(
                                comment.created_at.split("T", 1)
                              ).replaceAll("-", "/")}
                              reactions={{
                                likes: comment.likes,
                                dislikes: comment.dislikes,
                              }}
                              reply={null}
                            />
                          ))
                        : null}
                    </div>
                  </section>
                ) : (
                  <div className={s.not_logged_in}>
                    <div className={s.circle}></div>
                    <p>
                      برای ارسال دیدگاه لازم است ابتدا وارد شده یا ثبت نام کنید!
                    </p>

                    <Link href={"/login"}>
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
                    </Link>
                  </div>
                )}
              </div>

              <SendComment page={"club"} />
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

                    <div className={s.blur}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="362"
                        height="62"
                        viewBox="0 0 362 62"
                        fill="none"
                      >
                        <g filter="url(#filter0_b_1375_15567)">
                          <path
                            d="M117.888 17.9911H239.837C241.256 17.9911 242.673 17.8905 244.077 17.6901L361 1V46C361 54.2843 354.284 61 346 61H16C7.71574 61 1 54.2843 1 46V1L113.491 17.6672C114.947 17.8829 116.416 17.9911 117.888 17.9911Z"
                            fill="white"
                            fillOpacity="0.2"
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
                            y="-34.5801"
                            width="431"
                            height="131.08"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
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
                    <div className={s.text}>کلاسیک</div>
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
    return (
      <>
        <Head>
          <title>به بخش کلوپ ها خوش آمدید</title>
        </Head>
        <div className={s.club_page}>
          <div className={s.main_title}>
            <h1>
              <MySkeleton width={"300px"} height={"40px"} />
            </h1>
          </div>

          <div className={s.contents}>
            <div className={s.main_content}>
              <div className={s.gallery}>
                <div className={s.photos}>
                  <Swiper
                    grabCursor
                    spaceBetween={50}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className={s.my_swiper}
                  >
                    <SwiperSlide className={s.slide}>
                      <MySkeleton width={"100%"} height={"500px"} />
                    </SwiperSlide>
                  </Swiper>

                  <Swiper
                    autoHeight
                    grabCursor
                    direction={"vertical"}
                    onSwiper={setThumbsSwiper}
                    slidesPerView={4}
                    freeMode={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className={s.my_swiper2}
                  >
                    {photos.map((ph, index) => (
                      <SwiperSlide
                        className={s.slide2}
                        key={Math.random() * index}
                      >
                        <MySkeleton width={"100px"} height={"100px"} />
                        <MySkeleton width={"100px"} height={"100px"} />
                        <MySkeleton width={"100px"} height={"100px"} />
                        <MySkeleton width={"100px"} height={"100px"} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className={s.magazine_details}>
                  <div className={s.name}>
                    {<MySkeleton width={"200px"} height={"30px"} />}
                  </div>
                </div>
              </div>

              <div className={s.texts}>
                <div className={s.title}>
                  <MySkeleton width={"20%"} height={"30px"} />
                </div>
                <div className={s.descriptions}>
                  <MySkeleton width={"100%"} height={"40px"} count={6} />
                </div>
              </div>

              <div className={s.share}>
                <div className={s.links}>
                  <p>اشتراک گذاری:</p>
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

                    <div className={s.blur}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="362"
                        height="62"
                        viewBox="0 0 362 62"
                        fill="none"
                      >
                        <g filter="url(#filter0_b_1375_15567)">
                          <path
                            d="M117.888 17.9911H239.837C241.256 17.9911 242.673 17.8905 244.077 17.6901L361 1V46C361 54.2843 354.284 61 346 61H16C7.71574 61 1 54.2843 1 46V1L113.491 17.6672C114.947 17.8829 116.416 17.9911 117.888 17.9911Z"
                            fill="white"
                            fillOpacity="0.2"
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
                            y="-34.5801"
                            width="431"
                            height="131.08"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
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
                    <div className={s.text}>کلاسیک</div>
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
                {latestClubs.map((offer, index) => (
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
  }
};

export default Club;
