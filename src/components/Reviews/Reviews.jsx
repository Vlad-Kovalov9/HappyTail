import { lazy, Suspense, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import s from "./Reviews.module.css";
import Loader from "../Loader/Loader.jsx";

const ReviewsSlider = lazy(() => import("../ReviewsSlider/ReviewsSlider.jsx"));

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(
          "https://happy-tail-backend.vercel.app/api/reviews?limit=10"
        );
        setReviews(res.data.reviews);
      } catch (err) {
        console.error("Помилка при завантаженні відгуків:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className={s.container}>
      <h2 className={s.titleMobile}>Щасливі історії</h2>
      <h2 className={s.title}>Щасливі історії наших хвостатиків</h2>

      <Suspense fallback={<Loader />}>
        <ReviewsSlider reviews={reviews} />
      </Suspense>

      <NavLink to="/reviews" className={s.link}>
        Переглянути всі відгуки
      </NavLink>
    </div>
  );
}
