import { Button, Form, Input } from "reactstrap";
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

const CreateAdd = ({ addCategories }) => {
  const validationSchema = Yup.object().shape({});
  const [uploaded, setUploaded] = useState();
  const [categories, setCategories] = useState([]);
  const { httpService } = useHttp();

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
    httpService
      .get("CategoryCars")
      .then((res) => {
        setCategories(res.data);
        console.log(res.data);
      })
      .catch(() => {});
  }, []);

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
                {addCategories.length !== 0
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
                      setUploaded(URL.createObjectURL(event.target.files[0]));
                    }}
                    hidden
                  />
                  <Image src={uploaded} alt="" width={100} height={100} />
                  <span>افزودن عکس</span>
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
                    <Image src={frontSide} alt="" />
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
                    <Image src={backSide} alt="" />
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
              <Input
                name="model"
                value={formik.values.model}
                onChange={formik.handleChange}
                className={s.input}
                placeholder="مدل خودرو"
              />

              <Input
                name="fuel"
                value={formik.values.fuel}
                onChange={formik.handleChange}
                className={s.input}
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

              <Input
                name="productYear"
                value={formik.values.productYear}
                onChange={formik.handleChange}
                className={s.input}
                placeholder="سال تولید"
              />

              <Input
                name="color"
                value={formik.values.color}
                onChange={formik.handleChange}
                className={s.input}
                type="select"
              >
                <option defaultValue value="" disabled>
                  رنگ
                </option>
                <option value="">رنگ</option>
              </Input>

              <Input
                name="kilometers"
                value={formik.values.kilometers}
                onChange={formik.handleChange}
                className={s.input}
                placeholder="کیلومتر"
              />

              <Input
                name="bodyCondition"
                value={formik.values.bodyCondition}
                onChange={formik.handleChange}
                className={s.input}
                type="select"
              >
                <option defaultValue value="" disabled>
                  وضعیت بدنه
                </option>
              </Input>

              <Input
                name="gearbox"
                value={formik.values.gearbox}
                onChange={formik.handleChange}
                className={s.input}
                type="select"
              >
                <option defaultValue value="" disabled>
                  گیربکس
                </option>
              </Input>

              <Input
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                className={s.input}
                placeholder="عنوان آگهی"
              />

              <Input
                name="location"
                value={formik.values.location}
                onChange={formik.handleChange}
                className={s.input}
                placeholder="مکان"
              />

              <Input
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                className={s.input}
                placeholder="قیمت"
              />

              <Input
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                className={s.description}
                type="textarea"
                placeholder="توضیحات"
              />
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
