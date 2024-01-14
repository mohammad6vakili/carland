import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import styles from "../../../../../styles/main.module.scss";
import Head from "next/head";
import CreateAdd from "@/src/components/user dashboard/CreateAdd";
import { baseUrl } from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";

const page = ({ addCategories }) => {
  return (
    <>
      <Head>
        <title>ویرایش آگهی</title>
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
