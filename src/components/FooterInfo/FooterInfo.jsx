import s from "./FooterInfo.module.css";
import sprite from "../../assets/icons/sprite.svg";

export default function FooterInfo() {
  return (
    <div className={s.info}>
      <ul className={s.listInfo}>
        <li className={s.listItem}>
          <svg className={s.infoIcon}>
            <use href={`${sprite}#icon-Mail`} />
          </svg>
          <a href="mailto:contact@happyhvist.ua" className={s.item}>
            contact@happyhvist.ua
          </a>
        </li>

        <li className={s.listItem}>
          <svg className={s.infoIcon}>
            <use href={`${sprite}#icon-Call`} />
          </svg>
          <a href="tel:380999999999" className={s.item}>
            380999999999
          </a>
        </li>

        <li className={s.listItem}>
          <svg className={s.infoIcon}>
            <use href={`${sprite}#icon-Calendar`} />
          </svg>
          <a href="/" className={s.item}>
            <span className={s.text}>Пн–Пт: 09:00 — 18:00</span>
            <span className={s.text}>Сб–Нд: 10:00 — 16:00</span>
          </a>
        </li>

        <li className={s.listItem}>
          <svg className={s.infoIcon}>
            <use href={`${sprite}#icon-Home`} />
          </svg>
          <div className={s.addresses}>
            <a href="/" className={s.address}>
              вул. Сонячна, 15, м. Київ, Україна, 01001
            </a>
            <a href="/" className={s.hideText}>
              вул. Коперника, 12, Львів, 79008
            </a>
            <a href="/" className={s.hideText}>
              вул. Троїцька, 33, Одеса, 65115
            </a>
            <a href="/" className={s.hideText}>
              просп. Гагаріна, 101, Дніпро, 49000
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
