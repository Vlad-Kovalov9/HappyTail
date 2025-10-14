import { NavLink } from "react-router-dom";
import s from "./AuthRequiredModal.module.css";
import ModalBase from "../ModalBase/ModalBase";

export default function AuthRequiredModal({ onClose }) {
  return (
    <ModalBase onClose={onClose}>
      <p className={s.text}>
        Для того щоб усиновити тваринку, спершу вам потрібно увійти до свого
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
    </ModalBase>
  );
}
