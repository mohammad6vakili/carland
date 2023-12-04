import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

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
      Authorization: `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MCIsImp0aSI6IjEzYTIzNTQzOGVlZWRjYmQxNTVmZGI3MzhlZjZjYzJiOWVmYjkxYzlhMTdjMmM4N2Y2Yjc2NWMyNmI3YjkxNDY0ZWI2ZDYzMGVjZTNlNjMxIiwiaWF0IjoxNjk2ODY5MDE1LjQ5MjkxMiwibmJmIjoxNjk2ODY5MDE1LjQ5MjkxNiwiZXhwIjoxNzI4NDkxNDE1LjQ4Nzg2NCwic3ViIjoiMzgiLCJzY29wZXMiOltdfQ.n5Mfg_sdzU6QRz1YHB9mpNa5lGOXgK5U4xHkVy82VNqB-Bw92RZucbxjuFfUK8ZM76cH7_Y-kxCOZhxtP5_gW7LiXJctdd65Vbi1IccUMPmTblxWc-luTO4EtsH5CcZriVMRjo0eozeGfqwlLGeZhD54ytN_DSQ1IusETDs4o2Msp0MoN9to0whR2TMVdN12d0GXkdKq4ZWKCtFaaL6bJUovR9jlvrbnnvRYGNIa3Z60FcNAiU9QzTsKvoDCLU7Qs_RedebfFobRuTozfZJAN3iI8f55K0a8i-Po-7nSiN4ilA68ODUYQ9juoOusz2zp03eHHs6rpdSPcEavFBlk8zYwJRMxWqj5jxLGrZuUKIuvDNqjh91iert4PgNGnaGQyWEdpBQXiuEajsjZ5PxCAz1yeK4pFxuJ5tGGfT2dnDRokyXWeNVgZczViTNpfNbI8XSrvCY2yhvUGS1n1z2VQ_jhlqRrJiCHsnwKAWGw9Bfj1-LZGxnRcOMLaVOttHgFgazZaYxiSdYxrHMLxeh-ntq6MHAyOLQggEvMBnqM0ogUmZGpG233_XhNiICRyiV95ODAyDJSBLdAPALNH-lXT9jc-VR6xuPWpXUu_eQ1UcoRcoghVW9vm9Qwlrkqhe12AW-98a8N6i5blhi2pB-UdRSsxeQkEU_7T2F1iShXlHA`,
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
