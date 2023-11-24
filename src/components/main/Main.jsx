import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../styles/main.module.scss";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { LeftOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Button } from "reactstrap";
import AdsCard from "./AdsCard";

const Main = () => {
  const ads = [
    {
      image: "/assets/main/car-2.png",
      title: "ام وی ام، X55 PRO",
      details: {
        kms: 17000,
        createYear: "1392",
        color: "مشکی",
      },
      location: "کرج",
      time: "2 هفته پیش",
      rate: "4.5",
    },
    {
      image: "/assets/main/car-2.png",
      title: "ام وی ام، X55 PRO",
      details: {
        kms: 17000,
        createYear: "1392",
        color: "مشکی",
      },
      location: "کرج",
      time: "2 هفته پیش",
      rate: "4.5",
    },
    {
      image: "/assets/main/car-2.png",
      title: "ام وی ام، X55 PRO",
      details: {
        kms: 17000,
        createYear: "1392",
        color: "مشکی",
      },
      location: "کرج",
      time: "2 هفته پیش",
      rate: "4.5",
    },
    {
      image: "/assets/main/car-2.png",
      title: "ام وی ام، X55 PRO",
      details: {
        kms: 17000,
        createYear: "1392",
        color: "مشکی",
      },
      location: "کرج",
      time: "2 هفته پیش",
      rate: "4.5",
    },
    {
      image: "/assets/main/car-2.png",
      title: "ام وی ام، X55 PRO",
      details: {
        kms: 17000,
        createYear: "1392",
        color: "مشکی",
      },
      location: "کرج",
      time: "2 هفته پیش",
      rate: "4.5",
    },
    {
      image: "/assets/main/car-2.png",
      title: "ام وی ام، X55 PRO",
      details: {
        kms: 17000,
        createYear: "1392",
        color: "مشکی",
      },
      location: "کرج",
      time: "2 هفته پیش",
      rate: "4.5",
    },
    {
      image: "/assets/main/car-2.png",
      title: "ام وی ام، X55 PRO",
      details: {
        kms: 17000,
        createYear: "1392",
        color: "مشکی",
      },
      location: "کرج",
      time: "2 هفته پیش",
      rate: "4.5",
    },
  ];

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
          <section className={styles.title}>
            <span>دسته بندی خدمات</span>
            <div className={styles.pagination}></div>
          </section>
          <Swiper
            spaceBetween={30}
            navigation={false}
            modules={[Navigation, Pagination]}
            className={styles.mySwiper}
          >
            <SwiperSlide>
              <div className={styles.content}>
                <section className={styles.service_list}>
                  <div className={styles.service}>
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={"/assets/main/service-1.svg"}
                    />
                    <span>بیمه ماشین</span>
                  </div>
                  <div className={styles.service}>
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={"/assets/main/service-1.svg"}
                    />
                    <span>بیمه ماشین</span>
                  </div>
                  <div className={styles.service}>
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={"/assets/main/service-1.svg"}
                    />
                    <span>بیمه ماشین</span>
                  </div>
                  <div className={styles.service}>
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={"/assets/main/service-1.svg"}
                    />
                    <span>بیمه ماشین</span>
                  </div>
                  <div className={styles.service}>
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={"/assets/main/service-1.svg"}
                    />
                    <span>بیمه ماشین</span>
                  </div>
                  <div className={styles.service}>
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={"/assets/main/service-1.svg"}
                    />
                    <span>بیمه ماشین</span>
                  </div>
                  <div className={styles.service}>
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={"/assets/main/service-1.svg"}
                    />
                    <span>بیمه ماشین</span>
                  </div>
                  <div className={styles.service}>
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={"/assets/main/service-1.svg"}
                    />
                    <span>بیمه ماشین</span>
                  </div>
                  <div className={styles.service}>
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={"/assets/main/service-1.svg"}
                    />
                    <span>بیمه ماشین</span>
                  </div>
                  <div className={styles.service}>
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={"/assets/main/service-1.svg"}
                    />
                    <span>بیمه ماشین</span>
                  </div>
                  <div className={styles.service}>
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={"/assets/main/service-1.svg"}
                    />
                    <span>بیمه ماشین</span>
                  </div>
                  <div className={styles.service}>
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={"/assets/main/service-1.svg"}
                    />
                    <span>بیمه ماشین</span>
                  </div>
                </section>

                <section className={styles.down_content}>
                  <div className={styles.speed_ometeres}>
                    <div className={styles.small_speedometer}>
                      <Image
                        alt=""
                        width={350}
                        height={350}
                        src={"/assets/main/service-speed.png"}
                      />
                    </div>
                    <div className={styles.big_speedometer}>
                      <Image
                        alt=""
                        width={350}
                        height={350}
                        src={"/assets/main/service-speed-2.png"}
                      />
                    </div>
                  </div>

                  <div className={styles.texts}>
                    <div className={styles.service_list}>
                      <div className={styles.service}>
                        <Image
                          alt=""
                          width={55}
                          height={55}
                          src={"/assets/main/service-1.svg"}
                        />
                        <span>بیمه ماشین</span>
                      </div>
                      <div className={styles.service}>
                        <Image
                          alt=""
                          width={55}
                          height={55}
                          src={"/assets/main/service-1.svg"}
                        />
                        <span>بیمه ماشین</span>
                      </div>
                      <div className={styles.service}>
                        <Image
                          alt=""
                          width={55}
                          height={55}
                          src={"/assets/main/service-1.svg"}
                        />
                        <span>بیمه ماشین</span>
                      </div>
                    </div>

                    <p>000049km</p>
                  </div>

                  <div className={styles.speed_ometeres}>
                    <div className={styles.big_speedometer}>
                      <Image
                        alt=""
                        width={350}
                        height={350}
                        src={"/assets/main/service-speed-1.png"}
                      />
                    </div>
                    <div className={styles.small_speedometer}>
                      <Image
                        alt=""
                        width={350}
                        height={350}
                        src={"/assets/main/service-speed.png"}
                      />
                    </div>
                  </div>
                </section>
              </div>
            </SwiperSlide>
            <SwiperSlide>slide2</SwiperSlide>
            <SwiperSlide>slide3</SwiperSlide>
          </Swiper>
        </div>

        <div className={styles.ads}>
          <section className={styles.title}>
            <h1>ثبت آگهی</h1>
            <Button>مشاهده همه</Button>
          </section>

          <section className={styles.cards}>
            {ads.map((ad, index) => (
              <AdsCard
                key={Math.random() * index}
                image={ad.image}
                title={ad.title}
                details={ad.details}
                location={ad.location}
                time={ad.time}
                rate={ad.rate}
              />
            ))}
            <div className={styles.opacity}></div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Main;
