import Image from "next/image";
import logo from "../public/assets/carland-logo.svg";
import s from "../styles/main.module.scss";

const loading = () => {
  return (
    <>
      <div className={s.loading}>
        <div>
          <div classNames={s.logo}>
            <Image src={logo} alt="logo" />
          </div>
          <div className={s.lds_ellipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default loading;
