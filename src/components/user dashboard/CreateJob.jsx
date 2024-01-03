import { Button, Form, Input } from "reactstrap";
import s from "../../../styles/main.module.scss";
import Image from "next/image";
import background from "../../../public/assets/userDashboard/create-job.png";

const CreateJob = () => {
  return (
    <>
      <div className={s.create_job}>
        <Form className={s.form}>
          <section className={s.add_details}>
            <div className={s.title}>
              <h1>ثبت مشاغل</h1>
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
