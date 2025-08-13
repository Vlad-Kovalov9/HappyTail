import s from "./ReviewsList.module.css";

export default function ReviewsList({ data }) {
  return (
    <ul className={s.list}>
      {data.map((rew) => (
        <li className={s.item} key={rew.id}>
          <img src={rew.image} className={s.image} alt={`Відгук ${rew.name}`} />
          <div className={s.text}>
            <h3 className={s.title}>{rew.name}</h3>
            <p className={s.subtitle}>{rew.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
