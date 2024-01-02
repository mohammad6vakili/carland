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

const CreateAdd = () => {
  const validationSchema = Yup.object().shape({});

  const formik = useFormik({});

  return (
    <>
      <div className={s.create_add}>
        <Form className={s.form}>
          <section className={s.add_details}>
            <div className={s.title}>
              <h1>ثبت آگهی</h1>

              <Input type="select" className={s.category}>
                <option defaultValue value="" disabled>
                  دسته بندی
                </option>
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
              <Input className={s.input} placeholder="مدل خودرو" />

              <Input className={s.input} type="select">
                <option defaultValue value="" disabled>
                  نوع سوخت
                </option>
                <option value="بنزین">بنزین</option>
                <option value="گازوئیل(دیزل)">گازوئیل</option>
                <option value="دوگانه سوز">دوگانه سوز</option>
                <option value="هیبریدی">هیبریدی</option>
              </Input>

              <Input className={s.input} placeholder="سال تولید" />

              <Input className={s.input} type="select">
                <option defaultValue value="" disabled>
                  رنگ
                </option>
                <option value="">رنگ</option>
              </Input>

              <Input className={s.input} placeholder="کیلومتر" />

              <Input className={s.input} type="select">
                <option defaultValue value="" disabled>
                  وضعیت بدنه
                </option>
              </Input>

              <Input className={s.input} type="select">
                <option defaultValue value="" disabled>
                  گیربکس
                </option>
              </Input>

              <Input className={s.input} placeholder="عنوان آگهی" />

              <Input className={s.input} placeholder="مکان" />

              <Input className={s.input} placeholder="قیمت" />

              <Input
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
