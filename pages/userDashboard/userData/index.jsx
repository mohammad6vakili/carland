import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import UDNavigation from "@/src/components/user dashboard/UDNavigation";
import styles from "../../../styles/main.module.scss";
import UserDashboard from "@/src/components/user dashboard/UserDashboard";
import UserData from "@/src/components/user dashboard/UserData";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  return (
    <>
      <Head>
        <title>اطلاعات کاربری</title>
      </Head>
      <Header />
      <section className={styles.userDashboard_container}>
        <UDNavigation />
        <UserData />
      </section>
      <Footer />
    </>
  );
};

export default page;
