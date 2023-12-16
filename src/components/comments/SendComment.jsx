import s from "../../../styles/main.module.scss";
import Image from "next/image";
import { Button, Input } from "reactstrap";

const SendComment = () => {
  return (
    <>
      <div className={s.send_comment}>
        <div className={s.title}>
          <span>
            <Image
              src={"/assets/trades/triangle.svg"}
              alt=""
              width={15}
              height={15}
            />
          </span>{" "}
          <p>ارسال دیدگاه</p>
        </div>

        <div className={s.name_email}>
          <Input
            style={{
              border: "1px solid #4A80E8",
              background: "rgba(74, 128, 232, 0.07)",
              width: "50%",
            }}
            placeholder="نام و نام خانوادگی"
          />
          <Input
            style={{
              border: "1px solid #4A80E8",
              background: "rgba(74, 128, 232, 0.07)",
              width: "50%",
            }}
            placeholder="ایمیل"
          />
        </div>

        <div className={s.content}>
          <Input
            style={{
              border: "1px solid #4A80E8",
              background: "rgba(74, 128, 232, 0.07)",
              width: "100%",
            }}
            type="textarea"
            placeholder="توضیحات"
          />
        </div>

        <div className={s.btn}>
          <Button style={{ width: "108px" }} color="main-primary">
            ارسال
          </Button>
        </div>
      </div>
    </>
  );
};

export default SendComment;
