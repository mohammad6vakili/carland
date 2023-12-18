import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import UDNavigation from "@/src/components/user dashboard/UDNavigation";
import styles from "../../styles/main.module.scss";
import UserDashboard from "@/src/components/user dashboard/UserDashboard";
import { url, useServerFetch } from "@/src/axiosConfig/useHttp";

export const getStaticProps = async () => {
  const { httpService } = useServerFetch();
  return await httpService
    .get(`${url}/myads`)
    .then((res) => {
      return { props: { data: res.data.data } };
    })
    .catch((err) => {
      return { props: { data: err.message } };
    });
};

const index = ({ data }) => {
  return (
    <>
      <Header />
      <div className={styles.userDashboard_container}>
        <UDNavigation />
        <UserDashboard myAdds={data} />
      </div>
      <Footer />
    </>
  );
};

export default index;
