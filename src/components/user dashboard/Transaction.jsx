import { Button, Table } from "reactstrap";
import s from "../../../styles/main.module.scss";

const UserTransactions = () => {
  return (
    <>
      <div className={s.user_transactions}>
        <section className={s.title}>
          <span>تراکنش‌ها</span>
        </section>

        <section className={s.table}>
          <Table>
            <thead>
              <tr>
                <th>نوع تراکنش</th>
                <th>شماره درخواست</th>
                <th>تاریخ ثبت</th>
                <th>مبلغ</th>
                <th>وضعیت</th>
                <th>جزئیات</th>
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
        </section>
      </div>
    </>
  );
};

export default UserTransactions;
