import { NavLink } from "react-router-dom";
import s from "./Pets.module.css";
import PetsList from "../PetsList/PetsList";
import petsData from "../../../petsData.json";

export default function Pets() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Ці хвостики чекають на вас</h2>

      <PetsList data={petsData} />

      <NavLink to="/" className={s.link}>
        Подивитися всіх
      </NavLink>
    </div>
  );
}
