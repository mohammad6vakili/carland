import Image from "next/image";
import s from "../../../../styles/main.module.scss";
import { StarFilled, LeftOutlined } from "@ant-design/icons";
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
import useHttp, { url } from "@/src/axiosConfig/useHttp";
import { convertTime, toPersianString } from "@/src/hooks/functions";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const JobsCard = ({
  image,
  rate,
  title,
  description,
  isOpen,
  location,
  timeFrom,
  timeTo,
  id,
  myJobs,
  status,
}) => {
  const router = useRouter();
  const { httpService } = useHttp(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reasonDeleting, setReasonDeleting] = useState("");

  const handleShowDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  const handleDeleteJob = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("service_id", id);
    formData.append("ReasonDeletion", reasonDeleting);

    httpService
      .post("DeleteService", formData)
      .then((res) => {
        res.status === 200
          ? (window.location.reload(),
            toast.success("آگهی شما با موفقیت به مشاغل حذف شده انتقال یافت"))
          : null;
        setLoading(false);
      })

      .catch(() => {
        toast.error("مشکلی در حذف شغل شما بوجود امد");
        setLoading(false);
      });
  };

  const handleRecoveryJob = () => {
    const formData = new FormData();
    formData.append("service_id", id);
    httpService
      .post("ActiveService", formData)
      .then((res) => {
        res.status === 200
          ? (window.location.reload(),
            toast.success("شغل شما با موفقیت برگردادنده شد"))
          : null;
      })
      .catch(() => toast.error("مشکلی در برگرداندن شغل مورد نظر بوجود امد"));
  };

  const handleStatus = () => {
    if (status == 0) {
      return {
        text: "غیر فعال",
        color: "#F93423",
      };
    } else if (status == 1) {
      return {
        text: "فعال",
        color: "#10CC67",
      };
    } else if (status == 2) {
      return {
        text: "در انتظار تایید",
        color: "#FED30B",
      };
    } else if (status == 3) {
      return {
        text: "رد شده",
        color: "#F93423",
      };
    } else {
      return {
        text: "حذف شده",
        color: "#F93423",
      };
    }
  };

  return (
    <section className={s.job_card}>
      {myJobs ? (
        <div className={s.label} style={{ background: handleStatus().color }}>
          {handleStatus().text}
        </div>
      ) : null}

      <div className={s.image}>
        <Image src={url + "/" + image} alt="" width={250} height={200} />{" "}
        <div className={s.rate_box}>
          <StarFilled style={{ color: "#FFD029" }} /> {toPersianString(rate)}
        </div>
      </div>

      <div className={s.texts}>
        <h1 className={s.title}>{title}</h1>
        <p>{description}</p>
      </div>

      <div className={s.status}>
        {isOpen === 1 ? (
          <div className={s.is_open}>
            <div className={s.circle}></div>
            باز است
          </div>
        ) : (
          <div className={s.not_open}>
            <div className={s.circle}></div>
            بسته است
          </div>
        )}

        <div className={s.time_location}>
          <p className={s.work_time}>
            ساعت کاری: {toPersianString(convertTime(timeFrom))} تا{" "}
            {toPersianString(convertTime(timeTo))}
          </p>
          <p className={s.location}>
            <Image
              src={"/assets/offers/location.png"}
              alt=""
              width={14}
              height={14}
            />
            {location}
          </p>
        </div>
      </div>

      {myJobs ? (
        <>
          <div className={s.update_delete}>
            {handleStatus().text === "غیر فعال" ? (
              <>
                <Button
                  id="UncontrolledPopover"
                  style={{ margin: "0 auto" }}
                  className={s.update}
                >
                  برگرداندن آگهی
                </Button>
                <UncontrolledPopover
                  placement="bottom"
                  target="UncontrolledPopover"
                >
                  <PopoverHeader>برگرداندن آگهی حذف شده</PopoverHeader>
                  <PopoverBody>
                    <Button onClick={() => handleRecoveryJob()}>تایید</Button>
                  </PopoverBody>
                </UncontrolledPopover>
              </>
            ) : (
              <>
                <Button className={s.update}>
                  <Link href={`/userDashboard/myJobs/update/${id}`}>
                    ویرایش
                  </Link>
                </Button>

                <Button
                  onClick={() => handleShowDeleteModal()}
                  className={s.delete}
                >
                  حذف
                </Button>
              </>
            )}
          </div>
        </>
      ) : (
        <Link className={s.button} href={`/jobs/${id}`}>
          <Button>
            مشاهده{" "}
            <div>
              <LeftOutlined />
            </div>
          </Button>
        </Link>
      )}

      <Modal
        style={{ fontFamily: "dana" }}
        className={s.modal}
        isOpen={showDeleteModal}
      >
        <ModalHeader>حذف مشاغل "{title}"</ModalHeader>
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
            onClick={() => handleDeleteJob()}
            className={s.danger}
            style={{ background: "#F93423", color: "#fff" }}
            disabled={reasonDeleting.length === 0 || loading}
          >
            تایید
          </Button>
          <Button
            className={s.info}
            onClick={() => handleShowDeleteModal()}
            style={{ background: "#4A80E8", color: "#fff" }}
          >
            لغو
          </Button>
        </ModalFooter>
      </Modal>
    </section>
  );
};

export default JobsCard;
