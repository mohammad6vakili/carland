import { baseUrl } from "@/src/axiosConfig/useHttp";
import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import MagazineCategory from "@/src/components/magazine/MagazinesCategory";
import axios from "axios";
import Head from "next/head";

export async function getStaticProps() {
  const magsCategories = await axios
    .get(`${baseUrl}/CategoriesMagazine`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => null);

  const magazines = await axios
    .get(`${baseUrl}/magazines`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => []);

  return { props: { magsCategories, magazines } };
}

const index = ({ magsCategories, magazines }) => {
  return (
    <>
      <Head>
        <title>کارلند | مجلات</title>
        <meta property="og:title" content="مجله ماشین کارلند" key="کجله" />
        <meta
          property="og:image"
          content="https://api.carland.ir/carland-logo.png"
        />
      </Head>
      <Header />
      <MagazineCategory magsCategories={magsCategories} magazines={magazines} />
      <Footer />
    </>
  );
};

export default index;
