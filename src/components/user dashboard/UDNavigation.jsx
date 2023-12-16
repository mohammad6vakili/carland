import Image from "next/image";
import s from "../../../styles/main.module.scss";
import { Button } from "reactstrap";
import { usePathname } from "next/navigation";
//images
import circle1 from "../../../public/assets/userDashboard/circle-1.png";
import circle2 from "../../../public/assets/userDashboard/circle-2.png";
import wallet from "../../../public/assets/userDashboard/wallet.png";
import selectedBackground from "../../../public/assets/userDashboard/selected-page.svg";
//icons
import { GoPlus } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { PiWalletFill } from "react-icons/pi";
import { IoMdMegaphone } from "react-icons/io";
import { TbBriefcaseFilled } from "react-icons/tb";
import { HiChatAlt } from "react-icons/hi";
import shoppingBag from "../../../public/assets/userDashboard/shopping-bag.svg";
import transaction from "../../../public/assets/userDashboard/transaction.svg";
import ticket from "../../../public/assets/userDashboard/ticket.svg";
import support from "../../../public/assets/userDashboard/support.svg";
import Link from "next/link";

const UDNavigation = () => {
  const pathname = usePathname();

  const handleSelectedRoute = (route) => {
    const currentPage = pathname.replace("/userDashboard", "").replace("/", "");

    if (route === currentPage) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <div className={s.userDashboard_navigation}>
        <Image className={s.circle1} src={circle1} alt="" />
        <Image className={s.circle2} src={circle2} alt="" />

        <div className={s.name_profile}>
          <div className={s.profile}>
            <Image
              src={"/assets/userDashboard/profile.png"}
              alt="profile"
              width={60}
              height={60}
            />
          </div>
          <div className={s.name}>
            <span>پروفایل</span>
            <p> مهزیار رازه </p>
          </div>
        </div>

        <div className={s.wallet}>
          <Image src={wallet} alt="" />

          <div className={s.budget}>
            <span>موجودی کیف پول</span>
            <div>
              <span>۱۰۰۰۰۰۰</span> تومان
            </div>
          </div>

          <Button>
            <GoPlus style={{ color: "#fff" }} />
          </Button>
        </div>

        <div className={s.routes}>
          <Link
            href={"/userDashboard/"}
            className={handleSelectedRoute("") ? s.selected : s.route}
          >
            <div className={s.background}>
              <Image src={selectedBackground} alt="" />
            </div>
            <div className={s.icon}>
              <MdDashboard style={{ borderRadius: "10px" }} />
            </div>
            <span>داشبورد</span>
          </Link>

          <Link
            href={"/userDashboard/userData"}
            className={handleSelectedRoute("userData") ? s.selected : s.route}
          >
            <div className={s.background}>
              <Image src={selectedBackground} alt="" />
            </div>
            <div className={s.icon}>
              <BsPersonFill style={{ borderRadius: "10px" }} />
            </div>
            <span>اطلاعات حساب کاربری</span>
          </Link>

          <Link
            href={"/userDashboard/wallet"}
            className={handleSelectedRoute("wallet") ? s.selected : s.route}
          >
            <div className={s.background}>
              <Image src={selectedBackground} alt="" />
            </div>
            <div className={s.icon}>
              <PiWalletFill style={{ borderRadius: "10px" }} />
            </div>
            <span>کیف پول</span>
          </Link>

          <Link
            href={"/userDashboard/myAdds"}
            className={handleSelectedRoute("myAds") ? s.selected : s.route}
          >
            <div className={s.background}>
              <Image src={selectedBackground} alt="" />
            </div>
            <div className={s.icon}>
              <IoMdMegaphone style={{ borderRadius: "10px" }} />
            </div>
            <span>آگهی‌های من</span>
          </Link>

          <Link
            href={"/userDashboard/myJobs"}
            className={handleSelectedRoute("myJobs") ? s.selected : s.route}
          >
            <div className={s.background}>
              <Image src={selectedBackground} alt="" />
            </div>
            <div className={s.icon}>
              <TbBriefcaseFilled style={{ borderRadius: "10px" }} />
            </div>
            <span>مشاغل من</span>
          </Link>

          <Link
            href={"/userDashboard/myComments"}
            className={handleSelectedRoute("myComments") ? s.selected : s.route}
          >
            <div className={s.background}>
              <Image src={selectedBackground} alt="" />
            </div>
            <div className={s.icon}>
              <HiChatAlt style={{ borderRadius: "10px" }} />
            </div>
            <span>نظرات من</span>
          </Link>

          <Link
            href={"/userDashboard/myOrders"}
            className={handleSelectedRoute("myOrders") ? s.selected : s.route}
          >
            <div className={s.background}>
              <Image src={selectedBackground} alt="" />
            </div>
            <div className={s.icon}>
              <Image src={shoppingBag} alt="" />
            </div>
            <span>سفارش‌ها</span>
          </Link>

          <Link
            href={"/userDashboard/transaction"}
            className={
              handleSelectedRoute("transaction") ? s.selected : s.route
            }
          >
            <div className={s.background}>
              <Image src={selectedBackground} alt="" />
            </div>
            <div className={s.icon}>
              <Image src={transaction} alt="" />
            </div>
            <span>تراکنش‌ها</span>
          </Link>

          <Link
            href={"//userDashboard/myTickets"}
            className={handleSelectedRoute("myTickets") ? s.selected : s.route}
          >
            <div className={s.background}>
              <Image src={selectedBackground} alt="" />
            </div>
            <div className={s.icon}>
              <Image src={ticket} alt="" />
            </div>
            <span>تیکت‌های من</span>
          </Link>

          <Link
            href={"/userDashboard/supports"}
            className={handleSelectedRoute("supports") ? s.selected : s.route}
          >
            <div className={s.background}>
              <Image src={selectedBackground} alt="" />
            </div>
            <div className={s.icon}>
              <Image src={support} alt="" style={{ borderRadius: "10px" }} />
            </div>
            <span>پشتیبانی</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UDNavigation;
