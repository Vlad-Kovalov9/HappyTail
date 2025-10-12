import s from "./ReviewsTotal.module.css";
import sprite from "../../assets/icons/sprite.svg";

export default function ReviewsTotal({ reviews }) {
  if (!reviews || reviews.length === 0) return null;

  const totalReviews = reviews.length;
  const averageRating =
    reviews.reduce((sum, review) => sum + (review.rating || 0), 0) /
    totalReviews;

  return (
    <div className={s.container}>
      <p className={s.text}>
        {totalReviews} {totalReviews === 1 ? "відгук" : "відгуків"}
      </p>
      <div className={s.stars}>
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = star <= Math.floor(averageRating);
          const hasHalf =
            star === Math.ceil(averageRating) &&
            averageRating % 1 !== 0 &&
            !filled;

          return (
            <div key={star} className={s.starWrapper}>
              <svg className={s.star}>
                <use href={`${sprite}#icon-star`} />
              </svg>
              <div
                className={`${s.starFill} ${
                  filled ? s.full : hasHalf ? s.half : ""
                }`}
              >
                <svg className={s.star}>
                  <use href={`${sprite}#icon-star`} />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
