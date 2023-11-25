import s from "../../../styles/main.module.scss";
import MarketCard from "../main/MarketCard";

const Banners = () => {
  return (
    <div className={s.banners}>
      <section className={s.market}>
        <div className={s.market_materials1}>
          <MarketCard
            // key={Math.random * index}
            image={"/assets/main/club.png"}
            off={"item.off"}
            title={"item.title"}
            description={"item.description"}
            price={"item.price"}
          />
        </div>
      </section>
    </div>
  );
};

export default Banners;
