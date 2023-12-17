import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import s from "../../../styles/main.module.scss";
import Image from "next/image";
import profilePlaceholder from "../../../public/assets/userDashboard/profile-placeholder.png";

const UserData = () => {
  return (
    <>
      <div className={s.user_data}>
        <div className={s.user_form}>
          <Form onSubmit={(e) => e.preventDefault()} className={s.form}>
            <FormGroup className={s.formGroup}>
              <Label for="name">نام</Label>
              <Input invalid name="name" />
              <FormFeedback for="name" tooltip>
                لطفا پر کنید
              </FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="family">نام خانوادگی</Label>
              <Input invalid name="family" />
              <FormFeedback tooltip>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="id-card">کد ملی</Label>
              <Input invalid name="id-card" />
              <FormFeedback tooltip>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="email">ایمیل</Label>
              <Input invalid name="email" />
              <FormFeedback tooltip>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="address">آدرس</Label>
              <Input invalid name="address" />
              <FormFeedback tooltip>لطفا ادرس خود را وارد کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="date">تاریخ تولد</Label>
              <Input invalid name="date" />
              <FormFeedback tooltip>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="password">رمز عبور</Label>
              <Input invalid name="password" />
              <FormFeedback tooltip>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="password">رمز عبور</Label>
              <Input invalid name="password" />
              <FormFeedback>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="phone">شماره همراه</Label>
              <Input invalid name="phone" />
              <FormFeedback>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="telephone">تلفن</Label>
              <Input invalid name="telephone" />
              <FormFeedback tooltip>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <div className={s.profile}>
              <div className={s.text}>
                <Image src={profilePlaceholder} alt="" />

                <div>
                  <p>عکس پروفایل خود را انتخاب کنید</p>
                  <span>حداکثر ۵ مگابایت باشد</span>
                </div>
              </div>

              <div className={s.button}>
                <Input
                  onChange={(e) => console.log(e.target.files[0])}
                  type="file"
                />
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
