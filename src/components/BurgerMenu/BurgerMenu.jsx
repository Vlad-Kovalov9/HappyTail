import s from "./BurgerMenu.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export default function BurgerMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className={`${s.backdrop} ${isOpen ? s.open : ""}`}
      onClick={handleBackdropClick}
    >
      <div className={s.modal}>
        <div className={s.content}>
          <ul className={s.list}>
            <li>
              <NavLink to="/about" className={s.link} onClick={onClose}>
                Про нас
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={s.link} onClick={onClose}>
                Тварини
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" className={s.link} onClick={onClose}>
                Контакти
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={s.link} onClick={onClose}>
                Блог
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={s.link} onClick={onClose}>
                Відгуки
              </NavLink>
            </li>
          </ul>

          <div className={s.btnContainer}>
            <button className={s.btnEnter}>
              Увійти
              <svg className={s.entranceIcon}>
                <use href={`${sprite}#icon-entrance`} />
              </svg>
            </button>
            <button className={s.btnDonation}>
              Підтримати
              <svg className={s.coinIcon}>
                <use href={`${sprite}#icon-coin`} />
              </svg>
            </button>
          </div>

          <ul className={s.mediaList}>
            <li>
              <svg className={s.mediaIcon}>
                <use href={`${sprite}#icon-telegram`} />
              </svg>
            </li>
            <li>
              <svg className={s.mediaIcon}>
                <use href={`${sprite}#icon-instagram`} />
              </svg>
            </li>
            <li>
              <svg className={s.mediaIcon}>
                <use href={`${sprite}#icon-facebook`} />
              </svg>
            </li>
            <li>
              <svg className={s.mediaIcon}>
                <use href={`${sprite}#icon-youtube`} />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
