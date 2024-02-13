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
import { Spinner } from "reactstrap";
import InfiniteScroll from "react-infinite-scroll-component";

const CardRenderer = ({ offers, adsFilter, jobsFilter }) => {
  const { httpService } = useHttp();

  //cards
  const [trades, setTrades] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [jobsPage, setJobsPage] = useState(1);
  const [moreAds, setMoreAds] = useState(false);
  const [adsPage, setAdsPage] = useState(1);
  const [moreJobs, setMoreJobs] = useState(false);
  const [sale, setSale] = useState([]);
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
    formData.append("state", jobsFilter.state);
    formData.append("city", jobsFilter.city);
    httpService
      .post(`services/search?page=${jobsPage}`, formData)
      .then((res) => {
        res.status === 200 && res.data.code == 404 && setJobs(null);

        res.status === 200 && res.data.code != 404
          ? jobs && jobs.length !== 0
            ? setJobs(res.data.data.data)
            : setJobs(res.data.data.data)
          : null;

        res.status === 200 &&
        res.data.code !== 404 &&
        res.data.data.next_page_url
          ? setMoreJobs(true)
          : setMoreJobs(false);

        setLoading(false);
      })
      .catch((err) => toast.error(err.message));
  };
  const handleGetMoreJobs = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("categoryId", jobsFilter.categoryId);
    formData.append("filters", jobsFilter.filter);
    formData.append("state", jobsFilter.state);
    formData.append("city", jobsFilter.city);

    httpService
      .post(`services/search?page=${jobsPage}`, formData)
      .then((res) => {
        res.status === 200 && res.data.code == 404 && setJobs(null);

        res.status === 200 && res.data.code != 404
          ? jobs && jobs.length !== 0
            ? jobs.push.apply(jobs, res.data.data.data)
            : setJobs(res.data.data.data)
          : null;

        res.status === 200 &&
        res.data.code !== 404 &&
        res.data.data.next_page_url
          ? setMoreJobs(true)
          : setMoreJobs(false);

        setLoading(false);
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  };

  const handleGetAds = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("Fuel_type", adsFilter.fuel);
    formData.append("color", adsFilter.color);
    formData.append("body_condition", adsFilter.bodyCondition);
    formData.append("gearbox_type", adsFilter.gearBoxType);
    formData.append("state", adsFilter.state);
    formData.append("city", adsFilter.city);

    httpService
      .post(`advertisements?page=${adsPage}`, formData)
      .then((res) => {
        res.status === 200 && res.data.code == 404 && setTrades(null);

        res.status === 200 && res.data.code != 404
          ? trades && trades.length !== 0
            ? setTrades(res.data.data.data)
            : setTrades(res.data.data.data)
          : null;

        res.status === 200 &&
        res.data.code !== 404 &&
        res.data.data.next_page_url
          ? setMoreAds(true)
          : setMoreAds(false);
        setLoading(false);
      })
      .catch((err) => toast.error(err.message));
  };
  const handleGetMoreAds = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("Fuel_type", adsFilter.fuel);
    formData.append("color", adsFilter.color);
    formData.append("body_condition", adsFilter.bodyCondition);
    formData.append("gearbox_type", adsFilter.gearBoxType);
    formData.append("state", adsFilter.state);
    formData.append("city", adsFilter.city);

    httpService
      .post(`advertisements?page=${adsPage}`, formData)
      .then((res) => {
        res.status === 200 && res.data.code == 404 && setTrades(null);

        res.status === 200 && res.data.code != 404
          ? trades && trades.length !== 0
            ? trades.push.apply(trades, res.data.data.data)
            : setTrades(res.data.data.data)
          : null;

        res.status === 200 &&
        res.data.code !== 404 &&
        res.data.data.next_page_url
          ? setMoreAds(true)
          : setMoreAds(false);
        setLoading(false);
      })
      .catch((err) => toast.error(err.message));
  };

  if (offers === "خرید و فروش" && trades && trades.length !== 0) {
    return (
      <section className={s.market_cards}>
        <InfiniteScroll
          className={s.market_cards}
          style={{ overflow: "none" }}
          dataLength={trades.length}
          next={() => {
            moreAds
              ? (setAdsPage((current) => current + 1), handleGetMoreAds())
              : null;
          }}
          hasMore={moreAds}
          endMessage={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                marginTop: "2rem",
              }}
            >
              <b>شما تمام آگهی ها را تماشا کردید</b>
            </div>
          }
          // below props only if you need pull down functionality
        >
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
        </InfiniteScroll>
        {loading && (
          <>
            <div className={s.buy_sale_card}></div>
            <div className={s.buy_sale_card}></div>
            <div className={s.buy_sale_card}></div>
            <div className={s.buy_sale_card}></div>
          </>
        )}
      </section>
    );
  } else if (offers === "کسب و کار" && jobs && jobs.length !== 0) {
    return (
      <section className={s.market_cards}>
        <InfiniteScroll
          className={s.market_cards}
          style={{ overflow: "none" }}
          dataLength={jobs.length}
          next={() => {
            moreJobs
              ? (handleGetMoreJobs(), setJobsPage((current) => current + 1))
              : null;
          }}
          hasMore={moreJobs}
          endMessage={
            <div
              style={{
                width: "100%",
                marginTop: "2rem",
                textAlign: "center",
              }}
            >
              <b>شما تمام آگهی ها را تماشا کردید</b>
            </div>
          }
          // below props only if you need pull down functionality
        >
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
        </InfiniteScroll>
        {loading && (
          <>
            <Skeleton
              key={Math.random()}
              borderRadius={"10px"}
              className="flex-1"
              width={"220px"}
              height={"300px"}
              style={{ margin: "1rem" }}
            />
            <Skeleton
              key={Math.random()}
              borderRadius={"10px"}
              className="flex-1"
              width={"220px"}
              height={"300px"}
              style={{ margin: "1rem" }}
            />
            <Skeleton
              key={Math.random()}
              borderRadius={"10px"}
              className="flex-1"
              width={"220px"}
              height={"300px"}
              style={{ margin: "1rem" }}
            />
            <Skeleton
              key={Math.random()}
              borderRadius={"10px"}
              className="flex-1"
              width={"220px"}
              height={"300px"}
              style={{ margin: "1rem" }}
            />
          </>
        )}
      </section>
    );
  } else if ((!jobs || !trades) && !loading) {
    return (
      <>
        <div
          style={{
            textAlign: "center",
            margin: "2rem 0",
            fontWeight: "bold",
            width: "100%",
          }}
        >
          موردی یافت نشد!
        </div>
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
  } else if (loading && (!trades || !jobs)) {
    return (
      <>
        <section className={s.market_cards}>
          <Skeleton
            key={Math.random()}
            borderRadius={"10px"}
            className="flex-1"
            width={"210px"}
            height={"300px"}
            style={{ margin: "1rem" }}
          />
          <Skeleton
            key={Math.random()}
            borderRadius={"10px"}
            className="flex-1"
            width={"220px"}
            height={"300px"}
            style={{ margin: "1rem" }}
          />
          <Skeleton
            key={Math.random()}
            borderRadius={"10px"}
            className="flex-1"
            width={"220px"}
            height={"300px"}
            style={{ margin: "1rem" }}
          />
          <Skeleton
            key={Math.random()}
            borderRadius={"10px"}
            className="flex-1"
            width={"220px"}
            height={"300px"}
            style={{ margin: "1rem" }}
          />
        </section>
      </>
    );
  }
};

export default CardRenderer;
