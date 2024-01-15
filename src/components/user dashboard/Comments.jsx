import { Button, Spinner, Table } from "reactstrap";
import s from "../../../styles/main.module.scss";
import Image from "next/image";
import logo from "../../../public/assets/carland-logo-fff.png";
import comment from "../../../public/assets/userDashboard/comment.png";
import { LineIco } from "@/src/assets/icons/selected_page_line";
import { useEffect, useState } from "react";
import useHttp from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";
import { convertDate } from "../comments/CommentCards";

const UserComments = () => {
  const { httpService } = useHttp(true);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    httpService
      .get("getUserComments")
      .then((res) => {
        res.status === 200 ? setComments(res.data.comments) : null;
      })
      .catch(() => {
        toast.error("مشکلی در دریافت اطلاعات بوجود امد");
      });
  }, []);

  const handleCommnetStatus = (status) => {
    if (status == 0) {
      return {
        text: "در حال بررسی",
        color: "",
      };
    } else if (status == 1) {
      return {
        text: "تایید شده",
        color: "",
      };
    } else if (status == 2) {
      return {
        text: "رد شده",
        color: "",
      };
    } else {
      return {
        text: "نامشخص",
        color: "",
      };
    }
  };

  return (
    <>
      <div className={s.user_comments}>
        <section className={s.comment_banner}>
          <div className={s.text}>
            <section className={s.logo}>
              <Image src={comment} alt="" />
            </section>

            <section className={s.text}>
              <p>از کارلند راضی هستید؟</p>
              <span>با ثبت نظرات خود به از ما حمایت کنید!</span>
            </section>
          </div>

          <div className={s.logo_name}>
            <section className={s.name}>
              <p>کارلند</p>
              <p>CARLAND</p>
            </section>

            <section>
              <LineIco />
            </section>

            <section className={s.logo}>
              <Image src={logo} alt="" />
            </section>
          </div>
        </section>

        <section className={s.comments}>
          <div className={s.title}>
            <span>نظرات من</span>

            <span className={s.see_all}>لیست نظرات</span>
          </div>

          <div className={s.comments_table}>
            <Table className={s.table}>
              <thead>
                <tr>
                  <th>تصویر</th>
                  <th>تاریخ ثبت</th>
                  <th>متن نظر</th>
                  <th>وضعیت</th>
                </tr>
              </thead>

              <tbody>
                {comments ? (
                  comments.length !== 0 ? (
                    comments.map((comment, index) => (
                      <tr key={comment.id}>
                        <td></td>
                        <td>{convertDate(comment.created_at)}</td>
                        <td>{comment.content}</td>
                        <td>
                          {comment.status !== undefined
                            ? handleCommnetStatus(comment.status).text
                            : "-"}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className={s.noTicket}>تیکتی وجود ندارد</tr>
                  )
                ) : (
                  <tr>
                    <td>
                      <Spinner></Spinner>
                    </td>
                    <td>
                      <Spinner></Spinner>
                    </td>
                    <td>
                      <Spinner></Spinner>
                    </td>
                    <td>
                      <Spinner></Spinner>
                    </td>
                    <td>
                      <Spinner></Spinner>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </section>
      </div>
    </>
  );
};

export default UserComments;
