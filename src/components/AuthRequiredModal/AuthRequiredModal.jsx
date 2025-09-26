import { NavLink } from "react-router-dom";
import s from "./AuthRequiredModal.module.css";

export default function AuthRequiredModal({ onClose }) {
  return (
    <div className={s.backdrop}>
      <div className={s.modal}>
        <p className={s.text}>
          Для того щоб усиновити тваринку, спершу Вам потрібно увійти до свого
          акаунта
        </p>
        <div className={s.buttons}>
          <NavLink to="/login" className={s.link}>
            Увійти
          </NavLink>

          <button type="button" className={s.buttonClose} onClick={onClose}>
            Відмінити
          </button>
        </div>
      </div>
    </div>
  );
}
