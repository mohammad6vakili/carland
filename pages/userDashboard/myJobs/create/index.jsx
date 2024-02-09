import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import styles from "../../../../styles/main.module.scss";
import Head from "next/head";
import CreateJob from "@/src/components/user dashboard/CreateJob";
import { baseUrl } from "@/src/axiosConfig/useHttp";
import axios from "axios";

export async function getStaticProps() {
  const jobCategories = await axios
    .get(`${baseUrl}/categories`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return;
    });

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
    </>
  );
};

export default page;
