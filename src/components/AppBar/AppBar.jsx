import s from "./AppBar.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import BurgerButton from "../BurgerButton/BurgerButton";
import Navigation from "../Navigation/Navigation";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/store/userSlice";
import Logout from "../Logout/Logout";

export default function AppBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const { token, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const toggleModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
      setTimeout(() => setShowMenu(false), 300);
    } else {
      setShowMenu(true);
      setTimeout(() => setIsModalOpen(true), 0);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`${s.header} ${hideHeader ? s.hidden : ""} ${
          scrolled ? s.scrolled : ""
        }`}
      >
        <div className={s.container}>
          <Link to="/" className={s.logoLink}>
            <svg className={s.logo}>
              <use href={`${sprite}#icon-logo`} />
            </svg>
          </Link>

          <Navigation />

          <div className={s.btnContainer}>
            {!token && (
              <NavLink
                to="/login"
                className={s.btnEnter}
                state={{ from: location.pathname }}
              >
                Увійти
                <svg className={s.entranceIcon}>
                  <use href={`${sprite}#icon-entrance`} />
                </svg>
              </NavLink>
            )}
            {token && (
              <Logout
                onClick={handleLogout}
                userName={user?.name || user?.email}
              />
            )}

            <NavLink to="/donate" className={s.btnDonation}>
              Підтримати
              <svg className={s.coinIcon}>
                <use href={`${sprite}#icon-coin`} />
              </svg>
            </NavLink>
          </div>

          <BurgerButton isOpen={isModalOpen} onClick={toggleModal} />
        </div>
      </header>
      {showMenu && <BurgerMenu isOpen={isModalOpen} onClose={toggleModal} />}
    </>
  );
}
