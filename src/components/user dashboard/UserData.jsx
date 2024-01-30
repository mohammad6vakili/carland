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
import useHttp, { url } from "@/src/axiosConfig/useHttp";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import MySkeleton from "../skeleton/Skeleton";
import Compressor from "compressorjs";
import { setUserInfo } from "@/src/app/slices/userInfoSlice";

const UserData = () => {
  const { httpService } = useHttp();
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const userData = useSelector((state) => state.userInfo.userInfo);

  //handle requests
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
    enableReinitialize: true,

    initialValues: {
      name: "",
      gender: "",
      age: "",
      carType: "",
      idCard: "",
      address: "",
      technicalDiagnosis: "",
      expirationInsurance: "",
      expirationCertificate: "",
      dateofCarInstallments: "",
      profile: "",
    },

    validationSchema,

    onSubmit: (values) => {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("Gender", values.gender);
      formData.append("age", values.age);
      formData.append("NationalCode", values.idCard);
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

  useEffect(() => {
    if (userData) {
      setLoading(false);
      formik.setFieldValue("name", userData.name);
      formik.setFieldValue("gender", userData.Gender);
      formik.setFieldValue("age", userData.age);
      // formik.setFieldValue("profile", userData.image_profile);
      formik.setFieldValue("address", userData.city);
      formik.setFieldValue("idCard", userData.NationalCode);
      console.log(userData);
    }
  }, [userData]);

  const handleUploadProfile = (event) => {
    setImageLoading(true);

    new Compressor(event.target?.files?.[0], {
      quality: 0.6,

      // The compression process is asynchronous,
      // which means you have to access the `result` in the `success` hook function.
      success(result) {
        const formData = new FormData();

        // The third parameter is required for server
        formData.append("image", result, result.name);

        // Send the compressed image file to server with XMLHttpRequest.
        httpService
          .post("uploadProfile", formData)
          .then((res) => {
            res.status === 200
              ? (dispatch(
                  setUserInfo({ ...userData, image_profile: res.data.url })
                ),
                toast.success("پروفایل شما با موفقیت تغییر کرد"))
              : null;
            setImageLoading(false);
          })
          .catch(() => {
            toast.error("در اپلود عکس پروفایل شما مشکلی بوجود امد");
            setImageLoading(false);
          });
      },
      error(err) {
        toast.error("در اپلود عکس پروفایل شما مشکلی بوجود امد");
        setLoading(false);
      },
    });
  };

  return (
    <>
      <div className={s.user_data}>
        <section className={s.user_form}>
          {userData && !loading ? (
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
                    <option selected value="" disabled>
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
                    type="date"
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
                    type="date"
                  />
                  <Button type="button">
                    <LiaEditSolid />
                  </Button>
                </InputGroup>
                <FormFeedback>لطفا پر کنید</FormFeedback>
              </FormGroup>

              <div className={s.profile}>
                <div className={s.text}>
                  <section className={s.profile_place}>
                    <Image
                      src={
                        userData?.image_profile
                          ? url + userData.image_profile
                          : profilePlaceholder
                      }
                      alt=""
                      width={100}
                      height={100}
                      style={imageLoading ? { opacity: 0.5 } : {}}
                    />
                  </section>

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
                        onChange={(e) => handleUploadProfile(e)}
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
                    <Spinner
                      style={{ width: "20px", height: "20px" }}
                    ></Spinner>
                  ) : null}
                  ثبت اطلاعات
                </Button>
              </div>
            </Form>
          ) : (
            <MySkeleton width={"100%"} height={"500px"} />
          )}
        </section>
      </div>
    </>
  );
};

export default UserData;
