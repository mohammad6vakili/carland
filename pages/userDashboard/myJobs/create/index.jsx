import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import styles from "../../../../styles/main.module.scss";
import Head from "next/head";
import CreateJob from "@/src/components/user dashboard/CreateJob";
import { baseUrl } from "@/src/axiosConfig/useHttp";

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/categories`).catch((err) => {
    toast.error("مشکلی در پیدا کردن اطلاعات این صفحه بوجود امد");
  });
  const jobCategories = await res.json();

  return { props: { jobCategories } };
}

const page = ({ jobCategories }) => {
  return (
    <>
      <Head>
        <title>ساخت شغل جدید</title>
      </Head>
      <Header />
      <div className={styles.userDashboard_container}>
        <CreateJob jobCategories={jobCategories.data} />
      </div>
      <Footer />
    </>
  );
};

export default page;
