import { useWindowSize } from "@uidotdev/usehooks";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import s from "../../../styles/main.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import adsIcon from "../../../public/assets/mobile menu/ads.svg";
import clubMagazineIcon from "../../../public/assets/mobile menu/club-magazine.svg";
import home from "../../../public/assets/mobile menu/home.svg";
import market from "../../../public/assets/mobile menu/market.svg";
import { CgProfile } from "react-icons/cg";

const MobileMenu = () => {
  const size = useWindowSize();
  const [isMenuColl, setIsMenuColl] = useState(true);
  const pathname = usePathname();

  return (
    <>
      {/* mobile menu */}
      {size.width < 1000 ? (
        <div className={s.mobile_menu}>
          <div
            onClick={() => setIsMenuColl(!isMenuColl)}
            className={s.menu_btn}
          >
            {isMenuColl ? <RxHamburgerMenu /> : <RxCross2 />}
          </div>

          <div className={s.menu}>
            <div className={s.routes}>
              <div className={s.links_seperator}>
                <Link
                  onClick={() => setIsMenuColl(true)}
                  className={pathname === "/market" ? s.selected_link : s.link}
                  href={"/market"}
                >
                  <Image className={s.img} src={market} alt="market icon" />
                  <span>بازارچه</span>
                </Link>

                <Link
                  className={
                    pathname?.includes("/offers") ? s.selected_link : s.link
                  }
                  href={"/offers/all"}
                >
                  <Image className={s.img} src={adsIcon} alt="" />
                  <span>آگهی ها</span>
                </Link>

                <Link
                  onClick={() => setIsMenuColl(true)}
                  className={pathname === "/" ? s.selected_link : s.link}
                  style={pathname === "/" ? { marginBottom: "2rem" } : {}}
                  href={"/"}
                >
                  <Image className={s.img} src={home} alt="home icon" />
                </Link>

                <Link
                  onClick={() => setIsMenuColl(true)}
                  className={
                    pathname?.includes("/club") ||
                    pathname?.includes("/magazine")
                      ? s.selected_link
                      : s.link
                  }
                  href={"/clubs"}
                >
                  <Image className={s.img} src={clubMagazineIcon} alt="" />
                  <span>مطالب</span>
                </Link>

                <Link
                  onClick={() => setIsMenuColl(true)}
                  className={
                    pathname === "/about_us" ? s.selected_link : s.link
                  }
                  href={"/about_us"}
                >
                  <CgProfile className={s.img} />
                  <span>درباره ما</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MobileMenu;
