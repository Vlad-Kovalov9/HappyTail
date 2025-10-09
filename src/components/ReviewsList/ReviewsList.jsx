import { useEffect, useState } from "react";
import s from "./ReviewsList.module.css";
import axios from "axios";
import { getAvatarData } from "../../utils/getAvatarData";
import sprite from "../../assets/icons/sprite.svg";
import Loader from "../Loader/Loader";

export default function ReviewsList() {
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
        console.error("Помилка при завантаженні відгуків:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <Loader />;

  return (
    <ul className={s.list}>
      {reviews.map((review) => {
        const name = review.user?.name || review.name || "Анонім";
        const date = new Date(review.createdAt).toLocaleDateString("uk-UA", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        const { firstLetter, bgColor } = getAvatarData(name);
        return (
          <li key={review._id} className={s.item}>
            <div className={s.avatar} style={{ backgroundColor: bgColor }}>
              {firstLetter}
            </div>

            <div className={s.containerInfo}>
              <div className={s.info}>
                <p className={s.name}>{name}</p>
                <p className={s.date}>{date}</p>
              </div>

              <div className={s.rating}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`${s.star} ${
                      star <= review.rating ? s.active : ""
                    }`}
                  >
                    <use href={`${sprite}#icon-star`} />
                  </svg>
                ))}
              </div>

              <p className={s.text}>{review.text}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
