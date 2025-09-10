import { useEffect, useState } from "react";
import s from "./PetsPage.module.css";
import sprite from "../../assets/icons/sprite.svg";
import PetsList from "../../components/PetsList/PetsList.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import FiltersModal from "../../components/FiltersModal/FiltersModal.jsx";

export default function PetsPage() {
  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

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

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, petsData.length));
  };

  if (loading) return <p>Завантаження...</p>;

  return (
    <div className={s.container}>
      <button className={s.btn} onClick={toggleModal}>
        <svg className={s.filterIcon}>
          <use href={`${sprite}#icon-filters`} />
        </svg>
        Фільтр
      </button>

      <FiltersModal isOpen={isModalOpen} onClose={toggleModal} />

      <div className={s.desktop}>
        <div className={s.filtersDesktop}>
          <Filters />
        </div>

        <div className={s.petsContainer}>
          <PetsList data={petsData.slice(0, visibleCount)} />

          {visibleCount < petsData.length && (
            <button className={s.showMore} onClick={showMore}>
              Дивитися більше
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
