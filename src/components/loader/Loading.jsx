import Image from "next/image";
import s from "../../../styles/main.module.scss";

const Loading = () => {
  return (
    <section className={s.loading}>
      <div>
        <div className={s.logo}>
          <Image
            src={"/assets/carland-logo.png"}
            alt="logo"
            width={50}
            height={50}
          />
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
