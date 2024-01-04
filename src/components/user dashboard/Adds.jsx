import {
  ArrowLeftOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import s from "../../../styles/main.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import AdsCard from "../main/AdsCard";
import { FreeMode, Navigation } from "swiper/modules";
import { Button } from "reactstrap";
import Image from "next/image";
import addsBanner from "../../../public/assets/userDashboard/add-banner.png";
import { useEffect, useRef, useState } from "react";
import MySkeleton from "../skeleton/Skeleton";
import useHttp from "@/src/axiosConfig/useHttp";
import Link from "next/link";

const UserData = () => {
  const [myAds, setMyAds] = useState(null);
  const { httpService } = useHttp();

  //request
  useEffect(() => {
    httpService
      .get("myads")
      .then((res) => {
        res.status === 200 ? setMyAds(res.data.data) : null;
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
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

  return (
    <>
      <div className={s.adds}>
        <section className={s.myAdds}>
          <div className={s.title}>
            <span>آگهی‌های من</span>

            <section className={s.navigation}>
              <div ref={prevAdRef} className={s.prev}>
                <RightOutlined />
              </div>
              <div ref={nextAdRef} className={s.next}>
                <LeftOutlined />
              </div>
            </section>
          </div>

          <div className={s.cards}>
            <Swiper
              spaceBetween={35}
              slidesPerView={"auto"}
              freeMode
              navigation={{
                prevEl: prevAdRef?.current,
                nextEl: nextAdRef?.current,
              }}
              onSwiper={setAdsSwiper}
              modules={[Navigation, FreeMode]}
            >
              {myAds ? (
                myAds.length !== 0 ? (
                  myAds.map((item, index) => (
                    <SwiperSlide
                      key={Math.random() * index}
                      className={s.swiper_slide}
                    >
                      <AdsCard
                        image={item.main_image}
                        name={item.title}
                        details={{
                          kms: item.kilometers,
                          createYear: item.production_year,
                          color: item.color,
                        }}
                        location={item.location}
                        time={item.created_at}
                        rate={"۴.۵"}
                        id={item.id}
                        myAdds={true}
                      />
                    </SwiperSlide>
                  ))
                ) : (
                  <SwiperSlide
                    style={{
                      margin: "2rem auto",
                      width: "100%",
                      height: "200px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <span>هیچ اگهی وجود ندارد!</span>
                  </SwiperSlide>
                )
              ) : (
                <>
                  <SwiperSlide key={Math.random()} className={s.swiper_slide}>
                    <MySkeleton width={"260px"} height={"300px"} />
                  </SwiperSlide>
                </>
              )}
            </Swiper>
          </div>
        </section>

        <section className={s.banner}>
          <section className={s.text}>
            <p className={s.title}>
              ثبت آگهی در <span>کارلند</span>
            </p>

            <div className={s.box}>
              <div className={s.line_box}>
                <section className={s.square}></section>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="42"
                  viewBox="0 0 30 42"
                  fill="none"
                >
                  <path
                    d="M29 0V2.6506C29 8.17345 24.5228 12.6506 19 12.6506H11C5.47715 12.6506 1 17.1278 1 22.6506V42"
                    stroke="#757575"
                  />
                </svg>
              </div>
              اگر هنوز آگهی ثبت نکردی میتونی روی دکمه زیر کلیک کنی تا دیده بشی!
            </div>

            <div className={s.link}>
              <section className={s.lines1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="29"
                  viewBox="0 0 51 29"
                  fill="none"
                >
                  <path
                    d="M11 14H50"
                    stroke="url(#paint0_linear_1645_9777)"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11 28H30"
                    stroke="url(#paint1_linear_1645_9777)"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1 1H17"
                    stroke="url(#paint2_linear_1645_9777)"
                    stroke-linecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1645_9777"
                      x1="50"
                      y1="14.5001"
                      x2="11"
                      y2="14.5001"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#4A80E8" />
                      <stop offset="1" stop-color="#4A80E8" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1645_9777"
                      x1="30"
                      y1="28.5001"
                      x2="11"
                      y2="28.5001"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#4A80E8" />
                      <stop offset="1" stop-color="#4A80E8" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_1645_9777"
                      x1="17"
                      y1="1.50008"
                      x2="1"
                      y2="1.50008"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#4A80E8" />
                      <stop offset="1" stop-color="#4A80E8" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </section>

              <section className={s.btn}>
                <Link href={"/userDashboard/myAdds/create"}>
                  <Button>
                    <span>ثبت آگهی</span>

                    <div>
                      <svg
                        className={s.svg}
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="44"
                        viewBox="0 0 56 44"
                        fill="none"
                      >
                        <path
                          d="M0.5 10C0.5 4.7533 4.7533 0.5 10 0.5H45.3749C51.9271 0.5 56.5122 6.97653 54.3352 13.1565L45.8807 37.1565C44.5417 40.9574 40.9503 43.5 36.9204 43.5H10C4.7533 43.5 0.5 39.2467 0.5 34V10Z"
                          fill="white"
                          stroke="#4A80E8"
                        />
                      </svg>

                      <ArrowLeftOutlined className={s.arrow} />
                    </div>
                  </Button>
                </Link>
              </section>

              <section className={s.lines2}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="29"
                  viewBox="0 0 51 29"
                  fill="none"
                >
                  <path
                    d="M40 15L1 15"
                    stroke="url(#paint0_linear_1645_9781)"
                    stroke-linecap="round"
                  />
                  <path
                    d="M40 1L21 0.999998"
                    stroke="url(#paint1_linear_1645_9781)"
                    stroke-linecap="round"
                  />
                  <path
                    d="M50 28L34 28"
                    stroke="url(#paint2_linear_1645_9781)"
                    stroke-linecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1645_9781"
                      x1="1"
                      y1="14.4999"
                      x2="40"
                      y2="14.4999"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#4A80E8" />
                      <stop offset="1" stop-color="#4A80E8" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1645_9781"
                      x1="21"
                      y1="0.499915"
                      x2="40"
                      y2="0.499917"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#4A80E8" />
                      <stop offset="1" stop-color="#4A80E8" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_1645_9781"
                      x1="34"
                      y1="27.4999"
                      x2="50"
                      y2="27.4999"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#4A80E8" />
                      <stop offset="1" stop-color="#4A80E8" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </section>
            </div>
          </section>

          <div className={s.solid_pic}>
            <Image src={addsBanner} alt="" />
          </div>
        </section>
      </div>
    </>
  );
};

export default UserData;
