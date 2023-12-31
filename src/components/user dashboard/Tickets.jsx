import {
  Button,
  Input,
  InputGroup,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  Spinner,
  Table,
} from "reactstrap";
import s from "../../../styles/main.module.scss";
import useHttp from "@/src/axiosConfig/useHttp";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import Link from "next/link";
import { convertDate } from "../comments/CommentCards";

const UserTickets = () => {
  const { httpService } = useHttp(true);
  const [tickets, setTickets] = useState(null);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    category: Yup.string().required(
      "لطفا برای ثبت تیکت نوع مشکل خود را وارد کنید"
    ),
    subject: Yup.string().required("موضوع تیکت خود را بنویسید"),
    content: Yup.string().required("متن تیکت خود را بنویسید"),
  });

  const formik = useFormik({
    initialValues: {
      category: "",
      subject: "",
      content: "",
    },

    validationSchema,

    onSubmit: (values) => {
      setLoading(true);
      const formData = new FormData();
      formData.append("category", values.category);
      formData.append("subject", values.subject);
      formData.append("content", values.content);

      httpService
        .post("tickets", formData)
        .then((res) => {
          res.status > 200 && res.status < 300
            ? (handleGetTickets(), toast.success("تیکت شما با موفق ارسال شد"))
            : null;
          setLoading(false);
        })
        .catch((err) => {
          toast.error("مشکلی در ارسال تیکت شما بوجود امد");
          setLoading(false);
        });
    },
  });

  //request
  const handleGetTickets = () => {
    httpService
      .get("ticket")
      .then((res) => {
        res.status === 200 ? setTickets(res.data.tickets) : null;
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const handleEndTicket = (id) => {
    setLoading(true);

    httpService
      .get(`CloseTicket/${ticketInfo.chats[0].ticket_id}`)
      .then((res) => {
        res.status === 200 ? toast.success("تیکت شما با موفقیت بسته شد") : null;
      })
      .catch(() => {
        toast.error("مشکلی در بستن تیکت بوجود امد");
      });
  };

  useEffect(() => {
    handleGetTickets();
  }, []);

  const handleTicketType = (cat) => {
    if (cat === 0) {
      return "سایر";
    } else if (cat === 1) {
      return "امور مالی";
    } else if (cat === 2) {
      return "مشکل فنی";
    } else {
      return "نوع مشکل";
    }
  };
  const handleTicketStatus = (status) => {
    if (status === 0) {
      return { text: "خوانده نشده", style: "s.status_0" };
    } else if (status === 1) {
      return { text: "پاسخ پشتیبان", style: "s.status_1" };
    } else if (status === 2) {
      return { text: "پاسخ کاربر", style: "s.status_2" };
    } else if (status === 3) {
      return { text: "خوانده شده", style: `s.status_3` };
    } else if (status === 4) {
      return { text: "بسته شده", style: "s.status_4" };
    } else {
      return { text: "نامشخص", style: "s.status" };
    }
  };
  const handleTicketTime = (time) => {
    const givenTimeString = time;
    const referenceTimeString = "2023-12-28T10:00:00.000000Z"; // Replace this with the reference time

    const givenTime = new Date(givenTimeString);
    const referenceTime = new Date(referenceTimeString);

    const differenceInMilliseconds = givenTime - referenceTime;
    const differenceInMinutes = Math.floor(
      differenceInMilliseconds / (1000 * 60)
    );

    let elapsedTimeString;

    if (differenceInMinutes < 60) {
      elapsedTimeString = `${differenceInMinutes} دقیقه گذشته.`;
    } else {
      const differenceInHours = Math.floor(differenceInMinutes / 60);
      const differenceInDays = Math.floor(differenceInHours / 24);

      if (differenceInDays > 0) {
        elapsedTimeString = `${differenceInDays} روز و  ${
          differenceInHours % 24
        } ساعت گذشته.`;
      } else {
        elapsedTimeString = `${differenceInHours} ساعت گذشته.`;
      }
    }

    return `${elapsedTimeString}`;
  };

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
              {tickets ? (
                tickets.length !== 0 ? (
                  tickets.map((ticket, index) => (
                    <tr key={ticket.id}>
                      <td>{handleTicketType(ticket.category)}</td>
                      <td>{convertDate(ticket.created_at)}</td>
                      <td className={handleTicketStatus(ticket.status).style}>
                        {handleTicketStatus(ticket.status).text}
                      </td>
                      <td>
                        <Link href={`/userDashboard/tickets/${ticket.id}`}>
                          <Button className={s.see_ticket}>مشاهده</Button>
                        </Link>
                      </td>
                      <td>
                        <Button
                          onClick={() => handleEndTicket(ticket.id)}
                          className={s.end_ticket}
                        >
                          بستن تیکت
                        </Button>
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
        </section>

        <form onSubmit={formik.handleSubmit} className={s.send_ticket}>
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
            <Input
              type="select"
              placeholder="نوع مشکل"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
            >
              <option disabled value="" defaultValue>
                نوع مشکل
              </option>
              <option value="1">امور مالی</option>
              <option value="2">مشکل فنی</option>
              <option value="0">سایر</option>
            </Input>
            {formik.errors.category && formik.touched.category && (
              <span className={s.error}>{formik.errors.category}</span>
            )}
            {/* <Input placeholder="نام و نام خانوادگی" /> */}
          </div>

          <div className={s.title_input}>
            <Input
              placeholder="موضوع"
              name="subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
            />
            {formik.errors.subject && formik.touched.subject && (
              <span className={s.error}>{formik.errors.subject}</span>
            )}
          </div>

          <div className={s.details_input}>
            <Input
              type="textarea"
              placeholder="توضیحات"
              name="content"
              value={formik.values.content}
              onChange={formik.handleChange}
            />
            {formik.errors.content && formik.touched.content && (
              <span className={s.error}>{formik.errors.content}</span>
            )}
          </div>

          <div className={s.submit}>
            <Button disabled={loading} type="submit">
              {loading ? (
                <Spinner style={{ width: "15px", height: "15px" }}></Spinner>
              ) : null}{" "}
              ارسال تیکت
            </Button>
          </div>
        </form>
      </div>

      {/* <Modal isOpen={endTicketModal} toggle={toggle}>
        <ModalBody>آیا می خواهید تیکت را ببندید؟</ModalBody>
        <ModalFooter>
          <Button onClick={handleEndTicket}>بله</Button>
          <Button onClick={toggle}>خیر</Button>
        </ModalFooter>
      </Modal> */}
    </>
  );
};

export default UserTickets;
