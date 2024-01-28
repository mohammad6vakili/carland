import Image from "next/image";
import s from "../../../styles/main.module.scss";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  Offcanvas,
} from "reactstrap";
import { usePathname, useRouter } from "next/navigation";
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
import { ImExit } from "react-icons/im";
import shoppingBag from "../../../public/assets/userDashboard/shopping-bag.svg";
import transaction from "../../../public/assets/userDashboard/transaction.svg";
import ticket from "../../../public/assets/userDashboard/ticket.svg";
import support from "../../../public/assets/userDashboard/support.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getLocal, removeLocal, toPersianString } from "@/src/hooks/functions";
import toast from "react-hot-toast";
import { useWindowSize } from "@uidotdev/usehooks";
import { LeftOutlined } from "@ant-design/icons";
import useHttp, { url } from "@/src/axiosConfig/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "@/src/app/slices/userInfoSlice";
import MySkeleton from "../skeleton/Skeleton";
import Compressor from "compressorjs";

const UDNavigation = () => {
  const pathname = usePathname();
  const size = useWindowSize();
  const router = useRouter();
  const { httpService } = useHttp(true);
  const [signoutModal, setSignoutModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [navColl, setNavColl] = useState(true);
  const userData = useSelector((state) => state.userInfo.userInfo);
  const dispatch = useDispatch();

  const handleSelectedRoute = (route) => {
    const currentPage = pathname
      ?.replace("/userDashboard", "")
      .replace("/", "");

    if (route === currentPage) {
      return true;
    } else {
      return false;
    }
  };

  const toggle = () => setSignoutModal(!signoutModal);

  const handleLogout = () => {
    removeLocal("token");
    router.push("/login");
    toast.success("با موفقیت از برنامه خارج شدید");
  };

  const handleNavColl = () => {
    setNavColl(!navColl);
  };

  const handleUploadProfile = (event) => {
    setLoading(true);

    new Compressor(event.target?.files?.[0], {
      quality: 0.6,

      // The compression process is asynchronous,
      // which means you have to access the `result` in the `success` hook function.
      success(result) {
        const formData = new FormData();

        // The third parameter is required for server
        formData.append("image", result, result.name);

        // Send the compressed image file to server with XMLHttpRequest.
        httpService
          .post("uploadProfile", formData)
          .then((res) => {
            res.status === 200
              ? (dispatch(
                  setUserInfo({ ...userData, image_profile: res.data.url })
                ),
                toast.success("پروفایل شما با موفقیت تغییر کرد"))
              : null;
            setLoading(false);
          })
          .catch(() => {
            toast.error("در اپلود عکس پروفایل شما مشکلی بوجود امد");
            setLoading(false);
          });
      },
      error(err) {
        toast.error("در اپلود عکس پروفایل شما مشکلی بوجود امد");
        setLoading(false);
      },
    });
  };

  return (
    <>
      {size.width > 1000 ? (
        <div className={s.userDashboard_navigation}>
          <Image className={s.circle1} src={circle1} alt="" />
          <Image className={s.circle2} src={circle2} alt="" />

          {userData ? (
            <>
              <div className={s.name_profile}>
                <div className={s.profile}>
                  <label>
                    <Input
                      type="file"
                      id="file"
                      onChange={(e) => handleUploadProfile(e, "moreView")}
                      className={s.img}
                      hidden
                      accept="image/*"
                    />
                    <Image
                      className={loading ? s.img_blur : s.img}
                      src={url + userData.image_profile}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </label>
                </div>

                <div className={s.name}>
                  <span>پروفایل</span>
                  <p>{userData.name}</p>
                </div>
              </div>

              <div className={s.wallet}>
                <Image src={wallet} alt="" />

                <div className={s.budget}>
                  <span>موجودی کیف پول</span>
                  <div>
                    <span>{toPersianString(userData.cash)}</span> تومان
                  </div>
                </div>

                <Link href={"/userDashboard/wallet"}>
                  <GoPlus style={{ color: "#fff" }} />
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className={s.name_profile}>
                <div className={s.image_profile}>
                  <MySkeleton
                    width={"60px"}
                    height={"60px"}
                    borderRadius={"50%"}
                    className={s.profile}
                  />
                </div>
                <div className={s.name}>
                  <span>
                    <MySkeleton
                      width={"30px"}
                      height={"10px"}
                      borderRadius={"3px"}
                    />
                  </span>
                  <p>
                    <MySkeleton
                      width={"40px"}
                      height={"10px"}
                      borderRadius={"3px"}
                    />
                  </p>
                </div>
              </div>

              <div className={s.wallet}>
                <Image src={wallet} alt="" />

                <div className={s.budget}>
                  <span>موجودی کیف پول</span>
                  <div>
                    <span></span> تومان
                  </div>
                </div>

                <Button>
                  <GoPlus style={{ color: "#fff" }} />
                </Button>
              </div>
            </>
          )}

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
              className={handleSelectedRoute("myAdds") ? s.selected : s.route}
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
              className={
                handleSelectedRoute("myComments") ? s.selected : s.route
              }
            >
              <div className={s.background}>
                <Image src={selectedBackground} alt="" />
              </div>
              <div className={s.icon}>
                <HiChatAlt style={{ borderRadius: "10px" }} />
              </div>
              <span>نظرات من</span>
            </Link>

            {/* <Link
              href={"/userDashboard/myOrders"}
              className={handleSelectedRoute("myOrders") ? s.selected : s.route}
              style={{ borderBottom: "1px solid #E6E6E6" }}
            >
              <div className={s.background}>
                <Image src={selectedBackground} alt="" />
              </div>
              <div className={s.icon}>
                <Image src={shoppingBag} alt="" />
              </div>
              <span>سفارش‌ها</span>
            </Link> */}

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
              href={"/userDashboard/myTickets"}
              className={
                handleSelectedRoute("myTickets") ? s.selected : s.route
              }
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

            <div className={s.signout}>
              <Button
                onClick={() => setSignoutModal(!signoutModal)}
                className={s.btn}
              >
                <div className={s.icon}>
                  <ImExit />
                </div>
                <span>خروج</span>
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Button className={s.nav_call_btn} onClick={() => handleNavColl()}>
            <div>
              <LeftOutlined />
              <LeftOutlined />
            </div>
          </Button>

          <Offcanvas
            direction="end"
            style={{ fontFamily: "dana" }}
            scrollable
            isOpen={!navColl}
            toggle={() => handleNavColl()}
          >
            <div className={s.userDashboard_navigation}>
              <Image className={s.circle1} src={circle1} alt="" />
              <Image className={s.circle2} src={circle2} alt="" />

              {userData ? (
                <>
                  <div className={s.name_profile}>
                    <div className={s.profile}>
                      <Image
                        src={url + userData.image_profile}
                        alt="profile"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className={s.name}>
                      <span>پروفایل</span>
                      <p>{userData.name}</p>
                    </div>
                  </div>

                  <div className={s.wallet}>
                    <Image src={wallet} alt="" />

                    <div className={s.budget}>
                      <span>موجودی کیف پول</span>
                      <div>
                        <span>{toPersianString(userData.cash)}</span> تومان
                      </div>
                    </div>

                    <Button>
                      <GoPlus style={{ color: "#fff" }} />
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className={s.name_profile}>
                    <div className={s.profile}>
                      <MySkeleton
                        width={"60px"}
                        height={"60px"}
                        borderRadius={"50%"}
                      />
                    </div>
                    <div className={s.name}>
                      <span>
                        <MySkeleton width={"50%"} height={"20px"} />
                      </span>
                      <p>
                        <MySkeleton width={"50%"} height={"20px"} />
                      </p>
                    </div>
                  </div>

                  <div className={s.wallet}>
                    <Image src={wallet} alt="" />

                    <div className={s.budget}>
                      <span>موجودی کیف پول</span>
                      <div>
                        <span></span> تومان
                      </div>
                    </div>

                    <Button>
                      <GoPlus style={{ color: "#fff" }} />
                    </Button>
                  </div>
                </>
              )}

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
                  className={
                    handleSelectedRoute("userData") ? s.selected : s.route
                  }
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
                  className={
                    handleSelectedRoute("wallet") ? s.selected : s.route
                  }
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
                  className={
                    handleSelectedRoute("myAdds") ? s.selected : s.route
                  }
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
                  className={
                    handleSelectedRoute("myJobs") ? s.selected : s.route
                  }
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
                  className={
                    handleSelectedRoute("myComments") ? s.selected : s.route
                  }
                >
                  <div className={s.background}>
                    <Image src={selectedBackground} alt="" />
                  </div>
                  <div className={s.icon}>
                    <HiChatAlt style={{ borderRadius: "10px" }} />
                  </div>
                  <span>نظرات من</span>
                </Link>

                {/* <Link
                  href={"/userDashboard/myOrders"}
                  className={
                    handleSelectedRoute("myOrders") ? s.selected : s.route
                  }
                  style={{ borderBottom: "1px solid #E6E6E6" }}
                >
                  <div className={s.background}>
                    <Image src={selectedBackground} alt="" />
                  </div>
                  <div className={s.icon}>
                    <Image src={shoppingBag} alt="" />
                  </div>
                  <span>سفارش‌ها</span>
                </Link> */}

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
                  href={"/userDashboard/myTickets"}
                  className={
                    handleSelectedRoute("myTickets") ? s.selected : s.route
                  }
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
                  className={
                    handleSelectedRoute("supports") ? s.selected : s.route
                  }
                >
                  <div className={s.background}>
                    <Image src={selectedBackground} alt="" />
                  </div>
                  <div className={s.icon}>
                    <Image
                      src={support}
                      alt=""
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <span>پشتیبانی</span>
                </Link>

                <div className={s.signout}>
                  <Button
                    onClick={() => setSignoutModal(!signoutModal)}
                    className={s.btn}
                  >
                    <div className={s.icon}>
                      <ImExit />
                    </div>
                    <span>خروج</span>
                  </Button>
                </div>
              </div>
            </div>
          </Offcanvas>
        </>
      )}

      <Modal centered toggle={toggle} isOpen={signoutModal}>
        <ModalBody>آیا می خواهید خارج شوید؟</ModalBody>
        <ModalFooter>
          <Button onClick={() => handleLogout()} color="#4A80E812">
            بله
          </Button>
          <Button onClick={() => setSignoutModal(false)}>خیر</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default UDNavigation;
