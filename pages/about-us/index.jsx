import AboutUs from "@/src/components/about us/AboutUs";
import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={"https://api.carland.ir/carland-logo.png"}
        />
      </Head>
      <Header />
      <AboutUs />
      <Footer />
    </>
  );
};

export default index;
