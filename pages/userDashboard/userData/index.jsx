import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import UDNavigation from "@/src/components/user dashboard/UDNavigation";
import styles from "../../../styles/main.module.scss";
import UserDashboard from "@/src/components/user dashboard/UserDashboard";
import UserData from "@/src/components/user dashboard/UserData";
import Head from "next/head";
import React from "react";
import { baseUrl } from "@/src/axiosConfig/useHttp";
import axios from "axios";
import { getLocal } from "@/src/hooks/functions";
import toast from "react-hot-toast";

export async function getStaticProps() {
  const userInfo = await axios
    .post(`${baseUrl}/user`, {
      headers: {
        Authorization: `Bearer ${getLocal("token")}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      } else {
        return {};
      }
    })
    .catch((err) => {
      toast.error("مشکلی در پیدا کردن اطلاعات این صفحه بوجود امد");
      return {};
    });

  return { props: { userInfo } };
}

const page = ({ userInfo }) => {
  return (
    <>
      <Head>
        <title>اطلاعات کاربری</title>
      </Head>
      <Header />
      <section className={styles.userDashboard_container}>
        <UDNavigation />
        <UserData userInfo={userInfo} />
      </section>
      <Footer />
    </>
  );
};

export default page;
