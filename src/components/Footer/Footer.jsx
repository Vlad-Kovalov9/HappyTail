import s from "./Footer.module.css";
import FooterNavigation from "../FooterNavigation/FooterNavigation";
import FooterInfo from "../FooterInfo/FooterInfo";
import FooterMedia from "../FooterMedia/FooterMedia";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.navigation}>
          <FooterNavigation />
          <FooterInfo />
          <FooterMedia />
        </div>

        <div className={s.rulesContainer}>
          <span className={s.rules}>
            © 2025 Happy Хвіст. Всі права захищені.
          </span>
          <span className={s.develop}>Дизайн — Олександра Утюжова</span>
          <span className={s.develop}>Розробка — Владислав Ковальов</span>
        </div>
      </div>
    </footer>
  );
}
