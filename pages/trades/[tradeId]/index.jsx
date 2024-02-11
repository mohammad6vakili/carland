import { baseUrl } from "@/src/axiosConfig/useHttp";
import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import TradePage from "@/src/components/offers/trade page/TradePage";
import { getLocal } from "@/src/hooks/functions";
import axios from "axios";

// export const getStaticPaths = async () => {
//   const data = await axios
//     .get(`${baseUrl}/ListAllAds`, {
//       headers: {
//         Accept: "application/json",
//         "app-type": "10",
//       },
//     })
//     .then((res) => {
//       return res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   const paths = data.map((trade) => {
//     return {
//       params: { tradeId: trade.id.toString() },
//     };
//   });

//   return {
//     paths: paths,
//     fallback: false,
//   };
// };

export const getServerSideProps = async (context) => {
  const tradeId = context.params.tradeId;
  const data = await axios
    .get(`${baseUrl}/Show-ads/${tradeId}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      return err.message;
    });

  return {
    props: { trade: data },
  };
};

const index = ({ trade }) => {
  console.log(trade);

  return (
    <>
      <Head>
        <title>{trade.title}</title>
        <meta name="title" content={trade.title} />
        <meta
          name="description"
          content={trade.category.title + trade.descriptions}
        />
        <meta property="og:image" content={url + trade.images.split(",")[0]} />
      </Head>
      <Header />
      <TradePage />
      <Footer />
    </>
  );
};

export default index;
