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
  Spinner,
} from "reactstrap";
import s from "../../../styles/main.module.scss";
import Image from "next/image";
import profilePlaceholder from "../../../public/assets/userDashboard/profile-placeholder.png";
import { LiaEditSolid } from "react-icons/lia";
import { MdOutlineEditLocationAlt } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import useHttp from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";

const UserData = () => {
  const { httpService } = useHttp();
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("لطفا نام خود را وارد کنید"),
    gender: "",
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
      gender: "",
      age: "",
      email: "",
      idCard: "",
      address: "",
      birthDate: "",
      password: "",
      phoneNumber: "",
      telephone: "",
      profile: "",
    },

    validationSchema,

    onSubmit: (values) => {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("Gender", values.gender);
      formData.append("age", values.age);
      formData.append("city", values.address);

      httpService
        .post("user", formData)
        .then((res) => {
          setLoading(false);
          res.status === 200
            ? toast.success("تغییرات با موفقیت اعمال شد")
            : null;
        })
        .catch((err) => {
          setLoading(false);
          toast.error("مشکلی در ثبت کردن اطلاعات شما بوجود امد");
        });
    },
  });

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
              <Label for="gender">جنسیت</Label>
              <InputGroup className={s.input}>
                <Input
                  name="gender"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                />
                <Button type="button">
                  <LiaEditSolid />
                </Button>
              </InputGroup>
              <FormFeedback tooltip>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="email">سن</Label>
              <InputGroup className={s.input}>
                <Input
                  name="age"
                  type="number"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                />
                <Button type="button">
                  <LiaEditSolid />
                </Button>
              </InputGroup>
              <FormFeedback tooltip>لطفا پر کنید</FormFeedback>
            </FormGroup>

            {/* <FormGroup className={s.formGroup}>
              <Label for="email">سن</Label>
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
            </FormGroup> */}

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
              <Button disabled={loading} type="submit">
                {loading ? (
                  <Spinner style={{ width: "20px", height: "20px" }}></Spinner>
                ) : null}
                ثبت اطلاعات
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default UserData;
