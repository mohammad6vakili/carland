import Image from "next/image";
import styles from "../../../styles/header.module.scss";
import { PhoneOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Button } from "reactstrap";
import { InstagramOutlined } from "@ant-design/icons";
import { useWindowSize } from "@uidotdev/usehooks";

const Footer = () => {
  const size = useWindowSize();

  const scrollToHeader = () => {
    const section2 = document.getElementById("header");
    if (section2) {
      section2.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.background}>
          <Image
            src={"/assets/footer-background.png"}
            alt=""
            width={560}
            height={316}
          />
        </div>

        <section className={styles.footer_content}>
          <div className={styles.contact_details}>
            <div className={styles.logo_texts}>
              <div className={styles.logo}>
                <Image
                  src={"/assets/carland-logo-fff.svg"}
                  alt=""
                  width={50}
                  height={50}
                  style={{ color: "#fff" }}
                />
              </div>

              <div className={styles.texts}>
                <div>
                  <h1>کارلــــــــــــند</h1>
                  <p>بازار متمرکز وسایل نقلیه</p>
                </div>
                <p>
                  حفظ ایمنی برق در تمام مراحل ایجاد میشودکه امکان شکل میتواند
                  سرخی ان را از بین ببرد دایان ابران اینجاست که این مشکل را حل
                  کنند.
                </p>
              </div>
            </div>

            {size.width > 1000 ? (
              <div className={styles.contatcs}>
                <div className={styles.phone}>
                  <div className={styles.logo}>
                    <PhoneOutlined />
                  </div>

                  <div className={styles.texts}>
                    <p>
                      <span>021</span> - 45123132
                    </p>
                    <p>خدمات و پشتیبانی 24 ساعته!</p>
                  </div>
                </div>

                <div className={styles.address}>
                  <div className={styles.logo}>
                    <Image
                      src={"/assets/location.svg"}
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className={styles.texts}>
                    <p>تهران خیابان ولیعصر بین کاظمی</p>
                    <p>بین هاشمی و خیابان آذر غربی</p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className={styles.tags}>
            <div className={styles.texts}>
              <div>
                <span className={styles.head}>
                  <div className={styles.blue_box}></div>
                  خدمات مشتریان
                </span>
                <span>
                  <div className={styles.blue_box}></div>
                  درباره ما
                </span>
                <span>
                  <div className={styles.blue_box}></div>
                  فروشگاه
                </span>
                <span>
                  <div className={styles.blue_box}></div>
                  دسته بندی
                </span>
                <span>
                  <div className={styles.blue_box}></div>
                  بلاگ
                </span>
                <span>
                  <div className={styles.blue_box}></div>
                  تماس با ما
                </span>
              </div>
              <div>
                <span className={styles.head}>
                  <div className={styles.blue_box}></div>
                  خدمات مشتریان
                </span>
                <span>
                  <div className={styles.blue_box}></div>
                  درباره ما
                </span>
                <span>
                  <div className={styles.blue_box}></div>
                  فروشگاه
                </span>
                <span>
                  <div className={styles.blue_box}></div>
                  دسته بندی
                </span>
                <span>
                  <div className={styles.blue_box}></div>
                  بلاگ
                </span>
                <span>
                  <div className={styles.blue_box}></div>
                  تماس با ما
                </span>
              </div>
            </div>

            {size.width > 1000 ? (
              <div className={styles.buttons}>
                <Button color="main-primary" className={styles.btn}>
                  <InstagramOutlined
                    style={{ color: "#fff", opacity: "0.6" }}
                  />
                </Button>
                <Button className={styles.btn}>
                  <InstagramOutlined />
                </Button>
                <Button className={styles.btn}>
                  <InstagramOutlined />
                </Button>
                <Button className={styles.btn}>
                  <InstagramOutlined />
                </Button>
              </div>
            ) : (
              <></>
            )}
          </div>

          <div className={styles.trust_links}>
            <div>
              <div className={styles.box}>
                <Image
                  src={"/assets/trust.svg"}
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.box}>
                <Image
                  src={"/assets/trust.svg"}
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
            </div>

            <div>
              <div className={styles.box}>
                <Image
                  src={"/assets/trust.svg"}
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.box}>
                <Image
                  src={"/assets/trust.svg"}
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>

          {size.width > 1000 ? (
            <></>
          ) : (
            <div className={styles.links}>
              <div className={styles.contatcs}>
                <div className={styles.phone}>
                  <div className={styles.logo}>
                    <PhoneOutlined />
                  </div>

                  <div className={styles.texts}>
                    <p>
                      <span>021</span> - 45123132
                    </p>
                    <p>خدمات و پشتیبانی 24 ساعته!</p>
                  </div>
                </div>

                <div className={styles.address}>
                  <div className={styles.logo}>
                    <Image
                      src={"/assets/location.svg"}
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className={styles.texts}>
                    <p>تهران خیابان ولیعصر بین کاظمی</p>
                    <p>بین هاشمی و خیابان آذر غربی</p>
                  </div>
                </div>
              </div>

              <div className={styles.buttons}>
                <Button color="main-primary" className={styles.btn}>
                  <InstagramOutlined
                    style={{ color: "#fff", opacity: "0.6" }}
                  />
                </Button>
                <Button className={styles.btn}>
                  <InstagramOutlined />
                </Button>
                <Button className={styles.btn}>
                  <InstagramOutlined />
                </Button>
                <Button className={styles.btn}>
                  <InstagramOutlined />
                </Button>
              </div>

              <Button
                color="dark"
                style={{
                  color: "#4A80E8",
                  border: "1px solid #142D5D",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={() => scrollToHeader()}
              >
                <a style={{ textDecoration: "none" }} href="#header"></a>
                بازگشت به بالا
                <ArrowUpOutlined />
              </Button>

              <span>
                کلیه حقوق این سرویس (وب سایت و اپلیکیشن‌های موبایل) محفوظ و
                متعلق به شرکت تجارت الکترونیک مهرایرانیان می‌باشد.
              </span>
            </div>
          )}
        </section>

        <section className={styles.develop_tag}>
          {size.width > 1000 ? (
            <span>
              کلیه حقوق این سرویس (وب سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق
              به شرکت تجارت الکترونیک مهرایرانیان می‌باشد.
            </span>
          ) : null}

          <div>
            <span>Made with ❤️ in CarLand R&D Team</span>
            {size.width > 1000 ? (
              <Button
                color="dark"
                style={{
                  color: "#4A80E8",
                  border: "1px solid #142D5D",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={() => scrollToHeader()}
              >
                <a style={{ textDecoration: "none" }} href="#header"></a>
                بازگشت به بالا
                <ArrowUpOutlined />
              </Button>
            ) : null}
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
