import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import UDNavigation from "@/src/components/user dashboard/UDNavigation";
import Adds from "@/src/components/user dashboard/Adds";
import styles from "../../../../styles/main.module.scss";
import Head from "next/head";
import CreateAdd from "@/src/components/user dashboard/CreateAdd";

const page = () => {
  return (
    <>
      <Head>
        <title>ساخت آگهی جدید</title>
      </Head>
      <Header />
      <div className={styles.userDashboard_container}>
        <CreateAdd />
      </div>
      <Footer />
    </>
  );
};

export default page;
