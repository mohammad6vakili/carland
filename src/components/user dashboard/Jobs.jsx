import s from "../../../styles/main.module.scss";

const UserData = () => {
  return (
    <>
      <div className={s.jobs}>
        <section className={s.myJobs}>
          <div className={s.title}>
            <span>آگهی‌های من</span>

            <section className={s.navigation}>
              <div className={s.prev}>
                <RightOutlined />
              </div>
              <div className={s.next}>
                <LeftOutlined />
              </div>
            </section>
          </div>
        </section>

        <section className={s.banner}></section>
      </div>
    </>
  );
};

export default UserData;
