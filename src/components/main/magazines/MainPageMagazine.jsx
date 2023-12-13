import { Button } from "reactstrap";
import styles from "./mainMagazine.module.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import { url } from "@/src/axiosConfig/useHttp";
import { useRouter } from "next/navigation";
import OfferCardSkeleton from "../../skeleton/OfferCardSkeleton";

const MainPageMagazine = ({ magazines, overflowedDes, method, header }) => {
  const navigate = useRouter();

  return (
    <div className={styles.magazine}>
      {header ? (
        <section className={styles.main_title}>
          <h1>مجله</h1>

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

      <div className={styles.content}>
        {magazines.length !== 0 ? (
          <div
            onClick={() => navigate.push(`/${method}/${magazines[0].id}`)}
            className={styles.solid_pic}
          >
            <Image
              src={url + "/" + magazines[0].image_url}
              alt=""
              width={500}
              height={480}
            />
            {overflowedDes ? (
              <div className={styles.caption}>
                <div className={styles.title}>
                  <Image
                    src={"/assets/main/quotation.svg"}
                    alt=""
                    width={18}
                    height={18}
                  />{" "}
                  <span>{magazines[0].title}</span>
                </div>
                <div className={styles.description}>
                  <span>{magazines[0].description}</span>
                  <Image
                    src={"/assets/main/quotation.svg"}
                    alt=""
                    width={18}
                    height={18}
                  />
                </div>
              </div>
            ) : null}
          </div>
        ) : (
          <OfferCardSkeleton width={"100%"} height={500} />
        )}

        <div className={styles.options}>
          {magazines.length !== 0 && magazines
            ? magazines.map((mag, index) => (
                <>
                  {index !== 0 ? (
                    <section className={styles.option}>
                      <div className={styles.pic}>
                        <Image
                          src={url + "/" + mag.image_url}
                          alt=""
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
                          <Button
                            onClick={() =>
                              navigate.push(`/${method}/${mag.id}`)
                            }
                          >
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
                        </div>
                      </div>
                    </section>
                  ) : null}
                </>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default MainPageMagazine;
