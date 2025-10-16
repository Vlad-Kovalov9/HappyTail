import s from "./Hero.module.css";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section className={s.hero}>
      <img
        src="https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_390/v1760617192/heroMobile_zlstvf.png"
        alt="Hero Dog Image"
        width={390}
        height={264}
        className={s.imageMobile}
      />

      <div className={s.container}>
        <div className={s.info}>
          <h1 className={s.title}>
            Кожен хвостик заслуговує <span className={s.breakLine}>на дім</span>
          </h1>
          <p className={s.subtitle}>
            Happy Хвіст — тут знаходять справжніх друзів
          </p>

          <NavLink to="/pets" className={s.link}>
            Знайти друга
          </NavLink>
        </div>
      </div>
    </section>
  );
}
