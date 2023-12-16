import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import UDNavigation from "@/src/components/user dashboard/UDNavigation";
import styles from "../../styles/main.module.scss";
import UserDashboard from "@/src/components/user dashboard/UserDashboard";

const index = () => {
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
