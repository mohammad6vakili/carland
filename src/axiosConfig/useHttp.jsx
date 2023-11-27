import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const useHttp = () => {
  const navigate = useRouter();
  let platform;
  if (window.matchMedia("(display-mode: standalone)").matches) {
    platform = "pwa";
  } else {
    platform = "web";
  }

  const HttpService = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL + process.env.REACT_APP_API_PATH,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      Accept: "application/json",
      "app-type": "10",
    },
  });

  HttpService.interceptors.response.use(
    (response) => response,
    async ({ error, response }) => {
      console.log("HttpService error", error);
      console.log("HttpService response", JSON.stringify(response, null, 2));
      if (response?.status === 401) {
        toast.error("شما از برنامه خارج شده اید");
        localStorage.removeItem("token");
        navigate.push("/login");
      } else if (response?.status === 422) {
        if (response?.data?.errors) {
          toast.error(response?.data?.errors[0].detail);
        }
      } else if (response?.status === 404) {
        toast.error("درخواست مورد نظر یافت نشد");
      } else {
        toast.error("خطا در برقراری ارتباط");
      }
    }
  );

  const exports = { HttpService };
  return exports;
};
export default useHttp;
