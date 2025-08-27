import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={s.navigation}>
      <NavLink to="/about" className={s.link}>
        Про нас
      </NavLink>

      <NavLink to="/" className={s.link}>
        Тварини
      </NavLink>

      <NavLink to="/contacts" className={s.link}>
        Контакти
      </NavLink>

      <NavLink to="/blog" className={s.link}>
        Блог
      </NavLink>

      <NavLink to="/" className={s.link}>
        Відгуки
      </NavLink>
    </nav>
  );
}
