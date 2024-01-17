import { useWindowSize } from "@uidotdev/usehooks";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import s from "../../../styles/main.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

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
                  {" "}
                  <span>
                    بازارچه
                    <div className={s.line1}></div>
                    <div className={s.line2}></div>
                  </span>
                </Link>

                <Link
                  onClick={() => setIsMenuColl(true)}
                  className={
                    pathname?.includes("/offers") ? s.selected : s.link
                  }
                  href={"/offers/all"}
                >
                  <span>
                    خرید و فروش
                    <div className={s.line1}></div>
                    <div className={s.line2}></div>
                  </span>
                </Link>

                <Link
                  onClick={() => setIsMenuColl(true)}
                  className={pathname?.includes("/club") ? s.selected : s.link}
                  href={"/clubs"}
                >
                  <span>
                    {" "}
                    کلوپ
                    <div className={s.line1}></div>
                    <div className={s.line2}></div>
                  </span>
                </Link>

                <Link
                  onClick={() => setIsMenuColl(true)}
                  className={
                    pathname?.includes("/magazine") ? s.selected : s.link
                  }
                  href={"/magazines"}
                >
                  <span>
                    مجله
                    <div className={s.line1}></div>
                    <div className={s.line2}></div>
                  </span>
                </Link>

                <Link
                  onClick={() => setIsMenuColl(true)}
                  className={pathname === "/about_us" ? s.selected : s.link}
                  href={"/about_us"}
                >
                  <span>
                    {" "}
                    درباره ما
                    <div className={s.line1}></div>
                    <div className={s.line2}></div>
                  </span>
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
