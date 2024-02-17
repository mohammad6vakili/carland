import styles from "../../../styles/main.module.scss";
import { url } from "@/src/axiosConfig/useHttp";
import Image from "next/image";
import Link from "next/link";
import { Button } from "reactstrap";

const ClubCard = ({ image, title, description, id, authorName }) => {
  return (
    <section className={styles.link}>
      <div className={styles.pic}>
        <Image src={url + "/" + image} alt="" width={50} height={50} />
      </div>

      <div className={styles.texts}>
        <h1>{title}</h1>
        <div className={styles.refrences}>
          <div className={styles.name_profile}>
            <div className={styles.profile}></div>
            <span>{authorName}</span>
          </div>
          <Link href={`/club/${club.title}/${id}`}>
            <Button>
              مشاهده{" "}
              <div>
                <Image
                  src={"/assets/main/see-more.svg"}
                  alt=""
                  width={15}
                  height={15}
                />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClubCard;
