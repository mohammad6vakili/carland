import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import styles from "../../../../styles/main.module.scss";
import Head from "next/head";
import CreateAdd from "@/src/components/user dashboard/CreateAdd";
import { baseUrl } from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/CategoryCars`).catch((err) => {
    toast.error("مشکلی در پیدا کردن اطلاعات این صفحه بوجود امد");
  });
  const addCategories = await res?.json();

  return { props: { addCategories } };
}

const page = ({ addCategories }) => {
  return (
    <>
      <Head>
        <title>ساخت آگهی جدید</title>
      </Head>
      <Header />
      <div className={styles.userDashboard_container}>
        <CreateAdd addCategories={addCategories} />
      </div>
      <Footer />
    </>
  );
};

export default page;
