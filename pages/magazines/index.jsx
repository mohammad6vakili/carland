import { baseUrl } from "@/src/axiosConfig/useHttp";
import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import MagazineCategory from "@/src/components/magazine/MagazinesCategory";
import Head from "next/head";

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/CategoriesMagazine`, {
    method: "GET",
  }).catch((err) => {});

  const magsCategories = res ? await res.json() : null;

  return { props: { magsCategories } };
}

const index = ({ magsCategories }) => {
  return (
    <>
      <Head>
        <title>کارلند | مجلات</title>
        <meta property="og:title" content="مجله ماشین کارلند" key="کجله" />
      </Head>
      <Header />
      <MagazineCategory magsCategories={magsCategories.data} />
      <Footer />
    </>
  );
};

export default index;
