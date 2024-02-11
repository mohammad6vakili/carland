import { Button, Form, Input, InputGroup, Spinner } from "reactstrap";
import s from "../../../styles/main.module.scss";
import Image from "next/image";
import background from "../../../public/assets/userDashboard/create-add.png";
import addMore from "../../../public/assets/userDashboard/add images placeholder/more.png";
import frontSide from "../../../public/assets/userDashboard/add images placeholder/front.png";
import backSide from "../../../public/assets/userDashboard/add images placeholder/back.png";
import leftSide from "../../../public/assets/userDashboard/add images placeholder/left.png";
import rightSide from "../../../public/assets/userDashboard/add images placeholder/right.png";
import kilometers from "../../../public/assets/userDashboard/add images placeholder/kilometers.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import useHttp, { url } from "@/src/axiosConfig/useHttp";
import { formatStringJSON, getLocal } from "@/src/hooks/functions";
import toast from "react-hot-toast";
import { IoAddCircle } from "react-icons/io5";
import { useRouter } from "next/router";
import Compressor from "compressorjs";
import { cityNames } from "../offers/cities";

const CreateAdd = ({ addCategories, type }) => {
  const { httpService } = useHttp(true);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState([]);
  const [photos, setPhotos] = useState({
    rearView: "",
    frontView: "",
    leftView: "",
    rightView: "",
    moreView: "",
    kilometersView: "",
  });
  const [brand, setBrand] = useState([]);
  const [models, setModels] = useState([]);
  const [colors, setColors] = useState([]);
  const [bodyCondition, setBodyCondition] = useState([]);
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

  //edit data
  const [editCategories, setEditCategories] = useState(null);
  const [addData, setaddData] = useState(null);

  //local images
  const [localMoreSide, setLocalMoreSide] = useState();
  const [localFront, setLocalFront] = useState();
  const [localRear, setLocalRear] = useState();
  const [localLeft, setLocalLeft] = useState();
  const [localRight, setLocalRight] = useState();
  const [localKilometers, setLocalKilometers] = useState();

  const validationSchema = Yup.object().shape({
    category: Yup.string().required(
      "لطفا این دسته بندی اگهی خود را انتخاب کنید"
    ),
    brand: Yup.string().required("لطفا مدل ماشین خود را انتخاب کنید"),
    model: Yup.string().required("لطفا اسم ماشین خود را انتخاب کنید"),
    fuel: Yup.string().required("لطفا نوع سوخت را مشخص کنید"),
    productYear: Yup.string().required("لطفا سال ساخت را مشخص کنید"),
    color: Yup.string().required("لطفا رنگ را انتخاب کنید"),
    kilometers: Yup.number().required("لطفا مسافت طی کرده را وارد کنید"),
    bodyCondition: Yup.string().required("این فیلد را پر کنید"),
    gearbox: Yup.string().required("این فیلد را پر کنید"),
    title: Yup.string().required("لطفا برای آگهی خود عنوان انتخاب کنید"),
    location: Yup.string().required("این فیلد را پر کنید"),
    price: Yup.string().required("این فیلد را پر کنید"),
    price: Yup.string().required("این فیلد را پر کنید"),
    description: Yup.string().required("لطفا برای آگهی خود توضیحات بنویسید"),
  });

  const formik = useFormik({
    enableReinitialize: true,

    initialValues: {
      //photos
      rearView: "",
      frontView: "",
      leftView: "",
      rightView: "",
      moreView: "",
      kilometersView: "",
      //car details
      category: "",
      brand: "",
      model: "",

      fuel: "",
      productYear: "",
      color: "",
      kilometers: "",
      bodyCondition: "",
      gearbox: "",
      title: "",
      location: "",
      price: "",
      state: "",
      city: "",
      description: "",
    },

    validationSchema,

    onSubmit: (values) => {
      handleCreateAd(values);
    },
  });

  useEffect(() => {
    const categoryId = formik.values.category;
    const adsFilter = JSON.parse(formatStringJSON(getLocal("adsFilter")));
    setLoading(true);

    categoryId
      ? httpService
          .get(`models/${categoryId}`)
          .then((res) => {
            setBrand(res.data.models);
          })
          .catch(() => {
            toast.error("مشکلی در گرفتن اطلاعات سرور بوجود امده");
          })
      : null;

    adsFilter
      ? (setColors(adsFilter.colors),
        setBodyCondition(adsFilter.body_conditions))
      : null;

    setLoading(false);
  }, [formik.values]);

  useEffect(() => {
    if (brand) {
      brand.map((brand) => {
        if (Object.values(brand).indexOf(`${formik.values.brand}`) > -1) {
          setModels(brand.model.split(",").filter((model) => model !== ""));
        }
      });
    }
  }, [brand]);

  const handleUploadPhoto = (e, selectedPhoto) => {
    // const canUpload = e?.target?.files[0].size / 1024 / 1000;
    // console.log(e?.target?.files[0].size / 1024 / 1000);

    if (selectedPhoto === "frontView") {
      setLocalFront(URL.createObjectURL(e.target.files[0]));
    } else if (selectedPhoto === "rearView") {
      setLocalRear(URL.createObjectURL(e.target.files[0]));
    } else if (selectedPhoto === "leftView") {
      setLocalLeft(URL.createObjectURL(e.target.files[0]));
    } else if (selectedPhoto === "rightView") {
      setLocalRight(URL.createObjectURL(e.target.files[0]));
    } else if (selectedPhoto === "moreView") {
      setLocalMoreSide(URL.createObjectURL(e.target.files[0]));
    } else if (selectedPhoto === "kilometersView") {
      setLocalKilometers(URL.createObjectURL(e.target.files[0]));
    }

    const formData = new FormData();
    let images = {};
    let loadingImage = {};
    loadingImage[`${selectedPhoto}`] === "loading";
    setLoadingImage([selectedPhoto]);
    formData.append("image", e.target.files[0]);

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

  const handleCreateAd = (values) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("front_view", photos.frontView ? photos.frontView : "");
    formData.append("rear_view", photos.rearView ? photos.rearView : "");
    formData.append("left_view", photos.leftView ? photos.leftView : "");
    formData.append("right_view", photos.rightView ? photos.rightView : "");
    formData.append("more_view", photos.moreView ? photos.moreView : "");
    formData.append(
      "kilometers_view",
      photos.kilometersView ? photos.kilometersView : ""
    );
    formData.append("model_id", values.category);
    formData.append("car_type", addCategories[values.category + 1].name);
    formData.append("car_name", values.brand);
    formData.append("car_model", values.model);
    formData.append("production_year", values.productYear);
    formData.append("kilometers", values.kilometers);
    formData.append("Fuel_type", values.fuel);
    formData.append("color", values.color);
    formData.append("body_condition", values.bodyCondition);
    formData.append("gearbox_type", values.gearbox);
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("location", values.location);
    formData.append("price", values.price);
    formData.append("state", values.state);
    formData.append("city", values.city);

    const id = router?.query?.adId;
    type !== "edit"
      ? httpService
          .post("ads", formData)
          .then((res) => {
            res.status === 200
              ? toast.success("آگهی شما با موفقیت ثبت شد")
              : null;
            setLoading(false);
            // router.back();
          })
          .catch((err) => {
            toast.error("مشکلی در ثبت آگهی بوجود امد");
            toast.error(err);
            setLoading(false);
          })
      : httpService
          .put(`ads/${id}`, formData)
          .then((res) => {
            res.status === 200
              ? toast.success("آگهی شما با موفقیت بروزرسانی شد")
              : null;
            setLoading(false);
            router.back();
          })
          .catch((err) => {
            toast.error("مشکلی در بروزرسانی آگهی بوجود امد");
            toast.error(err);
            setLoading(false);
          });
  };

  //edit conditions
  useEffect(() => {
    if (type === "edit") {
      //add data
      const id = router.query.adId;
      httpService
        .get(`/Showads/${id}`)
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
    if (addData) {
      formik.setFieldValue("category", parseInt(addData.car_model));
      formik.setFieldValue("color", addData.color);
      formik.setFieldValue("kilometers", addData.kilometers);
      formik.setFieldValue("description", addData.description);
      formik.setFieldValue("description", addData.description);
      formik.setFieldValue("fuel", addData.Fuel_type);
      formik.setFieldValue("bodyCondition", addData.body_condition);
      formik.setFieldValue("gearbox", addData.gearbox_type);
      formik.setFieldValue("title", addData.title);
      formik.setFieldValue("location", addData.location);
      formik.setFieldValue("state", addData.state);
      formik.setFieldValue("price", addData.price);
      formik.setFieldValue("productYear", addData.production_year);
      addData.front_view && setLocalFront(url + addData.front_view);
      addData.rear_view && setLocalRear(url + addData.rear_view);
      addData.left_view && setLocalLeft(url + addData.left_view);
      addData.right_view && setLocalRight(url + addData.right_view);
      addData.kilometers_view &&
        setLocalKilometers(url + addData.kilometers_view);
      addData.mainImage && setLocalMoreSide(url + addData.mainImage);
    }
  }, [addData]);

  return (
    <>
      <div className={s.create_add}>
        <Form onSubmit={formik.handleSubmit} className={s.form}>
          <section className={s.add_details}>
            <div className={s.title}>
              <h1>ثبت آگهی</h1>

              <Input
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                type="select"
                className={s.category}
              >
                <option defaultValue value="" disabled>
                  دسته بندی
                </option>
                {addCategories && type !== "edit"
                  ? addCategories.map((cat) => (
                      <option value={cat.id} key={cat.id}>
                        {cat.name}
                      </option>
                    ))
                  : editCategories &&
                    editCategories.map((cat) => (
                      <option value={cat.id} key={cat.id}>
                        {cat.name}
                      </option>
                    ))}
              </Input>
            </div>

            <section className={s.images}>
              <div className={s.input}>
                <label className={s.content}>
                  <Input
                    type="file"
                    id="file"
                    onChange={(e) => handleUploadPhoto(e, "moreView")}
                    className={s.img}
                    hidden
                    accept="image/*"
                  />
                  <Image
                    className={
                      loadingImage?.includes("moreView") ? s.img_loading : s.img
                    }
                    src={localMoreSide ? localMoreSide : addMore}
                    alt=""
                    width={100}
                    height={100}
                  />
                  {loadingImage?.includes("moreView") ? (
                    <Spinner
                      style={{ width: "20px", height: "20px" }}
                    ></Spinner>
                  ) : null}{" "}
                  <span>افزودن عکس</span>
                </label>
              </div>

              <div className={s.input}>
                <label className={s.content}>
                  <Input
                    type="file"
                    id="file"
                    onChange={(e) => handleUploadPhoto(e, "frontView")}
                    className={s.img}
                    hidden
                    accept="image/*"
                  />
                  <span>
                    <Image
                      className={
                        loadingImage?.includes("frontView")
                          ? s.img_loading
                          : s.img
                      }
                      src={localFront ? localFront : frontSide}
                      alt=""
                      width={100}
                      height={100}
                    />
                    {loadingImage?.includes("frontView") ? (
                      <Spinner
                        style={{ width: "20px", height: "20px" }}
                      ></Spinner>
                    ) : null}{" "}
                    <span>نمای جلو</span>
                  </span>
                </label>
              </div>

              <div className={s.input}>
                <label className={s.content}>
                  <Input
                    type="file"
                    id="file"
                    onChange={(e) => handleUploadPhoto(e, "rearView")}
                    hidden
                    accept="image/*"
                  />
                  <span>
                    <Image
                      className={
                        loadingImage?.includes("rearView")
                          ? s.img_loading
                          : s.img
                      }
                      src={localRear ? localRear : backSide}
                      alt=""
                      width={100}
                      height={100}
                    />
                    {loadingImage?.includes("rearView") ? (
                      <Spinner
                        style={{ width: "20px", height: "20px" }}
                      ></Spinner>
                    ) : null}{" "}
                    <span>نمای عقب</span>
                  </span>
                </label>
              </div>

              <div className={s.input}>
                <label className={s.content}>
                  <Input
                    type="file"
                    id="file"
                    onChange={(e) => handleUploadPhoto(e, "rightView")}
                    hidden
                    accept="image/*"
                  />
                  <Image
                    className={
                      loadingImage?.includes("rightView")
                        ? s.img_loading
                        : s.img
                    }
                    src={localRight ? localRight : rightSide}
                    alt=""
                    width={100}
                    height={100}
                  />
                  <span>
                    {loadingImage?.includes("rightView") ? (
                      <Spinner
                        style={{ width: "20px", height: "20px" }}
                      ></Spinner>
                    ) : null}{" "}
                    <span>نمای راست</span>
                  </span>
                </label>
              </div>

              <div className={s.input}>
                <label
                  className={s.content}
                  onChange={(e) => console.log(e.target.files[0])}
                >
                  <Input
                    type="file"
                    id="file"
                    onChange={(e) => handleUploadPhoto(e, "leftView")}
                    hidden
                    accept="image/*"
                  />
                  <span className={s.content}>
                    <Image
                      className={
                        loadingImage?.includes("leftView")
                          ? s.img_loading
                          : s.img
                      }
                      src={localLeft ? localLeft : leftSide}
                      alt=""
                      width={100}
                      height={100}
                    />
                    {loadingImage?.includes("leftView") ? (
                      <Spinner
                        style={{ width: "20px", height: "20px" }}
                      ></Spinner>
                    ) : null}{" "}
                    <span>نمای چپ</span>
                  </span>
                </label>
              </div>

              <div className={s.input}>
                <label
                  className={s.content}
                  onChange={(e) => console.log(e.target.files[0])}
                >
                  <Input
                    type="file"
                    id="file"
                    onChange={(e) => handleUploadPhoto(e, "kilometersView")}
                    hidden
                    accept="image/*"
                  />
                  <span>
                    <Image
                      className={
                        loadingImage?.includes("kilometersView")
                          ? s.img_loading
                          : s.img
                      }
                      src={localKilometers ? localKilometers : kilometers}
                      alt=""
                      width={100}
                      height={100}
                    />
                    {loadingImage?.includes("kilometersView") ? (
                      <Spinner
                        style={{ width: "20px", height: "20px" }}
                      ></Spinner>
                    ) : null}{" "}
                    <span>کیلومتر شمار</span>
                  </span>
                </label>
              </div>
            </section>

            <div className={s.details}>
              {/* brand */}
              <InputGroup className={s.input}>
                <Input
                  name="brand"
                  value={formik.values.brand}
                  onChange={formik.handleChange}
                  type="select"
                  disabled={loading}
                >
                  <option defaultValue value="" disabled>
                    مدل خودرو
                  </option>
                  {brand.length !== 0 &&
                    brand.map((brand, index) => (
                      <option value={brand.brand}>{brand.brand}</option>
                    ))}
                </Input>
                {formik.errors.brand && formik.touched.brand && (
                  <span className={s.error}>{formik.errors.brand}</span>
                )}
              </InputGroup>

              {/* model */}
              <InputGroup className={s.input}>
                <Input
                  name="model"
                  value={formik.values.model}
                  onChange={formik.handleChange}
                  type="select"
                  disabled={loading}
                >
                  <option defaultValue value="" disabled>
                    اسم مدل
                  </option>
                  {models.length !== 0 &&
                    models.map((model, index) => (
                      <option value={model}>{model}</option>
                    ))}
                </Input>
                {formik.errors.model && formik.touched.model && (
                  <span className={s.error}>{formik.errors.model}</span>
                )}
              </InputGroup>

              {/* fuel */}
              <InputGroup className={s.input}>
                <Input
                  name="fuel"
                  value={formik.values.fuel}
                  onChange={formik.handleChange}
                  type="select"
                >
                  <option defaultValue value="" disabled>
                    نوع سوخت
                  </option>
                  <option value="بنزین">بنزین</option>
                  <option value="گازوئیل(دیزل)">گازوئیل(دیزل)</option>
                  <option value="دوگانه سوز">دوگانه سوز</option>
                  <option value="هیبریدی">هیبریدی</option>
                </Input>
                {formik.errors.fuel && formik.touched.fuel && (
                  <span className={s.error}>{formik.errors.fuel}</span>
                )}
              </InputGroup>

              {/* productYear */}
              <InputGroup className={s.input}>
                <Input
                  name="productYear"
                  value={formik.values.productYear}
                  onChange={formik.handleChange}
                  type="number"
                  placeholder="سال تولید"
                />
                {formik.errors.productYear && formik.touched.productYear && (
                  <span className={s.error}>{formik.errors.productYear}</span>
                )}
              </InputGroup>

              {/* color */}
              <InputGroup className={s.input}>
                <Input
                  name="color"
                  value={formik.values.color}
                  onChange={formik.handleChange}
                  type="select"
                >
                  <option defaultValue value="" disabled>
                    رنگ
                  </option>
                  {colors && colors.length !== 0
                    ? colors.map((color) => (
                        <option key={color} value={color}>
                          {color}
                        </option>
                      ))
                    : null}
                </Input>
                {formik.errors.color && formik.touched.color && (
                  <span className={s.error}>{formik.errors.color}</span>
                )}
              </InputGroup>

              {/* kilometers */}
              <InputGroup className={s.input}>
                <Input
                  name="kilometers"
                  value={formik.values.kilometers}
                  onChange={formik.handleChange}
                  className={s.input}
                  placeholder="کیلومتر"
                  type="number"
                />
                {formik.errors.kilometers && formik.touched.kilometers && (
                  <span className={s.error}>{formik.errors.kilometers}</span>
                )}
              </InputGroup>

              {/* bodyCondition */}
              <InputGroup className={s.input}>
                <Input
                  name="bodyCondition"
                  value={formik.values.bodyCondition}
                  onChange={formik.handleChange}
                  type="select"
                >
                  <option defaultValue value="" disabled>
                    وضعیت بدنه
                  </option>
                  {bodyCondition && bodyCondition.length !== 0
                    ? bodyCondition.map((bc) => (
                        <option key={bc} value={bc}>
                          {bc}
                        </option>
                      ))
                    : null}
                </Input>
                {formik.errors.bodyCondition &&
                  formik.touched.bodyCondition && (
                    <span className={s.error}>
                      {formik.errors.bodyCondition}
                    </span>
                  )}
              </InputGroup>

              {/* gearbox */}
              <InputGroup className={s.input}>
                <Input
                  name="gearbox"
                  value={formik.values.gearbox}
                  onChange={formik.handleChange}
                  type="select"
                >
                  <option defaultValue value="" disabled>
                    گیربکس
                  </option>
                  <option value="دنده ای">دنده ای</option>
                  <option value="اتوماتیک">اتوماتیک</option>
                </Input>
                {formik.errors.gearbox && formik.touched.gearbox && (
                  <span className={s.error}>{formik.errors.gearbox}</span>
                )}
              </InputGroup>

              {/* title */}
              <InputGroup className={s.input}>
                <Input
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  placeholder="عنوان آگهی"
                />
                {formik.errors.title && formik.touched.title && (
                  <span className={s.error}>{formik.errors.title}</span>
                )}
              </InputGroup>

              {/* location */}
              <InputGroup className={s.input}>
                <Input
                  name="location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  placeholder="مکان"
                />
                {formik.errors.location && formik.touched.location && (
                  <span className={s.error}>{formik.errors.location}</span>
                )}
              </InputGroup>

              {/* state */}
              <InputGroup className={s.input}>
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
                {formik.errors.state && formik.touched.state && (
                  <span className={s.error}>{formik.errors.state}</span>
                )}
              </InputGroup>

              {/* city */}
              <InputGroup className={s.input}>
                <Input
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  placeholder="شهر"
                  type="select"
                >
                  <option defaultValue value="" disabled>
                    شهر
                  </option>
                  {formik.values.state &&
                    cityNames[`${formik.values.state}`].map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                </Input>
                {formik.errors.city && formik.touched.city && (
                  <span className={s.error}>{formik.errors.city}</span>
                )}
              </InputGroup>

              {/* price */}
              <InputGroup className={s.input}>
                <Input
                  name="price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  placeholder="قیمت"
                />
                {formik.errors.price && formik.touched.price && (
                  <span className={s.error}>{formik.errors.price}</span>
                )}
              </InputGroup>

              {/* dexcription */}
              <InputGroup className={s.description}>
                <Input
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  type="textarea"
                  placeholder="توضیحات"
                />
                {formik.errors.description && formik.touched.description && (
                  <span className={s.error}>{formik.errors.description}</span>
                )}
              </InputGroup>
            </div>

            <div className={s.submit_btn}>
              <Button disabled={loading} type="submit">
                {loading ? (
                  <Spinner style={{ width: "20px", height: "20px" }}></Spinner>
                ) : null}{" "}
                ثبت آگهی
              </Button>
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

export default CreateAdd;
