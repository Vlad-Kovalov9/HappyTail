import s from "./ReviewsList.module.css";
import { getAvatarData } from "../../utils/getAvatarData";
import sprite from "../../assets/icons/sprite.svg";
import DeleteReview from "../DeleteReview/DeleteReview";
import { useSelector } from "react-redux";

export default function ReviewsList({ reviews, setReviews }) {
  const user = useSelector((state) => state.user.user);

  const handleDelete = (deletedId) => {
    setReviews((prev) => prev.filter((r) => r._id !== deletedId));
  };

  if (!reviews || reviews.length === 0) return <p>Відгуків ще немає</p>;

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

        // console.log("review.user:", review.user);
        // console.log("user._id:", user?._id);
        return (
          <li key={review._id} className={s.item}>
            <div className={s.avatar} style={{ backgroundColor: bgColor }}>
              {firstLetter}
            </div>

            <div className={s.containerInfo}>
              <div className={s.info}>
                <p className={s.name}>{name}</p>
                <p className={s.date}>{date}</p>

                {user && String(review.user?._id) === String(user._id) && (
                  <DeleteReview reviewId={review._id} onDelete={handleDelete} />
                )}
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
