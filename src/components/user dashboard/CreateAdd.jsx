import { Button, Form, Input, InputGroup } from "reactstrap";
import s from "../../../styles/main.module.scss";
import Image from "next/image";
import background from "../../../public/assets/userDashboard/create-add.png";
import frontSide from "../../../public/assets/userDashboard/add images placeholder/front.png";
import backSide from "../../../public/assets/userDashboard/add images placeholder/back.png";
import leftSide from "../../../public/assets/userDashboard/add images placeholder/left.png";
import rightSide from "../../../public/assets/userDashboard/add images placeholder/right.png";
import kilometers from "../../../public/assets/userDashboard/add images placeholder/kilometers.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import useHttp from "@/src/axiosConfig/useHttp";
import { formatStringJSON, getLocal } from "@/src/hooks/functions";
import toast from "react-hot-toast";

const CreateAdd = ({ addCategories }) => {
  const { httpService } = useHttp(true);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState({
    rearView: "",
    frontView: "",
    leftView: "",
    rightView: "",
    moreView: "",
    kilometersView: "",
  });
  const [models, setModels] = useState([]);
  const [colors, setColors] = useState([]);
  const [bodyCondition, setBodyCondition] = useState([]);

  //local images
  const [localMoreSide, setLocalMoreSide] = useState();
  const [localFront, setLocalFront] = useState();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("لطفا برای آگهی خود عنوان انتخاب کنید"),
    description: Yup.string().required("لطفا برای آگهی خود توضیحات بنویسید"),
  });

  const formik = useFormik({
    initialValues: {
      rearView: "",
      frontView: "",
      leftView: "",
      rightView: "",
      moreView: "",
      kilometersView: "",
      category: "",
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
      description: "",
    },

    validationSchema,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    const categoyId = formik.values.category;
    const adsFilter = JSON.parse(formatStringJSON(getLocal("adsFilter")));
    setLoading(true);

    categoyId
      ? httpService
          .get(`models/${categoyId}`)
          .then((res) => {
            setModels(res.data.models);
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
  }, [formik.values.category]);

  const handleUploadPhoto = (e, selectedPhoto) => {
    console.log(e.target.files[0], selectedPhoto);

    if (selectedPhoto === "rearView") {
      setLocalFront(URL.createObjectURL(e.target.files[0]));
    }
  };

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
                {addCategories
                  ? addCategories.map((cat) => (
                      <option value={cat.id} key={cat.id}>
                        {cat.name}
                      </option>
                    ))
                  : null}
              </Input>
            </div>

            <div className={s.images}>
              <div className={s.input}>
                <label className={s.content}>
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
                  <Image src={localMoreSide} alt="" width={100} height={100} />
                  <span>افزودن عکس</span>
                </label>
              </div>

              <div className={s.input}>
                <label className={s.content}>
                  <Input
                    type="file"
                    id="file"
                    onChange={(e) => handleUploadPhoto(e, "rearView")}
                    hidden
                  />
                  <span>
                    <Image
                      className={s.img}
                      src={localFront ? localFront : frontSide}
                      alt=""
                      width={100}
                      height={100}
                    />
                    <span>نمای جلو</span>
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
                    onChange={(e) => {
                      const [file] = e.target.files;
                      if (file) {
                        console.log(file);
                      }
                    }}
                    hidden
                  />
                  <span>
                    <Image className={s.img} src={backSide} alt="" />
                    <span>نمای عقب</span>
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
                    onChange={(e) => {
                      const [file] = e.target.files;
                      if (file) {
                        console.log(file);
                      }
                    }}
                    hidden
                  />
                  <span>
                    <Image src={rightSide} alt="" />
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
                    onChange={(e) => {
                      const [file] = e.target.files;
                      if (file) {
                        console.log(file);
                      }
                    }}
                    hidden
                  />
                  <span className={s.content}>
                    <Image src={leftSide} alt="" />
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
                    onChange={(e) => {
                      const [file] = e.target.files;
                      if (file) {
                        console.log(file);
                      }
                    }}
                    hidden
                  />
                  <span>
                    <Image src={kilometers} alt="" />
                    <span>کیلومتر شمار</span>
                  </span>
                </label>
              </div>
            </div>

            <div className={s.details}>
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
                    مدل خودرو
                  </option>
                  {models.length !== 0 &&
                    models.map((model, index) => (
                      <option value={index}>{model.brand}</option>
                    ))}
                </Input>
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
                  <option value="گازوئیل(دیزل)">گازوئیل</option>
                  <option value="دوگانه سوز">دوگانه سوز</option>
                  <option value="هیبریدی">هیبریدی</option>
                </Input>
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
                <InputGroup
                  name="location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  placeholder="مکان"
                />
              </InputGroup>

              {/* price */}
              <InputGroup className={s.input}>
                <Input
                  name="price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  placeholder="قیمت"
                />
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
              <Button type="submit">ثبت آگهی</Button>
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
