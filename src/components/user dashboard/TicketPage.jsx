import s from "../../../styles/main.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useHttp from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";
import TicketCards from "./tickets/TicketCards";

const TicketPage = () => {
  const router = useRouter();
  const { httpService } = useHttp(true);
  const [ticketInfo, setTicketInfo] = useState(null);

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
    const id = router.query.ticketId;

    id ? handleGetTicketById(id) : null;
  }, [router]);

  return (
    <>
      <div className={s.ticket_page}>
        {ticketInfo ? (
          <>
            <section className={s.title}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
              >
                <circle cx="5" cy="5" r="5" fill="#4A80E8" />
              </svg>
              {ticketInfo.chats[0].content}
            </section>

            <section className={s.messages}>
              {ticketInfo ? (
                ticketInfo.chats.length !== 0 ? (
                  ticketInfo.chats.map((ticket, index) => (
                    <TicketCards
                      key={ticket.id}
                      profile={ticketInfo.user.image_profile}
                      name={ticketInfo.user.name}
                      date={ticket.created_at}
                      content={ticket.content}
                      userId={ticket.user_id}
                    />
                  ))
                ) : (
                  <>اطلاعات تیکت شما یافت نشد</>
                )
              ) : null}
            </section>
          </>
        ) : null}
      </div>
    </>
  );
};

export default TicketPage;
