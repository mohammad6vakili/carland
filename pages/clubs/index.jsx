import Club from "@/src/components/club/Club";
import ClubsCategory from "@/src/components/club/ClubsCategory";
import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>کارلند | کلوپ ها</title>
        <meta property="og:title" content="کلوپ کارلند" key="کلوپ" />
      </Head>
      <Header />
      <ClubsCategory />
      <Footer />
    </>
  );
};

export default index;
