import s from "./OurTeam.module.css";
import team1 from "/image/AboutPage/team1.png";
import team2 from "/image/AboutPage/team2.png";
import team3 from "/image/AboutPage/team3.png";
import team4 from "/image/AboutPage/team4.png";

export default function OurTeam() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Наша команда</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <img src={team1} alt="Image our team people" className={s.image} />
          <div className={s.textBlock}>
            <h3 className={s.name}>Олена Кравчук</h3>
            <p className={s.job}>Засновниця</p>
            <p className={s.description}>
              Олена започаткувала притулок у 2017 році та координує всю
              діяльність організації. Її головна мета — зробити так, щоб жодна
              тварина не залишалася без дому.
            </p>
          </div>
        </li>

        <li className={s.item}>
          <img src={team2} alt="Image our team people" className={s.image} />
          <div className={s.textBlock}>
            <h3 className={s.name}>Андрій Мельник</h3>
            <p className={s.job}>Ветеринар</p>
            <p className={s.description}>
              Андрій піклується про здоров’я кожного підопічного: проводить
              огляди, лікування, вакцинацію та стерилізацію.
            </p>
          </div>
        </li>

        <li className={s.item}>
          <img src={team3} alt="Image our team people" className={s.image} />
          <div className={s.textBlock}>
            <h3 className={s.name}>Сергій Поліщук</h3>
            <p className={s.job}>Куратор волонтерів</p>
            <p className={s.description}>
              Сергій організовує роботу волонтерів, відповідає за прогулянки
              собак і допомогу в догляді за тваринами.
            </p>
          </div>
        </li>

        <li className={s.item}>
          <img src={team4} alt="Image our team people" className={s.image} />
          <div className={s.textBlock}>
            <h3 className={s.name}>Анна Левченко</h3>
            <p className={s.job}>SMM-менеджер</p>
            <p className={s.description}>
              Анастасія розповідає історії наших хвостиків у соцмережах, щоб
              більше людей дізналися про них і захотіли подарувати дім.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
