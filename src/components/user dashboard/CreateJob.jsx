import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Input,
  InputGroup,
  Label,
  Spinner,
} from "reactstrap";
import s from "@/styles/main.module.scss";
import Image from "next/image";
import background from "@/public/assets/userDashboard/create-job.png";
import addMore from "@/public/assets/userDashboard/more.png";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useHttp from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";
import Compressor from "compressorjs";
import { useRouter } from "next/router";
import { DownOutlined } from "@ant-design/icons";
import { cityNames } from "../offers/cities";

const CreateJob = ({ jobCategories, type }) => {
  const router = useRouter();
  const { httpService } = useHttp();
  const [currentStep, setCurrentStep] = useState(1);
  const [filters, setFilters] = useState([]);
  const [filtersOpen, setFiltersOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  //edit data
  const [editCategories, setEditCategories] = useState(null);
  const [jobData, setJobData] = useState(null);

  //images
  const [localNationalCard, setLocalNationalCard] = useState();
  const [localActivityPremisian, setLocalActivityPremisian] = useState();
  const [localImages, setLocalImages] = useState();
  const [loadingImage, setLoadingImage] = useState([]);
  const [photos, setPhotos] = useState({
    nationalCard: "",
    activityPremision: "",
    images: "",
  });

  const statesNames = [
    "آذربایجان شرقی",
    "آذربایجان غربی",
    "اردبیل",
    "اصفهان",
    "البرز",
    "ایلام",
    "بوشهر",
    "تهران",
    "چهارمحال و بختیاری",
    "خراسان جنوبی",
    "خراسان رضوی",
    "خراسان شمالی",
    "خوزستان",
    "زنجان",
    "سمنان",
    "سیستان و بلوچستان",
    "فارس",
    "قزوین",
    "قم",
    "کردستان",
    "کرمان",
    "کرمانشاه",
    "کهگیلویه و بویراحمد",
    "گلستان",
    "گیلان",
    "لرستان",
    "مازندران",
    "مرکزی",
    "هرمزگان",
    "همدان",
    "یزد",
  ];

  const handleCreateJob = (values, body) => {
    setLoading(true);
    httpService
      .post("service", body)
      .then((res) => {
        res.status === 200
          ? (router.push("/userDashboard/myJobs"),
            toast.success("شغل جدید شما با موفقیت ساخته شد"))
          : null;
      })
      .catch(() => {
        toast.error("ساختن شغل جدید با مشکل مواجه شد");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const validationSchema = Yup.object().shape({
    categoryId: Yup.string().required("لطفا نوع کسب و کار خود را انتخاب کنید"),
    title: Yup.string().required("لطفا عنوان شغل خود را مشخص کنید"),
    address: Yup.string().required("لطفا آدرس شغل خود را وارد کنید"),
    // filters: Yup.required("لطفا فیلتر های کاری خود را مشخص کنید"),
    firstName: Yup.string().required("لطفا نام خود را وارد کنید"),
    lastName: Yup.string().required("لطفا نام خانوادگی خود را وارد کنید"),

    state: Yup.string().required("لطفا استان مربوط به شغل خود را وارد کنید"),
    state: Yup.string().required("لطفا شهر مربوط به شغل خود را وارد کنید"),
    timeTo: Yup.string().required("لطفا ساعت شروع کار را مشخص کنید"),
    timeFrom: Yup.string().required("لطفا ساعت پایان کار را مشخص کنید"),
    city: Yup.string().required("لطفا نام شهر خود را وارد کنید"),
    phone: Yup.string().required("لطفا شماره تماس خود را وارد کنید"),
    description: Yup.string().required("لطفا برای شغل خود توضیحاتی بنویسید"),
    //     NationalCardImage: Yup.string().required(
    // "لطفا عکس کارت ملی خود را اپلود نمایید"
    // ),
    // images: Yup.string().required("لطفا عکس های محل کار خود را اپلود نمایید"),
  });

  const formik = useFormik({
    initialValues: {
      categoryId: "",
      title: "",
      address: "",
      filters: [],
      firstName: "",
      lastName: "",
      state: "",
      city: "",
      timeTo: "",
      timeFrom: "",
      city: "",
      distract: "",
      phone: "",
      description: "",
      images: photos.images,
      NationalCardImage: photos.nationalCard,
      activityPremision: photos.activityPremision,
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
      handleCreateJob(values, formData);
    },
  });

  useEffect(() => {
    const catId = formik.values.categoryId;

    catId
      ? httpService(`category/${catId}`).then((res) => {
          res?.data.success
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

  const handleStepForward = () => {
    if (currentStep === 1 && formik.values.categoryId) {
      // setCurrentStep((current) => (current < 5 ? current + 1 : null));
      return true;
    } else if (currentStep === 2 && !!formik.values.filters.length) {
      currentStep < 5 ? setCurrentStep((current) => current + 1) : null;
    } else if (currentStep === 3 && formik.values.description) {
      currentStep < 5 ? setCurrentStep((current) => current + 1) : null;
    } else if (currentStep === 4 && localImages && loadingImage.length === 0) {
      currentStep < 5 ? setCurrentStep((current) => current + 1) : null;
    } else {
      toast("لطفا اطلاعات این مرحله کامل کنید");
    }
  };

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
        maxWidth: 500,
        maxHeight: 500,

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

  const handleFiltersClick = (value) => {
    let convertValue = value.replaceAll("  ", "");
    formik.values.filters.includes(convertValue)
      ? formik.values.filters.splice(convertValue)
      : formik.values.filters.push(convertValue);
    console.log(formik.values.filters);
    setTimeout(() => {
      setFiltersOpen(true);
    }, 10);
  };

  useEffect(() => {
    formik.values.filters = [];
    formik.values.categoryId.length !== 0
      ? setCurrentStep((current) => current + 1)
      : null;
  }, [formik.values.categoryId]);

  //edit conditions
  useEffect(() => {
    const id = router.query.jobId;
    if ((type === "edit", id)) {
      //add data
      httpService
        .get(`/service/${id}`)
        .then((res) => {
          res.status === 200 ? setaddData(res.data.data) : null;
        })
        .catch((err) => {
          console.log(err);
        });

      //categories
      httpService
        .get("/CategoryCars")
        .then((res) => {
          res.status === 200 ? setEditCategories(res.data) : null;
        })
        .catch((err) => {});
    }
  }, [router]);

  useEffect(() => {
    if (jobData) {
      formik.setFieldValue("categoryId");
      formik.setFieldValue("productYear", jobData.production_year);
      jobData.NationalCardImage &&
        setLocalNationalCard(url + jobData.NationalCardImage);
    }
  }, [jobData]);

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
                <div
                  className={
                    handleStep(1) ? s.progress_open : s.progress_closed
                  }
                >
                  <Input type="checkbox" defaultChecked={currentStep > 1} />{" "}
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

                      {jobCategories && type !== "edit"
                        ? jobCategories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                              {cat.title}
                            </option>
                          ))
                        : editCategories &&
                          editCategories.map((cat) => (
                            <option value={cat.id}>{cat.title}</option>
                          ))}
                    </Input>
                  </div>
                )}
              </section>

              <section className={s.step}>
                <div
                  className={
                    handleStep(2) ? s.progress_open : s.progress_closed
                  }
                >
                  <Input
                    type="checkbox"
                    defaultChecked={currentStep > 2 ? true : false}
                  />{" "}
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
                    <Dropdown
                      className={s.input}
                      name="filters"
                      value={formik.values.filters}
                      onChange={formik.handleChange}
                      type="select"
                      toggle={() => setFiltersOpen(!filtersOpen)}
                      isOpen={filtersOpen}
                    >
                      <DropdownToggle>
                        <DownOutlined /> انتخاب فیلتر ها
                      </DropdownToggle>
                      <DropdownMenu className={s.menu}>
                        {filters && filtersOpen
                          ? filters.map((cat, index) => (
                              <DropdownItem
                                className={
                                  formik.values.filters.includes(
                                    cat.replaceAll("  ", "")
                                  )
                                    ? s.item_selected
                                    : s.item
                                }
                                key={cat}
                              >
                                {cat}{" "}
                                <Input
                                  className={s.checkbox}
                                  type="checkbox"
                                  onChange={() => handleFiltersClick(cat)}
                                  checked={formik.values.filters.includes(
                                    cat.replaceAll("  ", "")
                                  )}
                                />
                              </DropdownItem>
                            ))
                          : null}
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                )}
              </section>

              <section className={s.step}>
                <div
                  className={
                    handleStep(3) ? s.progress_open : s.progress_closed
                  }
                >
                  <Input
                    type="checkbox"
                    defaultChecked={currentStep > 3 ? true : false}
                  />{" "}
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

                    <InputGroup className={s.group}>
                      <div>
                        <Label>ساعت شروع کار</Label>
                        <Input
                          name="timeFrom"
                          value={formik.values.timeFrom}
                          onChange={formik.handleChange}
                          placeholder="ساعت شروع کار"
                          type="time"
                        />
                      </div>
                    </InputGroup>
                    <InputGroup className={s.group}>
                      <div>
                        <Label>ساعت پایان کار</Label>
                        <Input
                          name="timeTo"
                          value={formik.values.timeTo}
                          onChange={formik.handleChange}
                          type="time"
                        />
                      </div>
                    </InputGroup>

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
                      name="state"
                      value={formik.values.state}
                      onChange={formik.handleChange}
                      type="select"
                    >
                      <option defaultValue value="" disabled>
                        استان
                      </option>
                      {statesNames.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </Input>

                    <Input
                      name="city"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      placeholder="شهر"
                      type="select"
                    >
                      <option value="" defaultValue disabled>
                        شهر
                      </option>
                      {formik.values.state &&
                        cityNames[`${formik.values.state}`].map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                    </Input>

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
                <div
                  className={
                    handleStep(4) ? s.progress_open : s.progress_closed
                  }
                >
                  <Input
                    type="checkbox"
                    defaultChecked={currentStep > 4 ? true : false}
                  />{" "}
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
                        accept="image/*"
                      />
                      <span
                        className={
                          loadingImage?.includes("nationalCard")
                            ? s.content_loading
                            : s.content
                        }
                      >
                        {localNationalCard && (
                          <Image
                            src={localNationalCard}
                            alt=""
                            width={100}
                            height={100}
                          />
                        )}
                        {loadingImage?.includes("nationalCard") ? (
                          <span className={s.loading_image_text}>
                            در حال بارگذاری <Spinner></Spinner>
                          </span>
                        ) : (
                          <span>عکس کارت ملی</span>
                        )}
                      </span>
                    </label>

                    <label
                      className={s.image_input}
                      onChange={(e) => console.log(e.target.files[0])}
                    >
                      <Input
                        type="file"
                        id="file"
                        onChange={(e) =>
                          handleUploadPhoto(e, "activityPremision")
                        }
                        hidden
                      />
                      <span
                        className={
                          loadingImage?.includes("activityPremision")
                            ? s.content_loading
                            : s.content
                        }
                      >
                        {localActivityPremisian && (
                          <Image
                            src={localActivityPremisian}
                            alt=""
                            width={100}
                            height={100}
                          />
                        )}
                        {loadingImage?.includes("activityPremision") ? (
                          <span className={s.loading_image_text}>
                            در حال بارگذاری <Spinner></Spinner>
                          </span>
                        ) : (
                          <span>عکس پروانه کسب</span>
                        )}
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
                        onChange={(e) => handleUploadPhoto(e, "images")}
                        hidden
                      />
                      <span
                        className={
                          loadingImage?.includes("images")
                            ? s.content_loading
                            : s.content
                        }
                      >
                        {localImages && (
                          <Image
                            src={localImages}
                            alt=""
                            width={100}
                            height={100}
                          />
                        )}
                        {loadingImage?.includes("images") ? (
                          <span className={s.loading_image_text}>
                            در حال بارگذاری <Spinner></Spinner>
                          </span>
                        ) : (
                          <span>عکس های دیگر</span>
                        )}
                      </span>
                    </label>
                  </div>
                )}
              </section>

              <section className={s.step}>
                <div
                  className={
                    handleStep(5) ? s.progress_open : s.progress_closed
                  }
                >
                  <Input
                    type="checkbox"
                    defaultChecked={currentStep >= 5 ? true : false}
                  />{" "}
                  {handleStep(5) && (
                    <section className={s.level}>
                      <p>بررسی و تایید اطلاعات</p>
                      <p>مرحله پنجم</p>
                    </section>
                  )}
                </div>

                {handleStep(5) && (
                  <div className={s.inputs}>
                    {Object.keys(formik.errors).length !== 0 && (
                      <span style={{ textAlign: "center", color: "red" }}>
                        لطفا به مراحل قبل برگردید و اطلاعات خود را کامل کنید
                        {console.log(formik.errors)}
                      </span>
                    )}
                  </div>
                )}
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
                  <Button
                    disabled={loading}
                    type={loading ? "submit" : "button"}
                    className={s.next}
                  >
                    ثبت شغل
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
                  <Button className={s.next} onClick={handleStepForward}>
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
