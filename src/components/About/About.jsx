import { NavLink } from "react-router-dom";
import s from "./About.module.css";
import aboutCat from "/image/aboutCat.jpg";
import aboutDog from "/image/aboutDog.jpg";
import aboutCatTablet from "/image/aboutCatTablet.jpg";
import AboutCounter from "../AboutCounter/AboutCounter";

export default function About() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Про притулок </h2>
      <div className={s.wrapper}>
        <img src={aboutCat} alt="Cat Image" className={s.catImage} />
        <img src={aboutCatTablet} alt="Cat Image" className={s.catTablet} />
        <div className={s.dogWrapper}>
          <img src={aboutDog} alt="Dog Image" className={s.dogImage} />
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

      <NavLink to="/" className={s.link}>
        Читати більше
      </NavLink>
    </div>
  );
}
