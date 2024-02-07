import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import UDNavigation from "@/src/components/user dashboard/UDNavigation";
import styles from "../../../styles/main.module.scss";
import TicketPage from "@/src/components/user dashboard/TicketPage";

const page = () => {
  return (
    <>
      <Header />
      <div className={styles.userDashboard_container}>
        <UDNavigation />
        <TicketPage />
      </div>
    </>
  );
};

export default page;
