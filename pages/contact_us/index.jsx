import { baseUrl } from "@/src/axiosConfig/useHttp";
import ContactUs from "@/src/components/contact us/ContactUs";
import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import axios from "axios";

export async function getStaticProps() {
  const contactInfo = await axios
    .get(`${baseUrl}/categories`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return null;
    });

  return { props: { contactInfo } };
}

const index = ({ contactInfo }) => {
  console.log(contactInfo);

  return (
    <>
      <Header />
      <ContactUs contactInfo={contactInfo} />
      <Footer />
    </>
  );
};

export default index;
