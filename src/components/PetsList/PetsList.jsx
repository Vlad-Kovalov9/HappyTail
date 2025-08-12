import s from "./PetsList.module.css";
import sprite from "../../assets/icons/sprite.svg";

export default function PetsList({ data }) {
  return (
    <ul className={s.list}>
      {data.map((pet) => (
        <li key={pet.id} className={s.item}>
          <div className={s.imageWrapper}>
            <img src={pet.image} className={s.image} alt={`Фото ${pet.name}`} />
            <button className={s.iconBtn}>
              <svg className={s.icon}>
                <use href={`${sprite}#icon-heart`} />
              </svg>
            </button>
          </div>
          <h3 className={s.name}>{pet.name}</h3>
          <div className={s.textContainer}>
            <p className={s.text}>{pet.gender}</p>
            <p className={s.text}>{pet.age}</p>
          </div>
          <div className={s.btnBox}>
            <button className={s.btn}>Усиновити</button>
            <button className={s.btnDesk}>
              <svg className={s.iconDesk}>
                <use href={`${sprite}#icon-heart`} />
              </svg>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
