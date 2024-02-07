import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import UDNavigation from "@/src/components/user dashboard/UDNavigation";
import styles from "../../../styles/main.module.scss";
import UserDashboard from "@/src/components/user dashboard/UserDashboard";
import UserData from "@/src/components/user dashboard/UserData";
import Head from "next/head";
import React from "react";
import { baseUrl } from "@/src/axiosConfig/useHttp";
import { getLocal } from "@/src/hooks/functions";

// export async function getStaticProps() {
//   const res = await fetch(`${baseUrl}/user`, {
//     method: "GET",
//     headers: {
//       Authorization:
//         getLocal("token") !== "null" ? `Bearer ${getLocal("token")}` : "",
//       Accept: "application/json",
//       "app-type": "10",
//     },
//   })
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       console.log("مشکلی در پیدا کردن اطلاعات این صفحه بوجود امد");
//       return null;
//     });

//   console.log(res);
//   const userInfo = res ? await res.json() : null;

//   return { props: { userInfo } };
// }

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
    </>
  );
};

export default page;
