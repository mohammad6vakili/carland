import Image from "next/image";
import styles from "./login.module.scss";
import loginImage from "../../../public/assets/login/login.png";
import { Button, Input } from "reactstrap";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Email = () => {
  return (
    <>
      <section className={styles.login_page}>
        <div className={styles.form}>
          <section className={styles.name}>
            <div>
              <span className={styles.blue}>C</span>
              <span>ARLAND</span>
            </div>
            <span className={styles.domain}>.ir</span>
          </section>

          <section className={styles.detail}>
            <div className={styles.title}>
              <p>ثبت نام</p>
              <span>به کارلند بازار متمرکز وسایل نقلیه خوش آمدید!</span>
            </div>

            <div className={styles.image}>
              <Image src={loginImage} alt="image" />
            </div>

            <div className={styles.input}>
              <Input type="tel" placeholder="شماره همراه" />
            </div>
          </section>

          <section className={styles.submit}>
            <Button type="submit">
              <span>ورود</span>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="44"
                  viewBox="0 0 56 44"
                  fill="none"
                >
                  <path
                    d="M0.5 10C0.5 4.7533 4.7533 0.5 10 0.5H45.3749C51.9271 0.5 56.5122 6.97653 54.3352 13.1565L45.8807 37.1565C44.5417 40.9574 40.9503 43.5 36.9204 43.5H10C4.7533 43.5 0.5 39.2467 0.5 34V10Z"
                    fill="white"
                    stroke="#4A80E8"
                  />
                </svg>

                <ArrowLeftOutlined />
              </div>
            </Button>
          </section>
        </div>

        <div className={styles.back}>
          <Button>
            <span>بازگشت</span>
            <FaLongArrowAltLeft />
          </Button>
        </div>
      </section>
    </>
  );
};

export default Email;
