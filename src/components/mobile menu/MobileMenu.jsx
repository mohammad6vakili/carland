import { useWindowSize } from "@uidotdev/usehooks";
import { FaInfoCircle, FaShoppingCart } from "react-icons/fa";
import { FaShop, FaImages } from "react-icons/fa6";
import { TbSmartHome } from "react-icons/tb";
import s from "../../../styles/main.module.scss";
import Link from "next/link";

const MobileMenu = () => {
  const size = useWindowSize();

  return (
    <>
      {/* mobile menu */}
      {size.width < 1000 ? (
        <div className={s.mobile_menu}>
          <Link href={"/club"} className={s.link}>
            <FaShop style={{ color: "#fff", width: "25px", height: "25px" }} />
            <span>کلوپ</span>
          </Link>

          <Link href={"/offers"} className={s.link}>
            <FaShoppingCart
              style={{ color: "#fff", width: "25px", height: "25px" }}
            />
            <span>خرید و فروش</span>
          </Link>

          <Link href={"/"} className={s.link}>
            <TbSmartHome
              style={{ color: "#fff", width: "44px", height: "44px" }}
            />
          </Link>

          <Link href={"/"} className={s.link}>
            <FaInfoCircle
              style={{ color: "#fff", width: "25px", height: "25px" }}
            />
            <span>درباره ما</span>
          </Link>

          <Link href={"/magazine"} className={s.link}>
            <FaImages
              style={{ color: "#fff", width: "25px", height: "25px" }}
            />
            <span>مجله</span>
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default MobileMenu;
