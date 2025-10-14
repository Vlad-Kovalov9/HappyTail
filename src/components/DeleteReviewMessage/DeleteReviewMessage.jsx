import ModalBase from "../ModalBase/ModalBase";
import s from "./DeleteReviewMessage.module.css";

export default function DeleteReviewMessage({ onConfirm, onCancel }) {
  return (
    <ModalBase>
      <h3 className={s.text}>Ви впевнені, що хочете видалити цей відгук?</h3>
      <div className={s.buttons}>
        <button className={s.buttonYes} onClick={onConfirm}>
          Так
        </button>
        <button className={s.buttonNo} onClick={onCancel}>
          Ні
        </button>
      </div>
    </ModalBase>
  );
}
