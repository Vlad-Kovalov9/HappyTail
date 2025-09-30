import s from "./DonatePage.module.css";
import sprite from "../../assets/icons/sprite.svg";

export default function DonatePage() {
  return (
    <div className={s.container}>
      <svg className={s.image}>
        <use href={`${sprite}#icon-donatePage`} />
      </svg>
    </div>
  );
}
