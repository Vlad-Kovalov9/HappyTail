import s from "./OurTeam.module.css";

const team = [
  {
    name: "Олена Кравчук",
    job: "Засновниця",
    description:
      "Олена започаткувала притулок у 2017 році та координує всю діяльність організації. Її головна мета — зробити так, щоб жодна тварина не залишалася без дому.",
    images: {
      mobile:
        "https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_171,h_171,c_fill/team1_hxgmp3.png",
      tablet:
        "https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_180,h_180,c_fill/team1_hxgmp3.png",
      desktop:
        "https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_180,h_180,c_fill/team1_hxgmp3.png",
    },
  },
  {
    name: "Андрій Мельник",
    job: "Ветеринар",
    description:
      "Андрій піклується про здоров’я кожного підопічного: проводить огляди, лікування, вакцинацію та стерилізацію.",
    images: {
      mobile:
        "https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_171,h_171,c_fill/team2_mg5c7n.png",
      tablet:
        "https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_180,h_180,c_fill/team2_mg5c7n.png",
      desktop:
        "https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_180,h_180,c_fill/team2_mg5c7n.png",
    },
  },
  {
    name: "Сергій Поліщук",
    job: "Куратор волонтерів",
    description:
      "Сергій організовує роботу волонтерів, відповідає за прогулянки собак і допомогу в догляді за тваринами.",
    images: {
      mobile:
        "https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_171,h_171,c_fill/team3_j5iwd2.png",
      tablet:
        "https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_180,h_180,c_fill/team3_j5iwd2.png",
      desktop:
        "https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_180,h_180,c_fill/team3_j5iwd2.png",
    },
  },
  {
    name: "Анна Левченко",
    job: "SMM-менеджер",
    description:
      "Анастасія розповідає історії наших хвостиків у соцмережах, щоб більше людей дізналися про них і захотіли подарувати дім.",
    images: {
      mobile:
        "https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_171,h_171,c_fill/team4_cx5ica.png",
      tablet:
        "https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_180,h_180,c_fill/team4_cx5ica.png",
      desktop:
        "https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto,w_180,h_180,c_fill/team4_cx5ica.png",
    },
  },
];

export default function OurTeam() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Наша команда</h2>
      <ul className={s.list}>
        {team.map((member, idx) => (
          <li className={s.item} key={idx}>
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet={member.images.desktop}
              />
              <source
                media="(min-width: 768px)"
                srcSet={member.images.tablet}
              />
              <img
                src={member.images.mobile}
                alt={member.name}
                className={s.image}
              />
            </picture>

            <div className={s.textBlock}>
              <h3 className={s.name}>{member.name}</h3>
              <p className={s.job}>{member.job}</p>
              <p className={s.description}>{member.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
