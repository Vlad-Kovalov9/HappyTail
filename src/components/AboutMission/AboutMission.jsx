import s from "./AboutMission.module.css";
import dog from "/image/AboutPage/MissionDog.jpg";
import cat from "/image/AboutPage/MissionCat.jpg";

export default function AboutMission() {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <div className={s.reverse}>
          <img src={dog} alt="Dog Image" className={s.dogImage} />
          <div className={s.textBlock}>
            <h3 className={s.title}>Наша місія</h3>
            <p className={s.subtitle}>
              Ми рятуємо тварин від голоду, холоду та небезпеки, даруючи їм шанс
              на щасливе майбутнє. Віримо, що кожен хвіст заслуговує на тепло і
              любов.
            </p>
          </div>
        </div>
      </li>

      <li className={s.item}>
        <img src={cat} alt="Cat Image" className={s.catImage} />
        <div className={s.textBlock}>
          <h3 className={s.title}>Наші цінності</h3>
          <ul className={s.subtitleList}>
            <li className={s.subItem}>
              Турбота — кожен підопічний отримує увагу та догляд.
            </li>
            <li className={s.subItem}>
              Відповідальність — ми дбаємо про безпеку та комфорт.
            </li>
            <li className={s.subItem}>Любов — головна причина нашої роботи.</li>
          </ul>
        </div>
      </li>
    </ul>
  );
}
