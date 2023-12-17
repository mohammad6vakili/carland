import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import UDNavigation from "@/src/components/user dashboard/UDNavigation";
import styles from "../../styles/main.module.scss";
import UserDashboard from "@/src/components/user dashboard/UserDashboard";
import { url } from "@/src/axiosConfig/useHttp";

// export const getStaticProps = async () => {
//   const req = await fetch(`${url}/myads`);
//   const data = await req.json();

//   return { props: { data: data } };
// };

const index = ({ data }) => {
  return (
    <>
      <Header />
      <div className={styles.userDashboard_container}>
        <UDNavigation />
        <UserDashboard />
      </div>
      <Footer />
    </>
  );
};

export default index;
