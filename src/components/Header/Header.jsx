"use client";
import Image from "next/image";
import styles from "../../../styles/header.module.scss";
import { useRouter } from "next/navigation";
import { Button, ConfigProvider } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Header = () => {
  const router = useRouter();

  return (
    <>
      {/* <ConfigProvider> */}
      {/* <Button>hello</Button> */}
      <div className={styles.header}>
        <section className={styles.background}>
          <Image
            src={"/assets/header-background.png"}
            alt=""
            width={500}
            height={75}
          />
        </section>

        <section className={styles.content}>
          <span>ثبت آگهی</span>
          <button>رایگان شروع کنید</button>
        </section>

        <section className={styles.header_content}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div className={styles.symbol}>
              <section className={styles.logo}>
                <Image
                  src={"/assets/carland-logo.svg"}
                  alt="logo"
                  width={50}
                  height={50}
                />
              </section>
              <section className={styles.name}>
                <p>کارلند</p>
                <p>CARLAND</p>
              </section>
            </div>

            <div className={styles.routes}>
              <span className={styles.category}>
                {" "}
                <Image
                  src={"/assets/category.svg"}
                  alt="logo"
                  width={15}
                  height={15}
                />
                دسته بندی
              </span>

              <span>بازارچه</span>
              <span>خرید و فروش</span>
              <span>کلوپ</span>
              <span>مجله</span>
              <span>درباره ما</span>
            </div>
          </div>

          <div className={styles.account_info}>
            <button>
              <ShoppingCartOutlined />
            </button>
            <button>
              ثبت نام / ورود <div className={styles.line}></div>{" "}
              <Image
                src={"/assets/user-icon.svg"}
                alt="user"
                width={20}
                height={20}
              />
            </button>
          </div>
        </section>
      </div>
      {/* </ConfigProvider> `*/}
    </>
  );
};

export default Header;
