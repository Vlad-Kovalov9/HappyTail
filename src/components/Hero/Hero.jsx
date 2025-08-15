import s from "./Hero.module.css";
import imageMobile from "/image/heroMobile.png";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section className={s.hero}>
      <img src={imageMobile} alt="Hero Dog Image" className={s.imageMobile} />

      <div className={s.container}>
        <div className={s.info}>
          <h1 className={s.title}>
            Кожен хвостик заслуговує <span className={s.breakLine}>на дім</span>
          </h1>
          <p className={s.subtitle}>
            Happy Хвіст — тут знаходять справжніх друзів
          </p>

          <NavLink to="/" className={s.link}>
            Знайти друга
          </NavLink>
        </div>
      </div>
    </section>
  );
}
