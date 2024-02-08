import s from "@/styles/custom-errors.module.scss";
import Image from "next/image";
import background from "@/public/assets/error-background.png";
function Error({ statusCode }) {
  return (
    <div className={s.error_page}>
      <div className={s.background}>
        <Image src={background} alt="" />
      </div>
      <div className={s.text}>
        {statusCode
          ? `ارور ${statusCode} پیش آمد`
          : "مشکلی در ایجاد این صفحه پیش آمده!"}
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
