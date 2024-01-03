import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import Offers from "@/src/components/offers/Offers";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>کارلند | آگهی ها</title>
        <meta property="og:title" content="اگهی خرید و فروش" key="آگهی" />
      </Head>
      <Header />
      <Offers />
      <Footer />
    </>
  );
};

export default index;
