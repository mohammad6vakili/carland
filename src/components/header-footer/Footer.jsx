import Image from "next/image";
import styles from "../../../styles/header.module.scss";
import { PhoneOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Button } from "reactstrap";
import { InstagramOutlined } from "@ant-design/icons";
import { useWindowSize } from "@uidotdev/usehooks";
import LocationIcon from "@/src/assets/icons/location_icon";
import { useEffect, useState } from "react";
import { formatStringJSON, getLocal } from "@/src/hooks/functions";
import Link from "next/link";

const Footer = () => {
  const size = useWindowSize();
  const [contactData, setContactData] = useState();

  useEffect(() => {
    getLocal("contactData") != "null"
      ? setContactData(JSON.parse(formatStringJSON(getLocal("contactData"))))
      : null;
  }, []);

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
                  src={"/assets/carland-logo-fff.png"}
                  alt=""
                  width={50}
                  height={50}
                  style={{ color: "#fff" }}
                />
              </div>

              <div className={styles.texts}>
                <div>
                  <h1>کارلــــــــــــند</h1>
                </div>
                <div>
                  <h6>{contactData && contactData.title}</h6>
                </div>
                <div>{contactData && contactData.descriptions}</div>
              </div>
            </div>

            {size.width > 1000 ? (
              <div className={styles.contatcs}>
                <div className={styles.phone}>
                  <a href={`tel:${contactData.phone}`}>
                    <Button className={styles.button}>
                      <PhoneOutlined style={{ color: "#fff" }} />
                    </Button>
                  </a>

                  <div className={styles.texts}>
                    <p>{contactData && contactData.phone}</p>
                    <p>خدمات و پشتیبانی 24 ساعته!</p>
                  </div>
                </div>

                <div className={styles.address}>
                  <Button className={styles.button}>
                    <LocationIcon />
                  </Button>
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
                <div className={styles.head}>
                  <div className={styles.blue_box}></div>
                  خدمات مشتریان
                </div>
                <Link href={"/about_us"}>
                  <div className={styles.blue_box}></div>
                  درباره ما
                </Link>
                <Link href={"/offers/trades"}>
                  <div className={styles.blue_box}></div>
                  آگهی ها
                </Link>
                <Link href={"/offers/jobs"}>
                  <div className={styles.blue_box}></div>
                  مشاغل
                </Link>
                <Link href={"/magazines"}>
                  <div className={styles.blue_box}></div>
                  بلاگ
                </Link>
                <Link href={"/contact_us"}>
                  <div className={styles.blue_box}></div>
                  تماس با ما
                </Link>
              </div>

              <div>
                <div className={styles.head}>
                  <div className={styles.blue_box}></div>
                  خدمات فروشندگان
                </div>
                <Link href={"/about_us"}>
                  <div className={styles.blue_box}></div>
                  درباره ما
                </Link>
                <Link href={"/userDashboard/myJobs/create"}>
                  <div className={styles.blue_box}></div>
                  ثبت فروشگاه
                </Link>
                <Link href={"/"}>
                  <div className={styles.blue_box}></div>
                  فروشگاه ها
                </Link>
                <Link href={"/clubs"}>
                  <div className={styles.blue_box}></div>
                  بلاگ
                </Link>
                <Link href={"/contact_us"}>
                  <div className={styles.blue_box}></div>
                  تماس با ما
                </Link>
              </div>
            </div>

            {size.width > 1000 ? (
              <div className={styles.buttons}>
                <Button className={styles.btn}>
                  <InstagramOutlined
                    style={{
                      color: "#fff",
                      opacity: "0.6",
                    }}
                  />
                </Button>
                <Button className={styles.btn}>
                  <InstagramOutlined
                    style={{ color: "#fff", opacity: "0.6" }}
                  />
                </Button>
                <Button className={styles.btn}>
                  <InstagramOutlined
                    style={{ color: "#fff", opacity: "0.6" }}
                  />
                </Button>
                <Button className={styles.btn}>
                  <InstagramOutlined
                    style={{ color: "#fff", opacity: "0.6" }}
                  />
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
                <Button className={styles.btn}>
                  <InstagramOutlined
                    style={{
                      color: "#fff",
                      opacity: "0.6",
                    }}
                  />
                </Button>
                <Button className={styles.btn}>
                  <InstagramOutlined
                    style={{ color: "#fff", opacity: "0.6" }}
                  />
                </Button>
                <Button className={styles.btn}>
                  <InstagramOutlined
                    style={{ color: "#fff", opacity: "0.6" }}
                  />
                </Button>
                <Button className={styles.btn}>
                  <InstagramOutlined
                    style={{ color: "#fff", opacity: "0.6" }}
                  />
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
