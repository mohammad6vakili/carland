import InfiniteScroll from "react-infinite-scroll-component";
import JobsCard from "./JobsCard";
import { useEffect, useState } from "react";
import useHttp, { url } from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import s from "@/styles/main.module.scss";

const JobCards = ({ jobsFilter }) => {
  const { httpService } = useHttp();

  const [jobs, setJobs] = useState(null);
  const [jobsPage, setJobsPage] = useState(1);
  const [moreJobs, setMoreJobs] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleGetMoreJobs();
  }, [jobsPage]);
  useEffect(() => {
    handleGetJobs();
  }, [jobsFilter]);

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
        res.status === 200 && res.data.code == 404 && setJobs([]);

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

  if (jobs) {
    if (jobs.length !== 0) {
      return (
        <section className={s.market_cards}>
          <InfiniteScroll
            className={s.market_cards}
            style={{ overflow: "none" }}
            dataLength={jobs.length}
            next={() => {
              moreJobs ? setJobsPage((current) => current + 1) : null;
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
                <b>شما تمام کسب و کار ها را تماشا کردید</b>
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
            <span>کسب و کار مورد نظر شما وجود ندارد!</span>
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
            style={{ margin: "2rem auto" }}
          />
          <Skeleton
            key={Math.random()}
            borderRadius={"10px"}
            className="flex-1"
            width={"220px"}
            height={"300px"}
            style={{ margin: "2rem auto" }}
          />
          <Skeleton
            key={Math.random()}
            borderRadius={"10px"}
            className="flex-1"
            width={"220px"}
            height={"300px"}
            style={{ margin: "2rem auto" }}
          />
          <Skeleton
            key={Math.random()}
            borderRadius={"10px"}
            className="flex-1"
            width={"220px"}
            height={"300px"}
            style={{ margin: "2rem auto" }}
          />
        </section>
      </>
    );
  }
};

export default JobCards;
