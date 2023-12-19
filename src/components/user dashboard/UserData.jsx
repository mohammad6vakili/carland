import {
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row,
} from "reactstrap";
import s from "../../../styles/main.module.scss";
import Image from "next/image";
import profilePlaceholder from "../../../public/assets/userDashboard/profile-placeholder.png";
import { LiaEditSolid } from "react-icons/lia";
import { MdOutlineEditLocationAlt } from "react-icons/md";
import { useFormik } from "formik";
import * as yup from "yup";
import { useEffect, useState } from "react";

const UserData = () => {
  const validationSchema = yup.object({
    name: "",
    family: "",
    idCard: "",
    email: "",
    address: "",
    birthDate: "",
    password: "",
    phoneNumber: "",
    telephone: "",
    profile: "",
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      family: "",
      idCard: "",
      email: "",
      address: "",
      birthDate: "",
      password: "",
      phoneNumber: "",
      telephone: "",
      profile: "",
    },

    validationSchema,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  return (
    <>
      <div className={s.user_data}>
        <div className={s.user_form}>
          <Form onSubmit={formik.handleSubmit} className={s.form}>
            <FormGroup className={s.formGroup}>
              <Label for="name">نام</Label>
              <InputGroup className={s.input}>
                <Input
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                <Button type="button">
                  <LiaEditSolid />
                </Button>
              </InputGroup>
              <FormFeedback tooltip>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="family">نام خانوادگی</Label>
              <InputGroup className={s.input}>
                <Input
                  name="family"
                  value={formik.values.family}
                  onChange={formik.handleChange}
                />
                <Button type="button">
                  <LiaEditSolid />
                </Button>
              </InputGroup>
              <FormFeedback tooltip>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="id-card">کد ملی</Label>
              <InputGroup className={s.input}>
                <Input
                  name="idCard"
                  value={formik.values.idCard}
                  onChange={formik.handleChange}
                />
                <Button type="button">
                  <LiaEditSolid />
                </Button>
              </InputGroup>
              <FormFeedback>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="email">ایمیل</Label>
              <InputGroup className={s.input}>
                <Input
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <Button type="button">
                  <LiaEditSolid />
                </Button>
              </InputGroup>
              <FormFeedback tooltip>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroupAddress}>
              <Label for="address">آدرس</Label>
              <InputGroup className={s.input}>
                <Input
                  className={s.address}
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                />
                <Button type="button">
                  <MdOutlineEditLocationAlt />
                </Button>
              </InputGroup>
              <FormFeedback tooltip>لطفا ادرس خود را وارد کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="date">تاریخ تولد</Label>
              <InputGroup className={s.input}>
                <Input
                  name="birthDate"
                  type="date"
                  value={formik.values.birthDate}
                  onChange={formik.handleChange}
                />
                <Button type="button">
                  <LiaEditSolid />
                </Button>
              </InputGroup>
              <FormFeedback>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="password">رمز عبور</Label>
              <InputGroup className={s.input}>
                <Input
                  name="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <Button type="button">
                  <LiaEditSolid />
                </Button>
              </InputGroup>
              <FormFeedback>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="phoneNumber">شماره همراه</Label>
              <InputGroup className={s.input}>
                <Input
                  name="phoneNumber"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                />
                <Button type="button">
                  <LiaEditSolid />
                </Button>
              </InputGroup>
              <FormFeedback>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="telephone">تلفن</Label>
              <InputGroup className={s.input}>
                <Input
                  name="telephone"
                  value={formik.values.telephone}
                  onChange={formik.handleChange}
                />
                <Button type="button">
                  <LiaEditSolid />
                </Button>
              </InputGroup>
              <FormFeedback>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <div className={s.profile}>
              <div className={s.text}>
                <Image src={profilePlaceholder} alt="" />

                <div>
                  <p>عکس پروفایل خود را انتخاب کنید</p>
                  <span>حداکثر ۵ مگابایت باشد</span>
                </div>
              </div>

              <div className={s.input_place}>
                <div className={s.input}>
                  <label
                    onChange={(e) => console.log(e.target.files[0])}
                    htmlFor="file"
                  >
                    <Input
                      type="file"
                      id="file"
                      value={formik.values.profile}
                      onChange={formik.handleChange}
                      hidden
                    />
                    <span>افزودن عکس</span>
                  </label>
                </div>
              </div>
            </div>

            <div className={s.submit}>
              <Button type="submit">ثبت اطلاعات</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default UserData;
