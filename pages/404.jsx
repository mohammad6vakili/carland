import s from "@/styles/custom-errors.module.scss";
import background from "../public/assets/error-background.png";
import { LeftOutlined } from "@ant-design/icons";
import { Button } from "reactstrap";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Custom404() {
  const router = useRouter();

  return (
    <>
      <div className={s.not_found_page}>
        <div className={s.background}>
          <Image src={background} alt="not found" />
        </div>
        <div className={s.text}>
          <h1 className={s.des}>متاسفانه صفحه مورد نظر شما را پیدا نکردیم!</h1>
          <span className={s.code}>404</span>
          <Button onClick={() => router.back()} className={s.back}>
            برگشت به صفحه قبلی <LeftOutlined />
          </Button>
        </div>
      </div>
    </>
  );
}
