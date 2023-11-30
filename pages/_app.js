import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././styles/btsp.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import localFont from "next/font/local";
import MobileMenu from "@/src/components/mobile menu/MobileMenu";

const dana = localFont({ src: "../public/fonts/Dana-Medium.ttf" });

const MyApp = ({ Component, pageProps }) => {
  return (
    // <ConfigProvider theme={theme}>
    <main className={dana.className}>
      <Component {...pageProps} />
      <MobileMenu />
    </main>
    // </ConfigProvider>
  );
};

export default MyApp;
