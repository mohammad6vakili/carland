import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { getLocal } from "../hooks/functions";

export const url = "https://api.carland.ir";
export const baseUrl = "https://api.carland.ir/api";
const useHttp = () => {
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
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxMzMiLCJqdGkiOiI2NWIwZWRkMGM2M2JmMzkxNTk1YmEwNGYzYjUwYTQ3MGI5ZjMxYjU2ZGEyNWU2YjdmZTFlZWRkZmFlNTdiM2UwZGM0MzIzNWM2ZGE5ZjJkYiIsImlhdCI6MTcwMjgzMTQzNS42NTM1OTUsIm5iZiI6MTcwMjgzMTQzNS42NTM2MDEsImV4cCI6MTczNDQ1MzgzNS42MDg5MzcsInN1YiI6IjU2Iiwic2NvcGVzIjpbXX0.BiD64-NDTft5aQSYZJGVMkvGqCc4pJm_1CArfLDOorn8maqwJRvIMZRMHwgGN0_VWjzAyTUf0Go19sIPJaEBpPmrfzv8g_BqsBHzD7BYNYO9AQP7OhLk-uFAi-a4pJsvxWz6UKKBZqQQJCy_Fh-LckAvr1bbLW5bp1XRK9OQrGDRf3AIwbG3tQjMk31qEZg_EZ0epRn8Tq5CAhoxycu2ai2vC3eB6X-4TmiZsKLptbGbAUYEDMSFvQFt4o8emRdprsKcBO7XYgviHnEJTcwhUEtfHFPoDucy8TpaG5xyxkdXu8Sqnk0suQLP4JjMGgCISGcu6Ip84IK0wTsONKBwlXOfBrb5h9CRxZJbs9VKY7AjAVVbtXvZZ0OR-tDOC0mPpfijPnB01Q648B639quKL8tCTfYJu29-8Pj-KxCpOP1PrNNWFwsTBodM99ihHFyczmJJKj_85XgFMESVxSs5l-o3TyHeTC5dqIjruFAy6NaEvMIz86uZgsiLMo0cEw165ACh2LrM6zrRH5O4xAHpaGvBImzt93aGCzCMpuWDqsPxq_hMp-ZfQlYH2Bnn5o8QV-vHQPHukQreroEZedp7ZLlCsvfGqwJpF0WWUlN0DQWIeR76KaAyhiCKs5YTh3puwqFPjyF2gK08EwcgtH3fsbOGdF5o4ulA1RNeVLP-kYo`,
      Accept: "application/json",
      "app-type": "10",
    },
  });

  httpService.interceptors.response.use(
    (response) => response,
    async ({ error, response }) => {
      console.log("HttpService error", error);
      console.log("HttpService response", JSON.stringify(response, null, 2));
      if (response?.status === 401) {
        toast.error("شما از برنامه خارج شده اید");
        localStorage.removeItem("token");
        navigate.push("/");
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
