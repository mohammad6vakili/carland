import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import Offers from "@/src/components/offers/Offers";
import Head from "next/head";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const adGroup = router && router.query.adGroup;

  return (
    <>
      <Head>
        <title>کارلند | آگهی ها</title>
        <meta property="og:title" content="اگهی خرید و فروش" key="آگهی" />
        <meta
          property="og:image"
          content={"https://api.carland.ir/carland-logo.png"}
        />
      </Head>
      <Header />
      <Offers offersGroup={adGroup} />
      <Footer />
    </>
  );
};

export default index;
