import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import s from "./Pets.module.css";
import PetsList from "../PetsList/PetsList";

export default function Pets() {
  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pets");
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

  if (loading) return <p>Завантаження...</p>;

  return (
    <div className={s.container}>
      <h2 className={s.title}>Ці хвостики чекають на вас</h2>

      <PetsList data={petsData.slice(0, visibleCount)} />

      <NavLink to="/" className={s.link}>
        Подивитися всіх
      </NavLink>
    </div>
  );
}
