import { usePathname } from "next/navigation";
import s from "../../../styles/main.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";

const TicketPage = () => {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query.ticketId);
  }, []);

  return (
    <>
      <div className={s.ticket_page}></div>
    </>
  );
};

export default TicketPage;
