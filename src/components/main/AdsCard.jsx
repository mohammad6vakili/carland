import Image from "next/image";
import styles from "../../../styles/main.module.scss";
import { LeftOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "reactstrap";
import { useRouter } from "next/navigation";
import LocationIcon from "@/src/assets/icons/location_icon";
import RateIcon from "@/src/assets/icons/rate_icon";
import { url } from "@/src/axiosConfig/useHttp";
import { convertDate } from "../comments/CommentCards";

const AdsCard = ({
  image,
  name,
  details,
  location,
  time,
  rate,
  id,
  myAdds,
}) => {
  const router = useRouter();

  if (image !== undefined) {
    return (
      <>
        <div className={styles.ad_card}>
          <div className={styles.image}>
            <Image src={`${url}${image}`} alt="" width={240} height={200} />
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
              <span>
                {myAdds || time.includes("T") ? convertDate(time) : time}
              </span>
            </div>

            <div className={styles.rate}>
              {rate}
              <RateIcon />
            </div>
          </div>

          {myAdds ? (
            <div className={styles.update_delete}>
              <Button className={styles.update}>ویرایش</Button>

              <Button className={styles.delete}>حذف</Button>
            </div>
          ) : (
            <div className={styles.link}>
              <Button
                onClick={() => router.push(`/trades/${id}`)}
                color="main-primary"
              >
                <span>مشاهده</span>
                <div>
                  <div className={styles.background}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="53"
                      height="42"
                      viewBox="0 0 53 42"
                      fill="none"
                    >
                      <path
                        d="M0.5 10C0.5 4.75329 4.75329 0.5 10 0.5H42.2412C48.9592 0.5 53.5547 7.28253 51.0643 13.5218L42.2828 35.5218C40.8417 39.132 37.3468 41.5 33.4597 41.5H9.99999C4.75328 41.5 0.5 37.2467 0.5 32V10Z"
                        fill="white"
                        stroke="#4A80E8"
                      />
                    </svg>
                  </div>
                  <ArrowLeftOutlined className={styles.arrow} />
                </div>
              </Button>
            </div>
          )}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div style={{ height: "400px" }} className={styles.ad_card}>
          <div className={styles.image}>
            <Image src={undefined} alt="" width={240} height={200} />
          </div>

          <div className={styles.name}>
            <span></span>
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
                <span></span>
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
                <span></span>
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
                <span></span>
                رنگ
              </div>
            </section>
          </div>

          <div className={styles.location_rate}>
            <div className={styles.location}>
              <span>
                <LocationIcon />
                <span style={{ marginRight: 5 }}></span>
              </span>
              <span></span>
            </div>

            <div className={styles.rate}>
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
  }
};

export default AdsCard;
