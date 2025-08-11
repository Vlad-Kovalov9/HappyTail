import s from "./FooterMedia.module.css";
import sprite from "../../assets/icons/sprite.svg";

export default function FooterMedia() {
  return (
    <div className={s.social}>
      <ul className={s.mediaList}>
        <li>
          <a href="/">
            <svg className={s.mediaIcon}>
              <use href={`${sprite}#icon-telegram`} />
            </svg>
          </a>
        </li>
        <li>
          <a href="/">
            <svg className={s.mediaIcon}>
              <use href={`${sprite}#icon-instagram`} />
            </svg>
          </a>
        </li>
        <li>
          <a href="/">
            <svg className={s.mediaIcon}>
              <use href={`${sprite}#icon-facebook`} />
            </svg>
          </a>
        </li>
        <li>
          <a href="/">
            <svg className={s.mediaIcon}>
              <use href={`${sprite}#icon-youtube`} />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}
