import { Swiper, SwiperSlide } from "swiper/react";
import s from "../../../styles/main.module.scss";
import Image from "next/image";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import CustomPagination from "./CustomPagination";
import MainPageMagazine from "../main/magazines/MainPageMagazine";
import useHttp, { loaderImage, url } from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";
import SuggestCard from "../suggest card";
import { getLocal, handleTextCut, removeLocal } from "@/src/hooks/functions";
import { convertDate } from "../comments/CommentCards";
import MySkeleton from "../skeleton/Skeleton";
import Link from "next/link";

const ClubsCategory = ({ clubCategories, clubs }) => {
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
  // const [clubs, setClubs] = useState([]);
  const [clubByCategory, setclubByCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(
    getLocal("clubCat") !== "null" ? parseInt(getLocal("clubCat")) : null
  );
  const [loading, setLoading] = useState(false);
  const { httpService } = useHttp();

  //handle requests
  // useEffect(() => {
  //   httpService
  //     .get("clubs")
  //     .then((res) => {
  //       res.status === 200 ? setClubs(res.data.data) : null;
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       toast.error("خطا در ارتباط با سرور");
  //     });

  //   removeLocal("clubCat");
  // }, []);

  useEffect(() => {
    selectedCategory
      ? (setLoading(true),
        httpService
          .get(`clubs/${selectedCategory}`)
          .then((res) => {
            res.status === 200 ? setclubByCategory(res.data.data) : null;
            setLoading(false);
          })
          .catch((err) => {
            toast.error(
              "مشکلی در پیدا کردن کلوپ با دسته بندی مورد نظر بوجود امد"
            );
            setLoading(false);
          }))
      : null;

    removeLocal("clubCat");
  }, [selectedCategory]);

  const handleSelectedCategory = (id) => {
    selectedCategory === id
      ? (setclubByCategory(null), setSelectedCategory(null))
      : setSelectedCategory(id);
  };

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
              prevEl: "#gallery_prev",
              nextEl: "#gallery_next",
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className={s.mySwiper}
          >
            {clubs ? (
              clubs.map((club, index) => (
                <>
                  {index <= 2 && (
                    <SwiperSlide key={Math.random()} className={s.slide}>
                      <Link href={`/club/${club.title}/${club.id}`}>
                        <Image
                          src={url + "/" + club.image_url}
                          alt="club"
                          width={600}
                          height={300}
                          className={s.lazy_load}
                        />
                        <div className={s.descriptions}>
                          <h1 className={s.title}>{club.title}</h1>
                          <div className={s.texts}>
                            {handleTextCut(club.description, 100)}
                          </div>

                          {/* small boxes */}
                          <div className={s.box1}>
                            <div></div>
                          </div>
                          <div className={s.box2}>
                            <div></div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  )}
                </>
              ))
            ) : (
              <MySkeleton width={"100%"} height={"400px"} />
            )}
          </Swiper>

          <div className={s.navigation_nexprev}>
            <div className={s.navigation}>
              <div className={s.next} id="gallery_next">
                <ArrowLeftOutlined />
              </div>
              <div className={s.prev} id="gallery_prev">
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
            overflowedDes={true}
          />
        </div>

        <div className={s.clubs_category}>
          <section className={s.title}>
            <div className={s.text}>
              <Image
                src={"/assets/trades/polygon.svg"}
                alt="icon"
                width={20}
                height={20}
              />
              <h1>دسته بندی کلوپ‌ها</h1>
            </div>
          </section>

          <section className={s.categories}>
            {clubCategories ? (
              clubCategories.data.map((cat, index) => (
                <div
                  onClick={() => handleSelectedCategory(cat.id)}
                  key={Math.random() * index}
                  className={
                    selectedCategory === cat.id ? s.selected_cat : s.category
                  }
                >
                  {cat.name}

                  {selectedCategory === cat.id && (
                    <div className={s.selected_sign}></div>
                  )}
                </div>
              ))
            ) : (
              <MySkeleton width={"100%"} height={"100%"} />
            )}
          </section>

          <section className={s.clubs}>
            {clubByCategory ? (
              clubByCategory.length !== 0 ? (
                clubByCategory.map((club) => (
                  <Link
                    href={`/club/${club.title}/${club.id}`}
                    className={s.category}
                  >
                    <div className={s.list}>
                      <div className={s.image}>
                        <Image
                          src={url + "/" + club.image_url}
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
                        <div className={s.text}></div>
                      </div>

                      <div className={s.list_item}>
                        <div className={s.title}>
                          <span>
                            <Image
                              src={"/assets/trades/triangle.svg"}
                              alt="icon"
                              width={15}
                              height={15}
                            />
                          </span>
                          <p>{club.title}</p>
                        </div>

                        <div className={s.description}>{club.keywords}</div>
                      </div>

                      <div className={s.list_item}>
                        <div className={s.description}>
                          {handleTextCut(club.description, 100)}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className={s.not_found}>
                  کلوپ با دسته بندی مورد نظر شما پیدا نشد!
                </div>
              )
            ) : (
              clubs.map((club) => (
                <Link
                  href={`/club/${club.title}/${club.id}`}
                  className={s.category}
                >
                  <div className={s.list}>
                    <div className={s.image}>
                      <Image
                        src={url + "/" + club.image_url}
                        alt=""
                        width={300}
                        height={150}
                      />
                    </div>

                    <div key={Math.random()} className={s.list_item}>
                      <div className={s.title}>
                        <span>
                          <Image
                            src={"/assets/trades/triangle.svg"}
                            alt="icon"
                            width={15}
                            height={15}
                          />
                        </span>
                        <p>{club.title}</p>
                      </div>

                      <div className={s.description}>
                        {handleTextCut(club.description, 200)}
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </section>
        </div>

        <div className={s.suggested}>
          <section className={s.title}>
            <div className={s.text}>
              <Image
                src={"/assets/trades/polygon.svg"}
                alt="icon"
                width={20}
                height={20}
              />
              <h1>کلوپ های پیشنهادی</h1>
            </div>

            <div className={s.navigation}>
              <div className={s.prev} id="suggested_prev">
                <ArrowRightOutlined />
              </div>
              <div className={s.next} id="suggested_next">
                <ArrowLeftOutlined />
              </div>
            </div>
          </section>

          <div className={s.suggested_cards}>
            <Swiper
              navigation={{
                prevEl: "#suggested_prev",
                nextEl: "#suggested_next",
                clickabl: true,
              }}
              modules={[Navigation]}
              slidesPerView={"auto"}
              className={s.swiper}
              spaceBetween={15}
            >
              {clubs
                ? clubs.length !== 0
                  ? clubs.map((item, index) => (
                      <SwiperSlide
                        key={Math.random() * index}
                        className={s.slide}
                      >
                        <SuggestCard
                          title={item.title}
                          description={handleTextCut(item.description, 200)}
                          image={url + "/" + item.image_url}
                          time={convertDate(item.created_at)}
                          href={`/club/${item.title}/${item.id}`}
                        />
                      </SwiperSlide>
                    ))
                  : null
                : null}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClubsCategory;
