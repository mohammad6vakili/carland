import Image from "next/image";
import styles from "./login.module.scss";
import loginImage from "../../../public/assets/login/login.png";
import { Button, Form, Input, Spinner } from "reactstrap";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { useFormik } from "formik";
import * as Yup from "yup";
import useHttp from "@/src/axiosConfig/useHttp";
import { useEffect, useState } from "react";
import {
  getLocal,
  removeLocal,
  setLocal,
  toEnglishString,
  toPersianString,
} from "@/src/hooks/functions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Email = ({ verify }) => {
  const [loading, setLoading] = useState(false);
  const [resendCode, setResendCode] = useState(false);
  const [time, setTime] = useState(60);
  const router = useRouter();

  useEffect(() => {
    getLocal("number") === "null" ? router.push("/login") : null;
  }, []);

  const loginSchema = Yup.object().shape({
    number: Yup.string()
      .required("لطفا شماره خود را وارد کنید")
      .min(11, "لطفا یک شماره معتبر وارد کنید"),
  });
  const verifySchema = Yup.object().shape({
    code: Yup.string().required("لطفا کد ۶ رقمی ارسال شده را وارد کنید"),
  });

  const handleSendCode = (values) => {
    setLoading(true);
    const userNumber = toEnglishString(values.number);
    const formData = new FormData();
    formData.append("phone", userNumber);
    setLocal("number", userNumber);
    httpService
      .post("login", formData)
      .then((res) => {
        setLoading(false);
        res.status === 200 && res.data.success
          ? (router.push("/login/verify"),
            toast.success("کد به شماره شما ارسال شد"))
          : toast.error("مشکلی در ارسال کد پیش امد");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleResendCode = () => {
    const number = getLocal("number");
    setLoading(true);
    const formData = new FormData();
    formData.append("phone", number);
    setLocal("number", number);
    httpService
      .post("login", formData)
      .then((res) => {
        setLoading(false);
        setTime(60);
        setResendCode(false);
        res.status === 200 && res.data.success
          ? (router.push("/login/verify"),
            toast.success("کد به شماره شما ارسال شد"))
          : toast.error("مشکلی در ارسال کد پیش امد");
      })
      .catch((err) => {});
  };

  const handleVerify = (values) => {
    const userNumber = getLocal("number");
    setLoading(true);
    const formData = new FormData();
    formData.append("phone", parseInt(userNumber));
    formData.append("verification_code", values.code);

    httpService
      .post("verify", formData)
      .then((res) => {
        setLoading(false);
        res.status === 200
          ? (toast.success("خوش آمدید!"),
            removeLocal("number"),
            removeLocal("email"),
            setLocal("token", res.data.token),
            router.push("/userDashboard/userData"))
          : toast.error("کد مطابقت ندارد");
      })
      .catch((err) => {
        toast.error("کد مطابقت ندارد");
      });
  };

  const handleBackBtn = () => {
    router.back();
  };

  const { httpService } = useHttp();

  const formik = useFormik({
    initialValues: {
      number: "",
    },

    validationSchema: verify ? verifySchema : loginSchema,

    onSubmit: async (values) => {
      verify ? handleVerify(values) : handleSendCode(values);
    },
  });

  // counts to zero for resend code
  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      } else {
        setResendCode(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const formatTime = (remainingSeconds) => {
    const minutes = Math.floor(remainingSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (remainingSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <>
      <section className={styles.login_page}>
        <Form onSubmit={formik.handleSubmit} className={styles.form}>
          <section className={styles.name}>
            <div>
              <span className={styles.blue}>C</span>
              <span>ARLAND</span>
            </div>
            <span className={styles.domain}>ir.</span>
          </section>

          <section className={styles.detail}>
            <div className={styles.title}>
              <p>ثبت نام</p>
              <span>به کارلند بازار متمرکز وسایل نقلیه خوش آمدید!</span>
            </div>

            <div className={styles.image}>
              <Image src={loginImage} alt="image" />
            </div>

            {verify ? (
              <div className={styles.verify_input}>
                <Input
                  name="code"
                  value={formik.values.code}
                  onChange={formik.handleChange}
                  type="code"
                  placeholder="کد تایید"
                />

                {formik.errors.code && formik.touched.code && (
                  <span className={styles.error}>{formik.errors.code}</span>
                )}

                <section className={styles.resend_code}>
                  <div className={styles.timer}>
                    {toPersianString(formatTime(time))}
                    <FaClock />
                  </div>

                  <div
                    style={!resendCode ? { opacity: "0.5" } : { opacity: "1" }}
                    onClick={() => (resendCode ? handleResendCode() : null)}
                    className={styles.resend}
                  >
                    ارسال مجدد
                  </div>
                </section>
              </div>
            ) : (
              <div className={styles.input}>
                <Input
                  name="number"
                  value={formik.values.number}
                  onChange={formik.handleChange}
                  type="tel"
                  placeholder="شماره همراه"
                />

                {formik.errors.number && formik.touched.number && (
                  <span className={styles.error}>{formik.errors.number}</span>
                )}
              </div>
            )}
          </section>

          <section className={styles.submit}>
            <Button disabled={loading} type={"submit"}>
              {loading ? (
                <Spinner
                  color="primary"
                  style={{
                    height: "20px",
                    width: "20px",
                  }}
                >
                  Loading...
                </Spinner>
              ) : null}
              <span>ورود</span>
              <div>
                <svg
                  className={styles.svg}
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

                <ArrowLeftOutlined className={styles.arrow} />
              </div>
            </Button>
          </section>
        </Form>

        <div className={styles.back}>
          <Button onClick={() => handleBackBtn()}>
            <span>بازگشت</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="18"
              viewBox="0 0 27 18"
              fill="none"
            >
              <path
                d="M4.5 11.5981C2.5 10.4434 2.5 7.55663 4.5 6.40192L9 3.80385C11 2.64915 13.5 4.09252 13.5 6.40192L13.5 11.5981C13.5 13.9075 11 15.3509 9 14.1962L4.5 11.5981Z"
                fill="#142D5D"
              />
              <path
                d="M25.5 10C26.0523 10 26.5 9.55228 26.5 9C26.5 8.44772 26.0523 8 25.5 8V10ZM13.5 10H25.5V8H13.5V10Z"
                fill="#142D5D"
              />
            </svg>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Email;
