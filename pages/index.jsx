import Head from "next/head";
import Header from "../src/components/header-footer/Header";
import Footer from "@/src/components/header-footer/Footer";
import Main from "@/src/components/main/Main";
import { baseUrl } from "@/src/axiosConfig/useHttp";
import carlandLogo from "@/public/assets/carland-logo.png";

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/categories`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return null;
    });

  const jobCategories = res ? await res.json() : null;

  return { props: { jobCategories } };
}

export default function Home({ jobCategories }) {
  return (
    <>
      <Head>
        <title>کارلند</title>
        <meta name="twitter:title" content="کارلند" />
        <meta property="og:image" content={"/assets/carland-logo.png"} />
      </Head>
      <Header />
      <Main jobCategories={jobCategories} />
      <Footer />
    </>
  );
}
