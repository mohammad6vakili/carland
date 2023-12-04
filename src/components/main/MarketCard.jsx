import Image from "next/image";
import styles from "../../../styles/main.module.scss";
import { LeftOutlined, ShopFilled } from "@ant-design/icons";
import { Button } from "reactstrap";
import { useRouter } from "next/navigation";

const MarketCard = ({ image, off, title, description, price, index }) => {
  const router = useRouter();

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

          <div className={styles.view_all_btn}>
            <span>نمایش همه</span>
            <div>
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.44141 1.52832C4.44141 1.52832 0.955406 3.92036 0.955406 5.00036C0.955406 6.08036 4.44141 8.47036 4.44141 8.47036"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
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
            <Button
              onClick={() => router.push("/offers/trades/id")}
              color="main-secondary"
            >
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
