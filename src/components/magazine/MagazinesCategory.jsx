import { Swiper, SwiperSlide } from "swiper/react";
import s from "../../../styles/main.module.scss";
import Image from "next/image";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import CustomPagination from "./CustomPagination";
import MainPageMagazine from "../main/magazines/MainPageMagazine";
import useHttp, { url } from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";
import SuggestCard from "../suggest card";
import MySkeleton from "../skeleton/Skeleton";
import Link from "next/link";
import { handleTextCut } from "@/src/hooks/functions";

const MagazineCategory = ({ magsCategories }) => {
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
  const [magazines, setMagazines] = useState([]);
  const [magazinesByCat, setMagazinesByCat] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const { httpService } = useHttp();

  //handle requests
  useEffect(() => {
    httpService
      .get("magazines")
      .then((res) => {
        res.status === 200 ? setMagazines(res.data.data) : null;
        setLoading(false);
      })
      .catch((err) => {
        toast.error("خطا در ارتباط با سرور");
      });
  }, []);

  useEffect(() => {
    selectedCategory
      ? httpService
          .get(`magazines/${selectedCategory}`)
          .then((res) => {
            res.status === 200 ? setMagazinesByCat(res.data.data) : null;
          })
          .catch((err) => {
            toast.error(
              "مشکلی در پیدا کردن مجلات با دسته بندی مورد نظر بوجود امد"
            );
          })
      : null;
  }, [selectedCategory]);

  //swiper
  const [adsSwiper, setAdsSwiper] = useState();
  const [categorySwiper, setCategorySwiper] = useState();

  const MyPaginationBullet = ({ isActive }) => (
    <span className={isActive ? "active" : ""}>
      {isActive && "•"}
      {!isActive && "○"}
    </span>
  );

  const handleSelectedCategory = (id) => {
    selectedCategory === id
      ? (setMagazinesByCat(null), setSelectedCategory(null))
      : setSelectedCategory(id);
  };

  return (
    <>
      <div className={s.magazines}>
        <section className={s.main_title}>
          <h1>منتخب مجلات</h1>
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
            onSwiper={setAdsSwiper}
          >
            {photos.map((item, index) => (
              <SwiperSlide key={Math.random() * index} className={s.slide}>
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
              <h1>مجله های برتر</h1>
            </div>
          </section>

          <MainPageMagazine
            magazines={magazines}
            method={"magazine"}
            overflowedDes={true}
            header={false}
          />
        </div>

        <div className={s.mags_category}>
          <section className={s.title}>
            <div className={s.text}>
              <Image
                src={"/assets/trades/polygon.svg"}
                alt=""
                width={20}
                height={20}
              />
              <h1>دسته بندی مجلات</h1>
            </div>
          </section>

          <section className={s.categories}>
            {magsCategories ? (
              magsCategories.map((cat, index) => (
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

          <section className={s.magazines}>
            {magazinesByCat !== null ? (
              magazinesByCat.length !== 0 ? (
                magazinesByCat.map((cat) => (
                  <Link
                    href={`/magazine/${cat.id}/${cat.title}`}
                    className={s.magazine}
                    key={cat.id}
                  >
                    <div className={s.list}>
                      <section className={s.image}>
                        <Image
                          src={url + "/" + cat.image_url}
                          alt=""
                          width={300}
                          height={150}
                        />

                        <div className={s.div}>{cat.title}</div>
                      </section>

                      {categories.map((item, index) => (
                        <div key={Math.random()} className={s.list_item}>
                          <section className={s.title}>
                            <span>
                              <Image
                                src={"/assets/trades/triangle.svg"}
                                alt=""
                                width={15}
                                height={15}
                              />
                            </span>
                            <p>تاریخچه خودروهای مدرن</p>
                          </section>

                          <section className={s.description}>
                            تاریخچه خودروهای قدیمی را در کارلند دنبال کنید!
                          </section>
                        </div>
                      ))}
                    </div>
                  </Link>
                ))
              ) : (
                <div className={s.not_found}>
                  مجله ای با دسته بندی مورد نظر شما پیدا نشد!
                </div>
              )
            ) : (
              magazines.map((mag) => (
                <div className={s.magazine}>
                  <div className={s.list}>
                    <div className={s.image}>
                      <Image
                        src={"/assets/magazine/latest-club.png"}
                        alt=""
                        width={300}
                        height={150}
                      />

                      <div className={s.div}>تازه‌ها</div>
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
              ))
            )}
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
              <h1>مجله های پیشنهادی</h1>
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
              }}
              modules={[Navigation]}
              slidesPerView={"auto"}
              className={s.swiper}
              spaceBetween={15}
              onSwiper={setCategorySwiper}
            >
              {magazines
                ? magazines.length !== 0 &&
                  magazines.map((item, index) => (
                    <SwiperSlide
                      key={Math.random() * index}
                      className={s.slide}
                    >
                      <SuggestCard
                        description={handleTextCut(item.description, 200)}
                        image={url + "/" + item.image_url}
                        time={"۱۴۰۲/۰۸/۰۱"}
                        title={"ام وی ام، X55 PRO"}
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
};

export default MagazineCategory;
