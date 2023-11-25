import s from "../../../styles/main.module.scss";
import MarketCard from "../main/MarketCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Button } from "reactstrap";
import { LeftOutlined } from "@ant-design/icons";
import { useState } from "react";

const Banners = () => {
  const [cSelected, setCSelected] = useState([]);

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };

  return (
    <div className={s.banners}>
      <div className={s.head_carousel}>
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
          className={s.mySwiper}
        >
          <SwiperSlide>
            <Image
              src={"/assets/main/head-carousel-background.svg"}
              alt=""
              width={1000}
              height={386}
              className={s.background}
            />

            <div className={s.content}>
              <div className={s.texts}>
                <h1>کارلند بهترین فروشگاه خودروی ایران</h1>
                <p>
                  میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای
                  آن پیش آمده تمام قطعات رو اینجا پیدا کنید.
                </p>

                <Button className={s.btn}>
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
                className={s.car}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={"/assets/main/head-carousel-background.svg"}
              alt=""
              width={1000}
              height={386}
              className={s.background}
            />

            <div className={s.content}>
              <div className={s.texts}>
                <h1>کارلند بهترین فروشگاه خودروی ایران</h1>
                <p>
                  میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای
                  آن پیش آمده تمام قطعات رو اینجا پیدا کنید.
                </p>

                <Button className={s.btn}>
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
                className={s.car}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={"/assets/main/head-carousel-background.svg"}
              alt=""
              width={1000}
              height={386}
              className={s.background}
            />

            <div className={s.content}>
              <div className={s.texts}>
                <h1>کارلند بهترین فروشگاه خودروی ایران</h1>
                <p>
                  میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای
                  آن پیش آمده تمام قطعات رو اینجا پیدا کنید.
                </p>

                <Button className={s.btn}>
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
                className={s.car}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={"/assets/main/head-carousel-background.svg"}
              alt=""
              width={1000}
              height={386}
              className={s.background}
            />

            <div className={s.content}>
              <div className={s.texts}>
                <h1>کارلند بهترین فروشگاه خودروی ایران</h1>
                <p>
                  میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای
                  آن پیش آمده تمام قطعات رو اینجا پیدا کنید.
                </p>

                <Button className={s.btn}>
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
                className={s.car}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={"/assets/main/head-carousel-background.svg"}
              alt=""
              width={1000}
              height={386}
              className={s.background}
            />

            <div className={s.content}>
              <div className={s.texts}>
                <h1>کارلند بهترین فروشگاه خودروی ایران</h1>
                <p>
                  میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای
                  آن پیش آمده تمام قطعات رو اینجا پیدا کنید.
                </p>

                <Button className={s.btn}>
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
                className={s.car}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={"/assets/main/head-carousel-background.svg"}
              alt=""
              width={1000}
              height={386}
              className={s.background}
            />

            <div className={s.content}>
              <div className={s.texts}>
                <h1>کارلند بهترین فروشگاه خودروی ایران</h1>
                <p>
                  میتوانید به راحتی خودروی خود را خریداری کنید و اگر مشکلی برای
                  آن پیش آمده تمام قطعات رو اینجا پیدا کنید.
                </p>

                <Button className={s.btn}>
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
                className={s.car}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <section className={s.market}>
        <div className={s.market_filters}>
          <div className={s.categories}>
            <div className={s.title}>دسته بندی</div>
            <div className={s.list}>
              <section className={s.list_item}>خودرو</section>
              <section className={s.list_item}>خودرو</section>
              <section className={s.list_item}>خودرو</section>
              <section className={s.list_item}>خودرو</section>
            </div>
          </div>

          <div className={s.brands}>
            <div className={s.title}> برندها</div>
            <div className={s.list}>
              <section className={s.list_item}>خودرو</section>
              <section className={s.list_item}>خودرو</section>
              <section className={s.list_item}>خودرو</section>
              <section className={s.list_item}>خودرو</section>
            </div>
          </div>

          <div className={s.year}>
            <div className={s.title}>سال</div>
            <div className={s.list}>
              <div className={s.list_item}>
                <Button
                  onClick={() => onCheckboxBtnClick(2)}
                  active={cSelected.includes(2)}
                ></Button>{" "}
                1402
              </div>
              <div className={s.list_item}>
                <Button
                  onClick={() => onCheckboxBtnClick(2)}
                  active={cSelected.includes(2)}
                ></Button>{" "}
                1402
              </div>
              <div className={s.list_item}>
                <Button
                  onClick={() => onCheckboxBtnClick(2)}
                  active={cSelected.includes(2)}
                ></Button>{" "}
                1402
              </div>
            </div>
          </div>

          <div className={s.price_range}>
            <div className={s.title}>محدوده قیمت</div>
            <div className={s.range}>
              <span className={s.from}>۲۰,۶۰۰,۰۰۰ تومان</span>
              <span className={s.to}>۲۰,۶۰۰,۰۰۰ تومان</span>
            </div>
          </div>

          <div className={s.color_select}>
            <div className={s.title}>انتخاب رنگ</div>
            <div className={s.color_list}>
              <div className={s.color_box}></div>
            </div>
          </div>
        </div>

        <div className={s.market_materials1}>
          <MarketCard
            // key={Math.random * index}
            image={"/assets/main/club.png"}
            off={"item.off"}
            title={"item.title"}
            description={"item.description"}
            price={"item.price"}
          />
        </div>
      </section>
    </div>
  );
};

export default Banners;
