import s from "./LogoutModal.module.css";

export default function LogoutModal({ onConfirm, onCancel }) {
  return (
    <div className={s.backdrop}>
      <div className={s.modal}>
        <p className={s.text}>Ви впевнені, що хочете вийти?</p>
        <div className={s.btnContainer}>
          <button type="button" className={s.buttonYes} onClick={onConfirm}>
            Так, вийти
          </button>
          <button type="button" className={s.buttonNo} onClick={onCancel}>
            Скасувати
          </button>
        </div>
      </div>
    </div>
  );
}
