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
  const [filteredPets, setFilteredPets] = useState([]);

  const [filtersValues, setFiltersValues] = useState({
    city: [],
    pet: [],
    gender: "",
    age: [],
    sterilization: "",
  });

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await fetch(
          "https://happy-tail-backend.vercel.app/api/pets"
        );
        const data = await res.json();
        setPetsData(data);
        setFilteredPets(data);
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

  const parseAge = (ageStr) => {
    if (ageStr.includes("м")) {
      return parseInt(ageStr) / 12;
    }
    if (ageStr.includes("р")) {
      return parseInt(ageStr);
    }
    return 0;
  };

  const handleApplyFilters = (filters) => {
    let result = petsData;

    if (filters.city.length > 0 && !filters.city.includes("Усі")) {
      result = result.filter((pet) => filters.city.includes(pet.city));
    }

    if (filters.pet.length > 0) {
      result = result.filter((pet) => filters.pet.includes(pet.pet));
    }

    if (filters.gender) {
      result = result.filter((pet) => pet.gender === filters.gender);
    }

    if (filters.age.length > 0) {
      result = result.filter((pet) => {
        const petAge = parseAge(pet.age);
        return filters.age.some((range) => {
          if (range === "0 - 1") return petAge < 1;
          if (range === "1 - 2") return petAge >= 1 && petAge <= 2;
          if (range === "3 - 4") return petAge >= 3 && petAge <= 4;
          if (range === "5 +") return petAge >= 5;
          return false;
        });
      });
    }

    if (filters.sterilization) {
      result = result.filter(
        (pet) => String(pet.sterilization) === filters.sterilization
      );
    }

    setFilteredPets(result);
    setFiltersValues(filters);
    setVisibleCount(12);
  };

  const handleResetFilters = () => {
    setFilteredPets(petsData);
    setVisibleCount(12);
    setFiltersValues({
      city: [],
      pet: [],
      gender: "",
      age: [],
      sterilization: "",
    });
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

      <FiltersModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onApply={handleApplyFilters}
        onReset={handleResetFilters}
        values={filtersValues}
      />
      <div className={s.desktop}>
        <div className={s.filtersDesktop}>
          <Filters
            onApply={handleApplyFilters}
            onReset={handleResetFilters}
            values={filtersValues}
          />
        </div>

        <div className={s.petsContainer}>
          <PetsList data={filteredPets.slice(0, visibleCount)} />

          {visibleCount < filteredPets.length && (
            <button className={s.showMore} onClick={showMore}>
              Дивитися більше
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
