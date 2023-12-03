import Image from "next/image";
import s from "../../../styles/main.module.scss";
import { Button } from "reactstrap";
import { useRouter } from "next/navigation";

const BuySaleCard = ({
  createYear,
  image,
  title,
  description,
  timePosted,
  location,
  price,
}) => {
  const router = useRouter();

  return (
    <>
      <div
        onClick={() => router.push("/offers/trades/id")}
        className={s.buy_sale_card}
      >
        <section className={s.image}>
          <Image src={image} alt="" width={200} height={400} />

          <div className={s.texts}>
            <div className={s.year_box}>
              ساخت
              <span>{createYear}</span>
            </div>

            <div className={s.share_bookmark}>
              <div>
                <Image
                  src={"/assets/offers/share.svg"}
                  alt=""
                  width={15}
                  height={15}
                />
              </div>
              <div>
                <Image
                  src={"/assets/offers/bookmark.svg"}
                  alt=""
                  width={15}
                  height={15}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={s.details}>
          <span className={s.title}>{title}</span>
          <p>{description}</p>
          <span>{timePosted}</span>
          <span>
            <Image
              src={"/assets/offers/location-fff.png"}
              alt=""
              width={12.5}
              height={12.5}
            />
            {location}{" "}
          </span>
          <div className={s.button}>
            <Button>
              <span>{price}</span> ت
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BuySaleCard;
