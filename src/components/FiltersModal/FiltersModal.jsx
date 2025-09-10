import Filters from "../Filters/Filters";
import s from "./FiltersModal.module.css";
import sprite from "../../assets/icons/sprite.svg";

export default function FiltersModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={`${s.backdrop} ${isOpen ? s.open : ""}`} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeBtn} onClick={onClose}>
          <svg className={s.icon}>
            <use href={`${sprite}#icon-close`} />
          </svg>
        </button>
        <Filters />
      </div>
    </div>
  );
}
