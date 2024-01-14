import { useEffect, useState } from "react";
import MarketCard from "../../main/MarketCard";
import OfferCardSkeleton from "../../skeleton/OfferCardSkeleton";
import BuySaleCard from "./BuySaleCard";
import JobsCard from "./JobsCard";
import useHttp from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";
import MySkeleton from "../../skeleton/Skeleton";
import Skeleton from "react-loading-skeleton";

const CardRenderer = ({ offers, adsFilter, jobsFilter }) => {
  const { httpService } = useHttp();

  //cards
  const [jobs, setJobs] = useState([]);
  const [sale, setSale] = useState([]);
  const [trades, setTrades] = useState([]);
  const [loading, setLoading] = useState(true);
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

  const handleGetJobs = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("categoryId", jobsFilter.categoryId);
    formData.append("filters", jobsFilter.filter);
    httpService
      .post("services/search", formData)
      .then((res) => {
        res.status === 200 ? setJobs(res.data.data.data) : null;
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
    httpService
      .post("advertisements", formData)
      .then((res) => {
        res.status === 200 ? setTrades(res.data.data.data) : null;
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
              image={item.images.split(","[0])}
              rate={item.average_rating}
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
    } else if (!jobs || !trades) {
      <>
        <div style={{ margin: "0 auto", fontWeight: "bold", width: "100%" }}>
          موردی یافت نشد!
        </div>
      </>;
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
