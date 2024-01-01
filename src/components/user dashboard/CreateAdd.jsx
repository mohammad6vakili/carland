import { Form, Input } from "reactstrap";
import s from "../../../styles/main.module.scss";
import Image from "next/image";
import background from "../../../public/assets/userDashboard/create-add.png";

const CreateAdd = () => {
  return (
    <>
      <div className={s.create_add}>
        <Form>
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
                <label onChange={(e) => console.log(e.target.files[0])}>
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
                <label onChange={(e) => console.log(e.target.files[0])}>
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
                  <span>نمای جلو</span>
                </label>
              </div>

              <div className={s.input}>
                <label onChange={(e) => console.log(e.target.files[0])}>
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
                  <span>نمای عقب</span>
                </label>
              </div>

              <div className={s.input}>
                <label onChange={(e) => console.log(e.target.files[0])}>
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
                  <span>نمای راست</span>
                </label>
              </div>

              <div className={s.input}>
                <label onChange={(e) => console.log(e.target.files[0])}>
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
                  <span>نمای چپ</span>
                </label>
              </div>

              <div className={s.input}>
                <label onChange={(e) => console.log(e.target.files[0])}>
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
                  <span>کیلومتر شمار</span>
                </label>
              </div>

              <div className={s.input}>
                <label onChange={(e) => console.log(e.target.files[0])}>
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
                  <span>نمای عقب</span>
                </label>
              </div>
            </div>

            <div className={s.details}>
              <Input className={s.input} placeholder="مدل خودرو" />

              <Input className={s.input} type="select">
                <option defaultValue disabled value="">
                  نوع سوخت
                </option>
                <option value="بنزین">بنزین</option>
                <option value="گازوئیل(دیزل)">گازوئیل</option>
                <option value="دوگانه سوز">دوگانه سوز</option>
                <option value="هیبریدی">هیبریدی</option>
              </Input>

              <Input className={s.input} placeholder="سال تولید" />

              <Input className={s.input} type="select"></Input>
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
