import s from "./ContactsInfo.module.css";
import sprite from "../../assets/icons/sprite.svg";

export default function ContactsInfo() {
  return (
    <div className={s.info}>
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet="https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_522,h_449,c_fill/OurBuilding_jbm45z.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_294,h_292,c_fill/OurBuilding_jbm45z.jpg"
        />
        <img
          src="https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_358,h_238,c_fill/OurBuilding_jbm45z.jpg"
          alt="Фото нашої будівлі"
          className={s.image}
        />
      </picture>

      <ul className={s.list}>
        <li className={s.item}>
          <svg className={s.icon}>
            <use href={`${sprite}#icon-Mail`} />
          </svg>
          <a href="mailto:contact@happyhvist.ua" className={s.link}>
            contact@happyhvist.ua
          </a>
        </li>

        <li className={s.item}>
          <svg className={s.icon}>
            <use href={`${sprite}#icon-Call`} />
          </svg>
          <a href="tel:380999999999" className={s.link}>
            380999999999
          </a>
        </li>

        <li className={s.item}>
          <svg className={s.icon}>
            <use href={`${sprite}#icon-Calendar`} />
          </svg>
          <a href="/" className={s.link}>
            <span className={s.text}>Пн–Пт: 09:00 — 18:00</span>
            <span className={s.text}>Сб–Нд: 10:00 — 16:00</span>
          </a>
        </li>

        <li className={s.itemHome}>
          <svg className={s.icon}>
            <use href={`${sprite}#icon-Home`} />
          </svg>
          <div className={s.addressesBlock}>
            <a href="/" className={s.address}>
              вул. Сонячна, 15, м. Київ, 01001
            </a>
            <a href="/" className={s.address}>
              вул. Коперника, 12, Львів, 79008
            </a>
            <a href="/" className={s.address}>
              вул. Троїцька, 33, Одеса, 65115
            </a>
            <a href="/" className={s.address}>
              просп. Гагаріна, 101, Дніпро, 49000
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
