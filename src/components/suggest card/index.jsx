import s from "./suggest.module.scss";
import Image from "next/image";
import { Button } from "reactstrap";

const SuggestCard = ({ image, title, description, time }) => {
  return (
    <>
      <div className={s.card}>
        <div className={s.image}>
          <Image src={image} alt="" width={260} height={170} />
        </div>

        <div className={s.texts}>
          <span className={s.title}>{title}</span>
          <p>{description}</p>
        </div>

        <div className={s.bottom_content}>
          <span>{time}</span>
          <Button>
            مشاهده
            <div>
              <Image
                src={"/assets/main/see-more.svg"}
                alt=""
                width={20}
                height={20}
              />
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SuggestCard;
