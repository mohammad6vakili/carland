import { Swiper, SwiperSlide } from "swiper/react";
import s from "../../../styles/main.module.scss";
import Image from "next/image";

const Club = () => {
  const photos = [
    { src: "/assets/trades/trade-1.png" },
    { src: "/assets/trades/trade-2.png" },
    { src: "/assets/trades/trade-1.png" },
    { src: "/assets/trades/trade-2.png" },
    { src: "/assets/trades/trade-1.png" },
    { src: "/assets/trades/trade-1.png" },
    { src: "/assets/trades/trade-1.png" },
  ];

  return (
    <>
      <div className={s.club_page}>
        <section className={s.main_title}>
          <h1>منتخب کلوپ‌ها</h1>
        </section>

        <div className={s.gallery}>
          <Swiper className={s.mySwiper}>
            {photos.map(() => (
              <SwiperSlide className={s.slide}>
                <Image
                  src={"/assets/trades/trade-1.png"}
                  alt=""
                  width={700}
                  height={400}
                />
              </SwiperSlide>
            ))}

            <div className={s.descriptions}>
              <div className={s.title}>رونمایی از جدیدترین محصول BMW</div>
              <div className={s.texts}>
                میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای آن
                پیش آمده تمام قطعات رو اینجا پیدا کنید. همچنین برای دانلودسریع و
                بهتر آن میتوانید از لینک مستقیم یا اپ کافه بازا استفاده در
                موبایل خود انجام دهید.
              </div>
              <div className={s.box1}></div>
              <div className={s.box2}></div>
            </div>
          </Swiper>

          <div className={s.navigation_nexprev}></div>
        </div>
      </div>
    </>
  );
};

export default Club;
