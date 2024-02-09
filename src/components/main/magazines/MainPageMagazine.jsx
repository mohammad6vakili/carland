import { Button } from "reactstrap";
import styles from "./mainMagazine.module.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import { url } from "@/src/axiosConfig/useHttp";
import { useRouter } from "next/navigation";
import OfferCardSkeleton from "../../skeleton/OfferCardSkeleton";
import MySkeleton from "../../skeleton/Skeleton";
import React from "react";
import { handleTextCut } from "@/src/hooks/functions";
import Link from "next/link";

const MainPageMagazine = ({ magazines, overflowedDes, method, header }) => {
  const navigate = useRouter();

  return (
    <div className={styles.magazine}>
      {header ? (
        <section className={styles.main_title}>
          <h2 className={styles.title}>مجله</h2>

          <div className={styles.btns}>
            <Button type="primary">
              <RightOutlined style={{ color: "#fff" }} />
            </Button>
            <Button>
              <LeftOutlined style={{ color: "#fff" }} />
            </Button>
          </div>
        </section>
      ) : null}

      {magazines.length !== 0 ? (
        <div className={styles.content}>
          <Link
            href={`/${method}/${magazines[0].title}/${magazines[0].id}`}
            className={styles.solid_pic}
          >
            <Image
              src={url + "/" + magazines[0].image_url}
              alt="مجله"
              width={500}
              height={480}
            />
            {overflowedDes ? (
              <div className={styles.caption}>
                <div className={styles.title}>
                  <Image
                    src={"/assets/main/quotation.svg"}
                    alt="icon"
                    width={18}
                    height={18}
                  />{" "}
                  <span>{magazines[0].title}</span>
                </div>
                <div className={styles.description}>
                  <span>{handleTextCut(magazines[0].description, 200)}</span>
                  <Image
                    src={"/assets/main/quotation.svg"}
                    alt="icon"
                    width={18}
                    height={18}
                  />
                </div>
              </div>
            ) : null}
          </Link>

          <div className={styles.options}>
            {magazines.map((mag, index) => (
              <React.Fragment key={Math.random() * index}>
                {index !== 0 ? (
                  <section className={styles.option}>
                    <div className={styles.pic}>
                      <Image
                        src={url + "/" + mag.image_url}
                        alt="مجله"
                        width={50}
                        height={50}
                      />
                    </div>

                    <div className={styles.texts}>
                      <div className={styles.title}>{mag.title}</div>
                      <p className={styles.description}>
                        {mag.description.length > 60
                          ? mag.description.substring(1, 60) + "..."
                          : mag.description}
                      </p>
                      <div className={styles.refrences}>
                        <span>۱۴۰۲/۰۸/۰۱</span>
                        <Link href={`/${method}/${mag.title}/${mag.id}`}>
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
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </div>
      ) : (
        <MySkeleton width={"100%"} height={"500px"} />
      )}
    </div>
  );
};

export default MainPageMagazine;
