import Image from "next/image";
import styles from "../../../styles/header.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "reactstrap";
import Link from "next/link";
import { useWindowSize } from "@uidotdev/usehooks";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const size = useWindowSize();

  return (
    <>
      <div className={styles.header}>
        <section className={styles.background}>
          <Image
            src={"/assets/header-background.png"}
            alt=""
            width={500}
            height={75}
          />
        </section>

        <section className={styles.start}>
          <span>ثبت آگهی</span>
          <Button style={{ background: "#FED30B" }}>
            <Image
              src={"/assets/main/shield.svg"}
              alt=""
              width={15}
              height={15}
            />{" "}
            رایگان شروع کنید{" "}
          </Button>
        </section>

        <section className={styles.header_content}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              height: "100%",
            }}
          >
            <div
              onClick={() => {
                router.push("/");
              }}
              className={styles.symbol}
            >
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

            {size.width > 1000 ? (
              <div className={styles.routes}>
                <span
                  style={{ color: "#000", cursor: "auto" }}
                  className={styles.category}
                >
                  <Image
                    src={"/assets/category.svg"}
                    alt="logo"
                    width={15}
                    height={15}
                  />
                  دسته بندی
                </span>

                <Link href={"/market"}>
                  <span
                    className={pathname === "/market" ? styles.selected : ""}
                  >
                    {" "}
                    بازارچه
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                  </span>
                </Link>
                <Link href={"/offers"}>
                  <span
                    className={
                      pathname?.includes("/offers") ? styles.selected : ""
                    }
                  >
                    {" "}
                    خرید و فروش
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                  </span>
                </Link>
                <Link href={"/club"}>
                  <span className={pathname === "/club" ? styles.selected : ""}>
                    {" "}
                    کلوپ
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                  </span>
                </Link>
                <Link href={"/magazine"}>
                  <span
                    className={pathname === "/magazine" ? styles.selected : ""}
                  >
                    {" "}
                    مجله
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                  </span>
                </Link>
                <Link href={"/about_us"}>
                  <span
                    className={pathname === "/about_us" ? styles.selected : ""}
                  >
                    {" "}
                    درباره ما
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                  </span>
                </Link>
              </div>
            ) : (
              <></>
            )}
          </div>

          <div className={styles.account_info}>
            <Button className={styles.shop} color="#EAEDF3">
              <Image
                src={"/assets/main/shop.png"}
                alt="user"
                width={30}
                height={30}
              />
              <div className={styles.badge}>۳</div>
            </Button>

            <Button className={styles.login} color="#142D5D">
              ثبت نام / ورود <div className={styles.line}></div>{" "}
              <Image
                src={"/assets/user-icon.svg"}
                alt="user"
                width={24}
                height={24}
              />
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
