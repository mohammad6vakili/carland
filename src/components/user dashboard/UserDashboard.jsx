import Image from "next/image";
import s from "../../../styles/main.module.scss";
import logo from "../../../public/assets/carland-logo-fff.svg";
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
import { Navigation } from "swiper/modules";
import { Button } from "reactstrap";

const UserDashboard = ({ myAdds }) => {
  const { httpService } = useHttp();
  const ads = [{}, {}, {}, {}, {}];
  console.log(myAdds);

  const nextAdRef = useRef();
  const prevAdRef = useRef();
  const [adsSwiper, setAdsSwiper] = useState();
  useEffect(() => {
    if (adsSwiper) {
      adsSwiper.params.navigation.prevEl = prevAdRef.current;
      adsSwiper.params.navigation.nextEl = nextAdRef.current;
      adsSwiper.navigation.init();
      adsSwiper.navigation.update();
    }
  }, [adsSwiper]);

  // useEffect(() => {
  //   httpService
  //     .get("myads")
  //     .then((res) => {
  //       res.status === 200 ? console.log(res.data) : null;
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
              <p>{"۵۰۰,۰۰۰"}</p>
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
              <p>{"۳"}</p>
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
            <span>آگهی‌های من</span>

            <div className={s.navigation}>
              <div ref={prevAdRef} className={s.prev}>
                <RightOutlined />
              </div>
              <div ref={nextAdRef} className={s.next}>
                <LeftOutlined />
              </div>
            </div>
          </div>

          <div className={s.cards}>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={20}
              navigation={{
                prevEl: prevAdRef?.current,
                nextEl: nextAdRef?.current,
              }}
              grabCursor
              onSwiper={setAdsSwiper}
              modules={[Navigation]}
              className={s.swiper}
            >
              {ads.map((item, index) => (
                <SwiperSlide
                  key={Math.random() * index}
                  className={s.swiper_slide}
                >
                  <AdsCard
                    image={""}
                    name={"ام وی ام، X55 PRO"}
                    details={{
                      kms: "",
                      createYear: "",
                      color: "",
                    }}
                    location={"۴.۵"}
                    time={""}
                    rate={"۴.۵"}
                    id={"۴.۵"}
                  />
                </SwiperSlide>
              ))}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
