import { useEffect, useRef, useState } from "react";
import MarketCard from "../../main/MarketCard";
import OfferCardSkeleton from "../../skeleton/OfferCardSkeleton";
import BuySaleCard from "./BuySaleCard";
import JobsCard from "./JobsCard";
import useHttp, { url } from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";
import MySkeleton from "../../skeleton/Skeleton";
import Skeleton from "react-loading-skeleton";
import s from "@/styles/main.module.scss";

const CardRenderer = ({ offers, adsFilter, jobsFilter }) => {
  const { httpService } = useHttp();

  //cards
  const [trades, setTrades] = useState(null);
  const [jobs, setJobs] = useState(null);
  const [jobsPage, setJobsPage] = useState(1);
  const [adsPage, setAdsPage] = useState(1);
  const [sale, setSale] = useState([]);
  const [loading, setLoading] = useState(true);
  const lastAdRef = useRef();
  const marketItems = [
    {
      image: "/assets/main/market-1.png",
      off: "30%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "30%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "30%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "30%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "30%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "30%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "30%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
    {
      image: "/assets/main/market-1.png",
      off: "30%",
      title: "روغن موتور ادینول",
      description: "تکمیل فرآیند خرید از محل سامانه, به صورت غیرحضوری و...",
      price: "۲,۵۰۰,۰۰۰",
    },
  ];

  //handle requests
  useEffect(() => {
    setLoading(true);
    if (offers === "کسب و کار") {
      handleGetJobs();
    } else if (offers === "خرید و فروش") {
      handleGetAds();
    }
  }, [offers]);
  useEffect(() => {
    handleGetJobs();
  }, [jobsFilter]);
  useEffect(() => {
    handleGetAds();
  }, [adsFilter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;
        // Perform actions based on visibility
      },
      { threshold: 0.5 }
    ); // Adjust threshold as needed
    if (lastAdRef.current) {
      observer.observe(lastAdRef.current);
    }

    console.log(observer);
    return () => observer.disconnect();
  }, [lastAdRef]);

  const handleGetJobs = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("categoryId", jobsFilter.categoryId);
    formData.append("filters", jobsFilter.filter);
    formData.append("state", jobsFilter.state);
    formData.append("city", jobsFilter.city);
    httpService
      .post(`services/search?page=${jobsPage}`, formData)
      .then((res) => {
        res.status === 200
          ? res.data.code == 404
            ? setJobs(null)
            : setJobs(res.data.data.data)
          : null;
        setLoading(false);
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGetAds = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("fuel", adsFilter.fuel);
    formData.append("color", adsFilter.color);
    formData.append("body_condition", adsFilter.bodyCondition);
    formData.append("gear_box", adsFilter.gearBoxType);
    formData.append("state", adsFilter.state);
    formData.append("state", adsFilter.city);
    httpService
      .post(`advertisements?page=${adsPage}`, formData)
      .then((res) => {
        res.status === 200
          ? res.data.code == 404
            ? setTrades(null)
            : setTrades(res.data.data.data)
          : null;
        setLoading(false);
      })
      .catch((err) => toast.error(err.message));
  };

  if (loading === false) {
    if (offers === "خرید و فروش" && trades && trades.length !== 0) {
      return (
        <>
          {trades.map((item, index) => (
            <BuySaleCard
              key={Math.random() * index}
              createYear={item.production_year}
              image={item.mainImage !== "undefined" ? item.mainImage : ""}
              title={item.title}
              description={item.description}
              timePosted={item.timeAgo}
              location={item.location}
              price={item.price}
              id={item.id}
            />
          ))}
        </>
      );
    } else if (offers === "کسب و کار" && jobs && jobs.length !== 0) {
      return (
        <>
          {jobs.map((item, index) => (
            <JobsCard
              key={Math.random() * index}
              image={item.images.split(",")[0]}
              rate={
                item.formatted_average_rating
                  ? item.formatted_average_rating
                  : "جدید"
              }
              title={item.title}
              description={item.descriptions}
              isOpen={item.status}
              location={item.district}
              timeFrom={item.timeFrom}
              timeTo={item.timeTo}
              id={item.id}
            />
          ))}
        </>
      );
    } else if (!jobs && !trades) {
      <>
        <div style={{ margin: "0 auto", fontWeight: "bold", width: "100%" }}>
          موردی یافت نشد!
        </div>
      </>;
    } else if (offers === "خدمات" || offers === "فروش") {
      return (
        <>
          {marketItems.map((item, index) => (
            <MarketCard
              key={Math.random() * index}
              image={item.image}
              off={item.off}
              title={item.title}
              description={item.description}
              price={item.price}
              index={index + 1}
            />
          ))}
        </>
      );
    }
  } else
    return (
      <>
        {marketItems.map((item, index) => (
          <Skeleton
            key={Math.random()}
            borderRadius={"10px"}
            className="flex-1"
            width={"220px"}
            height={"300px"}
            style={{ margin: "1rem" }}
          />
        ))}
      </>
    );
};

export default CardRenderer;
