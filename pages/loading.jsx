import Image from "next/image";
import logo from "@/public/assets/carland-logo.png";
import s from "../styles/custom-errors.module.scss";

export default function Loading() {
  return (
    <>
      <div className={s.loading}>
        <div className={s.content}>
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
}
