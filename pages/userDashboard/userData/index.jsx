import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import UDNavigation from "@/src/components/user dashboard/UDNavigation";
import styles from "../../../styles/main.module.scss";
import UserDashboard from "@/src/components/user dashboard/UserDashboard";
import UserData from "@/src/components/user dashboard/UserData";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <title>داشبورد</title>
      </Head>
      <Header />
      <div className={styles.userDashboard_container}>
        <UDNavigation />
        <UserData />
      </div>
      <Footer />
    </>
  );
};

export default page;
