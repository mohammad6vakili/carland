import { toPersianString } from "@/src/hooks/functions";
import CommentCard from "./CommentCard";
import jalaliMoment from "jalali-moment";

export const convertDate = (date) => {
  let convertedDate = toPersianString(date.split("T", 1)).replaceAll("-", "/");
  // const dateTime = new Date(date);
  // const jdn = Math.floor(dateTime.getTime() / 8.64e7) + 1721119;
  // const shamsiDate = jalaliMoment.fromJDN(jdn);
  // const shamsiDateString = shamsiDate.format("jYY/jMM/jDD");

  return convertedDate;
};

const CommentCards = ({ comments }) => {
  return (
    <>
      {comments.length !== 0
        ? comments.map((comment, index) => (
            <CommentCard
              key={Math.random() * index}
              profile={comment.user_image_profile}
              name={comment.user_name}
              content={comment.comment}
              rate={comment.rate}
              date={convertDate(comment.created_at)}
            />
          ))
        : null}
    </>
  );
};

export default CommentCards;
