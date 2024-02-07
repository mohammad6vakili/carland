import Head from "next/head";
import Header from "../src/components/header-footer/Header";
import Footer from "@/src/components/header-footer/Footer";
import Main from "@/src/components/main/Main";
import { baseUrl } from "@/src/axiosConfig/useHttp";
import carlandLogo from "@/public/assets/carland-logo.png";
import axios from "axios";

export async function getStaticProps() {
  const jobCategories = await axios
    .get(`${baseUrl}/categories`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return null;
    });

  return { props: { jobCategories } };
}

export default function Home({ jobCategories }) {
  return (
    <>
      <Head>
        <title>{jobCategories.title}</title>
        <meta name="og:title" content={jobCategories.title} />
        <meta name="keywords" content={jobCategories.keywords} />
        <meta name="description" content={jobCategories.description} />
        <meta property="og:image" content={"/assets/carland-logo.png"} />
      </Head>
      <Header />
      <Main jobCategories={jobCategories} />
      <Footer />
    </>
  );
}
