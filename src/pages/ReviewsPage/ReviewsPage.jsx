import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./ReviewsPage.module.css";
import ReviewsAdd from "../../components/ReviewsAdd/ReviewsAdd";
import ReviewsList from "../../components/ReviewsList/ReviewsList";
import ReviewsTotal from "../../components/ReviewsTotal/ReviewsTotal";
import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ReviewsPage() {
  const user = useSelector((state) => state.user.user);

  const [reviews, setReviews] = useState([]);
  const [allReviews, setAllReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const reviewsPerPage = 5;

  const fetchReviews = async (page = 1) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://happy-tail-backend.vercel.app/api/reviews?page=${page}&limit=${reviewsPerPage}`
      );
      setReviews(res.data.reviews);
      setTotalPages(res.data.pages);
      setCurrentPage(res.data.page);
    } catch (err) {
      console.error("Помилка при завантаженні відгуків:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllReviews = async () => {
    try {
      const res = await axios.get(
        `https://happy-tail-backend.vercel.app/api/reviews?limit=1000`
      );
      setAllReviews(res.data.reviews);
    } catch (err) {
      console.error("Помилка при завантаженні всіх відгуків:", err);
    }
  };

  useEffect(() => {
    fetchReviews(currentPage);
    fetchAllReviews();
  }, [currentPage]);

  const addReview = async () => {
    await fetchReviews(1);
    await fetchAllReviews();
    setCurrentPage(1);
  };

  const handleDelete = async (deletedId) => {
    setReviews((prev) => prev.filter((r) => r._id !== deletedId));
    setAllReviews((prev) => prev.filter((r) => r._id !== deletedId));

    await fetchReviews(currentPage);
    await fetchAllReviews();
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

      <ReviewsTotal reviews={allReviews} />

      <ReviewsList
        reviews={reviews}
        setReviews={setReviews}
        onDelete={handleDelete}
      />

      <div className={s.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`${s.pageBtn} ${currentPage === i + 1 ? s.active : ""}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
