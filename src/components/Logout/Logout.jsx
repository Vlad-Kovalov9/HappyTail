import s from "./Logout.module.css";
import sprite from "../../assets/icons/sprite.svg";
import LogoutModal from "../LogoutModal/LogoutModal";
import { useState } from "react";

export default function Logout({ onClick, userName }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const firstLetter = userName ? userName.charAt(0).toUpperCase() : "?";

  const colors = [
    "#4285F4",
    "#EA4335",
    "#FBBC05",
    "#34A853",
    "#A142F4",
    "#F44292",
    "#00ACC1",
  ];

  const getColorFromString = (str) => {
    if (!str) return colors[0];
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  const bgColor = getColorFromString(userName);

  return (
    <div className={s.container}>
      <div className={s.avatar} style={{ backgroundColor: bgColor }}>
        {firstLetter}
      </div>
      <button onClick={() => setIsModalOpen(true)} className={s.btnLogout}>
        Вийти
        <svg className={s.logo}>
          <use href={`${sprite}#icon-logout`} />
        </svg>
      </button>

      {isModalOpen && (
        <LogoutModal
          onConfirm={() => {
            onClick();
            setIsModalOpen(false);
          }}
          onCancel={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
