import { useFormik } from "formik";
import * as Yup from "yup";
import s from "../../../styles/main.module.scss";
import Image from "next/image";
import {
  Button,
  ButtonGroup,
  Form,
  Input,
  UncontrolledDropdown,
} from "reactstrap";
import useHttp from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SendComment = ({ page }) => {
  const { httpService } = useHttp(true);
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

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
    const formData = new FormData();
    formData.append("rate", "");
    formData.append("serviceId", pathname?.substring(6, pathname.length));
    formData.append("comment", values.comment);

    httpService
      .post("serviceRatings", formData)
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

  return (
    <>
      <Form onSubmit={formik.handleSubmit} className={s.send_comment}>
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

        {page !== "club" ? (
          <div>
            <ButtonGroup>
              <UncontrolledDropdown></UncontrolledDropdown>
            </ButtonGroup>
          </div>
        ) : (
          <></>
        )}

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
      </Form>
    </>
  );
};

export default SendComment;
