import s from "@/styles/custom-errors.module.scss";
import logo from "../public/assets/carland-logo.png";
import { LeftOutlined } from "@ant-design/icons";
import { Button } from "reactstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Custom404() {
  const router = useRouter();

  return (
    <>
      <div className={s.not_found_page}>
        <h1 className={s.des}>متاسفانه صفحه مورد نظر شما را پیدا نکردیم!</h1>
        <span className={s.code}>404</span>
        <Button onClick={() => router.back()} className={s.back}>
          برگشت به صفحه قبلی <LeftOutlined />
        </Button>
      </div>
    </>
  );
}
