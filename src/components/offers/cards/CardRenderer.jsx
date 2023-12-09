import { useEffect, useState } from "react";
import MarketCard from "../../main/MarketCard";
import OfferCardSkeleton from "../../skeleton/OfferCardSkeleton";
import BuySaleCard from "./BuySaleCard";
import JobsCard from "./JobsCard";
import useHttp from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";

const CardRenderer = ({ offers, adsfilterSelected }) => {
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
      httpService
        .post("services/search", {})
        .then((res) => {
          res.status === 200 ? setJobs(res.data.data) : null;
          setLoading(false);
        })
        .catch((err) => toast.error(err.message));
    } else if (offers === "خرید و فروش") {
      handleGetAds();
    }
  }, [offers]);

  useEffect(() => {
    handleGetAds();
  }, [adsfilterSelected]);

  const handleGetAds = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("fuel", adsfilterSelected.fuel);
    formData.append("color", adsfilterSelected.color);
    formData.append("body_condition", adsfilterSelected.bodyCondition);
    formData.append("gear_box", adsfilterSelected.gearBoxType);
    httpService
      .post("advertisements", formData)
      .then((res) => {
        res.status === 200 ? setTrades(res.data.data) : null;
        setLoading(false);
      })
      .catch((err) => toast.error(err.message));
  };

  if (loading === false) {
    if (offers === "خرید و فروش" && trades.length !== 0) {
      return (
        <>
          {trades.map((item, index) => (
            <BuySaleCard
              key={Math.random() * index}
              createYear={item.production_year}
              image={item.mainImage}
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
    } else if (offers === "کسب و کار" && jobs.length !== 0) {
      return (
        <>
          {jobs.map((item, index) => (
            <JobsCard
              key={Math.random() * index}
              image={item.NationalCardImage}
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
    }
  } else
    return (
      <>
        <OfferCardSkeleton width={"225px"} height={"300px"} />
        <OfferCardSkeleton width={"225px"} height={"300px"} />
        <OfferCardSkeleton width={"225px"} height={"300px"} />
        <OfferCardSkeleton width={"225px"} height={"300px"} />
      </>
    );
};

export default CardRenderer;
