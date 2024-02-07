import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import Magazine from "@/src/components/magazine/Magazine";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Header />
      <Magazine />
      <Footer />
    </>
  );
};

export default index;
