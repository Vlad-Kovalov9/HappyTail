import { useState } from "react";
import { useSelector } from "react-redux";
import s from "./ReviewsAdd.module.css";
import sprite from "../../assets/icons/sprite.svg";
import axios from "axios";
import { getAvatarData } from "../../utils/getAvatarData";

export default function ReviewsAdd() {
  const user = useSelector((state) => state.user.user);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);

  const { firstLetter, bgColor } = getAvatarData(user?.name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "https://happy-tail-backend.vercel.app/api/reviews",
        { text, rating },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Відгук додано:", res.data);
      setText("");
    } catch (err) {
      console.error("Помилка при додаванні відгуку:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.avatar} style={{ backgroundColor: bgColor }}>
          {firstLetter}
        </div>
        <p className={s.name}>{user?.name || "Гість"}</p>
      </div>

      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.textareaWrapper}>
          <textarea
            className={s.textarea}
            placeholder="Додайте відгук"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = e.target.scrollHeight + "px";
            }}
          />
          <button
            type="submit"
            className={s.sendButton}
            disabled={!text.trim() || loading}
          >
            <svg className={s.icon}>
              <use href={`${sprite}#icon-sendReviews`} />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
