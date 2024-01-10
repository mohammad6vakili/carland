import { Button, Form, Input } from "reactstrap";
import s from "../../../styles/main.module.scss";
import Image from "next/image";
import background from "../../../public/assets/userDashboard/create-job.png";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useHttp from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";

const CreateJob = ({ jobCategories }) => {
  const { httpService } = useHttp();
  const [currentStep, setCurrentStep] = useState(1);
  const [filters, setFilters] = useState([]);
  const [loadingImage, setLoadingImage] = useState([]);
  const [photos, setPhotos] = useState({
    nationalCard: "",
    activityPremision: "",
    images: "",
  });

  //local images
  const [localNationalCard, setLocalNationalCard] = useState();
  const [localActivityPremisian, setLocalActivityPremisian] = useState();
  const [localImages, setLocalImages] = useState();

  const handleCreateJob = (values, body) => {
    httpService
      .post("service", body)
      .then((res) => {
        res.status === 200
          ? toast.success("شغل جدید شما با موفقیت ساخته شد")
          : null;
      })
      .catch(() => {
        toast.error("ساختن شغل جدید با مشکل مواجه شد");
      });
  };

  const validationSchema = Yup.object().shape({});

  const formik = useFormik({
    initialValues: {
      categoryId: "",
      title: "",
      address: "",
      filters: "",
      firstName: "",
      lastName: "",
      NationalCardImage: "",
      NationalCardImage: "",
      state: "",
      timeTo: "",
      timeFrom: "",
      city: "",
      distract: "",
      phone: "",
      description: "",
      images: "",
    },

    validationSchema,

    onSubmit: (values) => {
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
      formData.append("phone", values.phone);
      formData.append("descriptions", values.description);
      handleCreateJob(values, formData);
    },
  });

  useEffect(() => {
    const catId = formik.values.categoryId;

    catId
      ? httpService(`category/${catId}`).then((res) => {
          res.data.success
            ? setFilters(res.data.data.filters.split(","))
            : null;
        })
      : null;
  }, [formik.values.categoryId]);

  const handleStep = (step) => {
    if (currentStep === step) {
      return true;
    } else {
      return false;
    }
  };

  const handleUploadPhoto = (e, selectedPhoto) => {
    // const canUpload = e?.target?.files[0].size / 1024 / 1000;
    // console.log(e?.target?.files[0].size / 1024 / 1000);

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
    formData.append("image", e.target.files[0]);

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
        setLoadingImage();
      })
      .catch(() => {});
  };

  return (
    <>
      <div className={s.create_job}>
        <Form onSubmit={formik.handleSubmit} className={s.form}>
          <section className={s.job_details}>
            <div className={s.title}>
              <h1>ثبت مشاغل</h1>
            </div>

            <div className={s.details}>
              <section className={s.step}>
                <div className={s.progress}>
                  <Input type="checkbox" defaultChecked />{" "}
                  {handleStep(1) && (
                    <section className={s.level}>
                      <p>انتخاب شغل</p>
                      <p>مرحله اول</p>
                    </section>
                  )}
                  <Image
                    src={"/assets/userDashboard/line.svg"}
                    alt=""
                    width={2}
                    height={100}
                  />
                </div>

                {handleStep(1) && (
                  <div className={s.inputs}>
                    <Input
                      name="categoryId"
                      value={formik.values.categoryId}
                      onChange={formik.handleChange}
                      type="select"
                    >
                      <option selected value="" disabled>
                        نوع کسب و کار
                      </option>

                      {jobCategories &&
                        jobCategories.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.title}
                          </option>
                        ))}
                    </Input>
                  </div>
                )}
              </section>

              <section className={s.step}>
                <div className={s.progress}>
                  <Input type="checkbox" defaultChecked />{" "}
                  {handleStep(2) && (
                    <section className={s.level}>
                      <p>انتخاب فیلترها</p>
                      <p>مرحله دوم</p>
                    </section>
                  )}
                  <Image
                    src={"/assets/userDashboard/line.svg"}
                    alt=""
                    width={2}
                    height={100}
                  />
                </div>

                {handleStep(2) && (
                  <div className={s.inputs}>
                    <Input
                      name="filters"
                      value={formik.values.filters}
                      onChange={formik.handleChange}
                      multiple
                      type="select"
                    >
                      <option selected value="" disabled>
                        انتخاب فیلتر ها
                      </option>

                      {filters
                        ? filters.map((cat, index) => (
                            <option key={index} value={cat}>
                              {cat}
                            </option>
                          ))
                        : null}
                    </Input>
                  </div>
                )}
              </section>

              <section className={s.step}>
                <div className={s.progress}>
                  <Input type="checkbox" defaultChecked />{" "}
                  {handleStep(3) && (
                    <section className={s.level}>
                      <p>اطلاعات فروشگاه</p>
                      <p>مرحله سوم</p>
                    </section>
                  )}
                  <Image
                    src={"/assets/userDashboard/line.svg"}
                    alt=""
                    width={2}
                    height={100}
                  />
                </div>

                {handleStep(3) && (
                  <div className={s.inputs}>
                    <Input
                      name="title"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      placeholder="عنوان فروشگاه"
                    />

                    <Input
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      placeholder="آدرس"
                      type="textarea"
                    />

                    <Input
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      placeholder="نام فروشنده"
                    />

                    <Input
                      name="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      placeholder="نام خانوادگی فروشنده"
                    />

                    <Input
                      name="city"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      placeholder="شهر"
                    />

                    <Input
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      placeholder="شماره تماس"
                    />

                    <Input
                      name="description"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      placeholder="توضیحات"
                    />
                  </div>
                )}
              </section>

              <section className={s.step}>
                <div className={s.progress}>
                  <Input type="checkbox" defaultChecked />{" "}
                  {handleStep(4) && (
                    <section className={s.level}>
                      <p>بارگذاری مدارک</p>
                      <p>مرحله چهارم</p>
                    </section>
                  )}
                  <Image
                    src={"/assets/userDashboard/line.svg"}
                    alt=""
                    width={2}
                    height={100}
                  />
                </div>

                {handleStep(4) && (
                  <div className={s.inputs}>
                    <label
                      className={s.image_input}
                      onChange={(e) => console.log(e.target.files[0])}
                    >
                      <Input
                        type="file"
                        id="file"
                        onChange={(e) => handleUploadPhoto(e, "nationalCard")}
                        hidden
                      />
                      <span className={s.content}>
                        <Image
                          src={localNationalCard ? localNationalCard : ""}
                          alt=""
                          width={100}
                          height={100}
                        />
                        <span>عکس کارت ملی</span>
                      </span>
                    </label>

                    <label
                      className={s.image_input}
                      onChange={(e) => console.log(e.target.files[0])}
                    >
                      <Input
                        type="file"
                        id="file"
                        onChange={(e) => {
                          const [file] = e.target.files;
                          if (file) {
                            console.log(file);
                          }
                        }}
                        hidden
                      />
                      <span>
                        <Image
                          src={
                            localActivityPremisian ? localActivityPremisian : ""
                          }
                          alt=""
                        />
                        <span>عکس پروانه کسب</span>
                      </span>
                    </label>

                    <label
                      className={s.image_input}
                      onChange={(e) => console.log(e.target.files[0])}
                    >
                      <Input
                        type="file"
                        id="file"
                        multiple
                        onChange={(e) => {
                          const [file] = e.target.files;
                          if (file) {
                            console.log(file);
                          }
                        }}
                        hidden
                      />
                      <span>
                        <Image src={localImages ? localImages : ""} alt="" />
                        <span>عکس های دیگر</span>
                      </span>
                    </label>
                  </div>
                )}
              </section>

              <section className={s.step}>
                <div className={s.progress}>
                  <Input type="checkbox" defaultChecked />{" "}
                  {handleStep(5) && (
                    <section className={s.level}>
                      <p>بررسی و تایید اطلاعات</p>
                      <p>مرحله پنجم</p>
                    </section>
                  )}
                </div>

                {handleStep(5) && <div className={s.inputs}></div>}
              </section>
            </div>

            <div className={s.submit_btn}>
              {currentStep === 5 ? (
                <>
                  <Button
                    className={s.prev}
                    onClick={() =>
                      currentStep > 1
                        ? setCurrentStep((current) => current - 1)
                        : null
                    }
                  >
                    مرحله قبل
                  </Button>
                  <Button type="submit" className={s.next}>
                    ثبت آگهی
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    className={s.prev}
                    onClick={() =>
                      currentStep > 1
                        ? setCurrentStep((current) => current - 1)
                        : null
                    }
                  >
                    مرحله قبل
                  </Button>
                  <Button
                    className={s.next}
                    onClick={() =>
                      setCurrentStep((current) =>
                        current < 5 ? current + 1 : null
                      )
                    }
                  >
                    مرحله بعد
                  </Button>
                </>
              )}
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

export default CreateJob;
