import s from "./ReviewsRating.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { useState } from "react";

export default function ReviewsRating({ rating, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className={s.container}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${s.star} ${star <= (hovered || rating) ? s.active : ""}`}
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
        >
          <use href={`${sprite}#icon-star`} />
        </svg>
      ))}
    </div>
  );
}
