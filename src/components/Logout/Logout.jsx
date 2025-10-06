import s from "./Logout.module.css";
import sprite from "../../assets/icons/sprite.svg";
import LogoutModal from "../LogoutModal/LogoutModal";
import { useState } from "react";
import { getAvatarData } from "../../utils/getAvatarData";

export default function Logout({ onClick, userName }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { firstLetter, bgColor } = getAvatarData(userName);

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
