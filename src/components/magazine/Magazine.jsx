import Image from "next/image";
import s from "../../../styles/main.module.scss";
import {
  InstagramFilled,
  LinkOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
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
import {
  handleCopy,
  handleTextCut,
  toPersianString,
} from "@/src/hooks/functions";
import Head from "next/head";
import { convertDate } from "../comments/CommentCards";
import { usePathname } from "next/navigation";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { IoMdEye } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setMedia } from "@/src/app/slices/media";

const Magazine = ({ magData, magazines }) => {
  const { httpService } = useHttp();
  const size = useWindowSize();
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();

  const latestmagazines = [{}, {}, {}];
  // const [magData, setMagData] = useState([]);
  const [popularMagazine, setPopularMagazine] = useState([]);
  const [photos, setPhotos] = useState([]);

  //handleRequests
  useEffect(() => {
    //   const id = router.query.magId;
    //   if (id) {
    //     httpService
    //       .get(`magazine/${id}`)
    //       .then((res) => {
    //         res.status === 200 ? setMagData(res.data.data) : null;
    //         handlePhotos(res.data.data.image_url, res.data.data.imageAddresses);
    //       })
    //       .catch((err) => toast.error("خطا در پیدا کردن اطلاعات مجله مورد نظر"));
    //   }

    handleGetPopular();
  }, []);

  useEffect(() => {
    handlePhotos(magData.image_url, magData.imageAddresses);
  }, [magData]);

  const handleGetPopular = () => {
    httpService("/MagazinesPopular")
      .then((res) => {
        res?.data ? setPopularMagazine(res.data.data) : null;
      })
      .catch((err) => {
        toast.error("");
      });
  };

  const handlePhotos = (banner, images) => {
    const data = [];

    data.push(banner);
    images
      ? images.split(",").forEach((ph) => {
          let converted = ph.replace(`${url}`, "");
          data.push(converted.replace(" ", ""));
        })
      : null;

    return setPhotos(data);
  };

  const handleDescription = (text) => {
    let texts = text.split("\r\n");
    return texts.map((text, index) => (
      <>
        <p>{text}</p>
        {index % 2 === 0 ? <br /> : null}
      </>
    ));
  };

  //swiper
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const [adsSwiper, setAdsSwiper] = useState();
  // const prevAdRef = useRef();
  // const nextAdRef = useRef();
  // useEffect(() => {
  //   if (adsSwiper) {
  //     adsSwiper.params.navigation.prevEl = prevAdRef.current;
  //     adsSwiper.params.navigation.nextEl = nextAdRef.current;
  //     adsSwiper.navigation.init();
  //     adsSwiper.navigation.update();
  //   }
  // }, [adsSwiper]);

  if (magData) {
    return (
      <>
        <div className={s.magazine_page}>
          <div className={s.main_title}>
            <h1>{magData.title}</h1>
          </div>

          <div className={s.contents}>
            <div className={s.main_content}>
              <div className={s.gallery}>
                <div className={s.photos}>
                  <Swiper
                    grabCursor
                    spaceBetween={50}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Thumbs]}
                    className={s.my_swiper}
                  >
                    {photos.map((ph, index) => (
                      <SwiperSlide
                        key={Math.random() * index}
                        className={s.slide}
                        onClick={() => dispatch(setMedia(url + "/" + ph))}
                      >
                        <Image
                          src={url + "/" + ph}
                          alt="magazine"
                          width={700}
                          height={500}
                          loading="eager"
                        />
                      </SwiperSlide>
                    ))}
                    {magData.video_url && magData.video_url.length !== 0 && (
                      <SwiperSlide className={s.slide}>
                        <ReactPlayer
                          width={"100%"}
                          height={"100%"}
                          controls
                          url={url + "/" + magData.video_url}
                        />
                      </SwiperSlide>
                    )}
                  </Swiper>

                  {magData.imageAddresses ? (
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
                            alt="magazine"
                            width={100}
                            height={100}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : null}
                </div>

                <div className={s.magazine_details}>
                  <p className={s.name}>{magData.AuthorName}</p>
                  <p>{convertDate(magData.created_at)}</p>
                  <div>
                    زمان مطالعه:{" "}
                    <span>{toPersianString(magData.StudyTime)} دقیقه</span>
                  </div>
                </div>
              </div>

              <div className={s.texts}>
                <div className={s.title}>{magData.title}</div>
                <div
                  className={s.descriptions}
                  //@ts-ignore
                  dangerouslySetInnerHTML={{ __html: magData.description }}
                ></div>
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
                    target="_blank"
                    href={`https://telegram.me/share/url?url=https://tm.me&text=carland.ir/club${pathname}`}
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
                    onClick={() =>
                      handleCopy(
                        `https://carland.ir${pathname}`,
                        "لینک این صفحه کپی شد"
                      )
                    }
                  >
                    <LinkOutlined />
                  </Button>
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
                      alt="magazine"
                      width={15}
                      height={15}
                    />
                  </span>{" "}
                  <p>آخرین مجلات</p>
                </div>

                <div className={s.list}>
                  <div className={s.image}>
                    <Image
                      src={"/assets/magazine/latest-club.png"}
                      alt=""
                      width={300}
                      height={150}
                    />

                    {/* <div className={s.blur}>
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
              </div> */}
                  </div>

                  {magazines.map((magazine, index) => {
                    if (index < 5) {
                      return (
                        <Link
                          href={`/magazine/${magazine.title}/${magazine.id}`}
                          key={index}
                          className={s.list_item}
                        >
                          <div className={s.title}>
                            <span>
                              <Image
                                src={"/assets/trades/triangle.svg"}
                                alt=""
                                width={15}
                                height={15}
                              />
                            </span>{" "}
                            <p>{magazine.title}</p>
                          </div>

                          <div className={s.description}>
                            {handleTextCut(magazine.description, 50)}
                          </div>
                        </Link>
                      );
                    }
                  })}
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
                  {popularMagazine.length !== 0 &&
                    popularMagazine.map((magazine, index) => {
                      if (index < 5)
                        return (
                          <div key={magazine.id} className={s.card}>
                            <div className={s.image}>
                              <Image
                                src={url + "/" + magazine.image_url}
                                alt={magazine.title}
                                quality={100}
                                width={30}
                                height={30}
                              />
                            </div>

                            <div className={s.texts}>
                              <div className={s.title}>{magazine.title}</div>
                              <div className={s.des}>
                                {handleTextCut(magazine.description, 100)}
                              </div>
                              <div className={s.see_more}>
                                <Link
                                  href={`/magazine/${magazine.title}/${magazine.id}`}
                                >
                                  <Button>
                                    <p>مشاهده</p>
                                    <div>
                                      <Image
                                        src={"/assets/main/see-more.svg"}
                                        alt="more"
                                        width={20}
                                        height={20}
                                      />
                                    </div>
                                  </Button>
                                </Link>
                              </div>
                              <div className={s.details}>
                                <span>{magazine.AuthorName}</span>
                                <span>
                                  {toPersianString(magazine.count_view)}{" "}
                                  <IoMdEye />
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                    })}
                </div>
              </div>
            </div>
          </div>

          <div className={s.suggested}>
            <div className={s.title}>
              <span>
                <Image
                  src={"/assets/trades/triangle.svg"}
                  alt=""
                  width={15}
                  height={15}
                />
              </span>{" "}
              <p>مجلات پیشنهادی</p>
              <div className={s.next_prev_offers}>
                <div className={s.prev} id="prev-mag-photo">
                  <ArrowRightOutlined />
                </div>
                <div className={s.next} id="next-mag-photo">
                  <ArrowLeftOutlined />
                </div>
              </div>
            </div>

            <div className={s.cards}>
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={35}
                navigation={{
                  prevEl: "#prev-mag-photo",
                  nextEl: "#next-mag-photo",
                }}
                modules={[Navigation, FreeMode]}
                className={s.swiper}
              >
                {magazines.map((magazine, index) => (
                  <SwiperSlide className={s.slide} key={Math.random() * index}>
                    <SuggestCard
                      image={url + "/" + magazine.image_url}
                      title={magazine.title}
                      description={handleTextCut(magazine.description, 300)}
                      time={convertDate(magazine.created_at)}
                      href={`/magazine/${magazine.title}/${magazine.id}`}
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
        <div className={s.magazine_page}>
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

                  {latestmagazines.map((item, index) => (
                    <MySkeleton width={"100%"} height={"15px"} />
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
                {latestmagazines.map((magazine, index) => (
                  <SwiperSlide key={Math.random() * index}>
                    <MySkeleton width={"250px"} height={"500px"} />
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

export default Magazine;
