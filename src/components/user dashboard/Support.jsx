import Image from "next/image";
import s from "../../../styles/main.module.scss";
import support from "../../../public/assets/userDashboard/support.png";
import { Button } from "reactstrap";
import { MdSupportAgent } from "react-icons/md";

const Support = () => {
  return (
    <>
      <div className={s.support}>
        <section className={s.main_image}>
          <Image src={support} alt="support" />
        </section>

        <section className={s.support_banner}>
          <div className={s.fixedEl1}></div>
          <div className={s.fixedEl2}></div>

          <div className={s.name}>
            <p>CARLAND</p>
            <p>کارلند</p>
          </div>

          <div className={s.images}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="69"
                viewBox="0 0 36 69"
                fill="none"
              >
                <path
                  d="M24.877 0H35.1735L10.7301 34.8136L35.1735 69H24.877C-7.4566 42.3821 -6.88724 27.3092 24.877 0Z"
                  fill="#4A80E8"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="69"
                viewBox="0 0 36 69"
                fill="none"
              >
                <path
                  d="M24.877 0H35.1735L10.7301 34.8136L35.1735 69H24.877C-7.4566 42.3821 -6.88724 27.3092 24.877 0Z"
                  fill="#4A80E8"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="69"
                viewBox="0 0 36 69"
                fill="none"
              >
                <path
                  d="M24.877 0H35.1735L10.7301 34.8136L35.1735 69H24.877C-7.4566 42.3821 -6.88724 27.3092 24.877 0Z"
                  fill="#4A80E8"
                />
              </svg>
            </div>
          </div>

          <div className={s.text}>
            اگر به مشکل برخوردید با پشتیبانی <span>کارلند</span> تماس بگیرید
          </div>

          <div className={s.btn}>
            <Button>
              <span>پشتیبانی</span>
              <div>
                <svg
                  className={s.svg}
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="44"
                  viewBox="0 0 57 44"
                  fill="none"
                >
                  <path
                    d="M0.851562 10C0.851562 4.7533 5.10486 0.5 10.3516 0.5H46.2644C52.8289 0.5 57.415 6.99914 55.2149 13.184L46.6774 37.184C45.3303 40.9707 41.746 43.5 37.7268 43.5H10.3516C5.10485 43.5 0.851562 39.2467 0.851562 34V10Z"
                    fill="white"
                    stroke="#4A80E8"
                  />
                </svg>
                <MdSupportAgent className={s.logo} />
              </div>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Support;
