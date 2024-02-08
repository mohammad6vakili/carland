import s from "@/styles/custom-errors.module.scss";
import Image from "next/image";
import background from "../public/assets/error-background.png";

export default function Custom500() {
  return (
    <div className={s.server_error_page}>
      <div className={s.background}>
        <Image src={background} alt="server error page" />
      </div>
      <div className={s.text}>
        <h1>500 - مشکلی در سمت سرور بوجود آمد</h1>
      </div>
    </div>
  );
}
