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

const UserData = () => {
  return (
    <>
      <div className={s.user_data}>
        <div className={s.user_form}>
          <Form onSubmit={(e) => e.preventDefault()} className={s.form}>
            <FormGroup className={s.formGroup}>
              <Label for="name">نام</Label>
              <InputGroup className={s.input}>
                <Input name="name" />
                <Button style={{ borderRight: "0" }}>
                  <LiaEditSolid />
                </Button>
              </InputGroup>
              <FormFeedback tooltip>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="family">نام خانوادگی</Label>
              <InputGroup className={s.input}>
                <Input name="family" />
                <Button style={{ borderRight: "0" }}>
                  <LiaEditSolid />
                </Button>
              </InputGroup>
              <FormFeedback tooltip>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <Row>
              <Col md={6}>
                <FormGroup className={s.formGroup}>
                  <Label for="id-card">کد ملی</Label>
                  <InputGroup className={s.input}>
                    <Input name="id-card" />
                    <Button style={{ borderRight: "0" }}>
                      <LiaEditSolid />
                    </Button>
                  </InputGroup>
                  <FormFeedback tooltip>لطفا پر کنید</FormFeedback>
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup className={s.formGroup}>
                  <Label for="email">ایمیل</Label>
                  <InputGroup className={s.input}>
                    <Input name="email" />
                    <Button style={{ borderRight: "0" }}>
                      <LiaEditSolid />
                    </Button>
                  </InputGroup>
                  <FormFeedback tooltip>لطفا پر کنید</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <br />

            <Row>
              <Col md={12}>
                <FormGroup className={s.formGroup}>
                  <Label for="address">آدرس</Label>
                  <InputGroup className={s.input}>
                    <Input className={s.address} name="address" />
                    <Button style={{ borderRight: "0" }}>
                      <LiaEditSolid />
                    </Button>
                  </InputGroup>
                  <FormFeedback tooltip>
                    لطفا ادرس خود را وارد کنید
                  </FormFeedback>
                </FormGroup>
              </Col>
            </Row>

            <FormGroup className={s.formGroup}>
              <Label for="date">تاریخ تولد</Label>
              <InputGroup className={s.input}>
                <Input name="date" type="date" />
                <Button style={{ borderRight: "0" }}>
                  <LiaEditSolid />
                </Button>
              </InputGroup>
              <FormFeedback>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="password">رمز عبور</Label>
              <InputGroup className={s.input}>
                <Input name="name" type="password" />
                <Button style={{ borderRight: "0" }}>
                  <LiaEditSolid />
                </Button>
              </InputGroup>
              <FormFeedback>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="phone">شماره همراه</Label>
              <InputGroup className={s.input}>
                <Input name="name" />
                <Button>
                  <LiaEditSolid />
                </Button>
              </InputGroup>
              <FormFeedback>لطفا پر کنید</FormFeedback>
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label for="telephone">تلفن</Label>
              <InputGroup className={s.input}>
                <Input name="telephone" />
                <Button style={{ borderRight: "0" }}>
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
