import Image from "next/image";
import s from "../../../styles/main.module.scss";
import { StarFilled, LeftOutlined } from "@ant-design/icons";
import { Button } from "reactstrap";
import { useRouter } from "next/navigation";

const JobsCard = ({
  image,
  rate,
  title,
  description,
  isOpen,
  location,
  workTime,
}) => {
  const router = useRouter();

  return (
    <section className={s.job_card}>
      <div className={s.image}>
        <Image src={image} alt="" width={250} height={200} />{" "}
        <div className={s.rate_box}>
          <StarFilled style={{ color: "#FFD029" }} /> {rate}
        </div>
      </div>

      <div className={s.texts}>
        <h1 className={s.title}>{title}</h1>
        <p>{description}</p>
      </div>

      <div className={s.status}>
        <div className={s.is_open}>
          <div className={s.circle}></div>
          باز است
        </div>

        <div className={s.time_location}>
          <p className={s.work_time}>{workTime}</p>
          <p className={s.location}>
            <Image
              src={"/assets/offers/location.png"}
              alt=""
              width={14}
              height={14}
            />
            {location}
          </p>
        </div>
      </div>

      <div className={s.button}>
        <Button onClick={() => router.push("/offers/jobs/id")}>
          مشاهده{" "}
          <div>
            <LeftOutlined />
          </div>
        </Button>
      </div>
    </section>
  );
};

export default JobsCard;
