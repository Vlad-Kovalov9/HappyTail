import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { lazy, Suspense } from "react";
import { useAutoRefreshToken } from "../../hooks/useAutoRefreshToken.js";

import HomePage from "../../pages/HomePage/HomePage.jsx";

const AboutUsPage = lazy(() =>
  import("../../pages/AboutUsPage/AboutUsPage.jsx")
);
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage.jsx")
);
const BlogPage = lazy(() => import("../../pages/BlogPage/BlogPage.jsx"));
const PetsPage = lazy(() => import("../../pages/PetsPage/PetsPage.jsx"));
const PetDetailsPage = lazy(() =>
  import("../../pages/PetDetailsPage/PetDetailsPage.jsx")
);
const AuthPage = lazy(() => import("../../pages/AuthPage/AuthPage.jsx"));
const RegisterPage = lazy(() =>
  import("../../components/Register/Register.jsx")
);
const DonatePage = lazy(() => import("../../pages/DonatePage/DonatePage.jsx"));
const ReviewsPage = lazy(() =>
  import("../../pages/ReviewsPage/ReviewsPage.jsx")
);

export default function App() {
  useAutoRefreshToken();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="pets" element={<PetsPage />} />
          <Route path="pets/:id" element={<PetDetailsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="login" element={<AuthPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="donate" element={<DonatePage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
