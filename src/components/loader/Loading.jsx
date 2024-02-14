import Image from "next/image";
import s from "../../../styles/main.module.scss";
import logo from "@/public/assets/carland-logo.png";

const Loading = () => {
  return (
    <section className={s.loading}>
      <div>
        <div className={s.logo}>
          <Image src={logo} alt="logo" width={80} />
          <p>
            <span>کارلند</span>
            <span>CARLAND</span>
          </p>
        </div>
        <div className={s.lds_ellipsis}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
