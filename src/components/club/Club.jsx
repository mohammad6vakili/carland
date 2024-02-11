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
import {
  handleCopy,
  handleTextCut,
  toPersianString,
} from "@/src/hooks/functions";
import CommentCards, { convertDate } from "../comments/CommentCards";
import SendComment from "../comments/SendComment";
import CommentCard from "../comments/CommentCard";
import { useSelector } from "react-redux";
import Link from "next/link";
import Head from "next/head";
import ReactPlayer from "react-player";
import ReactImageGallery from "react-image-gallery";

const Club = ({ clubs }) => {
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
          let converted = ph.replace(`${url}/`, "").replace(" ", "");
          data.push({ original: converted, thumbnail: converted });
        })
      : null;
    data.push(banner);

    setPhotos(data);
  };

  //swiper
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [adsSwiper, setAdsSwiper] = useState();

  if (clubData.length !== 0) {
    return (
      <>
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
                          alt="club"
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
                  {/* <div className={s.my_swiper}>
                    <ReactImageGallery fullscreen items={photos} />
                  </div> */}

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
                            alt="club"
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
                            alt="icon"
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
                      alt="icon"
                      width={15}
                      height={15}
                    />
                  </span>{" "}
                  <p>آخرین کلوپ‌ها</p>
                </div>

                <div className={s.list}>
                  <div className={s.image}>
                    <Image
                      src={"/assets/magazine/magazine-1.png"}
                      alt=""
                      width={300}
                      height={150}
                    />
                  </div>

                  {clubs.map((club, index) => (
                    <Link
                      href={`club/${club.title}/${club.id}`}
                      key={Math.random()}
                      className={s.list_item}
                    >
                      <div className={s.title}>
                        <span>
                          <Image
                            src={"/assets/trades/triangle.svg"}
                            alt="icon"
                            width={15}
                            height={15}
                          />
                        </span>{" "}
                        <p>{club.title}</p>
                      </div>

                      <div className={s.description}>
                        {handleTextCut(club.description, 50)}
                      </div>
                    </Link>
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
                      alt="icon"
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
                              alt="more"
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
                  alt="icon"
                  width={15}
                  height={15}
                />
              </span>{" "}
              <p>کلوپ‌های پیشنهادی</p>
              <div className={s.next_prev_offers}>
                <div className={s.prev} id="suggested-prev">
                  <ArrowRightOutlined />
                </div>
                <div className={s.next} id="suggested-next">
                  <ArrowLeftOutlined />
                </div>
              </div>
            </div>

            <div className={s.cards}>
              <Swiper
                navigation={{
                  prevEl: "#suggested-prev",
                  nextEl: "#suggested-next",
                }}
                slidesPerView={"auto"}
                modules={[Navigation, FreeMode]}
                className={s.swiper}
              >
                {clubs.map((club, index) => (
                  <SwiperSlide className={s.slide} key={Math.random() * index}>
                    <SuggestCard
                      image={url + "/" + club.image_url}
                      title={club.title}
                      description={handleTextCut(club.description, 300)}
                      time={convertDate(club.created_at)}
                      href={`club/${club.title}/${club.id}`}
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
                </div>

                <div className={s.text}>
                  این مجله را با دوستان خود به اشتراک بگذارید
                </div>
              </div>
            </div>
          </div>

          <div className={s.suggested_clubs}>
            <div className={s.title}>
              <span>
                <Image
                  src={"/assets/trades/triangle.svg"}
                  alt="icon"
                  width={15}
                  height={15}
                />
              </span>{" "}
              <p>کلوپ‌های پیشنهادی</p>
              <div className={s.next_prev_offers}>
                <div className={s.prev} id="suggested-prev">
                  <ArrowRightOutlined />
                </div>
                <div className={s.next} id="suggested-next">
                  <ArrowLeftOutlined />
                </div>
              </div>
            </div>

            <div className={s.cards}>
              <Swiper
                navigation={{
                  prevEl: "#suggested-prev",
                  nextEl: "#suggested-next",
                }}
                modules={[Navigation, FreeMode]}
                className="mySwiper"
              >
                {latestClubs.map((offer, index) => (
                  <SwiperSlide key={Math.random() * index}>
                    <SuggestCard
                      image={"/assets/main/car-2.png"}
                      title={""}
                      description={""}
                      time={""}
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
