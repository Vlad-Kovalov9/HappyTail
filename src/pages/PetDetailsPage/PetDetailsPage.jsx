import s from "./PetDetailsPage.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export default function PetDetailsPage() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPet = async () => {
      const res = await fetch(`http://localhost:5000/api/pets/${id}`);
      const data = await res.json();
      setPet(data);
    };
    fetchPet();
  }, [id]);

  if (!pet) return <p>Завантаження...</p>;

  return (
    <div className={s.container}>
      <NavLink to="/pets" className={s.link}>
        <svg className={s.iconBack}>
          <use href={`${sprite}#icon-backPage`} />
        </svg>
        <span>Назад до хвостиків</span>
      </NavLink>
      <div className={s.infoContainer}>
        <img src={pet.image} alt={`${pet.name} Фото`} className={s.image} />
        <div className={s.featureContainer}>
          <h2 className={s.name}>{pet.name}</h2>

          <ul className={s.list}>
            <li className={s.item}>
              <p className={s.itemFeature}>
                <svg className={s.icon}>
                  <use href={`${sprite}#icon-pets-gender`} />
                </svg>
                <span className={s.feature}>Стать</span>
              </p>
              <p className={s.itemInfo}>{pet.gender}</p>
            </li>

            <li className={s.item}>
              <p className={s.itemFeature}>
                <svg className={s.icon}>
                  <use href={`${sprite}#icon-pets-age`} />
                </svg>
                <span className={s.feature}>Вік</span>
              </p>
              <p className={s.itemInfo}>{pet.age}</p>
            </li>

            <li className={s.item}>
              <p className={s.itemFeature}>
                <svg className={s.icon}>
                  <use href={`${sprite}#icon-pets-location`} />
                </svg>
                <span className={s.feature}>Місто</span>
              </p>
              <p className={s.itemInfo}>{pet.city}</p>
            </li>

            <li className={s.item}>
              <p className={s.itemFeature}>
                <svg className={s.icon}>
                  <use href={`${sprite}#icon-pets-sterilization`} />
                </svg>
                <span className={s.feature}>Стерилізація</span>
              </p>
              <p className={s.itemInfo}>
                {pet.sterilization ? "Проведено" : "Не проведено"}
              </p>
            </li>
          </ul>

          <div className={s.hideMobile}>
            <h3 className={s.text}>Особливості поведінки</h3>
            <p className={s.description}>{pet.description}</p>
            <button className={s.button}>
              <span>Усиновити</span>
              <svg className={s.iconHeart}>
                <use href={`${sprite}#icon-pets-heart`} />
              </svg>
            </button>
          </div>
        </div>

        <div className={s.hideDesktop}>
          <h3 className={s.text}>Особливості поведінки</h3>
          <p className={s.description}>{pet.description}</p>
          <button className={s.button}>
            <span>Усиновити</span>
            <svg className={s.iconHeart}>
              <use href={`${sprite}#icon-pets-heart`} />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
