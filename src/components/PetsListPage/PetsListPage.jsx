import s from "./PetsListPage.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { useNavigate } from "react-router-dom";

export default function PetsList({ data }) {
  const navigate = useNavigate();

  return (
    <ul className={s.list}>
      {data.map((pet) => (
        <li
          key={pet._id}
          className={s.item}
          onClick={() => navigate(`/pets/${pet._id}`)}
        >
          <picture>
            <source srcSet={pet.imageDesktop} media="(min-width: 1440px)" />
            <source srcSet={pet.imageTablet} media="(min-width: 768px)" />
            <img
              src={pet.imageMobile}
              alt={`Фото ${pet.name}`}
              className={s.image}
            />
          </picture>
          <h3 className={s.name}>{pet.name}</h3>
          <ul className={s.textList}>
            <li className={s.textItem}>
              <svg className={s.icon}>
                <use href={`${sprite}#icon-pets-gender`} />
              </svg>
              <p className={s.text}>{pet.gender}</p>
            </li>
            <li className={s.textItem}>
              <svg className={s.icon}>
                <use href={`${sprite}#icon-pets-age`} />
              </svg>
              <p className={s.text}> {pet.age}</p>
            </li>
            <li className={s.textItem}>
              <svg className={s.icon}>
                <use href={`${sprite}#icon-pets-location`} />
              </svg>
              <p className={s.text}>{pet.city}</p>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
}
