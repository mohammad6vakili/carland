import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../styles/main.module.scss";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Button } from "reactstrap";
import { LeftOutlined } from "@ant-design/icons";

const HCarousel = () => {
  const array = [{}, {}, {}, {}];

  return (
    <>
      <div className={styles.head_carousel}>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectFade, Pagination]}
          className={styles.mySwiper}
        >
          {array.map((item, index) => (
            <SwiperSlide key={Math.random() * index} className={styles.content}>
              <Image
                src={"/assets/main/head-carousel-background.svg"}
                alt=""
                width={1000}
                height={386}
                className={styles.background}
              />

              <div className={styles.texts}>
                <h1>کارلند بهترین فروشگاه خودروی ایران</h1>
                <p>
                  میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای
                  آن پیش آمده تمام قطعات رو اینجا پیدا کنید.
                </p>

                <Button className={styles.btn}>
                  لوازم ماشین
                  <div>
                    <LeftOutlined style={{ color: "#fff" }} />
                  </div>
                </Button>
              </div>

              <div className={styles.car}>
                <Image
                  src={"/assets/main/car-1.svg"}
                  alt=""
                  width={386}
                  height={386}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HCarousel;
