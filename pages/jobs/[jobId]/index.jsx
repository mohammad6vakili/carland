import { baseUrl, url } from "@/src/axiosConfig/useHttp";
import Footer from "@/src/components/header-footer/Footer";
import Header from "@/src/components/header-footer/Header";
import JobPage from "@/src/components/offers/job page/JobPage";
import axios from "axios";
import Head from "next/head";

// export const getStaticPaths = async () => {
//   const data = await axios
//     .get(`${baseUrl}/ServiceListId`, {
//       headers: {
//         Accept: "application/json",
//         "app-type": "10",
//       },
//     })
//     .then((res) => {
//       return res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   const paths = data.map((job) => {
//     return {
//       params: { jobId: job.id.toString() },
//     };
//   });

//   return {
//     paths: paths,
//     fallback: false,
//   };
// };

export const getServerSideProps = async (context) => {
  const jobId = context.params.jobId;
  const data = await axios
    .get(`${baseUrl}/service/${jobId}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      return null;
    });

  return {
    props: { job: data },
  };
};

const index = ({ job }) => {
  console.log(job);

  return (
    <>
      <Head>
        <title>{job.title}</title>
        <meta name="title" content={job.title} />
        <meta name="description" content={job.descriptions} />
        <meta property="og:image" content={url + job.images.split(",")[0]} />
      </Head>
      <Header />
      <JobPage />
      <Footer />
    </>
  );
};

export default index;
