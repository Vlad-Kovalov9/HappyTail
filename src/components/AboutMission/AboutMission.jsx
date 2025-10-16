import s from "./AboutMission.module.css";

export default function AboutMission() {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <div className={s.reverse}>
          <picture className={s.dogImageWrapper}>
            <source
              srcSet="https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_630,h_295,c_fill/MissionDog_oke2ty.jpg"
              media="(min-width: 1440px)"
            />
            <source
              srcSet="https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_294,h_137,c_fill/MissionDog_oke2ty.jpg"
              media="(min-width: 768px)"
            />
            <img
              src="https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_358,h_214,c_fill/MissionDog_oke2ty.jpg"
              alt="Dog Image"
              className={s.dogImage}
            />
          </picture>
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
        <picture className={s.catImageWrapper}>
          <source
            srcSet="https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_522,h_271,c_fill/MissionCat_pp9sfm.jpg"
            media="(min-width: 1440px)"
          />
          <source
            srcSet="https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_294,h_159,c_fill/MissionCat_pp9sfm.jpg"
            media="(min-width: 768px)"
          />
          <img
            src="https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_358,h_214,c_fill/MissionCat_pp9sfm.jpg"
            alt="Cat Image"
            className={s.catImage}
          />
        </picture>
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
