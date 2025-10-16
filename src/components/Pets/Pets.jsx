import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import s from "./Pets.module.css";
import PetsListHome from "../PetsListHome/PetsListHome";
import Loader from "../Loader/Loader";

export default function Pets() {
  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await fetch(
          "https://happy-tail-backend.vercel.app/api/pets"
        );
        const data = await res.json();
        setPetsData(data);
      } catch (err) {
        console.error("Error fetching pets:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1440) {
        setVisibleCount(6);
      } else {
        setVisibleCount(8);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className={s.container}>
      <h2 className={s.title}>Ці хвостики чекають на вас</h2>

      <PetsListHome data={petsData.slice(0, visibleCount)} />

      <NavLink to="/pets" className={s.link}>
        Подивитися всіх
      </NavLink>
    </div>
  );
}
