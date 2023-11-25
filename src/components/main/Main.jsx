import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../styles/main.module.scss";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Button } from "reactstrap";
import BannersCard from "./BannersCard";
import MarketCard from "./MarketCard";
import HCarousel from "./HCarousel";

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

  const marketItems = [
    {
      image: "/assets/main/market-1.png",
      off: "30%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "30%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "30%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "30%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "30%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "30%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
  ];

  return (
    <>
      <section className={styles.main}>
        <HCarousel />

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
              <BannersCard
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

        <div className={styles.infos}>
          <div className={styles.info}>
            <div className={styles.background}>
              <Image
                src={"/assets/main/infos/info-back-1.svg"}
                alt=""
                width={500}
                height={230}
              />
            </div>
            <section className={styles.texts}>
              <h1>
                همین الان
                <span>فروشنده شو!</span>
              </h1>
              <p>
                میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای آن
                پیش آمده تمام قطعات رو اینجا پیدا کنید.
              </p>

              <Button className={styles.btn}>
                لوازم ماشین
                <div>
                  <LeftOutlined style={{ color: "#fff" }} />
                </div>
              </Button>
            </section>

            <div className={styles.image}>
              <Image
                src={"/assets/main/infos/info-1.png"}
                alt=""
                width={100}
                height={220}
              />
            </div>
          </div>

          <div className={styles.info}>
            <section className={styles.texts}>
              <h1>خرید سایپا ساینا اس</h1>
              <p>
                میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای آن
                پیش آمده تمام قطعات رو اینجا پیدا کنید.
              </p>

              <Button className={styles.btn}>
                خرید ماشین
                <div>
                  <LeftOutlined style={{ color: "#fff" }} />
                </div>
              </Button>
            </section>

            <div className={styles.image}>
              <Image
                src={"/assets/main/infos/info-2.png"}
                alt=""
                width={100}
                height={220}
              />
            </div>
          </div>
        </div>

        <div className={styles.market}>
          <div className={styles.title}>
            <div>
              <h1 className={styles.selected}>بازارچه </h1>
              <div className={styles.line}></div>
              <h1>فروش</h1>
            </div>

            <Button>مشاهده همه</Button>
          </div>

          <div className={styles.market_materials1}>
            {marketItems.map((item, index) => (
              <MarketCard
                key={Math.random() * index}
                image={item.image}
                off={item.off}
                title={item.title}
                description={item.description}
                price={item.price}
                index={index}
              />
            ))}
          </div>

          <div className={styles.market_materials2}>
            {marketItems.map((item, index) => (
              <MarketCard
                key={Math.random() * index}
                image={item.image}
                off={item.off}
                title={item.title}
                description={item.description}
                price={item.price}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className={styles.magazine}>
          <section className={styles.title}>
            <h1>مجله</h1>

            <div className={styles.btns}>
              <Button>
                <RightOutlined style={{ color: "#fff" }} />
              </Button>
              <Button>
                <LeftOutlined style={{ color: "#fff" }} />
              </Button>
            </div>
          </section>

          <div className={styles.content}>
            <div className={styles.solid_pic}>
              <Image
                src={"/assets/main/mag-back.png"}
                alt=""
                width={500}
                height={480}
              />
              <div className={styles.caption}>
                <p>رونمایی از جدیدترین محصول BMW</p>
                <span>
                  میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای
                  آن پیش آمده تمام قطعات رو اینجا پیدا کنید. همچنین برای
                  دانلودسریع و ...
                </span>
              </div>
            </div>

            <div className={styles.mag_options}>
              <section className={styles.option}>
                <div className={styles.pic}>
                  <Image
                    src={"/assets/main/mag-back.png"}
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>

                <div className={styles.texts}>
                  <div>تاریخچه خودروهای قدیمی</div>
                  <p>تاریخچه خودروهای قدیمی را در کارلند دنبال کنید!</p>
                  <div className={styles.refrences}>
                    <span>۱۴۰۲/۰۸/۰۱</span>
                    <Button>
                      مشاهده{" "}
                      <div>
                        <Image
                          src={"/assets/main/see-more.svg"}
                          alt=""
                          width={15}
                          height={15}
                        />
                      </div>
                    </Button>
                  </div>
                </div>
              </section>
              <section className={styles.option}>
                <div className={styles.pic}>
                  <Image
                    src={"/assets/main/mag-back.png"}
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>

                <div className={styles.texts}>
                  <div>تاریخچه خودروهای قدیمی</div>
                  <p>تاریخچه خودروهای قدیمی را در کارلند دنبال کنید!</p>
                  <div className={styles.refrences}>
                    <span>۱۴۰۲/۰۸/۰۱</span>
                    <Button>
                      مشاهده{" "}
                      <div>
                        <Image
                          src={"/assets/main/see-more.svg"}
                          alt=""
                          width={15}
                          height={15}
                        />
                      </div>
                    </Button>
                  </div>
                </div>
              </section>
              <section className={styles.option}>
                <div className={styles.pic}>
                  <Image
                    src={"/assets/main/mag-back.png"}
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>

                <div className={styles.texts}>
                  <div>تاریخچه خودروهای قدیمی</div>
                  <p>تاریخچه خودروهای قدیمی را در کارلند دنبال کنید!</p>
                  <div className={styles.refrences}>
                    <span>۱۴۰۲/۰۸/۰۱</span>
                    <Button>
                      مشاهده{" "}
                      <div>
                        <Image
                          src={"/assets/main/see-more.svg"}
                          alt=""
                          width={15}
                          height={15}
                        />
                      </div>
                    </Button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className={styles.infos}>
          <div className={styles.info}>
            <div className={styles.background}>
              <Image
                src={"/assets/main/infos/info-back-1.svg"}
                alt=""
                width={500}
                height={230}
              />
            </div>
            <section className={styles.texts}>
              <h1>همین الان فروشنده شو!</h1>
              <p>
                میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای آن
                پیش آمده تمام قطعات رو اینجا پیدا کنید.
              </p>

              <Button className={styles.btn}>
                لوازم ماشین
                <div>
                  <LeftOutlined style={{ color: "#fff" }} />
                </div>
              </Button>
            </section>

            <div className={styles.image}>
              <Image
                src={"/assets/main/infos/info-1.png"}
                alt=""
                width={100}
                height={220}
              />
            </div>
          </div>

          <div className={styles.info}>
            <section className={styles.texts}>
              <h1>خرید سایپا ساینا اس</h1>
              <p>
                میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای آن
                پیش آمده تمام قطعات رو اینجا پیدا کنید.
              </p>

              <Button className={styles.btn}>
                خرید ماشین
                <div>
                  <LeftOutlined style={{ color: "#fff" }} />
                </div>
              </Button>
            </section>

            <div className={styles.image}>
              <Image
                src={"/assets/main/infos/info-2.png"}
                alt=""
                width={100}
                height={220}
              />
            </div>
          </div>
        </div>

        <div className={styles.fan_club}>
          <section className={styles.title}>
            <h1>
              کلوب هواداران <div className={styles.line}></div>
            </h1>
          </section>

          <section className={styles.club_list}>
            <div className={styles.box}>
              <Image
                src={"/assets/main/club.svg"}
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className={styles.box}>
              <Image
                src={"/assets/main/club.svg"}
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className={styles.box}>
              <Image
                src={"/assets/main/club.svg"}
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className={styles.box}>
              <Image
                src={"/assets/main/club.svg"}
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className={styles.box}>
              <Image
                src={"/assets/main/club.svg"}
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className={styles.box}>
              <Image
                src={"/assets/main/club.svg"}
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className={styles.box}>
              <Image
                src={"/assets/main/club.svg"}
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className={styles.box}>
              <Image
                src={"/assets/main/club.svg"}
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className={styles.box}>
              <Image
                src={"/assets/main/club.svg"}
                alt=""
                width={50}
                height={50}
              />
            </div>
          </section>
        </div>

        <div className={styles.mags_link}>
          <section className={styles.mag}>
            <div className={styles.pic}>
              <Image
                src={"/assets/main/mag-back.png"}
                alt=""
                width={50}
                height={50}
              />
            </div>

            <div className={styles.texts}>
              <h1>تاریخچه خودروهای قدیمی</h1>
              <div className={styles.refrences}>
                <div>
                  <div className={styles.profile}></div>
                  <span>مهزیار رازه </span>
                </div>
                <Button>
                  مشاهده{" "}
                  <div>
                    <Image
                      src={"/assets/main/see-more.svg"}
                      alt=""
                      width={15}
                      height={15}
                    />
                  </div>
                </Button>
              </div>
            </div>
          </section>
          <section className={styles.mag}>
            <div className={styles.pic}>
              <Image
                src={"/assets/main/mag-back.png"}
                alt=""
                width={50}
                height={50}
              />
            </div>

            <div className={styles.texts}>
              <h1>تاریخچه خودروهای قدیمی</h1>
              <div className={styles.refrences}>
                <div>
                  <div className={styles.profile}></div>
                  <span>مهزیار رازه </span>
                </div>
                <Button>
                  مشاهده{" "}
                  <div>
                    <Image
                      src={"/assets/main/see-more.svg"}
                      alt=""
                      width={15}
                      height={15}
                    />
                  </div>
                </Button>
              </div>
            </div>
          </section>
          <section className={styles.mag}>
            <div className={styles.pic}>
              <Image
                src={"/assets/main/mag-back.png"}
                alt=""
                width={50}
                height={50}
              />
            </div>

            <div className={styles.texts}>
              <h1>تاریخچه خودروهای قدیمی</h1>
              <div className={styles.refrences}>
                <div>
                  <div className={styles.profile}></div>
                  <span>مهزیار رازه </span>
                </div>
                <Button>
                  مشاهده{" "}
                  <div>
                    <Image
                      src={"/assets/main/see-more.svg"}
                      alt=""
                      width={15}
                      height={15}
                    />
                  </div>
                </Button>
              </div>
            </div>
          </section>
          <section className={styles.mag}>
            <div className={styles.pic}>
              <Image
                src={"/assets/main/mag-back.png"}
                alt=""
                width={50}
                height={50}
              />
            </div>

            <div className={styles.texts}>
              <h1>تاریخچه خودروهای قدیمی</h1>
              <div className={styles.refrences}>
                <div>
                  <div className={styles.profile}></div>
                  <span>مهزیار رازه </span>
                </div>
                <Button>
                  مشاهده{" "}
                  <div>
                    <Image
                      src={"/assets/main/see-more.svg"}
                      alt=""
                      width={15}
                      height={15}
                    />
                  </div>
                </Button>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.install_app}>
          <div className={styles.texts}>
            <div>
              <div className={styles.title}>
                دانلود اپلیکیشن
                <div>کارلند سرزمین خودرو</div>
              </div>
              <p>
                میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای آن
                پیش آمده تمام قطعات رو اینجا پیدا کنید. همچنین برای دانلود سریع
                و بهتر آن میتوانید از لینک مستقیم یا اپ کافه بازا استفاده در
                موبایل خود انجام دهید.
              </p>
            </div>

            <div className={styles.btns}>
              <Button color="none">بازار</Button>
              <Button color="none">بازار</Button>
              <Button color="none">بازار</Button>
              <Button color="none">بازار</Button>
              <Button color="none">بازار</Button>
            </div>
          </div>

          <div className={styles.pics}>
            <Image
              src={"/assets/main/install-app1.png"}
              alt=""
              width={300}
              height={600}
            />
            <Image
              src={"/assets/main/install-app2.png"}
              alt=""
              width={300}
              height={600}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
