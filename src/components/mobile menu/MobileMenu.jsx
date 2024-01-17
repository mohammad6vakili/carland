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
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from "reactstrap";

const MobileMenu = () => {
  const size = useWindowSize();
  const [isMenuColl, setIsMenuColl] = useState(true);
  const pathname = usePathname();

  return (
    <>
      {/* mobile menu */}
      {size.width < 1000 ? (
        <div className={s.mobile_menu}>
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
                  style={
                    pathname === "/"
                      ? { marginBottom: "2rem" }
                      : { marginBottom: "1rem" }
                  }
                  href={"/"}
                >
                  <Image className={s.img} src={home} alt="home icon" />
                </Link>

                <a>
                  <UncontrolledButtonDropdown>
                    <DropdownToggle
                      style={{ padding: "0" }}
                      className={
                        pathname?.includes("/club") ||
                        pathname?.includes("/magazine")
                          ? s.selected_link
                          : s.link
                      }
                    >
                      <Image className={s.img} src={clubMagazineIcon} alt="" />
                      <span>مطالب</span>
                    </DropdownToggle>
                    <DropdownMenu className={s.dropdown_menu}>
                      <DropdownItem>
                        <Link href={"/clubs"}> کلوپ ها</Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link href={"/magazines"}>مجلات</Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </a>

                <Link
                  onClick={() => setIsMenuColl(true)}
                  className={
                    pathname?.includes("/userDashboard")
                      ? s.selected_link
                      : s.link
                  }
                  href={"/userDashboard"}
                >
                  <CgProfile className={s.img} />
                  <span>پروفایل</span>
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
