import { useEffect, useState } from "react";
import BuySaleCard from "./BuySaleCard";
import useHttp, { url } from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";
import MySkeleton from "../../skeleton/Skeleton";
import s from "@/styles/main.module.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "react-loading-skeleton";

const AdCards = ({ adsFilter }) => {
  const { httpService } = useHttp();

  const [trades, setTrades] = useState(null);
  const [moreAds, setMoreAds] = useState(false);
  const [adsPage, setAdsPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleGetAds();
  }, [adsFilter]);
  useEffect(() => {
    handleGetMoreAds();
  }, [adsPage]);

  const handleGetAds = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("Fuel_type", adsFilter.fuel);
    formData.append("color", adsFilter.color);
    formData.append("body_condition", adsFilter.bodyCondition);
    formData.append("gearbox_type", adsFilter.gearBoxType);
    formData.append("production_year", adsFilter.year);
    formData.append("state", adsFilter.state);
    formData.append("city", adsFilter.city);

    httpService
      .post(`advertisements?page=${adsPage}`, formData)
      .then((res) => {
        res.status === 200 && res.data.code == 404 && setTrades([]);

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
    formData.append("production_year", adsFilter.year);
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

  if (trades) {
    if (trades.length !== 0) {
      return (
        <section className={s.market_cards}>
          <InfiniteScroll
            className={s.market_cards}
            style={{ overflow: "none" }}
            dataLength={trades.length}
            next={() => {
              moreAds ? setAdsPage((current) => current + 1) : null;
            }}
            hasMore={moreAds}
            endMessage={
              <div
                style={{
                  width: "100%",
                  marginTop: "5rem",
                  textAlign: "center",
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
              <Skeleton
                key={Math.random()}
                borderRadius={"10px"}
                className="flex-1"
                width={"220px"}
                height={"300px"}
                style={{ margin: "1rem auto" }}
              />
              <Skeleton
                key={Math.random()}
                borderRadius={"10px"}
                className="flex-1"
                width={"220px"}
                height={"300px"}
                style={{ margin: "1rem auto" }}
              />
              <Skeleton
                key={Math.random()}
                borderRadius={"10px"}
                className="flex-1"
                width={"220px"}
                height={"300px"}
                style={{ margin: "1rem auto" }}
              />
              <Skeleton
                key={Math.random()}
                borderRadius={"10px"}
                className="flex-1"
                width={"220px"}
                height={"300px"}
                style={{ margin: "1rem auto" }}
              />
            </>
          )}
        </section>
      );
    } else {
      return (
        <section className={s.market_cards}>
          <div className={s.not_found_message}>
            <span>آگهی مورد نظر شما وجود ندارد!</span>
          </div>
        </section>
      );
    }
  } else {
    return (
      <>
        <section className={s.market_cards}>
          <Skeleton
            key={Math.random()}
            borderRadius={"10px"}
            className="flex-1"
            width={"220px"}
            height={"300px"}
            style={{ margin: "1rem auto" }}
          />
          <Skeleton
            key={Math.random()}
            borderRadius={"10px"}
            className="flex-1"
            width={"220px"}
            height={"300px"}
            style={{ margin: "1rem auto" }}
          />
          <Skeleton
            key={Math.random()}
            borderRadius={"10px"}
            className="flex-1"
            width={"220px"}
            height={"300px"}
            style={{ margin: "1rem auto" }}
          />
          <Skeleton
            key={Math.random()}
            borderRadius={"10px"}
            className="flex-1"
            width={"220px"}
            height={"300px"}
            style={{ margin: "1rem auto" }}
          />
        </section>
      </>
    );
  }
};

export default AdCards;
