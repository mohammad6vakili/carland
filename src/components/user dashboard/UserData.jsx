import {
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
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
import { useSelector } from "react-redux";

const UserData = () => {
  const { httpService } = useHttp();
  const [loading, setLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(false);
  const [initialValues, setInitialValues] = useState({
    name: "",
    gender: "",
    age: "",
    carType: "",
    idCard: "",
    address: "",
    technicalDiagnosis: "",
    expirationInsurance: "",
    password: "",
    expirationCertificate: "",
    dateofCarInstallments: "",
    profile: "",
  });
  const userData = useSelector((state) => state.userInfo.userInfo);

  //handle requests
  const handleGetUSerData = () => {
    setInitialValues({
      name: userData.name,
      gender: userData.Gender,
      age: userData.age,
      carType: userData.CarType,
      idCard: userData.NationalCode,
      address: userData.city,
      technicalDiagnosis: userData.TechnicalDiagnosis,
      expirationInsurance: userData.ExpirationInsurance,
      expirationCertificate: userData.ExpirationCertificate,
      dateofCarInstallments: userData.DateofCarInstallments,
      profile: userData.image_profile,
    });
  };

  useEffect(() => {
    userData ? handleGetUSerData() : null;
  }, [userData]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("لطفا نام خود را وارد کنید"),
    gender: Yup.string().required("لطفا این فیلد را پر کنید"),
    age: Yup.string().required("لطفا سن خود را وارد کنید"),
    address: Yup.string().required("لطفا شهر خود را وارد کنید"),
    idCard: "",
    carType: "",
    technicalDiagnosis: "",
    expirationInsurance: "",
    expirationCertificate: "",
    dateofCarInstallments: "",
    profile: "",
  });

  const formik = useFormik({
    initialValues,

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
              <Label for="name">نام کاربری</Label>
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
              <FormText className={s.error}>
                {formik.errors.name &&
                  formik.touched.name &&
                  formik.errors.name}
              </FormText>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="gender">جنسیت</Label>
              <InputGroup className={s.input}>
                <Input
                  name="gender"
                  type="select"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                >
                  <option defaultValue value="" disabled>
                    جنسیت
                  </option>
                  <option value="مرد">مرد</option>
                  <option value="زن">زن</option>
                </Input>
                <Button type="button">
                  <LiaEditSolid />
                </Button>
              </InputGroup>
              <FormText className={s.error}>
                {formik.errors.gender &&
                  formik.touched.gender &&
                  formik.errors.gender}
              </FormText>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="">سن</Label>
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
              <FormText className={s.error}>
                {formik.errors.age && formik.touched.age && formik.errors.age}
              </FormText>{" "}
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
              <FormText className={s.error}>
                {formik.errors.address &&
                  formik.touched.address &&
                  formik.errors.address}
              </FormText>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="address">معاینه فنی</Label>
              <InputGroup className={s.input}>
                <Input
                  className={s.address}
                  name="technicalDiagnosis"
                  value={formik.values.technicalDiagnosis}
                  onChange={formik.handleChange}
                />
                <Button type="button">
                  <LiaEditSolid />
                </Button>
              </InputGroup>
              <FormFeedback tooltip>لطفا ادرس خود را وارد کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="date">انقضای بیمه</Label>
              <InputGroup className={s.input}>
                <Input
                  name="expirationInsurance"
                  type="date"
                  value={formik.values.expirationInsurance}
                  onChange={formik.handleChange}
                />
                <Button type="button">
                  <LiaEditSolid />
                </Button>
              </InputGroup>
              <FormFeedback>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="carType">نوع ماشین</Label>
              <InputGroup className={s.input}>
                <Input
                  name="carType"
                  value={formik.values.carType}
                  onChange={formik.handleChange}
                />
                <Button type="button">
                  <LiaEditSolid />
                </Button>
              </InputGroup>
              <FormFeedback tooltip>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="expirationCertificate">انقضای گواهینامه</Label>
              <InputGroup className={s.input}>
                <Input
                  name="expirationCertificate"
                  value={formik.values.expirationCertificate}
                  onChange={formik.handleChange}
                />
                <Button type="button">
                  <LiaEditSolid />
                </Button>
              </InputGroup>
              <FormFeedback>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="dateofCarInstallments">تاریخ اقساط خودرو</Label>
              <InputGroup className={s.input}>
                <Input
                  name="dateofCarInstallments"
                  value={formik.values.dateofCarInstallments}
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
