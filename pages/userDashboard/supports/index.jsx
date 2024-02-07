import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import UDNavigation from "@/src/components/user dashboard/UDNavigation";
import styles from "../../../styles/main.module.scss";
import Support from "@/src/components/user dashboard/Support";

const page = () => {
  return (
    <>
      <Header />
      <div className={styles.userDashboard_container}>
        <UDNavigation />
        <Support />
      </div>
    </>
  );
};

export default page;
