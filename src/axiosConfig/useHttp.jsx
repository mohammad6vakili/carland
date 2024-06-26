import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { getLocal, removeLocal, setLocal } from "../hooks/functions";

export const url = "https://api.carland.ir";
export const baseUrl = "https://api.carland.ir/api";
const useHttp = (checkAuth) => {
  const navigate = useRouter();
  let platform;
  // if (window.matchMedia("(display-mode: standalone)").matches) {
  //   platform = "pwa";
  // } else {
  //   platform = "web";
  // }

  const httpService = axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${getLocal("token")}`,
      Accept: "application/json",
      "app-type": "10",
    },
  });

  httpService.interceptors.response.use(
    (response) => response,
    async ({ error, response }) => {
      // console.log("HttpService error", error);
      // console.log("HttpService response", JSON.stringify(response, null, 2));
      if (response?.status === 401 && checkAuth) {
        // toast.error("اطلاعات ثبت نام شما یافت نشد");
        removeLocal("token");
        setLocal("token", "unAuth");
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

  const exports = { httpService };
  return exports;
};
export default useHttp;

export const useServerFetch = ({ checkAuth }) => {
  let platform;
  // if (window.matchMedia("(display-mode: standalone)").matches) {
  //   platform = "pwa";
  // } else {
  //   platform = "web";
  // }

  const httpService = axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${getLocal("token")}`,
      Accept: "application/json",
      "app-type": "10",
    },
  });

  httpService.interceptors.response.use(
    (response) => response,
    async ({ error, response }) => {
      console.log("HttpService error", error);
      if ((response?.status === 401, checkAuth)) {
        toast.error("شما از برنامه خارج شده اید");
        localStorage.removeItem("token");
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

  const exports = { httpService };
  return exports;
};
