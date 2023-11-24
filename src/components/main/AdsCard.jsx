import Image from "next/image";
import styles from "../../../styles/main.module.scss";
import { LeftOutlined, StarFilled, CaretLeftFilled } from "@ant-design/icons";
import { Button } from "reactstrap";

const AdsCard = ({ image, title, details, location, time, rate }) => {
  return (
    <>
      <div className={styles.ad_card}>
        <div className={styles.image}>
          <Image src={image} alt="" width={240} height={50} />
        </div>

        <div className={styles.title}>{title}</div>

        <div className={styles.details}>
          <section className={styles.option}>
            <Image
              src={"/assets/main/speed.svg"}
              alt=""
              width={15}
              height={15}
            />
            <div>کیلومتر {details.kms}</div>
          </section>
          <section className={styles.option}>
            <Image
              src={"/assets/main/calendar.svg"}
              alt=""
              width={15}
              height={15}
            />
            <div>کیلومتر {details.kms}</div>
          </section>
          <section className={styles.option}>
            <Image
              src={"/assets/main/color-palette.svg"}
              alt=""
              width={15}
              height={15}
            />
            <div>کیلومتر {details.kms}</div>
          </section>
        </div>

        <div className={styles.location_rate}>
          <div className={styles.location}>
            <span>
              <Image
                src={"/assets/location.svg"}
                alt=""
                width={15}
                height={15}
              />
              {location}
            </span>
            <span>{time}</span>
          </div>

          <div className={styles.rate}>
            <StarFilled style={{ color: "#FFD029" }} /> {rate}
          </div>
        </div>

        <div className={styles.link}>
          <Button color="main-primary">
            مشاهده
            <LeftOutlined />
          </Button>
        </div>
      </div>
    </>
  );
};

export default AdsCard;
