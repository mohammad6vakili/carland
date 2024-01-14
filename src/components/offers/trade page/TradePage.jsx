import s from "../../../../styles/main.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import { Button } from "reactstrap";
import SuggestCard from "../../suggest card";
import { useRouter } from "next/router";
import useHttp, { url } from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";
import { convertDate } from "../../comments/CommentCards";
import { handleTextCut } from "@/src/hooks/functions";

const TradePage = () => {
  const router = useRouter();
  const [tradeData, setTradeData] = useState([]);
  const [photos, setPhotos] = useState([]);
  const { httpService } = useHttp();
  const [alikeOffers, setAlikeOffers] = useState([]);

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
    const id = router.query.trade;
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

  if (tradeData.length !== 0) {
    return (
      <>
        <div className={s.trade_page}>
          <div className={s.main_title}>
            <h1>{tradeData.title}</h1>
          </div>

          <div className={s.contents}>
            <div className={s.main_content}>
              <div className={s.gallery}>
                {photos.length !== 0 ? (
                  <Swiper
                    spaceBetween={50}
                    thumbs={{ swiper: thumbsSwiper }}
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
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default TradePage;
