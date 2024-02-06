import { baseUrl } from "@/src/axiosConfig/useHttp";
import Club from "@/src/components/club/Club";
import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch(`${baseUrl}/clubs`, {
    headers: {
      Accept: "application/json",
      "app-type": "10",
    },
  }).catch((err) => {
    console.log(err);
  });
  const data = res ? await res.json() : null;

  const paths = data
    ? data.data.map((club) => {
        console.log(club);
        return {
          params: { clubId: club.id.toString() },
        };
      })
    : [];

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const clubId = context.params.clubId;
  const res = await fetch(`${baseUrl}/club/${clubId}`);
  const data = res ? await res.json() : [];

  return {
    props: { club: data.data },
  };
};

const index = ({ club }) => {
  console.log(club);

  return (
    <>
      <Head>
        <title>{club.title}</title>
      </Head>
      <Header />
      <Club />
      <Footer />
    </>
  );
};

export default index;
