import Image from "next/image";
import s from "../../../../styles/main.module.scss";
import { StarFilled, LeftOutlined } from "@ant-design/icons";
import { Button } from "reactstrap";
import { useRouter } from "next/navigation";
import { url } from "@/src/axiosConfig/useHttp";
import { convertTime, enToFaNum, toPersianString } from "@/src/hooks/functions";

const JobsCard = ({
  image,
  rate,
  title,
  description,
  isOpen,
  location,
  timeFrom,
  timeTo,
  id,
  myJobs,
}) => {
  const router = useRouter();

  return (
    <section className={s.job_card}>
      <div className={s.image}>
        <Image src={`${url + image}`} alt="" width={250} height={200} />{" "}
        <div className={s.rate_box}>
          <StarFilled style={{ color: "#FFD029" }} /> {toPersianString(rate)}
        </div>
      </div>

      <div className={s.texts}>
        <h1 className={s.title}>{title}</h1>
        <p>{description}</p>
      </div>

      <div className={s.status}>
        {isOpen === 1 ? (
          <div className={s.is_open}>
            <div className={s.circle}></div>
            باز است
          </div>
        ) : (
          <div className={s.not_open}>
            <div className={s.circle}></div>
            بسته است
          </div>
        )}

        <div className={s.time_location}>
          <p className={s.work_time}>
            ساعت کاری: {toPersianString(convertTime(timeFrom))} تا{" "}
            {toPersianString(convertTime(timeTo))}
          </p>
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

      {myJobs ? (
        <div className={s.button}>
          <Button>ویرایش</Button>

          <Button>حذف</Button>
        </div>
      ) : (
        <div className={s.button}>
          <Button onClick={() => router.push(`/jobs/${id}`)}>
            مشاهده{" "}
            <div>
              <LeftOutlined />
            </div>
          </Button>
        </div>
      )}
    </section>
  );
};

export default JobsCard;
