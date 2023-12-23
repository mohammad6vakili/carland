import Head from "next/head";
import Header from "../src/components/header-footer/Header";
import Footer from "@/src/components/header-footer/Footer";
import Main from "@/src/components/main/Main";
import { baseUrl } from "@/src/axiosConfig/useHttp";
import { getLocal } from "@/src/hooks/functions";

export async function getServerSideProps(ctx) {
  return fetch(`${baseUrl}/user`, {
    headers: {
      Authorization: getLocal("token"),
    },
  })
    .then((res) => {
      if (res.status === 200) {
        return null;
      } else {
        return {
          redirect: {
            destination: "/userDashboard/userData",
            permanent: false,
          },
        };
      }
    })
    .catch((err) => {
      alert("error");
    });
}

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
