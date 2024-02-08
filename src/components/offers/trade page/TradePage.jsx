import s from "../../../../styles/main.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  PhoneFilled,
} from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
} from "reactstrap";
import SuggestCard from "../../suggest card";
import { useRouter } from "next/router";
import useHttp, { url } from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";
import { convertDate } from "../../comments/CommentCards";
import { handleCopy, handleTextCut } from "@/src/hooks/functions";
import { useWindowSize } from "@uidotdev/usehooks";
import Head from "next/head";
import { GoBookmark } from "react-icons/go";
import { GoBookmarkFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import {
  adFavList,
  removeFavList,
  setFavList,
} from "@/src/app/slices/favListSlice";

const TradePage = () => {
  const router = useRouter();
  const size = useWindowSize();
  const [loadingGetNum, setLoadingGetNum] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tradeData, setTradeData] = useState([]);
  const [photos, setPhotos] = useState([]);
  const { httpService } = useHttp(true);
  const [alikeOffers, setAlikeOffers] = useState([]);
  const [reportText, setReportText] = useState("");
  const [reportModal, setReportModal] = useState(false);
  const dispatch = useDispatch();
  const favList = useSelector((state) => state.favList.favList);
  const [loadingFav, setLoadingFav] = useState(false);
  const isAuth = useSelector((state) => state.isAuth.isAuth);

  //swiper
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [adsSwiper, setAdsSwiper] = useState();

  //handle photos
  useEffect(() => {
    tradeData.length !== 0
      ? setPhotos([
          { src: tradeData.mainImage },
          { src: tradeData.front_view },
          { src: tradeData.rear_view },
          { src: tradeData.right_view },
          { src: tradeData.left_view },
        ])
      : null;
  }, [tradeData]);

  //handle trade id
  useEffect(() => {
    const id = router.query.tradeId;
    if (id) {
      httpService.get(`Showads/${id}`).then((res) => {
        res.status === 200 ? setTradeData(res.data.data) : null;
      });
    }
  }, [router]);

  useEffect(() => {
    httpService
      .post("advertisements")
      .then((res) => {
        res.status === 200
          ? setAlikeOffers([
              res.data.data.data[0],
              res.data.data.data[1],
              res.data.data.data[2],
              res.data.data.data[3],
              res.data.data.data[4],
            ])
          : null;
      })
      .catch(() => {
        toast.error("");
      });
  }, []);

  const handleGetPhonAds = () => {
    setLoadingGetNum(true);
    const id = tradeData.id;
    const formData = new FormData();
    formData.append("id", id);

    const response = httpService
      .post("GetPhoneAds", formData)
      .then((res) => {
        if (res.status === 200) {
          router.push(`tel:${tradeData.phone}`);
        }
      })
      .catch((err) => {
        toast.error("مشکلی در پیدا کردن اطلاعات تماس آگهی مورد نظر بوجود آمد");
        if (err) {
          return false;
        }
      })
      .finally(() => {
        setLoadingGetNum(false);
      });

    return response;
  };

  const handleGetPhonAdsPc = () => {
    setLoadingGetNum(true);
    const id = tradeData.id;
    const formData = new FormData();
    formData.append("id", id);

    const response = httpService
      .post("GetPhoneAds", formData)
      .then((res) => {
        if (res.status === 200) {
          handleCopy(`${tradeData.phone}`, "شماره آگهی مورد نظر کپی شد ");
        }
      })
      .catch((err) => {
        toast.error("مشکلی در پیدا کردن اطلاعات تماس آگهی مورد نظر بوجود آمد");
        if (err) {
          return false;
        }
      })
      .finally(() => {
        setLoadingGetNum(false);
      });

    return response;
  };

  const handleReportSubmit = () => {
    setLoading(true);
    const id = tradeData.id;
    const formData = new FormData();
    formData.append("id", id);
    formData.append("report_text", reportText);

    httpService
      .post("submitReport", formData)
      .then((res) => {
        if (res.status === 200) {
          toast.success("گزارش شما با موفقیت ثبت و به پشتیبانی ارجاع داده شد");
        }
        setLoading(false);
        setReportModal(false);
      })
      .catch((err) => {
        toast.error("در ثبت کردن گزارش شما مشکلی بوجود آمد");
        if (err) {
          return false;
        }
        setLoading(false);
      });
  };

  const handleReportModal = () => {
    setReportModal(!reportModal);
  };

  const handleFavorite = () => {
    favList.some((ad) => {
      return ad.ad_id == tradeData.id;
    })
      ? handleRemoveFavlist()
      : handleAdFavlist();
  };

  const handleAdFavlist = () => {
    setLoadingFav(true);
    const formData = new FormData();
    formData.append("ad_id", tradeData.id);

    httpService
      .post("favorite/add", formData)
      .then((res) => {
        res.status === 200
          ? (setLoadingFav(false),
            toast.success("این آگهی به لیست آگهی های مورد علاقه اضافه شد"),
            dispatch(setFavList(res.data.data.original.data)))
          : null;
      })
      .catch(() => {
        toast.error(
          "مشکلی در اضافه کردن این آگهی به لیست علاقمندی ها بوجود امد"
        );
        setLoadingFav(false);
      });
  };

  const handleRemoveFavlist = () => {
    setLoadingFav(true);
    const formData = new URLSearchParams();
    formData.append("ad_id", tradeData.id);

    httpService
      .post("favorite/remove", formData)
      .then((res) => {
        res.status === 200
          ? (setLoadingFav(false),
            toast.success("این آگهی از لیست آگهی های مورد علاقه حذف شد"),
            dispatch(setFavList(res.data.data.original.data)))
          : null;
      })
      .catch(() => {
        toast.error("مشکلی در حذف کردن این آگهی از لیست علاقمندی ها بوجود امد");
      });
    setLoadingFav(false);
  };

  if (tradeData) {
    return (
      <>
        <Head>
          <title>{tradeData.title}</title>
        </Head>
        <div className={s.trade_page}>
          <div className={s.main_title}>
            <h1>
              {tradeData.title}{" "}
              {isAuth && (
                <span
                  style={{ padding: "3px", cursor: "pointer" }}
                  onClick={handleFavorite}
                  className={s.bookmark}
                >
                  {loadingFav ? (
                    <Spinner
                      style={{ width: "20px", height: "20px" }}
                    ></Spinner>
                  ) : favList.some((ad) => {
                      return ad.ad_id == tradeData.id;
                    }) ? (
                    <GoBookmarkFill />
                  ) : (
                    <GoBookmark />
                  )}
                </span>
              )}
            </h1>
          </div>

          <div className={s.contents}>
            <div className={s.main_content}>
              <div className={s.gallery}>
                {photos.length !== 0 ? (
                  <Swiper
                    spaceBetween={50}
                    thumbs={{
                      swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                          ? thumbsSwiper
                          : null,
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className={s.my_swiper}
                  >
                    {photos.map((ph, index) =>
                      ph.src ? (
                        <SwiperSlide
                          className={s.slide}
                          key={Math.random() * index}
                        >
                          <Image
                            src={url + ph.src}
                            alt="images"
                            width={600}
                            height={400}
                          />
                        </SwiperSlide>
                      ) : null
                    )}
                  </Swiper>
                ) : null}

                {photos.length !== 0 ? (
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className={s.my_swiper2}
                  >
                    {photos.map((ph, index) =>
                      ph.src ? (
                        <SwiperSlide
                          className={s.slide2}
                          key={Math.random() * index}
                        >
                          <Image
                            src={url + ph.src}
                            alt="images"
                            width={200}
                            height={150}
                          />
                        </SwiperSlide>
                      ) : null
                    )}
                  </Swiper>
                ) : null}
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
                    <p>{tradeData.kilometers}</p>
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
                    <p>{tradeData.production_year}</p>
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
                    <p>{tradeData.color}</p>
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
                    <p>{tradeData.gearbox_type}</p>
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
                    <p>{tradeData.gearbox_type}</p>
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
                  <p>{tradeData.description}</p>
                </div>
              </div>

              <div className={s.report_phoneNum}>
                <Button
                  onClick={handleReportModal}
                  block={size.width < 1000}
                  active
                  color="danger"
                >
                  گزارش این آگهی
                </Button>
                {size.width > 1000 && (
                  <Button
                    onClick={handleGetPhonAdsPc}
                    style={{ background: "#142D5D" }}
                    active
                  >
                    اطلاعات تماس این آگهی
                  </Button>
                )}
              </div>
            </div>

            <div className={s.other_details}>
              <div className={s.banner}>
                <Image
                  src={"/assets/trades/other-detail-1.png"}
                  alt=""
                  width={400}
                  height={200}
                />
              </div>

              <div className={s.banner}>
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
                        width={70}
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
                <div className={s.prev} id="suggested_prev">
                  <ArrowRightOutlined />
                </div>
                <div className={s.next} id="suggested_next">
                  <ArrowLeftOutlined />
                </div>
              </div>
            </div>

            <div className={s.cards}>
              <Swiper
                navigation={{
                  prevEl: "#suggested_prev",
                  nextEl: "#suggested_next",
                  clickable: true,
                }}
                slidesPerView={"auto"}
                spaceBetween={15}
                modules={[Navigation]}
                className={s.swiper}
                onSwiper={setAdsSwiper}
              >
                {alikeOffers.length !== 0
                  ? alikeOffers.map((offer, index) => (
                      <SwiperSlide
                        className={s.slide}
                        key={Math.random() * index}
                      >
                        <SuggestCard
                          image={url + offer.mainImage}
                          title={offer.title}
                          description={handleTextCut(offer.description, 200)}
                          time={convertDate(offer.created_at)}
                        />
                      </SwiperSlide>
                    ))
                  : null}
              </Swiper>
            </div>
          </div>

          {size.width < 1000 ? (
            <Button
              onClick={() => handleGetPhonAds()}
              className={s.phone_call_mobile}
            >
              {loading && (
                <Spinner style={{ width: "20px", height: "20px" }}></Spinner>
              )}
              <PhoneFilled /> تماس با این آگهی
            </Button>
          ) : null}

          <Modal isOpen={reportModal} toggle={handleReportModal} centered>
            <ModalHeader>گزارش آگهی {`${tradeData.title}`}</ModalHeader>
            <ModalBody>
              {" "}
              <p>دلیل گزارش خود را در فیلد زیر وارد کنید:</p>
              <Input
                value={reportText}
                onChange={(e) => setReportText(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                disabled={loading || reportText.length === 0}
                onClick={handleReportSubmit}
                color="danger"
              >
                تایید
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default TradePage;
