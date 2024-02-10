import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import UDNavigation from "@/src/components/user dashboard/UDNavigation";
import Adds from "@/src/components/user dashboard/Adds";
import styles from "../../../../styles/main.module.scss";
import Head from "next/head";
import CreateAdd from "@/src/components/user dashboard/CreateAdd";
import { baseUrl } from "@/src/axiosConfig/useHttp";
import axios from "axios";

export async function getStaticProps() {
  const addCategories = await axios
    .get(`${baseUrl}/CategoryCars`)
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return [];
    });

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
    </>
  );
};

export default page;
