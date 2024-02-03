import s from "@/styles/main.module.scss";
import Image from "next/image";
import carland from "@/public/assets/carland-logo.png";
import background from "@/public/assets/contact us/header-background.png";
import headIcon from "@/public/assets/contact us/icon-head.png";
import formBack from "@/public/assets/contact us/form-back.png";
import formBackMobile from "@/public/assets/contact us/mobile-form-back.png";
import { PhoneOutlined } from "@ant-design/icons";
import { Button, Input } from "reactstrap";
import { useWindowSize } from "@uidotdev/usehooks";

const ContactUs = () => {
  const size = useWindowSize();

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
              <span>۰۹۰۳۱۲۱۷۷۲۴</span>
              <div className={s.line}></div>
            </div>
          </div>
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
              <span>۰۹۰۳۱۲۱۷۷۲۴</span>
              <div className={s.line}></div>
            </div>
          </div>
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
              <span>۰۹۰۳۱۲۱۷۷۲۴</span>
              <div className={s.line}></div>
            </div>
          </div>
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
              <span>۰۹۰۳۱۲۱۷۷۲۴</span>
              <div className={s.line}></div>
            </div>
          </div>
        </div>

        <div className={s.form_sec}>
          <div className={s.form}>
            <div className={s.background}>
              <Image
                src={size.width > 1100 ? formBack : formBackMobile}
                alt=""
              />
            </div>

            <div className={s.inputs}>
              <div className={s.input_group}>
                <p className={s.label}>نام و نام خانوادگی</p>
                <Input />
              </div>
              <div className={s.input_group}>
                <p className={s.label}>شماره همراه</p>
                <Input />
              </div>
              <div className={s.input_group}>
                <p className={s.label}>توضیحات</p>
                <Input />

                <Button className={s.submit}>ثبت اطلاعات</Button>
              </div>
            </div>
          </div>
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
