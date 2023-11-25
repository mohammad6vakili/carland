import Image from "next/image";
import styles from "../../../styles/header.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "reactstrap";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

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
          <Button style={{ background: "#FED30B" }}>رایگان شروع کنید</Button>
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
              <span style={{ color: "#000" }} className={styles.category}>
                {" "}
                <Image
                  src={"/assets/category.svg"}
                  alt="logo"
                  width={15}
                  height={15}
                />
                دسته بندی
              </span>

              <Link style={{ textDecoration: "none" }} href={"/"}>
                <span> بازارچه</span>
              </Link>
              <Link style={{ textDecoration: "none" }} href={"/offers"}>
                <span> خرید و فروش</span>
              </Link>
              <Link style={{ textDecoration: "none" }} href={"/"}>
                <span> کلوپ</span>
              </Link>
              <Link style={{ textDecoration: "none" }} href={"/"}>
                <span> مجله</span>
              </Link>
              <Link style={{ textDecoration: "none" }} href={"/"}>
                <span> درباره ما</span>
              </Link>
            </div>
          </div>

          <div className={styles.account_info}>
            <Button className={styles.shop} color="#EAEDF3">
              <ShoppingCartOutlined />
              <div className={styles.badge}>۳</div>
            </Button>

            <Button className={styles.login} color="#142D5D">
              ثبت نام / ورود <div className={styles.line}></div>{" "}
              <Image
                src={"/assets/user-icon.svg"}
                alt="user"
                width={20}
                height={20}
              />
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
