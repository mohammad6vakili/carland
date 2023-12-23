import Email from "./Email";
import styles from "./login.module.scss";

const VerifyCode = () => {
  return (
    <>
      <section className={styles.login_page}>
        <Email verify={true} />
      </section>
    </>
  );
};

export default VerifyCode;
