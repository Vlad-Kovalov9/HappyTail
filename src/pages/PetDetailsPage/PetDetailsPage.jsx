import s from "./PetDetailsPage.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PetDetailsMessage from "../../components/PetDetailsMessage/PetDetailsMessage";
import AuthRequiredModal from "../../components/AuthRequiredModal/AuthRequiredModal";
import Loader from "../../components/Loader/Loader";

export default function PetDetailsPage() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const { token } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPet = async () => {
      const res = await fetch(
        `https://happy-tail-backend.vercel.app/api/pets/${id}`
      );
      const data = await res.json();
      setPet(data);
    };
    fetchPet();
  }, [id]);

  if (!pet) return <Loader />;

  const handleAdoptClick = () => {
    if (token) {
      setModalType("details");
    } else {
      setModalType("auth");
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType("");
  };

  return (
    <div className={s.container}>
      <button type="button" className={s.link} onClick={() => navigate(-1)}>
        <svg className={s.iconBack}>
          <use href={`${sprite}#icon-backPage`} />
        </svg>
        <span>Назад</span>
      </button>

      <div className={s.infoContainer}>
        <picture>
          <source srcSet={pet.imageDesktop} media="(min-width: 1440px)" />
          <source srcSet={pet.imageTablet} media="(min-width: 768px)" />
          <img
            src={pet.imageMobile}
            alt={`Фото ${pet.name}`}
            className={s.image}
          />
        </picture>
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
            <button className={s.button} onClick={handleAdoptClick}>
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
          <button className={s.button} onClick={handleAdoptClick}>
            <span>Усиновити</span>
            <svg className={s.iconHeart}>
              <use href={`${sprite}#icon-pets-heart`} />
            </svg>
          </button>
        </div>
      </div>

      {isModalOpen && modalType === "details" && (
        <PetDetailsMessage onClose={closeModal} />
      )}
      {isModalOpen && modalType === "auth" && (
        <AuthRequiredModal onClose={closeModal} />
      )}
    </div>
  );
}
