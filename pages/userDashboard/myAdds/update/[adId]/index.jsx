import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import styles from "../../../../../styles/main.module.scss";
import Head from "next/head";
import CreateAdd from "@/src/components/user dashboard/CreateAdd";

const page = () => {
  return (
    <>
      <Head>
        <title>بروزرسانی آگهی</title>
      </Head>
      <Header />
      <div className={styles.userDashboard_container}>
        <CreateAdd type={"edit"} />
      </div>
    </>
  );
};

export default page;
