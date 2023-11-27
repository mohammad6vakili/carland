import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././styles/btsp.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const App = ({ Component, pageProps }) => {
  return (
    // <ConfigProvider theme={theme}>
    // <ConfigProvider>
    <Component {...pageProps} />
    // </ConfigProvider>
  );
};

export default App;
