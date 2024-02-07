import s from "@/styles/custom-errors.module.scss";
function Error({ statusCode }) {
  return (
    <div className={s.error_page}>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
