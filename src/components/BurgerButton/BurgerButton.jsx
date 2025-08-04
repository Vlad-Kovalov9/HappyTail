import s from "./BurgerButton.module.css";

export default function BurgerButton({ isOpen, onClick }) {
  return (
    <div className={s.burger}>
      <button
        className={`${s.burgerBtn} ${isOpen ? s.open : ""}`}
        onClick={onClick}
        aria-label="Open mobile menu"
      >
        <span className={s.burgerLine}></span>
        <span className={s.burgerLine}></span>
        <span className={s.burgerLine}></span>
      </button>
    </div>
  );
}
