import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import Offers from "@/src/components/offers/Offers";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <Offers {...router.query.adGroup} />
      <Footer />
    </>
  );
};

export default index;
