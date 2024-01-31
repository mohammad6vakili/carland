import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Input,
  Spinner,
  UncontrolledDropdown,
} from "reactstrap";
import s from "../../../styles/main.module.scss";
import addMore from "../../../public/assets/userDashboard/add images placeholder/more.png";
import Image from "next/image";
import background from "../../../public/assets/userDashboard/create-job.png";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useHttp, { url } from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";
import Compressor from "compressorjs";
import { useRouter } from "next/router";
import { DownOutlined } from "@ant-design/icons";

const UpdateJob = () => {
  const router = useRouter();
  const { httpService } = useHttp();
  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState([]);
  const [photos, setPhotos] = useState({
    images: "",
  });

  //edit data
  const [jobData, setJobData] = useState(null);

  //local images
  const [localNationalCard, setLocalNationalCard] = useState();
  const [localActivityPremisian, setLocalActivityPremisian] = useState();
  const [localImages, setLocalImages] = useState();

  const handleUpdateJob = (values, body) => {
    const id = router.query.jobId;
    setLoading(true);

    httpService
      .post(`service/${id}`, body)
      .then((res) => {
        res.status === 200
          ? (router.push("/userDashboard/myJobs"),
            toast.success("شغل شما با موفقیت بروزرسانی شد"))
          : null;
        setLoading(false);
      })
      .catch(() => {
        toast.error("بروزرسانی شغل شما با مشکل مواجه شد");
        setLoading(false);
      });
  };

  const validationSchema = Yup.object().shape({
    title: "",
    description: "",
    timeFrom: "",
    timeTo: "",
    images: "",
  });

  const formik = useFormik({
    enableReinitialize: true,

    initialValues: {
      title: "",
      description: "",
      timeFrom: "",
      timeTo: "",
      images: "",
    },

    validationSchema,

    onSubmit: (values) => {
      let myFilters = [];
      values.filters.map((value) => {
        return myFilters.push(value.replaceAll(" ", ""));
      });
      console.log(myFilters);
      const formData = new FormData();
      formData.append("categoryId", values.categoryId);
      formData.append("title", values.title);
      formData.append("address", values.address);
      formData.append("filters", values.filters);
      formData.append("first_name", values.firstName);
      formData.append("last_name", values.lastName);
      formData.append("NationalCardImage", photos.nationalCard);
      formData.append("ActivityPermissionImage", photos.activityPremision);
      formData.append("images", photos.images);
      formData.append("state", values.state);
      formData.append("timeTo", values.timeTo);
      formData.append("timeFrom", values.timeFrom);
      formData.append("city", values.city);
      formData.append("district", values.city);
      formData.append("phone", values.phone);
      formData.append("descriptions", values.description);
      handleUpdateJob(values, formData);
    },
  });

  const handleUploadPhoto = (e, selectedPhoto) => {
    if (selectedPhoto === "nationalCard") {
      setLocalNationalCard(URL.createObjectURL(e.target.files[0]));
    } else if (selectedPhoto === "activityPremision") {
      setLocalActivityPremisian(URL.createObjectURL(e.target.files[0]));
    } else if (selectedPhoto === "images") {
      setLocalImages(URL.createObjectURL(e.target.files[0]));
    }

    const formData = new FormData();
    let images = {};
    let loadingImage = {};
    loadingImage[`${selectedPhoto}`] === "loading";
    setLoadingImage([selectedPhoto]);
    formData.append(
      "image",
      new Compressor(e?.target?.files[0], {
        quality: 0.5,

        success(result) {
          return result;
        },
        error(err) {
          console.log(err.message);
        },
      }).file
    );

    new Compressor(e.target?.files?.[0], {
      quality: 0.6,

      // The compression process is asynchronous,
      // which means you have to access the `result` in the `success` hook function.
      success(result) {
        const formData = new FormData();

        // The third parameter is required for server
        formData.append("image", result, result.name);

        // Send the compressed image file to server with XMLHttpRequest.
        httpService
          .post("upload", formData)
          .then((res) => {
            // images[`${selectedPhoto}`] = res.data.url;
            res.status === 200
              ? setPhotos((current) => {
                  let images = current;
                  images[`${selectedPhoto}`] = res.data.url;
                  return images;
                })
              : null;
            toast.success("عکس شما با موفقیت آپلود شد");
            console.log(photos);
            setLoadingImage();
          })
          .catch(() => {
            toast.error("مشکلی در اپلود عکس شما بوجود آمد");
          });
      },
    });
  };

  //edit conditions
  useEffect(() => {
    const id = router.query.jobId;
    if (id) {
      //add data
      httpService
        .get(`/service/${id}`)
        .then((res) => {
          res.status === 200 ? setJobData(res.data.data) : null;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [router]);

  useEffect(() => {
    if (jobData) {
      formik.setFieldValue("title", jobData.title);
      formik.setFieldValue("timeTo", jobData.timeTo);
      formik.setFieldValue("timeFrom", jobData.timeFrom);
      formik.setFieldValue("description", jobData.descriptions);
      jobData.images && setLocalImages(url + jobData.images);
    }
  }, [jobData]);

  return (
    <>
      <div className={s.create_job}>
        <Form onSubmit={formik.handleSubmit} className={s.form}>
          <section className={s.job_details_edit}>
            <div className={s.title}>
              <h1>اصلاح اطلاعات مشاغل</h1>
            </div>

            <div className={s.edit_details}>
              <div className={s.fields}>
                <Input
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                />
                <Input
                  type="time"
                  name="timeFrom"
                  value={formik.values.timeFrom}
                  onChange={formik.handleChange}
                />
                <Input
                  type="time"
                  name="timeTo"
                  value={formik.values.timeTo}
                  onChange={formik.handleChange}
                />
                <div className={s.image_place}>
                  <label className={s.content}>
                    <Input
                      type="file"
                      id="file"
                      onChange={(e) => handleUploadPhoto(e, "images")}
                      className={s.img}
                      hidden
                      accept="image/*"
                    />
                    <Image
                      className={
                        loadingImage?.includes("images") ? s.img_loading : s.img
                      }
                      src={localImages ? localImages : addMore}
                      alt=""
                      width={100}
                      height={100}
                    />
                    {loadingImage?.includes("moreView") ? (
                      <Spinner
                        style={{ width: "20px", height: "20px" }}
                      ></Spinner>
                    ) : null}{" "}
                  </label>
                </div>
                <Input
                  type="textarea"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />
              </div>

              <div className={s.submit_edit}>
                <Button
                  onClick={handleUpdateJob}
                  type="submit"
                  className={s.submit}
                  disabled={loading}
                >
                  {loading && (
                    <Spinner
                      style={{ width: "20px", height: "20px" }}
                    ></Spinner>
                  )}{" "}
                  ثبت تغییرات
                </Button>
              </div>
            </div>
          </section>

          <section className={s.image}>
            <Image src={background} alt="" />
          </section>
        </Form>
      </div>
    </>
  );
};

export default UpdateJob;
