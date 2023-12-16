import { Swiper, SwiperSlide } from "swiper/react";
import s from "../../../styles/main.module.scss";
import Image from "next/image";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import CustomPagination from "./CustomPagination";
import MainPageMagazine from "../main/magazines/MainPageMagazine";
import useHttp from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";
import SuggestCard from "../suggest card";

const ClubsCategory = () => {
  const photos = [
    { src: "/assets/trades/trade-1.png" },
    { src: "/assets/trades/trade-2.png" },
    { src: "/assets/trades/trade-1.png" },
    { src: "/assets/trades/trade-2.png" },
    { src: "/assets/trades/trade-1.png" },
    { src: "/assets/trades/trade-1.png" },
    { src: "/assets/trades/trade-1.png" },
  ];
  const categories = [{}, {}, {}];
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { httpService } = useHttp();

  //handle requests
  useEffect(() => {
    httpService
      .get("clubs")
      .then((res) => {
        res.status === 200 ? setClubs(res.data.data) : null;
        setLoading(false);
      })
      .catch((err) => {
        toast.error("خطا در ارتباط با سرور");
      });
  }, []);

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

  const [categorySwiper, setCategorySwiper] = useState();
  const nextCategoryRef = useRef();
  const prevCategoryRef = useRef();
  useEffect(() => {
    if (categorySwiper) {
      categorySwiper.params.navigation.prevEl = prevCategoryRef.current;
      categorySwiper.params.navigation.nextEl = nextCategoryRef.current;
      categorySwiper.navigation.init();
      categorySwiper.navigation.update();
    }
  }, [categorySwiper]);

  const MyPaginationBullet = ({ isActive }) => (
    <span className={isActive ? "active" : ""}>
      {isActive && "•"}
      {!isActive && "○"}
    </span>
  );

  return (
    <>
      <div className={s.clubs}>
        <section className={s.main_title}>
          <h1>منتخب کلوپ‌ها</h1>
        </section>

        <div className={s.gallery}>
          <Swiper
            slidesPerView={1}
            spaceBetween={"20%"}
            pagination={{
              renderPagination: (swiper) => (
                <CustomPagination
                  slidesLength={swiper.slides.length}
                  activeSlideIndex={swiper.activeIndex}
                />
              ),
            }}
            navigation={{
              prevEl: prevAdRef?.current,
              nextEl: nextAdRef?.current,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className={s.mySwiper}
            onSwiper={setAdsSwiper}
          >
            {photos.map(() => (
              <SwiperSlide key={Math.random()} className={s.slide}>
                <Image
                  src={"/assets/trades/trade-1.png"}
                  alt=""
                  width={700}
                  height={400}
                />
              </SwiperSlide>
            ))}

            <div className={s.descriptions}>
              <h1 className={s.title}>رونمایی از جدیدترین محصول BMW</h1>
              <div className={s.texts}>
                میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای آن
                پیش آمده تمام قطعات رو اینجا پیدا کنید. همچنین برای دانلودسریع و
                بهتر آن میتوانید از لینک مستقیم یا اپ کافه بازا استفاده در
                موبایل خود انجام دهید.
              </div>

              {/* small boxes */}
              <div className={s.box1}>
                <div></div>
              </div>
              <div className={s.box2}>
                <div></div>
              </div>
            </div>
          </Swiper>

          <div className={s.navigation_nexprev}>
            <div className={s.navigation}>
              <div ref={nextAdRef} className={s.next}>
                <ArrowLeftOutlined />
              </div>
              <div ref={prevAdRef} className={s.prev}>
                <ArrowRightOutlined />
              </div>
            </div>

            <div className={s.pagination}>
              <CustomPagination />
            </div>
          </div>
        </div>

        <div className={s.best_clubs}>
          <section className={s.title}>
            <div className={s.text}>
              <Image
                src={"/assets/trades/polygon.svg"}
                alt=""
                width={20}
                height={20}
              />
              <h1>کلوپ‌های برتر</h1>
            </div>
          </section>

          <MainPageMagazine
            magazines={clubs}
            method={"club"}
            overflowedDes={false}
            header={false}
          />
        </div>

        <div className={s.clubs_category}>
          <section className={s.title}>
            <div className={s.text}>
              <Image
                src={"/assets/trades/polygon.svg"}
                alt=""
                width={20}
                height={20}
              />
              <h1>دسته بندی کلوپ‌ها</h1>
            </div>
          </section>

          <section className={s.categories}>
            <div className={s.category}>
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

                {categories.map((item, index) => (
                  <div key={Math.random()} className={s.list_item}>
                    <div className={s.title}>
                      <span>
                        <Image
                          src={"/assets/trades/triangle.svg"}
                          alt=""
                          width={15}
                          height={15}
                        />
                      </span>
                      <p>تاریخچه خودروهای مدرن</p>
                    </div>

                    <div className={s.description}>
                      تاریخچه خودروهای قدیمی را در کارلند دنبال کنید!
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={s.category}>
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

                {categories.map((item, index) => (
                  <div key={Math.random()} className={s.list_item}>
                    <div className={s.title}>
                      <span>
                        <Image
                          src={"/assets/trades/triangle.svg"}
                          alt=""
                          width={15}
                          height={15}
                        />
                      </span>
                      <p>تاریخچه خودروهای مدرن</p>
                    </div>

                    <div className={s.description}>
                      تاریخچه خودروهای قدیمی را در کارلند دنبال کنید!
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={s.category}>
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

                {categories.map((item, index) => (
                  <div key={Math.random()} className={s.list_item}>
                    <div className={s.title}>
                      <span>
                        <Image
                          src={"/assets/trades/triangle.svg"}
                          alt=""
                          width={15}
                          height={15}
                        />
                      </span>
                      <p>تاریخچه خودروهای مدرن</p>
                    </div>

                    <div className={s.description}>
                      تاریخچه خودروهای قدیمی را در کارلند دنبال کنید!
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={s.category}>
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

                {categories.map((item, index) => (
                  <div key={Math.random()} className={s.list_item}>
                    <div className={s.title}>
                      <span>
                        <Image
                          src={"/assets/trades/triangle.svg"}
                          alt=""
                          width={15}
                          height={15}
                        />
                      </span>
                      <p>تاریخچه خودروهای مدرن</p>
                    </div>

                    <div className={s.description}>
                      تاریخچه خودروهای قدیمی را در کارلند دنبال کنید!
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className={s.suggested_clubs}>
          <section className={s.title}>
            <div className={s.text}>
              <Image
                src={"/assets/trades/polygon.svg"}
                alt=""
                width={20}
                height={20}
              />
              <h1>کلوپ های پیشنهادی</h1>
            </div>

            <div className={s.navigation}>
              <div ref={prevCategoryRef} className={s.prev}>
                <ArrowRightOutlined />
              </div>
              <div ref={nextCategoryRef} className={s.next}>
                <ArrowLeftOutlined />
              </div>
            </div>
          </section>

          <div className={s.suggested_cards}>
            <Swiper
              navigation={{
                prevEl: prevCategoryRef?.current,
                nextEl: nextCategoryRef?.current,
              }}
              modules={[Navigation]}
              slidesPerView={"auto"}
              className={s.swiper}
              spaceBetween={15}
              onSwiper={setCategorySwiper}
            >
              {photos.map((item, index) => (
                <SwiperSlide key={Math.random() * index} className={s.slide}>
                  <SuggestCard
                    description={
                      "تکمیل فرآیند خرید از محل سامانه ، به صورت غیر حضوری و فوری از طریق مجموعه شعب نمایندگی 777 انجام می شود"
                    }
                    image={"/assets/main/car-1.png"}
                    time={"۱۴۰۲/۰۸/۰۱"}
                    title={"ام وی ام، X55 PRO"}
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

export default ClubsCategory;
