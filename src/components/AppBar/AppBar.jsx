import s from "./AppBar.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import BurgerButton from "../BurgerButton/BurgerButton";
import Navigation from "../Navigation/Navigation";

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

        <Navigation />

        <div className={s.btnContainer}>
          <button className={s.btnEnter}>
            Увійти
            <svg className={s.entranceIcon}>
              <use href={`${sprite}#icon-entrance`} />
            </svg>
          </button>
          <button className={s.btnDonation}>
            Підтримати
            <svg className={s.coinIcon}>
              <use href={`${sprite}#icon-coin`} />
            </svg>
          </button>
        </div>

        <BurgerButton isOpen={isModalOpen} onClick={toggleModal} />
      </div>

      {showMenu && <BurgerMenu isOpen={isModalOpen} onClose={toggleModal} />}
    </header>
  );
}
