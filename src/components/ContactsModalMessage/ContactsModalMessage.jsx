import s from "./ContactsModalMessage.module.css";

export default function ContactsModalMessage({ onClose }) {
  return (
    <div className={s.backdrop}>
      <div className={s.modal}>
        <p className={s.text}>
          Дякуємо за повідомлення. Ми зв'яжемось з вами найближчим часом!
        </p>
        <button className={s.button} onClick={onClose}>
          ОК
        </button>
      </div>
    </div>
  );
}
