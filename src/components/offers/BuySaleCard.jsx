import Image from "next/image";
import s from "../../../styles/main.module.scss";
import { Button } from "reactstrap";

const BuySaleCard = ({
  createYear,
  image,
  title,
  description,
  timePosted,
  location,
  price,
}) => {
  return (
    <>
      <div className={s.buy_sale_card}>
        <section className={s.image}>
          <Image src={image} alt="" width={200} height={400} />

          <div className={s.texts}>
            <div className={s.year_box}>
              ساخت
              {createYear}
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
          <span>{title}</span>
          <p>{description}</p>
          <span>{timePosted}</span>
          <span>
            {location}{" "}
            <Image src={"/assets/location.svg"} alt="" width={15} height={15} />
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
