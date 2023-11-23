import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././styles/btsp.scss";

const App = ({ Component, pageProps }) => {
  return (
    // <ConfigProvider theme={theme}>
    // <ConfigProvider>
    <Component {...pageProps} />
    // </ConfigProvider>
  );
};

export default App;
