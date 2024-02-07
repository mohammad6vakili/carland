import { baseUrl, url } from "@/src/axiosConfig/useHttp";
import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import Magazine from "@/src/components/magazine/Magazine";
import axios from "axios";
import Head from "next/head";

export const getStaticPaths = async () => {
  const data = await axios
    .get(`${baseUrl}/magazines`, {
      headers: {
        Accept: "application/json",
        "app-type": "10",
      },
    })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });

  const paths = data.map((mag) => {
    return {
      params: { magId: mag.id.toString(), title: mag.title },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const magId = context.params.magId;
  const res = await fetch(`${baseUrl}/magazine/${magId}`);
  const data = await res.json();

  return {
    props: { magazine: data.data },
  };
};

const index = ({ magazine }) => {
  return (
    <>
      <Head>
        <title>{magazine.title}</title>
        <meta name="title" content={magazine.title} />
        <meta name="description" content={magazine.description} />
        <meta name="keywords" content={magazine.keywords} />
        <meta name="og:image" content={url + "/" + magazine.image_url} />
      </Head>
      <Header />
      <Magazine />
      <Footer />
    </>
  );
};

export default index;
