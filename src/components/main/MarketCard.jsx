import Image from "next/image";
import styles from "../../../styles/main.module.scss";
import { LeftOutlined, ShopFilled } from "@ant-design/icons";
import { Button } from "reactstrap";

const MarketCard = ({ image, off, title, description, price, index }) => {
  return (
    <>
      {index + 1 === 1 ? (
        <section className={styles.market_card_special}>
          <div className={styles.title}>
            <p>پیشنهاد ویژه</p>
            <p>#۱</p>
          </div>

          <div className={styles.image}>
            <Image src={image} alt="" width={200} height={150} />
            <div className={styles.circle1}>
              <Image
                src={"/assets/main/circle.svg"}
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div className={styles.circle2}></div>
          </div>

          <div className={styles.texts}>
            <h1>{title}</h1>
          </div>

          <div className={styles.price}>
            <span>{price}</span>
            <span>{price}</span>
          </div>

          <div className={styles.button}>
            <Button color="main-secondary">
              <ShopFilled />
            </Button>
          </div>
        </section>
      ) : (
        <section className={styles.market_card}>
          <div className={styles.badge}>
            <span>{off}</span>
            <span>تخفیف</span>
          </div>

          <div className={styles.image}>
            <Image src={image} alt="" width={200} height={150} />
          </div>

          <div className={styles.texts}>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>

          <div className={styles.price}>
            <span>{price} تومان</span>
            <span>{price} تومان</span>
          </div>

          <div className={styles.button}>
            <Button color="main-secondary">
              <span>خرید</span>
              <div>
                <LeftOutlined />
              </div>
            </Button>
          </div>
        </section>
      )}
    </>
  );
};

export default MarketCard;
