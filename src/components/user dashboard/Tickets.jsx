import { Button, Input, Spinner, Table } from "reactstrap";
import s from "../../../styles/main.module.scss";
import useHttp from "@/src/axiosConfig/useHttp";
import React, { useEffect, useState } from "react";

const UserTickets = () => {
  const { httpService } = useHttp(true);
  const [tickets, setTickets] = useState(null);

  useEffect(() => {
    httpService
      .get("ticket")
      .then((res) => {
        res.status === 200 ? setTickets(res.data.tickets) : null;
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  return (
    <>
      <div className={s.user_tickets}>
        <section className={s.title}>
          <span>تیکت‌های من</span>
        </section>

        <section className={s.tickets_table}>
          <Table className={s.table}>
            <thead className={s.table_head}>
              <tr>
                <th>
                  <span>نوع مشکل</span>
                </th>
                <th>تاریخ ثبت</th>
                <th>وضعیت</th>
                <th>جزئیات</th>
                <th>تغییر وضعیت</th>
              </tr>
            </thead>

            <tbody>
              {tickets !== null ? (
                tickets.length !== 0 ? (
                  tickets.map((ticket, index) => {
                    <tr>
                      <th scope="row">مشکل شارژ کیف پول در هنگام شارژ</th>
                      <td>۲ روز پیش</td>
                      <td>پاسخ داده شده</td>
                      <td>
                        <Button className={s.see_ticket}>مشاهده</Button>
                      </td>
                      <td>
                        <Button className={s.see_ticket}>بستن تیکت</Button>
                      </td>
                    </tr>;
                  })
                ) : (
                  <tr className={s.noTicket}>تیکتی وجود ندارد</tr>
                )
              ) : (
                <Spinner style={{ margin: "0 auto" }}></Spinner>
              )}
            </tbody>
          </Table>
        </section>

        <section className={s.send_ticket}>
          <div className={s.title}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="18"
                viewBox="0 0 15 18"
                fill="none"
              >
                <path
                  d="M11.0575 1.11241C12.477 -0.00818186 14.5366 1.18093 14.2759 2.97052L12.4414 15.5627C12.1694 17.4292 9.70171 17.9163 8.74106 16.2929L7.08079 13.4874C6.7208 12.8791 6.06645 12.506 5.3596 12.506L2.38618 12.506C0.489139 12.506 -0.342051 10.1116 1.14693 8.93619L11.0575 1.11241Z"
                  fill="#4A80E8"
                />
              </svg>{" "}
              ارسال تیکت
            </span>
          </div>

          <div className={s.data_input}>
            <Input placeholder="نام و نام خانوادگی" />
            <Input placeholder="نوع مشکل" />
          </div>

          <div className={s.title_input}>
            <Input placeholder="موضوع" />
          </div>

          <div className={s.details_input}>
            <Input type="textarea" placeholder="توضیحات" />
          </div>

          <div className={s.submit}>
            <Button>ارسال تیکت</Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default UserTickets;
