import s from "@/styles/custom-errors.module.scss";

export default function Custom500() {
  return (
    <div className={s.server_error_page}>
      <h1>500 - Server-side error occurred</h1>
    </div>
  );
}
