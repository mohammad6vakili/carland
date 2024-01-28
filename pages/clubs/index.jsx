import { baseUrl } from "@/src/axiosConfig/useHttp";
import Club from "@/src/components/club/Club";
import ClubsCategory from "@/src/components/club/ClubsCategory";
import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import Head from "next/head";
import toast from "react-hot-toast";

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/CategoriesClub`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("مشکلی در پیدا کردن اطلاعات این صفحه بوجود امد");
    });
  const clubCategories = res ? await res.json() : null;

  return { props: { clubCategories } };
}

const index = ({ clubCategories }) => {
  return (
    <>
      <Head>
        <title>کارلند | کلوپ ها</title>
        <meta property="og:title" content="کلوپ کارلند" key="کلوپ" />
      </Head>
      <Header />
      <ClubsCategory clubCategories={clubCategories} />
      <Footer />
    </>
  );
};

export default index;
