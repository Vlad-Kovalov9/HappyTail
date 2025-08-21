import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const AboutUsPage = lazy(() =>
  import("../../pages/AboutUsPage/AboutUsPage.jsx")
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutUsPage />} />
      </Route>
    </Routes>
  );
}
