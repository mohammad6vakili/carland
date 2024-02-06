import { baseUrl } from "@/src/axiosConfig/useHttp";
import Club from "@/src/components/club/Club";
import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Header />
      <Club />
      <Footer />
    </>
  );
};

export default index;
