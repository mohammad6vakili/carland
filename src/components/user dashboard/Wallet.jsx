import { PiWalletFill } from "react-icons/pi";
import s from "../../../styles/main.module.scss";
import Image from "next/image";
import logo from "../../../public/assets/carland-logo.svg";

const Wallet = () => {
  return (
    <>
      <div className={s.wallet_page}>
        <section className={s.form}>
          <div className={s.header}>
            <section className={s.text}>
              <div className={s.title}>
                <PiWalletFill />
                <span>شارژ کیف پول</span>
              </div>
              <span className={s.detail}>
                حسابت رو شارژ کن تا کسب و کارت رو با مات گسترش بدی
              </span>
            </section>

            <section className={s.logo}>
              <div className={s.svg}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="175"
                  height="120"
                  viewBox="0 0 175 120"
                  fill="none"
                >
                  <path
                    d="M0.5 20C0.5 9.23045 9.23045 0.5 20 0.5H154.135C166.589 0.5 175.851 12.0154 173.182 24.1799L152.263 119.5H20C9.23047 119.5 0.5 110.77 0.5 100V20Z"
                    fill="white"
                    stroke="black"
                  />
                </svg>
              </div>

              <div className={s.logo_name}>
                <Image src={logo} alt="" />

                <span>کارلند</span>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default Wallet;
