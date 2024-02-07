import { PiWalletFill } from "react-icons/pi";
import s from "../../../styles/main.module.scss";
import Image from "next/image";
import logo from "../../../public/assets/carland-logo-full.png";
import { Button, Input } from "reactstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toPersianString } from "@/src/hooks/functions";

const Wallet = () => {
  const [selectedPayWay, setSelectedPayWay] = useState("");
  const [payValue, setPayValue] = useState();
  const userInfo = useSelector((state) => state.userInfo.userInfo);

  const payways = [
    { name: "زرین پال" },
    { name: "بانک ملت" },
    { name: "بانک سامان" },
  ];

  const commafy = (num) => {
    let str = num.toString().split(".");
    if (str[0].length >= 5) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1] && str[1].length >= 5) {
      str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(",");
  };

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
                حسابت رو شارژ کن تا کسب و کارت رو با ما گسترش بدی
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
              </div>
            </section>
          </div>

          <div className={s.input}>
            <section className={s.label}>مبلغ شارژ حساب</section>
            <section className={s.input}>
              <Input
                value={payValue}
                onChange={(e) => setPayValue(e.target.value)}
                placeholder="مبلغ شارژ ( تومان )"
              />
            </section>
          </div>

          <div className={s.current_wallet}>
            <p className={s.label}>وضعیت حساب شما</p>

            <section className={s.box}>
              <span className={s.title}>موجودی کیف پول</span>

              <div className={s.value}>
                <span>{toPersianString(userInfo?.cash)}</span>
                <span>تومان</span>
              </div>
            </section>
          </div>

          <div className={s.choose_payway}>
            <section className={s.title}>انتخاب درگاه پرداخت</section>

            <section className={s.options}>
              {payways.map((payway, index) => (
                <div
                  onClick={() => setSelectedPayWay(payway.name)}
                  className={
                    selectedPayWay === payway.name ? s.selected_box : s.box
                  }
                  key={payway.name}
                >
                  {payway.name}
                </div>
              ))}
            </section>
          </div>

          <div className={s.submit}>
            <Button>شارژ کیف پول</Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Wallet;
