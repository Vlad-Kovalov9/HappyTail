import ModalBase from "../ModalBase/ModalBase";
import s from "./ContactsModalMessage.module.css";

export default function ContactsModalMessage({ onClose }) {
  return (
    <ModalBase onClose={onClose}>
      <p className={s.text}>
        Дякуємо за повідомлення. Ми зв'яжемось з вами найближчим часом!
      </p>
      <button className={s.button} onClick={onClose}>
        ОК
      </button>
    </ModalBase>
  );
}
