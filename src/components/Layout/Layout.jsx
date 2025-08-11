import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import s from "./Layout.module.css";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <div className={s.wrapper}>
      <AppBar />

      <main className={s.layout}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
