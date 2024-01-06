import { baseUrl } from "@/src/axiosConfig/useHttp";
import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import MagazineCategory from "@/src/components/magazine/MagazinesCategory";
import Head from "next/head";
import toast from "react-hot-toast";

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/CategoriesMagazine`).catch((err) => {
    toast.error("مشکلی در پیدا کردن اطلاعات این صفحه بوجود امد");
  });
  const adsCategories = await res?.json();

  return { props: { adsCategories } };
}

const index = ({ adsCategories }) => {
  return (
    <>
      <Head>
        <title>کارلند | مجلات</title>
        <meta property="og:title" content="مجله ماشین کارلند" key="کجله" />
      </Head>
      <Header />
      <MagazineCategory adsCategories={adsCategories.data} />
      <Footer />
    </>
  );
};

export default index;
