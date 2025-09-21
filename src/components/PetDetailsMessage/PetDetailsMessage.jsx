import { useState } from "react";
import s from "./PetDetailsMessage.module.css";
import { IMaskInput } from "react-imask";

export default function PetDetailsMessage({ onClose }) {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <div className={s.backdrop} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        {!submitted ? (
          <>
            <h3 className={s.title}>
              Ведіть свій коректний номер телефону, щоб ми з Вами зв’язались
            </h3>
            <form onSubmit={handleSubmit} className={s.form}>
              <IMaskInput
                mask="+38 (000) 000-00-00"
                value={phone}
                onAccept={(value) => setPhone(value)}
                placeholder="+38 (___) ___-__-__"
                className={s.input}
                required
              />
              <div className={s.buttons}>
                <button type="submit" className={s.buttonSubmit}>
                  Далі
                </button>
                <button
                  type="button"
                  className={s.buttonCancel}
                  onClick={onClose}
                >
                  Відмінити
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className={s.thankMessage}>
            <p>Дякуємо, ми з Вами зв’яжемось найближчим часом!</p>
            <button onClick={onClose} className={s.buttonClose}>
              Закрити
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
