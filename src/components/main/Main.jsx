import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../styles/main.module.scss";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { LeftOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Button } from "reactstrap";

const Main = () => {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.head_carousel}>
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={false}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            className={styles.mySwiper}
          >
            <SwiperSlide>
              <Image
                src={"/assets/main/head-carousel-background.svg"}
                alt=""
                width={1000}
                height={386}
                className={styles.background}
              />

              <div className={styles.content}>
                <div className={styles.texts}>
                  <h1>کارلند بهترین فروشگاه خودروی ایران</h1>
                  <p>
                    میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی
                    برای آن پیش آمده تمام قطعات رو اینجا پیدا کنید.
                  </p>

                  <Button className={styles.btn}>
                    لوازم ماشین
                    <div>
                      <LeftOutlined style={{ color: "#fff" }} />
                    </div>
                  </Button>
                </div>

                <Image
                  src={"/assets/main/car-1.svg"}
                  alt=""
                  width={386}
                  height={386}
                  className={styles.car}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={"/assets/main/head-carousel-background.svg"}
                alt=""
                width={1000}
                height={386}
                className={styles.background}
              />

              <div className={styles.content}>
                <div className={styles.texts}>
                  <h1>کارلند بهترین فروشگاه خودروی ایران</h1>
                  <p>
                    میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی
                    برای آن پیش آمده تمام قطعات رو اینجا پیدا کنید.
                  </p>

                  <Button className={styles.btn}>
                    لوازم ماشین
                    <div>
                      <LeftOutlined style={{ color: "#fff" }} />
                    </div>
                  </Button>
                </div>

                <Image
                  src={"/assets/main/car-1.svg"}
                  alt=""
                  width={386}
                  height={386}
                  className={styles.car}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={"/assets/main/head-carousel-background.svg"}
                alt=""
                width={1000}
                height={386}
                className={styles.background}
              />

              <div className={styles.content}>
                <div className={styles.texts}>
                  <h1>کارلند بهترین فروشگاه خودروی ایران</h1>
                  <p>
                    میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی
                    برای آن پیش آمده تمام قطعات رو اینجا پیدا کنید.
                  </p>

                  <Button className={styles.btn}>
                    لوازم ماشین
                    <div>
                      <LeftOutlined style={{ color: "#fff" }} />
                    </div>
                  </Button>
                </div>

                <Image
                  src={"/assets/main/car-1.svg"}
                  alt=""
                  width={386}
                  height={386}
                  className={styles.car}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={"/assets/main/head-carousel-background.svg"}
                alt=""
                width={1000}
                height={386}
                className={styles.background}
              />

              <div className={styles.content}>
                <div className={styles.texts}>
                  <h1>کارلند بهترین فروشگاه خودروی ایران</h1>
                  <p>
                    میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی
                    برای آن پیش آمده تمام قطعات رو اینجا پیدا کنید.
                  </p>

                  <Button className={styles.btn}>
                    لوازم ماشین
                    <div>
                      <LeftOutlined style={{ color: "#fff" }} />
                    </div>
                  </Button>
                </div>

                <Image
                  src={"/assets/main/car-1.svg"}
                  alt=""
                  width={386}
                  height={386}
                  className={styles.car}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={"/assets/main/head-carousel-background.svg"}
                alt=""
                width={1000}
                height={386}
                className={styles.background}
              />

              <div className={styles.content}>
                <div className={styles.texts}>
                  <h1>کارلند بهترین فروشگاه خودروی ایران</h1>
                  <p>
                    میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی
                    برای آن پیش آمده تمام قطعات رو اینجا پیدا کنید.
                  </p>

                  <Button className={styles.btn}>
                    لوازم ماشین
                    <div>
                      <LeftOutlined style={{ color: "#fff" }} />
                    </div>
                  </Button>
                </div>

                <Image
                  src={"/assets/main/car-1.svg"}
                  alt=""
                  width={386}
                  height={386}
                  className={styles.car}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={"/assets/main/head-carousel-background.svg"}
                alt=""
                width={1000}
                height={386}
                className={styles.background}
              />

              <div className={styles.content}>
                <div className={styles.texts}>
                  <h1>کارلند بهترین فروشگاه خودروی ایران</h1>
                  <p>
                    میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی
                    برای آن پیش آمده تمام قطعات رو اینجا پیدا کنید.
                  </p>

                  <Button className={styles.btn}>
                    لوازم ماشین
                    <div>
                      <LeftOutlined style={{ color: "#fff" }} />
                    </div>
                  </Button>
                </div>

                <Image
                  src={"/assets/main/car-1.svg"}
                  alt=""
                  width={386}
                  height={386}
                  className={styles.car}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={styles.service_category}>
          <Swiper
            spaceBetween={30}
            navigation={false}
            pagination={{
              clickable: true,
            }}
            modules={[, Navigation, Pagination]}
          >
            <SwiperSlide>slide1</SwiperSlide>
            <SwiperSlide>slide2</SwiperSlide>
            <SwiperSlide>slide3</SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Main;
