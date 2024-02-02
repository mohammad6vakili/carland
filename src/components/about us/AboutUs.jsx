import s from "@/styles/main.module.scss";
import Image from "next/image";
import headImage from "@/public/assets/about us/head-image.png";
import topImageBack from "@/public/assets/about us/top-circle-back.png";
import topAlign from "@/public/assets/about us/top-align.png";
import bottomImageBack from "@/public/assets/about us/bottom-circle-back.png";
import bottomAlign from "@/public/assets/about us/bottom-align.png";
import devider from "@/public/assets/about us/devider.svg";
import profile from "@/public/assets/about us/person-profile.png";
import { Button } from "reactstrap";
import { IoTriangleSharp } from "react-icons/io5";
import { ButtonIcon } from "@/src/assets/buttonIcon";

const AboutUs = () => {
  const steps = [
    {
      title: "آغاز ماجراجویی",
      year: "۱۳۸۱",
      description:
        "شروع فعالیت با نام گرین ست و آغاز فروش هاست  خارج از ایران و جذب مشتری از طریق فروش آنلاین",
    },
    {
      title: "آغاز ماجراجویی",
      year: "۱۳۸۱",
      description:
        "شروع فعالیت با نام گرین ست و آغاز فروش هاست  خارج از ایران و جذب مشتری از طریق فروش آنلاین",
    },
    {
      title: "آغاز ماجراجویی",
      year: "۱۳۸۱",
      description:
        "شروع فعالیت با نام گرین ست و آغاز فروش هاست  خارج از ایران و جذب مشتری از طریق فروش آنلاین",
    },
  ];

  return (
    <>
      <div className={s.about_us}>
        <section className={s.first_sec}>
          <div className={s.texts}>
            <h2 className={s.title}>کارلند با بیش از یک دهه فعالیت</h2>
            <p>
              کارلند با بیش از یک دهه فعالیتکارلند با بیش از یک دهه فعالیتکارلند
              با بیش از یک دهه فعالیتکارلند با بیش از یک دهه فعالیتکارلند با بیش
              از یک دهه فعالیت
            </p>
            <p>
              کارلند با بیش از یک دهه فعالیتکارلند با بیش از یک دهه فعالیتکارلند
              با بیش از یک دهه فعالیتکارلند با بیش از یک دهه فعالیتکارلند با بیش
              از یک دهه فعالیت
            </p>

            <Button className={s.contact_us_btn}>ارتباط با ما</Button>
          </div>

          <div className={s.image}>
            <section className={s.main_image}>
              <div className={s.top}>
                <Image className={s.background} src={topImageBack} alt="icon" />
                <Image className={s.icon} src={topAlign} alt="icon" />
              </div>
              <Image
                className={s.main_background}
                src={headImage}
                alt="about us"
              />
              <div className={s.bottom}>
                <Image
                  className={s.background}
                  src={bottomImageBack}
                  alt="icon"
                />
                <Image className={s.icon} src={bottomAlign} alt="icon" />
              </div>
            </section>
          </div>
        </section>

        <section className={s.company_members}>
          <div className={s.header}>
            <div className={s.content}>اعضای شرکت</div>
          </div>

          <Image className={s.devider} src={devider} alt="" />

          <div className={s.list}>
            <div className={s.person}>
              <section className={s.profile}>
                <Image src={profile} alt="profile" />
              </section>

              <section className={s.details}>
                <div className={s.name_position}>
                  <span className={s.name}>{"محمد امین پاکدات"}</span>
                  <span>{"مدیر ارشد"}</span>
                </div>

                <div className={s.experience}>
                  <div className={s.background}>
                    <ButtonIcon />
                  </div>
                  <span>{"۸ سال"}</span>
                  <span>{"سابقه"}</span>
                </div>
              </section>
            </div>
            <div className={s.person}>
              <section className={s.profile}>
                <Image src={profile} alt="profile" />
              </section>

              <section className={s.details}>
                <div className={s.name_position}>
                  <span className={s.name}>{"محمد امین پاکدات"}</span>
                  <span>{"مدیر ارشد"}</span>
                </div>

                <div className={s.experience}>
                  <div className={s.background}>
                    <ButtonIcon />
                  </div>
                  <span>{"۸ سال"}</span>
                  <span>{"سابقه"}</span>
                </div>
              </section>
            </div>
            <div className={s.person}>
              <section className={s.profile}>
                <Image src={profile} alt="profile" />
              </section>

              <section className={s.details}>
                <div className={s.name_position}>
                  <span className={s.name}>{"محمد امین پاکدات"}</span>
                  <span>{"مدیر ارشد"}</span>
                </div>

                <div className={s.experience}>
                  <div className={s.background}>
                    <ButtonIcon />
                  </div>
                  <span>{"۸ سال"}</span>
                  <span>{"سابقه"}</span>
                </div>
              </section>
            </div>
            <div className={s.person}>
              <section className={s.profile}>
                <Image src={profile} alt="profile" />
              </section>

              <section className={s.details}>
                <div className={s.name_position}>
                  <span className={s.name}>{"محمد امین پاکدات"}</span>
                  <span>{"مدیر ارشد"}</span>
                </div>

                <div className={s.experience}>
                  <div className={s.background}>
                    <ButtonIcon />
                  </div>
                  <span>{"۸ سال"}</span>
                  <span>{"سابقه"}</span>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className={s.story}>
          <div className={s.header}>
            <div className={s.right_side}>
              <div className={s.triangles}>
                <div className={s.content}>
                  <IoTriangleSharp className={s.first} />
                  <IoTriangleSharp className={s.second} />
                </div>
              </div>
              <div className={s.line}></div>
            </div>
            <div className={s.text}>
              <span>داستان</span>
              <span>کارلند</span>
            </div>
            <div className={s.left_side}>
              <div className={s.line}></div>
              <div className={s.triangles}>
                <div className={s.content}>
                  <IoTriangleSharp className={s.first} />
                  <IoTriangleSharp className={s.second} />
                </div>
              </div>
            </div>
          </div>

          <div className={s.story_steps}>
            <div className={s.main_line}>
              <div className={s.step} style={{ visibility: "hidden" }}></div>
              {steps.map((step, index) => (
                <div key={Math.random()} className={s.step}>
                  <div
                    className={
                      (index + 1) % 2 === 0 ? s.data_right : s.data_left
                    }
                  >
                    <div className={s.title}>
                      <h3>{step.title}</h3>
                    </div>

                    <div className={s.year_box}>{step.year}</div>

                    <div className={s.description}>{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className={s.continue}></div>
            <div className={s.continue_text}>
              <span>این داستان همجنان ادامه دارد ...</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
