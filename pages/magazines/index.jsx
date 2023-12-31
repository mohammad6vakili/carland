import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import MagazineCategory from "@/src/components/magazine/MagazinesCategory";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>کارلند | مجلات</title>
        <meta property="og:title" content="مجله ماشین کارلند" key="کجله" />
      </Head>
      <Header />
      <MagazineCategory />
      <Footer />
    </>
  );
};

export default index;
