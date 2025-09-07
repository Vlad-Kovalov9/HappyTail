import { useState } from "react";
import s from "./FilterSection.module.css";
import sprite from "../../assets/icons/sprite.svg";

export default function FilterSection({ title, iconId, children }) {
  const [open, setOpen] = useState(true);

  return (
    <div className={s.filterSection}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={s.sectionHeader}
      >
        <div className={s.leftSide}>
          {iconId && (
            <svg className={s.icon}>
              <use href={`${sprite}#${iconId}`} />
            </svg>
          )}
          {title}
        </div>

        <span>
          {open ? (
            <svg className={s.iconUpDown}>
              <use href={`${sprite}#icon-pets-up`} />
            </svg>
          ) : (
            <svg className={s.iconUpDown}>
              <use href={`${sprite}#icon-pets-down`} />
            </svg>
          )}
        </span>
      </button>

      {open && <div className={s.sectionContent}>{children}</div>}
    </div>
  );
}
