import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import UDNavigation from "@/src/components/user dashboard/UDNavigation";
import styles from "../../styles/main.module.scss";
import UserDashboard from "@/src/components/user dashboard/UserDashboard";
import Head from "next/head";
import { baseUrl } from "@/src/axiosConfig/useHttp";
import axios from "axios";

const index = () => {
  return (
    <>
      <Head>
        <title>داشبورد کاربر</title>
        <meta property="og:title" content="داشبورد کاربر" key="داشبورد" />
      </Head>
      <Header />
      <section className={styles.userDashboard_container}>
        <UDNavigation />
        <UserDashboard />
      </section>
    </>
  );
};

export default index;
