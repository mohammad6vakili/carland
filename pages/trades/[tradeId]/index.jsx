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
    .get(`${baseUrl}/Showads/${tradeId}`, {
      headers: { Authorization: `Bearer ${getLocal("token")}` },
    })
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

const index = () => {
  return (
    <>
      <Header />
      <TradePage />
      <Footer />
    </>
  );
};

export default index;
