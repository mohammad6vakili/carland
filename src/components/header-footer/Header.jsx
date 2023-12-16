import Image from "next/image";
import styles from "../../../styles/header.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "reactstrap";
import Link from "next/link";
import { useWindowSize } from "@uidotdev/usehooks";
import SelectedPageLine from "@/src/assets/icons/selected_page_line";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setIsAuth } from "@/src/app/slices/isAuthSlice";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const size = useWindowSize();
  const isAuth = useSelector((state) => state.isAuth.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(isAuth);
    dispatch(setIsAuth(true));
  }, [isAuth]);

  return (
    <>
      <div id="header" className={styles.header}>
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
              width={24}
              height={24}
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
            <div onClick={() => router.push("/")} className={styles.symbol}>
              <section className={styles.logo}>
                <Image
                  src={"/assets/carland-logo.svg"}
                  alt="logo"
                  width={56}
                  height={56}
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
                  style={{ color: "#000", cursor: "auto", fontWeight: "600" }}
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

                <div className={styles.links_seperator}></div>

                <Link href={"/market"}>
                  <span
                    className={pathname === "/market" ? styles.selected : ""}
                  >
                    بازارچه
                    <div className={styles.line1}>
                      <SelectedPageLine />
                    </div>
                    <div className={styles.line2}>
                      <SelectedPageLine />
                    </div>
                  </span>
                </Link>

                <Link href={"/offers/all"}>
                  <span
                    className={
                      pathname?.includes("/offers") ? styles.selected : ""
                    }
                  >
                    خرید و فروش
                    <div className={styles.line1}>
                      <SelectedPageLine />
                    </div>
                    <div className={styles.line2}>
                      <SelectedPageLine />
                    </div>
                  </span>
                </Link>

                <Link href={"/clubs"}>
                  <span
                    className={
                      pathname?.includes("/club") ? styles.selected : ""
                    }
                  >
                    {" "}
                    کلوپ
                    <div className={styles.line1}>
                      <SelectedPageLine />
                    </div>
                    <div className={styles.line2}>
                      <SelectedPageLine />
                    </div>
                  </span>
                </Link>

                <Link href={"/magazines"}>
                  <span
                    className={
                      pathname?.includes("/magazine") ? styles.selected : ""
                    }
                  >
                    مجله
                    <div className={styles.line1}>
                      <SelectedPageLine />
                    </div>
                    <div className={styles.line2}>
                      <SelectedPageLine />
                    </div>
                  </span>
                </Link>

                <Link href={"/about_us"}>
                  <span
                    className={pathname === "/about_us" ? styles.selected : ""}
                  >
                    درباره ما
                    <div className={styles.line1}>
                      <SelectedPageLine />
                    </div>
                    <div className={styles.line2}>
                      <SelectedPageLine />
                    </div>
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
              <div className={styles.badge}>
                <span>۳</span>
              </div>
            </Button>

            {isAuth ? (
              <Link href={"/userDashboard"}>
                <Button className={styles.login} color="#142D5D">
                  <Image
                    src={"/assets/user-icon.svg"}
                    alt="user"
                    width={24}
                    height={24}
                  />
                </Button>
              </Link>
            ) : (
              <Button className={styles.login} color="#142D5D">
                ثبت نام / ورود <div className={styles.line}></div>{" "}
                <Image
                  src={"/assets/user-icon.svg"}
                  alt="user"
                  width={24}
                  height={24}
                />
              </Button>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
