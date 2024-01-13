import { Button, Input, InputGroup, Spinner } from "reactstrap";
import s from "../../../../styles/main.module.scss";
import { useState } from "react";
import useHttp from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";

const SendTicket = ({ lastTicket }) => {
  const [ticketValue, setTicketValue] = useState("");
  const [loading, setLoading] = useState("");
  const { httpService } = useHttp(true);

  const handelSendTikcet = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("content", ticketValue);
    ticketValue.length > 1
      ? httpService
          .post(`tickets/${lastTicket}/reply`, formData)
          .then((res) => {
            res.status >= 200 && res.status < 300
              ? (toast.success("پاسخ شما با موفقیت ارسال شد"),
                window.location.reload())
              : null;
            setLoading(false);
          })
          .catch(() => {
            toast.error("مشکلی در ارسال پاسخ شما به ادمین بوجود آمد");
            setLoading(false);
          })
      : null;
  };

  return (
    <>
      <div className={s.send_ticket}>
        <section className={s.title}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="17"
            viewBox="0 0 15 17"
            fill="none"
          >
            <path
              d="M11.5575 0.442484C12.977 -0.678104 15.0366 0.511006 14.7759 2.3006L12.9414 14.8928C12.6694 16.7593 10.2017 17.2463 9.24106 15.623L7.58079 12.8175C7.2208 12.2092 6.56645 11.8361 5.8596 11.8361L2.88618 11.8361C0.989139 11.8361 0.157949 9.44173 1.64693 8.26627L11.5575 0.442484Z"
              fill="#4A80E8"
            />
          </svg>
          <span>ارسال تیکت جدید</span>
        </section>

        <section className={s.box}>
          <div className={s.head}>تایپ کنید</div>

          <InputGroup className={s.inputGroup}>
            <Input
              onChange={(e) => setTicketValue(e.target.value)}
              value={ticketValue}
              placeholder="پاسخ به ادمین"
            />

            <Button disabled={loading} onClick={handelSendTikcet}>
              {loading ? (
                <Spinner style={{ width: "12px", height: "12px" }}></Spinner>
              ) : null}{" "}
              ارسال
            </Button>
          </InputGroup>
        </section>
      </div>
    </>
  );
};

export default SendTicket;
