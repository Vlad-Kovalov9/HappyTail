import { useState } from "react";
import s from "./DeleteReview.module.css";
import sprite from "../../assets/icons/sprite.svg";
import axios from "axios";
import { useSelector } from "react-redux";
import DeleteReviewMessage from "../DeleteReviewMessage/DeleteReviewMessage";

export default function DeleteReview({ reviewId, onDelete }) {
  const token = useSelector((state) => state.user.token);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://happy-tail-backend.vercel.app/api/reviews/${reviewId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (onDelete) {
        await onDelete(reviewId);
      }

      setShowModal(false);
    } catch (error) {
      console.error("Помилка при видаленні відгуку:", error);
    }
  };

  return (
    <>
      <button className={s.button} onClick={() => setShowModal(true)}>
        <svg className={s.delete}>
          <use href={`${sprite}#icon-deleteReview`} />
        </svg>
      </button>

      {showModal && (
        <DeleteReviewMessage
          onConfirm={handleDelete}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  );
}
