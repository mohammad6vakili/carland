import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import styles from "../../../../../styles/main.module.scss";
import Head from "next/head";
import UpdateJob from "@/src/components/user dashboard/UpdateJob";

const page = () => {
  return (
    <>
      <Head>
        <title>بروزرسانی شغل</title>
      </Head>
      <Header />
      <div className={styles.userDashboard_container}>
        <UpdateJob />
      </div>
      <Footer />
    </>
  );
};

export default page;
