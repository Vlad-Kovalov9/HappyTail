import { NavLink } from "react-router-dom";
import s from "./AuthRequiredModal.module.css";

export default function AuthRequiredModal() {
  return (
    <div className={s.backdrop}>
      <div className={s.modal}>
        <p className={s.text}></p>
        <NavLink to="/login" className={s.link}>
          Увійти
        </NavLink>
        <NavLink to="/register" className={s.link}>
          Зареєструватись
        </NavLink>
      </div>
    </div>
  );
}
