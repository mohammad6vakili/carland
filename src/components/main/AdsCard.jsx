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

        <div className={styles.title}>
          <span>{title}</span>
        </div>

        <div className={styles.details}>
          <section className={styles.option}>
            <Image
              src={"/assets/main/speed.svg"}
              alt=""
              width={20}
              height={20}
            />
            <div>
              <span>{details.kms}</span>
              کیلومتر
            </div>
          </section>

          <section className={styles.option}>
            <Image
              src={"/assets/main/calendar.svg"}
              alt=""
              width={20}
              height={20}
            />
            <div>
              <span>{details.createYear}</span>
              تولید
            </div>
          </section>

          <section className={styles.option}>
            <Image
              src={"/assets/main/color-palette.svg"}
              alt=""
              width={20}
              height={20}
            />
            <div>
              <span>{details.color}</span>
              رنگ
            </div>
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
            {rate}
            <StarFilled style={{ color: "#FFD029" }} />
          </div>
        </div>

        <div className={styles.link}>
          <Button color="main-primary">
            <span>مشاهده</span>
            <div>
              <LeftOutlined style={{ color: "#000" }} />
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default AdsCard;
