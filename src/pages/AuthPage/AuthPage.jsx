import Login from "../../components/Login/Login";
import s from "./AuthPage.module.css";

export default function AuthPage() {
  return (
    <div>
      <Login className={s.container} />
    </div>
  );
}
