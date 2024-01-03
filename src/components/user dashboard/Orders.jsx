import { Table, Button } from "reactstrap";
import s from "../../../styles/main.module.scss";

const UserOrders = () => {
  return (
    <>
      <div className={s.user_orders}>
        <section className={s.title}>
          <span>سفارش‌ها</span>
        </section>

        <section className={s.form}>
          <div className={s.description}>
            <p className={s.des}>
              وضعیت مرسوله در حال ارسال{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
              >
                <path
                  d="M0.224132 2.30051C-0.0365878 0.510914 2.02302 -0.678206 3.44249 0.442382L13.4304 8.32719C14.9109 9.49597 14.0988 11.8766 12.2126 11.8969L8.95284 11.9319C8.24603 11.9395 7.59573 12.3197 7.24231 12.9318L5.7556 15.5069C4.80707 17.1498 2.31793 16.6724 2.04444 14.7952L0.224132 2.30051Z"
                  fill="#4A80E8"
                />
              </svg>
            </p>

            <span className={s.order_name}>بی ام دبلبو ۵۱۳</span>
          </div>

          <div className={s.steps}></div>

          <div className={s.table}>
            <Table>
              <thead>
                <tr>
                  <th>محصول</th>
                  <th>کد مرسوله</th>
                  <th>تاریخ ثبت</th>
                  <th>قیمت</th>
                  <th>وضعیت</th>
                  <th>فاکتور</th>
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

export default UserOrders;
