import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./ReviewsPage.module.css";
import ReviewsAdd from "../../components/ReviewsAdd/ReviewsAdd";
import ReviewsList from "../../components/ReviewsList/ReviewsList";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

export default function ReviewsPage() {
  const user = useSelector((state) => state.user.user);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(
          "https://happy-tail-backend.vercel.app/api/reviews"
        );
        setReviews(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const addReview = (newReview) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  if (loading) return <Loader />;

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
        <ReviewsAdd addReview={addReview} />
      )}
      <ReviewsList reviews={reviews} />
    </div>
  );
}
