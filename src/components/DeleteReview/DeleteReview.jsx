import s from "./DeleteReview.module.css";
import sprite from "../../assets/icons/sprite.svg";
import axios from "axios";
import { useSelector } from "react-redux";

export default function DeleteReview({ reviewId, onDelete }) {
  const token = useSelector((state) => state.user.token);

  const handleDelete = async () => {
    if (!window.confirm("Ви впевнені, що хочете видалити цей відгук?")) return;

    try {
      await axios.delete(
        `https://happy-tail-backend.vercel.app/api/reviews/${reviewId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (onDelete) onDelete(reviewId);
    } catch (error) {
      console.error("Помилка при видаленні відгуку:", error);
    }
  };

  return (
    <button className={s.button} onClick={handleDelete}>
      <svg className={s.delete}>
        <use href={`${sprite}#icon-deleteReview`} />
      </svg>
    </button>
  );
}
