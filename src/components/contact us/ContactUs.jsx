import s from "@/styles/main.module.scss";
import Image from "next/image";
import carland from "@/public/assets/carland-logo.png";
import background from "@/public/assets/contact us/header-background.png";
import headIcon from "@/public/assets/contact us/icon-head.png";
import formBack from "@/public/assets/contact us/form-back.png";
import formBackMobile from "@/public/assets/contact us/mobile-form-back.png";
import { PhoneOutlined } from "@ant-design/icons";
import { Button, Form, Input, Spinner } from "reactstrap";
import { useWindowSize } from "@uidotdev/usehooks";
import { MdEmail, MdGpsFixed } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { useFormik } from "formik";
import * as Yup from "yup";
import useHttp from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";
import { useState } from "react";

const ContactUs = ({ contactInfo }) => {
  const size = useWindowSize();
  const { httpService } = useHttp(false);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("لطفا این فیلد را پر کنید"),
    phone: Yup.string().required("لطفا این فیلد را پر کنید"),
    details: Yup.string().required("لطفا این فیلد را پر کنید"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      details: "",
    },

    validationSchema,

    onSubmit: (values) => {
      handleSendContactInfo(values);
    },
  });

  const handleSendContactInfo = (values) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("phone_number", values.phone);
    formData.append("description", values.details);

    httpService
      .post("CreateContactInformation", formData)
      .then((res) => {
        res?.status === 200
          ? toast.success("اطلاعات شما با موفقیت ارسال شد")
          : null;
      })
      .catch(() => {
        toast.error("مشکلی در ارسال اطلاعات شما بوجود آمد");
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className={s.contact_us}>
        <div className={s.first_sec}>
          <div className={s.fade_right}></div>
          <div className={s.background}>
            <Image src={background} alt="background" />
          </div>
          <div className={s.text_logo}>
            <Image
              className={s.logo}
              src={carland}
              alt="carland logo"
              width={120}
            />
            <div className={s.texts}>
              <h2 className={s.title}>با تیم حرفه‌ای کارلند در ارتباط باشید</h2>
              <p>ما در کنار شما هستیم تا بهتون کمک کنیم</p>
            </div>
          </div>
          <div className={s.fade_left}></div>
        </div>

        <div className={s.boxes}>
          <div className={s.box}>
            <div className={s.icon}>
              <Image src={headIcon} alt="" />
              <div>
                <PhoneOutlined style={{ color: "#265DC8", rotate: "90deg" }} />
              </div>
            </div>

            <div className={s.texts}>
              <h5>تماس با ما</h5>
              <span>پاسخگویی از ۸ تا ۱۰ شب</span>
            </div>

            <div className={s.address}>
              <span>{contactInfo.phone}</span>
              <div className={s.line}></div>
            </div>
          </div>
          <div className={s.box}>
            <div className={s.icon}>
              <Image src={headIcon} alt="" />
              <div>
                <MdGpsFixed style={{ color: "#265DC8" }} />
              </div>
            </div>

            <div className={s.texts}>
              <h5>موقعیت مکانی</h5>
              <span>حضوری و مجازی</span>
            </div>

            <div className={s.address}>
              <span>{contactInfo.phone}</span>
              <div className={s.line}></div>
            </div>
          </div>
          <div className={s.box}>
            <div className={s.icon}>
              <Image src={headIcon} alt="" />
              <div>
                <MdEmail style={{ color: "#265DC8" }} />
              </div>
            </div>

            <div className={s.texts}>
              <h5>ارسال ایمیل</h5>
              <span>پاسخگویی از ۸ تا ۱۰ شب</span>
            </div>

            <div className={s.address}>
              <span>{contactInfo.email}</span>
              <div className={s.line}></div>
            </div>
          </div>
          <div className={s.box}>
            <div className={s.icon}>
              <Image src={headIcon} alt="" />
              <div>
                <BiSupport style={{ color: "#265DC8" }} />
              </div>
            </div>

            <div className={s.texts}>
              <h5>تماس با پشتیبانی</h5>
              <span>پاسخگویی از ۸ تا ۱۰ شب</span>
            </div>

            <div className={s.address}>
              <span>{contactInfo.phone2}</span>
              <div className={s.line}></div>
            </div>
          </div>
        </div>

        <div className={s.form_sec}>
          <Form onSubmit={formik.handleSubmit} className={s.form}>
            <div className={s.background}>
              <Image
                src={size.width > 1100 ? formBack : formBackMobile}
                alt=""
              />
            </div>

            <div className={s.inputs}>
              {/* name */}
              <div className={s.input_group}>
                <p className={s.label}>نام و نام خانوادگی</p>
                <Input
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name && (
                  <span className={s.error}>{formik.errors.name}</span>
                )}
              </div>

              {/* phone number */}
              <div className={s.input_group}>
                <p className={s.label}>شماره همراه</p>
                <Input
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
                {formik.errors.phone && formik.touched.phone && (
                  <span className={s.error}>{formik.errors.phone}</span>
                )}
              </div>

              {/* details */}
              <div className={s.input_group}>
                <p className={s.label}>توضیحات</p>
                <Input
                  name="details"
                  value={formik.values.details}
                  onChange={formik.handleChange}
                />
                {formik.errors.details && formik.touched.details && (
                  <span className={s.error}>{formik.errors.details}</span>
                )}
                <Button
                  disabled={loading}
                  style={{ marginTop: "2rem" }}
                  className={s.submit}
                  type="submit"
                >
                  {loading && (
                    <Spinner
                      style={{ width: "10px", height: "10px" }}
                    ></Spinner>
                  )}{" "}
                  ثبت اطلاعات
                </Button>
              </div>
            </div>
          </Form>
        </div>

        <div className={s.questions}>
          <div className={s.header}>
            <span>
              سوالات
              <span>متداول</span>
            </span>

            <div className={s.line}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
