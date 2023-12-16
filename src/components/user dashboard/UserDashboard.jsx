import Image from "next/image";
import s from "../../../styles/main.module.scss";
import logo from "../../../public/assets/carland-logo-fff.svg";
import comment from "../../../public/assets/userDashboard/comment.png";

const UserDashboard = () => {
  return (
    <>
      <div className={s.user_dashboard}>
        <div className={s.comment_banner}>
          <div className={s.logo_name}>
            <div className={s.name}>
              <p>کارلند</p>
              <p>CARLAND</p>
            </div>
            <div className={s.logo}>
              <Image src={logo} alt="" />
            </div>
          </div>

          <div className={s.text}>
            <div className={s.logo}>
              <Image src={comment} alt="" />
            </div>

            <div className={s.text}>
              <p>از کارلند راضی هستید؟</p>
              <span>با ثبت نظرات خود به از ما حمایت کنید!</span>
            </div>
          </div>
        </div>

        <div className={s.boxes}>
          <div className={s.box}></div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
