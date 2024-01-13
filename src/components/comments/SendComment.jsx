import { useFormik } from "formik";
import * as Yup from "yup";
import s from "../../../styles/main.module.scss";
import Image from "next/image";
import {
  Button,
  ButtonGroup,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  UncontrolledDropdown,
} from "reactstrap";
import useHttp from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";

const SendComment = ({ page }) => {
  const { httpService } = useHttp(true);
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [rate, setRate] = useState(5);
  const [commentContent, setCommentContent] = useState("");

  const validationSchema = Yup.object().shape({
    comment: Yup.string().required("لطفا ابتدا فیلد بالا را پر کنید"),
  });

  const formik = useFormik({
    initialValues: {
      comment: "",
      rate: "",
    },

    validationSchema,

    onSubmit: (values) => {
      page === "club" ? handleClubComment(values) : handleJobsComment();
    },
  });

  const handleClubComment = (values) => {
    const formData = new FormData();
    formData.append("club_id", pathname?.substring(6, pathname.length));
    formData.append("content", values.comment);

    httpService
      .post("club/CreateComment", formData)
      .then((res) => {
        res.status === 200
          ? (toast.success("کامنت شما با موفقیت برای بررسی ارسال شد"),
            values.comment === "")
          : null;
      })
      .catch((err) => {
        toast.error("مشکلی در ارسال کامنت بوجود امد");
      });
  };

  const handleJobsComment = (values) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("rate", rate);
    formData.append("serviceId", pathname?.substring(6, pathname.length));
    formData.append("comment", commentContent);

    rate || commentContent.length !== 0
      ? httpService
          .post("serviceRatings", formData)
          .then((res) => {
            res.status === 200
              ? (toast.success("کامنت شما با موفقیت برای بررسی ارسال شد"),
                values.comment === "",
                setOpenModal(!openModal))
              : null;
            setLoading(false);
          })
          .catch((err) => {
            toast.error("مشکلی در ارسال کامنت بوجود امد");
            setLoading(false);
          })
      : toast.error("لطفا ابتدا اطلاعات مورد نظر را تکمیل کنید");
  };

  return (
    <>
      <Form onSubmit={formik.handleSubmit} className={s.send_comment}>
        {page === "club" ? (
          <>
            <div className={s.title}>
              <span>
                <Image
                  src={"/assets/trades/triangle.svg"}
                  alt=""
                  width={15}
                  height={15}
                />
              </span>{" "}
              <p>ارسال دیدگاه</p>
            </div>

            <div className={s.content}>
              <Input
                style={{
                  border: "1px solid #4A80E8",
                  background: "rgba(74, 128, 232, 0.07)",
                  width: "100%",
                }}
                type="textarea"
                placeholder="توضیحات"
                name="comment"
                value={formik.values.comment}
                onChange={formik.handleChange}
              />
            </div>

            <div className={s.btn}>
              <Button
                disabled={loading}
                type="submit"
                style={{ width: "108px" }}
                color="main-primary"
              >
                ارسال
              </Button>
            </div>
          </>
        ) : (
          <div className={s.comment_btn}>
            <span>با ثبت نظر باعث ارتقای شغل مورد نظر خودتان شوید</span>
            <Button onClick={() => setOpenModal(!openModal)}>ثبت نظر</Button>
          </div>
        )}
      </Form>

      <Modal
        centered
        isOpen={openModal}
        toggle={() => setOpenModal(!openModal)}
      >
        <ModalHeader>نظرات خود را با ما به اشتراک بگذارید</ModalHeader>
        <ModalBody
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "dana",
            padding: "2rem 10px",
          }}
          className={s.comment_modal}
        >
          <p>امتیاز خود را مشخص کنید</p>
          <ReactStars
            value={rate}
            onChange={(e) => setRate(e)}
            count={5}
            size={24}
            emptyIcon={<i className="far fa-star"></i>}
            // halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
          <br />

          <Input placeholder="متن نظر" />
        </ModalBody>
        <ModalFooter style={{ display: "flex", justifyContent: "center" }}>
          <Button
            disabled={loading}
            style={{ color: "#fff", background: "#4a80e8" }}
            onClick={handleJobsComment}
          >
            ثبت
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default SendComment;
