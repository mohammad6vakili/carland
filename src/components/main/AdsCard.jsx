import Image from "next/image";
import styles from "../../../styles/main.module.scss";
import { LeftOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";
import { useRouter } from "next/navigation";
import LocationIcon from "@/src/assets/icons/location_icon";
import RateIcon from "@/src/assets/icons/rate_icon";
import useHttp, { url } from "@/src/axiosConfig/useHttp";
import { convertDate } from "../comments/CommentCards";
import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

const AdsCard = ({
  image,
  name,
  details,
  location,
  time,
  rate,
  id,
  status,
  myAdds,
}) => {
  const { httpService } = useHttp(true);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [reasonDeleting, setReasonDeleting] = useState("");

  const handleShowDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  const handleDeleteAd = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("ads_id", id);
    formData.append("ReasonDeletion", reasonDeleting);

    httpService
      .post("DeleteAds", formData)
      .then((res) => {
        res.status === 200
          ? (window.location.reload(),
            toast.success("آگهی شما با موفقیت به آگهی های حذف شده انتقال یافت"))
          : null;
        setLoading(false);
      })

      .catch(() => {
        toast.error("مشکلی در حذف آگهی شما بوجود امد");
        setLoading(false);
      });
  };

  const handleRecoveryAd = () => {
    const formData = new FormData();
    formData.append("ads_id", id);
    httpService
      .post("ActiveAds", formData)
      .then((res) => {
        res.status === 200
          ? (window.location.reload(),
            toast.success("آگهی شما با موفقیت برگردادنده شد"))
          : null;
      })
      .catch(() => toast.error("مشکلی در حذف آگهی شما بوجود امد"));
  };

  const handleStatus = () => {
    if (status == 0) {
      return {
        text: "در صف انتشار",
        color: "#4A80E8",
      };
    } else if (status == 1) {
      return {
        text: "منتشر شده",
        color: "#10CC67",
      };
    } else if (status == 2) {
      return {
        text: "نیاز به اصلاح",
        color: "#FED30B",
      };
    } else if (status == 3) {
      return {
        text: "رد شده",
        color: "#F93423",
      };
    } else {
      return {
        text: "نامشخص",
        color: "#000",
      };
    }
  };

  if (image !== undefined) {
    return (
      <>
        <div className={styles.ad_card}>
          {myAdds ? (
            <div
              className={styles.label}
              style={{ background: handleStatus().color }}
            >
              {handleStatus().text}
            </div>
          ) : null}

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
              {status == 0 ? (
                <>
                  <Button className={styles.update}>
                    <Link href={`/userDashboard/myAdds/update/${id}`}>
                      ویرایش
                    </Link>
                  </Button>

                  <Button
                    onClick={() => handleShowDeleteModal()}
                    className={styles.delete}
                  >
                    حذف
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    id="UncontrolledPopover"
                    style={{ margin: "0 auto" }}
                    className={styles.update}
                  >
                    برگرداندن آگهی
                  </Button>
                  <UncontrolledPopover
                    placement="bottom"
                    target="UncontrolledPopover"
                  >
                    <PopoverHeader>برگرداندن آگهی حذف شده</PopoverHeader>
                    <PopoverBody>
                      <Button onClick={() => handleRecoveryAd()}>تایید</Button>
                    </PopoverBody>
                  </UncontrolledPopover>
                </>
              )}
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

          <Modal
            style={{ fontFamily: "dana" }}
            className={styles.modal}
            isOpen={showDeleteModal}
          >
            <ModalHeader>حذف اگهی "{name}"</ModalHeader>
            <ModalBody
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "15px",
                padding: "2rem",
              }}
            >
              <span>آیا می خواهید آگهی مورد نظر را حذف کنید؟</span>
              <Input
                value={reasonDeleting}
                onChange={(e) => setReasonDeleting(e.target.value)}
                type="select"
              >
                <option selected value="" disabled>
                  علت حذف آگهی
                </option>
                <option value="ماشین فروش رفت">ماشین فروش رفت</option>
                <option value="پشیمون شدم">پشیمون شدم</option>
              </Input>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => handleDeleteAd()}
                className={styles.danger}
                style={{ background: "#F93423", color: "#fff" }}
                disabled={reasonDeleting.length === 0 || loading}
              >
                تایید
              </Button>
              <Button
                className={styles.info}
                onClick={() => handleShowDeleteModal()}
                style={{ background: "#4A80E8", color: "#fff" }}
              >
                لغو
              </Button>
            </ModalFooter>
          </Modal>
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
