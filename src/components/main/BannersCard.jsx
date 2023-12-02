import Image from "next/image";
import styles from "../../../styles/main.module.scss";
import { LeftOutlined, StarFilled, CaretLeftFilled } from "@ant-design/icons";
import { Button } from "reactstrap";
import { useRouter } from "next/navigation";
import LocationIcon from "@/src/assets/icons/location_icon";
import RateIcon from "@/src/assets/icons/rate_icon";

const BannersCard = ({ image, name, details, location, time, rate }) => {
  const router = useRouter();

  return (
    <>
      <div className={styles.ad_card}>
        <div className={styles.image}>
          <Image src={image} alt="" width={240} height={50} />
        </div>

        <div className={styles.name}>
          <span>{name}</span>
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
              <LocationIcon />
              <span style={{ marginRight: 5 }}>{location}</span>
            </span>
            <span>{time}</span>
          </div>

          <div className={styles.rate}>
            {rate}
            <RateIcon />
          </div>
        </div>

        <div className={styles.link}>
          <Button onClick={() => router.push("/offers")} color="main-primary">
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

export default BannersCard;
