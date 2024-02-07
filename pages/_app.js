import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././styles/btsp.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import "leaflet/dist/leaflet.css";
import "react-loading-skeleton/dist/skeleton.css";
import localFont from "next/font/local";
import MobileMenu from "@/src/components/mobile menu/MobileMenu";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "@/src/app/store";

const dana = localFont({ src: "../public/fonts/Dana-Medium.woff" });

const MyApp = ({ Component, pageProps }) => {
  return (
    // <ConfigProvider theme={theme}>
    <Provider store={store}>
      <main className={dana.className}>
        <Component {...pageProps} />
        <MobileMenu />
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },

            // Default options for specific types
            success: {
              duration: 4000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
      </main>
    </Provider>
    // </ConfigProvider>
  );
};

export default MyApp;
