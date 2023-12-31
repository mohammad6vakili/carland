import Image from "next/image";
import s from "../../../../styles/main.module.scss";
import { url } from "@/src/axiosConfig/useHttp";
import { convertDate } from "../../comments/CommentCards";

const TicketCards = ({ userId, profile, name, date, content }) => {
  return (
    <>
      {userId !== 1 ? (
        <div className={s.user_ticket}>
          <section className={s.image}>
            <Image src={url + profile} alt="profile" width={70} height={70} />
          </section>

          <section className={s.texts}>
            <div className={s.head}>
              <span className={s.name}>{name}</span>
              <span>{convertDate(date)}</span>
            </div>

            <div className={s.content}>{content}</div>
          </section>
        </div>
      ) : (
        <div className={s.admin_reply}>
          <section className={s.reply_title}>پاسخ</section>
          <section className={s.reply_content}>
            <div className={s.head}>
              <p className={s.name}>
                ادمین <span>کارلند</span>
              </p>

              <span>{convertDate(date)}</span>
            </div>

            <div className={s.text}>{content}</div>
          </section>
        </div>
      )}
    </>
  );
};

export default TicketCards;
