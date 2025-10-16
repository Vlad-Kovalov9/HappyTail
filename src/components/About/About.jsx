import { NavLink } from "react-router-dom";
import s from "./About.module.css";
import AboutCounter from "../AboutCounter/AboutCounter";

export default function About() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Про притулок </h2>
      <div className={s.wrapper}>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet="https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_630,h_287,c_fill/aboutCatTablet_cx8iev.jpg"
          />

          <source
            media="(min-width: 768px)"
            srcSet="https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_356,h_287,c_fill/aboutCatTablet_cx8iev.jpg"
          />

          <img
            src="https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_358,h_205,c_fill/aboutCatTablet_cx8iev.jpg"
            alt="Cat Image"
            className={s.catImage}
          />
        </picture>
        <div className={s.dogWrapper}>
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet="https://res.cloudinary.com/dcnsdntgs/image/upload/v1760622638/aboutDog_cakwwz.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="https://res.cloudinary.com/dcnsdntgs/image/upload/v1760622638/aboutDog_cakwwz.jpg"
            />
            <img
              src="https://res.cloudinary.com/dcnsdntgs/image/upload/v1760622638/aboutDog_cakwwz.jpg"
              alt="Dog Image"
              className={s.dogImage}
            />
          </picture>
          <p className={s.subtitle}>
            Кожна тварина заслуговує на шанс на щасливе життя та люблячий дім
          </p>
        </div>
      </div>

      <div className={s.info}>
        <AboutCounter />

        <div className={s.textContainer}>
          <p className={s.text}>
            Ми — команда притулку, яка щодня дбає про тварин, що опинилися без
            дому. Кожен наш день сповнений турботи, прогулянок та ласки для тих,
            хто цього потребує найбільше.
          </p>

          <p className={s.hideText}>
            Наша місія — не лише допомогти тваринам вижити, а й знайти для них
            люблячі сім’ї, де вони будуть відчувати себе частиною родини. Ми
            організовуємо стерилізацію, лікування та щеплення для тих, хто цього
            потребує.
          </p>
          <p className={s.hideText}>
            Віримо, що навіть невелика підтримка кожного може змінити долю
            тварини. Кожен новий друг, якого ми знаходимо для притулку, робить
            наш світ трішки добрішим і теплішим.
          </p>
        </div>
      </div>

      <NavLink to="/about" className={s.link}>
        Читати більше
      </NavLink>
    </div>
  );
}
