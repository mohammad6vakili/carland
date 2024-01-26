import Head from "next/head";
import Header from "../src/components/header-footer/Header";
import Footer from "@/src/components/header-footer/Footer";
import Main from "@/src/components/main/Main";
import { baseUrl } from "@/src/axiosConfig/useHttp";
import { formatStringJSON, getLocal, setLocal } from "@/src/hooks/functions";
import toast from "react-hot-toast";

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/categories`).catch((err) => {
    toast.error("مشکلی در پیدا کردن اطلاعات این صفحه بوجود امد");
  });
  const jobCategories = res ? await res?.json() : [];

  return { props: { jobCategories } };
}

export default function Home({ jobCategories }) {
  return (
    <>
      <Head>
        <title>کارلند</title>
      </Head>
      <Header />
      <Main jobCategories={jobCategories} />
      <Footer />
    </>
  );
}
