import { NavLink } from "react-router-dom";
import s from "./FooterNavigation.module.css";

export default function FooterNavigation() {
  return (
    <div className={s.navigation}>
      <NavLink to="/about" className={s.link}>
        Про нас
      </NavLink>

      <NavLink to="/pets" className={s.link}>
        Тварини
      </NavLink>

      <NavLink to="/contacts" className={s.link}>
        Контакти
      </NavLink>

      <NavLink to="/blog" className={s.link}>
        Блог
      </NavLink>

      <NavLink to="/reviews" className={s.link}>
        Відгуки
      </NavLink>
    </div>
  );
}
