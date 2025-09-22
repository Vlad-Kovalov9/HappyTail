import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
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
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage.jsx"));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="pets" element={<PetsPage />} />
        <Route path="pets/:id" element={<PetDetailsPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
