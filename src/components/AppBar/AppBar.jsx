import s from "./AppBar.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function AppBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
      setTimeout(() => setShowMenu(false), 300);
    } else {
      setShowMenu(true);
      setTimeout(() => setIsModalOpen(true), 0);
    }
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to="/" className={s.logoLink}>
          <svg className={s.logo}>
            <use href={`${sprite}#icon-logo`} />
          </svg>
        </Link>

        <div className={s.burger}>
          <button
            className={`${s.burgerBtn} ${isModalOpen ? s.open : ""}`}
            onClick={toggleModal}
            aria-label="Open mobile menu"
          >
            <span className={s.burgerLine}></span>
            <span className={s.burgerLine}></span>
            <span className={s.burgerLine}></span>
          </button>
        </div>
      </div>

      {showMenu && <BurgerMenu isOpen={isModalOpen} onClose={toggleModal} />}
    </header>
  );
}
