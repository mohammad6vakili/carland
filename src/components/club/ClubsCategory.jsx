import { Swiper, SwiperSlide } from "swiper/react";
import s from "../../../styles/main.module.scss";
import Image from "next/image";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

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

  return (
    <>
      <div className={s.clubs}>
        <section className={s.main_title}>
          <h1>منتخب کلوپ‌ها</h1>
        </section>

        <div className={s.gallery}>
          <Swiper
            spaceBetween={50}
            modules={[FreeMode, Navigation, Thumbs]}
            className={s.mySwiper}
          >
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
            <div>
              <div className={s.next}>
                <LeftOutlined />
              </div>
              <div className={s.prev}>
                <RightOutlined />
              </div>
            </div>

            <div className={s.navigation}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClubsCategory;
