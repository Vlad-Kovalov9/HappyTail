import { NavLink } from "react-router-dom";
import s from "./FooterNavigation.module.css";

export default function FooterNavigation() {
  return (
    <div className={s.navigation}>
      <NavLink to="/" className={s.link}>
        Про нас
      </NavLink>

      <NavLink to="/" className={s.link}>
        Тварини
      </NavLink>

      <NavLink to="/" className={s.link}>
        Контакти
      </NavLink>

      <NavLink to="/" className={s.link}>
        Блог
      </NavLink>

      <NavLink to="/" className={s.link}>
        Відгуки
      </NavLink>
    </div>
  );
}
