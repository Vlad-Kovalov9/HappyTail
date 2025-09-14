import s from "./PetsList.module.css";
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
          <img src={pet.image} className={s.image} alt={`Фото ${pet.name}`} />

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
