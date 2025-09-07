import { useEffect, useState } from "react";
import s from "./PetsPage.module.css";
import sprite from "../../assets/icons/sprite.svg";
import PetsList from "../../components/PetsList/PetsList.jsx";
import Filters from "../../components/Filters/Filters.jsx";

export default function PetsPage() {
  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p>Завантаження...</p>;

  return (
    <div className={s.container}>
      <button className={s.btn}>
        <svg className={s.filterIcon}>
          <use href={`${sprite}#icon-filters`} />
        </svg>
        Фільтр
      </button>

      <Filters />
      <PetsList data={petsData} />
    </div>
  );
}
