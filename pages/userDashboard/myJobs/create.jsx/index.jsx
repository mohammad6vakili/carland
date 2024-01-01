import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import UDNavigation from "@/src/components/user dashboard/UDNavigation";
import styles from "../../../../styles/main.module.scss";
import Head from "next/head";
import CreateJob from "@/src/components/user dashboard/CreateJob";

const page = () => {
  return (
    <>
      <Head>
        <title>ساخت شغل جدید</title>
      </Head>
      <Header />
      <div className={styles.userDashboard_container}>
        <UDNavigation />
        <CreateJob />
      </div>
      <Footer />
    </>
  );
};

export default page;
