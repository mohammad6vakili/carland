import Image from "next/image";
import s from "../../../styles/main.module.scss";
import logo from "../../../public/assets/carland-logo-fff.png";
import comment from "../../../public/assets/userDashboard/comment.png";
import { LineIco } from "@/src/assets/icons/selected_page_line";
import { MdSupportAgent } from "react-icons/md";
import { TfiWallet } from "react-icons/tfi";
import { IoMdMegaphone } from "react-icons/io";
import { TbTicket } from "react-icons/tb";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import AdsCard from "../main/AdsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import useHttp from "@/src/axiosConfig/useHttp";
import { useEffect, useRef, useState } from "react";
import { FreeMode, Navigation } from "swiper/modules";
import { Button } from "reactstrap";
import MySkeleton from "../skeleton/Skeleton";
import Link from "next/link";
import { useSelector } from "react-redux";
import { toPersianString } from "@/src/hooks/functions";

const UserDashboard = () => {
  const { httpService } = useHttp(true);
  // const [ads, setAds] = useState(useSelector((state) => state.favList.favList));
  const ads = useSelector((state) => state.favList.favList);
  const [adsPage, setAdsPage] = useState(1);
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const lastAd = useRef();

  const [adsSwiper, setAdsSwiper] = useState(null);

  //request
  // useEffect(() => {
  //   httpService
  //     .get(`myads?page=${adsPage}`)
  //     .then((res) => {
  //       res.status === 200 ? setAds(res.data.data.data) : null;
  //       console.log(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      <div className={s.user_dashboard}>
        <div className={s.comment_banner}>
          <div className={s.text}>
            <div className={s.logo}>
              <Image src={comment} alt="" />
            </div>

            <div className={s.text}>
              <p>از کارلند راضی هستید؟</p>
              <span>با ثبت نظرات خود به از ما حمایت کنید!</span>
            </div>
          </div>

          <div className={s.logo_name}>
            <div className={s.name}>
              <p>کارلند</p>
              <p>CARLAND</p>
            </div>

            <div>
              <LineIco />
            </div>

            <div className={s.logo}>
              <Image src={logo} alt="" />
            </div>
          </div>
        </div>

        <div className={s.boxes}>
          <div className={s.box}>
            <div className={s.text}>
              <div className={s.icon}>
                <TfiWallet />
              </div>
              <span>موجودی کیف پول</span>
            </div>

            <div className={s.value}>
              <p>{userInfo ? toPersianString(userInfo.cash) : null}</p>
              <p>تومان</p>
            </div>
          </div>

          <div className={s.box}>
            <div className={s.text}>
              <div className={s.icon}>
                <IoMdMegaphone />
              </div>
              <span>آگهی‌های من</span>
            </div>

            <div className={s.value}>
              <p>{userInfo ? toPersianString(ads.length) : null}</p>
            </div>
          </div>

          <div className={s.box}>
            <div className={s.text}>
              <div className={s.icon}>
                <TbTicket />
              </div>
              <span>تیکت‌های دریافتی</span>
            </div>

            <div className={s.value}>
              <p>{"۲"}</p>
            </div>
          </div>
        </div>

        <div className={s.myAdds}>
          <div className={s.title}>
            <span>آگهی‌های مورد علاقه من</span>

            <div className={s.navigation}>
              <div className={s.prev} id="swiper_prev">
                <RightOutlined />
              </div>
              <div className={s.next} id="swiper_next">
                <LeftOutlined />
              </div>
            </div>
          </div>

          <div className={s.cards}>
            <Swiper
              freeMode
              slidesPerView={"auto"}
              spaceBetween={20}
              navigation={{
                prevEl: "#swiper_prev",
                nextEl: "#swiper_next",
              }}
              grabCursor
              onSwiper={setAdsSwiper}
              modules={[Navigation, FreeMode]}
              className={s.swiper}
            >
              {ads ? (
                ads.length !== 0 ? (
                  ads.map((item, index) => (
                    <SwiperSlide
                      key={Math.random() * index}
                      className={s.swiper_slide}
                    >
                      <AdsCard
                        image={
                          item.ad.main_image !== "undefined"
                            ? item.ad.main_image
                            : ""
                        }
                        name={item.ad.title}
                        details={{
                          kms: item.ad.kilometers,
                          createYear: item.ad.production_year,
                          color: item.ad.color,
                        }}
                        location={item.ad.location}
                        time={item.ad.created_at}
                        rate={"۴.۵"}
                        status={item.ad.status}
                        id={item.ad.id}
                        ref={index === ads.length ? lastAd : null}
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
                <SwiperSlide
                  key={Math.random() * index}
                  className={s.swiper_slide}
                >
                  <MySkeleton width={"260px"} height={"300px"} />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>

        <div className={s.support_banner}>
          <div className={s.fixedEl1}></div>
          <div className={s.fixedEl2}></div>

          <div className={s.name}>
            <p>CARLAND</p>
            <p>کارلند</p>
          </div>

          <div className={s.images}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="69"
                viewBox="0 0 36 69"
                fill="none"
              >
                <path
                  d="M24.877 0H35.1735L10.7301 34.8136L35.1735 69H24.877C-7.4566 42.3821 -6.88724 27.3092 24.877 0Z"
                  fill="#4A80E8"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="69"
                viewBox="0 0 36 69"
                fill="none"
              >
                <path
                  d="M24.877 0H35.1735L10.7301 34.8136L35.1735 69H24.877C-7.4566 42.3821 -6.88724 27.3092 24.877 0Z"
                  fill="#4A80E8"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="69"
                viewBox="0 0 36 69"
                fill="none"
              >
                <path
                  d="M24.877 0H35.1735L10.7301 34.8136L35.1735 69H24.877C-7.4566 42.3821 -6.88724 27.3092 24.877 0Z"
                  fill="#4A80E8"
                />
              </svg>
            </div>
          </div>

          <div className={s.text}>
            اگر به مشکل برخوردید با پشتیبانی <span>کارلند</span> تماس بگیرید
          </div>

          <div className={s.btn}>
            <Link href={"/userDashboard/supports"}>
              <Button>
                <span>پشتیبانی</span>
                <div>
                  <svg
                    className={s.svg}
                    xmlns="http://www.w3.org/2000/svg"
                    width="57"
                    height="44"
                    viewBox="0 0 57 44"
                    fill="none"
                  >
                    <path
                      d="M0.851562 10C0.851562 4.7533 5.10486 0.5 10.3516 0.5H46.2644C52.8289 0.5 57.415 6.99914 55.2149 13.184L46.6774 37.184C45.3303 40.9707 41.746 43.5 37.7268 43.5H10.3516C5.10485 43.5 0.851562 39.2467 0.851562 34V10Z"
                      fill="white"
                      stroke="#4A80E8"
                    />
                  </svg>
                  <MdSupportAgent className={s.logo} />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
