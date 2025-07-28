import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}
