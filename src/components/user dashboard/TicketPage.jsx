import s from "../../../styles/main.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useHttp from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";
import TicketCards from "./tickets/TicketCards";
import MySkeleton from "../skeleton/Skeleton";
import SendTicket from "./tickets/SendTicket";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

const TicketPage = () => {
  const router = useRouter();
  const { httpService } = useHttp(true);
  const [loading, setLoading] = useState(false);
  const [ticketInfo, setTicketInfo] = useState(null);
  const [endTicketModal, setEndTicketModal] = useState(false);

  const toggle = () => {
    setEndTicketModal(!endTicketModal);
  };

  //end ticket
  const handleEndTicket = () => {
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

  //get ticket
  const handleGetTicketById = (id) => {
    httpService
      .get(`chats/${id}`)
      .then((res) => {
        res.status === 200
          ? (setEndTicketModal(false), setTicketInfo(res.data))
          : null;
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

              <SendTicket />

              <Button
                onClick={() => setEndTicketModal(true)}
                className={s.close_btn}
              >
                بستن تیکت <IoCloseCircleOutline style={{ color: "#F93423" }} />
              </Button>
            </section>
          </>
        ) : (
          <>
            <MySkeleton width={"100px"} height={"40px"} />
            <MySkeleton width={"100%"} height={"500px"} />
          </>
        )}
      </div>

      <Modal isOpen={endTicketModal} toggle={toggle}>
        <ModalBody>آیا می خواهید تیکت را ببندید؟</ModalBody>
        <ModalFooter>
          <Button onClick={handleEndTicket}>بله</Button>
          <Button onClick={toggle}>خیر</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default TicketPage;
