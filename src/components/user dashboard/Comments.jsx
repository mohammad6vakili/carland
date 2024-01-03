import { Button, Table } from "reactstrap";
import s from "../../../styles/main.module.scss";
import Image from "next/image";
import logo from "../../../public/assets/carland-logo-fff.svg";
import comment from "../../../public/assets/userDashboard/comment.png";
import { LineIco } from "@/src/assets/icons/selected_page_line";

const UserComments = () => {
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
                  <th>تغییر نظر</th>
                  <th>وضعیت</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>۱۴۰۲/۰۲/۲۰</td>
                  <td>جنسش عالی بود و واقعا توصیه میکنم این محصول رو</td>
                  <td>
                    <div className={s.update_delete}>
                      <Button className={s.update}>ویرایش</Button>
                      <Button className={s.delete}>حذف</Button>
                    </div>
                  </td>
                  <td>تایید شده</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </section>
      </div>
    </>
  );
};

export default UserComments;
