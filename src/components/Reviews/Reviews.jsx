import { NavLink } from "react-router-dom";
import s from "./Reviews.module.css";
import ReviewsList from "../ReviewsList/ReviewsList";

export default function Reviews() {
  return (
    <div className={s.container}>
      <h2 className={s.titleMobile}>Щасливі історії</h2>
      <h2 className={s.title}>Щасливі історії наших хвостатиків</h2>

      <NavLink to="/reviews" className={s.link}>
        Переглянути всі відгуки
      </NavLink>
    </div>
  );
}
