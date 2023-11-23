import Image from "next/image";
import styles from "../../../styles/header.module.scss";
import { PhoneOutlined } from "@ant-design/icons";
import { Button } from "reactstrap";
import { InstagramOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.background}>
          <Image
            src={"/assets/footer-background.png"}
            alt=""
            width={1600}
            height={316}
          />
        </div>

        <section className={styles.footer_content}>
          <div className={styles.contact_details}>
            <div className={styles.logo_texts}>
              <div className={styles.logo}>
                <Image
                  src={"/assets/carland-logo.svg"}
                  alt=""
                  width={30}
                  height={30}
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

            <div className={styles.contatcs}>
              <div className={styles.phone}>
                <div className={styles.logo}>
                  <PhoneOutlined />
                </div>
              </div>
              <div className={styles.texts}>
                <p>
                  <span>021</span> - 45123132
                </p>
                <p>خدمات و پشتیبانی 24 ساعته!</p>
              </div>
              <div className={styles.address}>
                <div className={styles.phone}>
                  <div className={styles.logo}>
                    <Image
                      src={"/assets/location.svg"}
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
                <div className={styles.texts}>
                  <p>تهران خیابان ولیعصر بین کاظمی</p>
                  <p>بین هاشمی و خیابان آذر غربی</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.tags}>
            <div className={styles.texts}>
              <div>
                <span className={styles.head}>خدمات مشتریان</span>
                <span>
                  درباره ما <div className={styles.blue_box}></div>
                </span>
                <span>
                  فروشگاه <div className={styles.blue_box}></div>
                </span>
                <span>
                  دسته بندی <div className={styles.blue_box}></div>
                </span>
                <span>
                  بلاگ <div className={styles.blue_box}></div>
                </span>
                <span>
                  تماس با ما <div className={styles.blue_box}></div>
                </span>
              </div>
              <div>
                <span className={styles.head}>خدمات مشتریان</span>
                <span>
                  درباره ما <div className={styles.blue_box}></div>
                </span>
                <span>
                  فروشگاه <div className={styles.blue_box}></div>
                </span>
                <span>
                  دسته بندی <div className={styles.blue_box}></div>
                </span>
                <span>
                  بلاگ <div className={styles.blue_box}></div>
                </span>
                <span>
                  تماس با ما <div className={styles.blue_box}></div>
                </span>
              </div>
            </div>

            <div className={styles.buttons}>
              <Button style={{ background: "none" }}>
                <InstagramOutlined />
              </Button>
              <Button>
                <InstagramOutlined />
              </Button>
              <Button>
                <InstagramOutlined />
              </Button>
              <Button>
                <InstagramOutlined />
              </Button>
            </div>
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
        </section>

        <section className={styles.develop_tag}></section>
      </div>
    </>
  );
};

export default Footer;
