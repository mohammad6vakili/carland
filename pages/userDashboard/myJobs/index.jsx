import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import UDNavigation from "@/src/components/user dashboard/UDNavigation";
import styles from "../../../styles/main.module.scss";
import Jobs from "@/src/components/user dashboard/Jobs";

const page = () => {
  return (
    <>
      <Header />
      <div className={styles.userDashboard_container}>
        <UDNavigation />
        <Jobs />
      </div>
      <Footer />
    </>
  );
};

export default page;
