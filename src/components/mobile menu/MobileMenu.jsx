import { useWindowSize } from "@uidotdev/usehooks";
import { FaInfoCircle, FaShoppingCart } from "react-icons/fa";
import { FaShop, FaImages } from "react-icons/fa6";
import { TbSmartHome } from "react-icons/tb";
import s from "../../../styles/main.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const size = useWindowSize();
  const pathname = usePathname();

  return (
    <>
      {/* mobile menu */}
      {size.width < 1000 ? (
        <div className={s.mobile_menu}>
          <Link
            href={"/club"}
            className={pathname.includes("/club") ? s.selected_tab : s.link}
          >
            <FaShop className={s.icon} />
            <span>کلوپ</span>
          </Link>

          <Link
            href={"/offers"}
            className={pathname.includes("/offers") ? s.selected_tab : s.link}
          >
            <FaShoppingCart className={s.icon} />
            <span>خرید و فروش</span>
          </Link>

          <Link
            href={"/"}
            className={pathname && pathname === "/" ? s.selected_tab : s.link}
          >
            <TbSmartHome className={s.home_icon} />
          </Link>

          <Link
            href={"/"}
            className={pathname.includes("/about_us") ? s.selected_tab : s.link}
          >
            <FaInfoCircle className={s.icon} />
            <span>درباره ما</span>
          </Link>

          <Link
            href={"/magazine"}
            className={pathname.includes("/magazine") ? s.selected_tab : s.link}
          >
            <FaImages className={s.icon} />
            <span>مجله</span>
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default MobileMenu;
