import { Button, Form, Input } from "reactstrap";
import s from "../../../styles/main.module.scss";
import Image from "next/image";
import background from "../../../public/assets/userDashboard/create-job.png";
import { useEffect, useState } from "react";
import { useFormik } from "formik";

const CreateJob = ({ jobCategories }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const formik = useFormik({
    initialValues: {
      categoryId: "",
      title: "",
      address: "",
      filters: "",
      first_name: "",
      last_name: "",
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
  });

  useEffect(() => {
    console.log(jobCategories);
  }, [jobCategories]);

  const handleStep = (step) => {
    if (currentStep === step) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <div className={s.create_job}>
        <Form className={s.form}>
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
                    <Input type="select">
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
                    <Input type="select">
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
                  <Input type="checkbox" defaultChecked />
                  <Image
                    src={"/assets/userDashboard/line.svg"}
                    alt=""
                    width={2}
                    height={100}
                  />
                </div>

                <div className={s.inputs}>
                  <Input type="select">
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
              </section>

              <section className={s.step}>
                <div className={s.progress}>
                  <Input type="checkbox" defaultChecked />
                  <Image
                    src={"/assets/userDashboard/line.svg"}
                    alt=""
                    width={2}
                    height={100}
                  />
                </div>

                <div className={s.inputs}>
                  <Input type="select">
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
              </section>

              <section className={s.step}>
                <div className={s.progress}>
                  <Input type="checkbox" defaultChecked />
                </div>

                <div className={s.inputs}>
                  <Input type="select">
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
              </section>
            </div>

            <div className={s.submit_btn}>
              <Button className={s.prev}>مرحله قبل</Button>
              <Button className={s.next}>مرحله بعد</Button>
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
