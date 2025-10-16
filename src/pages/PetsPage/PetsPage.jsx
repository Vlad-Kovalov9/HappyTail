import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./PetsPage.module.css";
import sprite from "../../assets/icons/sprite.svg";
import PetsListPage from "../../components/PetsListPage/PetsListPage.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import FiltersModal from "../../components/FiltersModal/FiltersModal.jsx";
import {
  setFilters,
  setFilteredPets,
  resetFilters,
  showMore,
} from "../../redux/store/filtersSlice";
import Loader from "../../components/Loader/Loader.jsx";

export default function PetsPage() {
  const dispatch = useDispatch();
  const {
    values: filtersValues,
    filteredPets,
    visibleCount,
  } = useSelector((state) => state.filters);

  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await fetch(
          "https://happy-tail-backend.vercel.app/api/pets"
        );
        const data = await res.json();
        setPetsData(data);
        dispatch(setFilteredPets(data));
      } catch (err) {
        console.error("Error fetching pets:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, [dispatch]);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
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

    dispatch(setFilters(filters));
    dispatch(setFilteredPets(result));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
    dispatch(setFilteredPets(petsData));
  };

  if (loading) return <Loader />;

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
          <PetsListPage data={filteredPets.slice(0, visibleCount)} />

          {visibleCount < filteredPets.length && (
            <button className={s.showMore} onClick={() => dispatch(showMore())}>
              Дивитися більше
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
