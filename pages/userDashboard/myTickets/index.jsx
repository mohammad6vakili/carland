import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import UDNavigation from "@/src/components/user dashboard/UDNavigation";
import styles from "../../../styles/main.module.scss";
import UserTickets from "@/src/components/user dashboard/Tickets";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <title>تیکت های من</title>
      </Head>
      <Header />
      <div className={styles.userDashboard_container}>
        <UDNavigation />
        <UserTickets />
      </div>
      <Footer />
    </>
  );
};

export default page;
