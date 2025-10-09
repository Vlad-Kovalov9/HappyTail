import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./ReviewsPage.module.css";
import ReviewsAdd from "../../components/ReviewsAdd/ReviewsAdd";
import ReviewsList from "../../components/ReviewsList/ReviewsList";

export default function ReviewsPage() {
  const user = useSelector((state) => state.user.user);

  return (
    <div className={s.container}>
      {!user ? (
        <p className={s.title}>
          <NavLink to="/login" className={s.navigation}>
            Увійдіть
          </NavLink>{" "}
          або{" "}
          <NavLink to="/register" className={s.navigation}>
            Зареєструйтеся
          </NavLink>
          , щоб додати відгук
        </p>
      ) : (
        <ReviewsAdd />
      )}
      <ReviewsList />
    </div>
  );
}
