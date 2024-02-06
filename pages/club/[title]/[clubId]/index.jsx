import useHttp, { baseUrl, url } from "@/src/axiosConfig/useHttp";
import Club from "@/src/components/club/Club";
import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import Head from "next/head";

export const getStaticPaths = async () => {
  const data = await axios
    .get(`${baseUrl}/clubs`, {
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

  const paths = data.map((club) => {
    return {
      params: { clubId: club.id.toString(), title: club.title },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const clubId = context.params.clubId;
  const res = await fetch(`${baseUrl}/club/${clubId}`);
  const data = await res.json();

  return {
    props: { club: data.data },
  };
};

const index = ({ club }) => {
  return (
    <>
      <Head>
        <title>{club.title}</title>
        <meta name="title" content={club.title} />
        <meta name="keywords" content={club.keywords} />
        <meta name="description" content={club.description} />
        <meta property="og:image" content={url + "/" + club.image_url} />
      </Head>
      <Header />
      <Club />
      <Footer />
    </>
  );
};

export default index;