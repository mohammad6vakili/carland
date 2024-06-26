import { toPersianString } from "@/src/hooks/functions";
import s from "../../../styles/main.module.scss";
import { DislikeFilled, LikeFilled } from "@ant-design/icons";
import Image from "next/image";
import ReactStars from "react-rating-stars-component";
import { url } from "@/src/axiosConfig/useHttp";

const CommentCard = ({
  profile,
  name,
  date,
  content,
  rate,
  reactions,
  reply,
}) => {
  return (
    <>
      <div className={s.comment_card}>
        <div className={s.content}>
          <div className={s.image}>
            <Image src={url + profile} alt="" width={50} height={50} />
          </div>

          <div className={s.texts}>
            <div className={s.title}>
              <h1>{name}</h1>
              <span>{date}</span>
            </div>
            <p>{content}</p>

            <div
              className={s.rate_react}
              style={reply ? { borderBottom: "1px solid #E6E6E6" } : {}}
            >
              <div className={s.rate}>
                <ReactStars
                  value={rate}
                  count={5}
                  size={24}
                  emptyIcon={<i className="far fa-star"></i>}
                  // halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                {toPersianString(rate)} (امتیاز)
              </div>

              {reactions ? (
                <div className={s.reacts}>
                  <div className={s.dislikes}>
                    {toPersianString(reactions.dislikes)}
                    <div className={s.icon}>
                      <DislikeFilled style={{ color: "#fff" }} />
                    </div>
                  </div>

                  <div className={s.likes}>
                    {toPersianString(reactions.likes)}
                    <div className={s.icon}>
                      <LikeFilled style={{ color: "#fff" }} />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {reply ? (
          <div className={s.reply}>
            <div className={s.title}>پاسخ</div>
            <section className={s.box}>
              <div className={s.name}>{reply.name}</div>
              <div className={s.content}>{reply.content}</div>
            </section>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default CommentCard;
