import s from "../../../styles/main.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useHttp from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";

const TicketPage = () => {
  const router = useRouter();
  const { httpService } = useHttp(true);
  const [ticketInfo, setTicketInfo] = useState();

  const handleGetTicketById = (id) => {
    httpService
      .get(`chats/${id}`)
      .then((res) => {
        res.status === 200 ? setTicketInfo(res.data) : null;
      })
      .catch((err) => {
        toast.error("تیکت مورد نظر شما پیدا نشد");
        // router.push("/userDashboard/myTicket");
      });
  };

  useEffect(() => {
    handleGetTicketById(router.query.ticketId);
  }, [router]);

  return (
    <>
      <div className={s.ticket_page}></div>
    </>
  );
};

export default TicketPage;
