import Login from "../../components/Login/Login";
import s from "./LoginPage.module.css";

export default function AuthPage() {
  return (
    <div className={s.container}>
      <Login />
    </div>
  );
}
