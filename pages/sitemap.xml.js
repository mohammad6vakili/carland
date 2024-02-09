import axios from "axios";
export const url = "https://api.carland.ir";
export const baseUrl = "https://api.carland.ir/api";

function generateSiteMap({ adids, serviceIds }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${url}</loc>
       <priority>1</priority>
     </url>
     <url>
       <loc>${url}/offers/trades</loc>
       <priority>1</priority>
     </url>
     <url>
       <loc>${url}/offers/jobs</loc>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${url}/magazines</loc>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${url}/clubs</loc>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${url}/about-us</loc>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${url}/contact-us</loc>
       <priority>0</priority>
     </url>

     <url>
       <loc>${url}/userDashboard</loc>
       <priority>0.1</priority>
     </url>
     <url>
       <loc>${url}/userDashboard/userData</loc>
       <priority>0</priority>
     </url>
     <url>
       <loc>${url}/userDashboard/wallet</loc>
       <priority>0</priority>
     </url>
     <url>
       <loc>${url}/userDashboard/myAds</loc>
       <priority>0.3</priority>
     </url>
     <url>
       <loc>${url}/userDashboard/myAds/create</loc>
       <priority>0</priority>
     </url>
     <url>
       <loc>${url}/userDashboard/myAds/update</loc>
       <priority>0</priority>
     </url>
     <url>
       <loc>${url}/userDashboard/myJobs</loc>
       <priority>0.3</priority>
     </url>
     <url>
       <loc>${url}/userDashboard/myJobs/create</loc>
       <priority>0</priority>
     </url>
     <url>
       <loc>${url}/userDashboard/myJobs/update</loc>
       <priority>0</priority>
     </url>
     <url>
       <loc>${url}/userDashboard/myTickets</loc>
       <priority>0</priority>
     </url>
     <url>
       <loc>${url}/userDashboard/myOrders</loc>
       <priority>0</priority>
     </url>
     <url>
       <loc>${url}/userDashboard/supports</loc>
       <priority>0</priority>
     </url>
     ${adids
       .map(({ id }) => {
         return `
      <url>
          <loc>${`${EXTERNAL_DATA_URL}/trades/${id}`}</loc>
          <priority>1</priority>
      </url>
    `;
       })
       .join("")}
     ${serviceIds
       .map(({ id }) => {
         return `
      <url>
          <loc>${`${EXTERNAL_DATA_URL}/jobs/${id}`}</loc>
          <priority>1</priority>
      </url>
    `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const adids = await axios
    .get(`${baseUrl}/ListAllAds`)
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return [];
    });

  const serviceIds = await axios
    .get(`${baseUrl}/ServiceAllAds`)
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return [];
    });

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap({ adids, serviceIds });

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
