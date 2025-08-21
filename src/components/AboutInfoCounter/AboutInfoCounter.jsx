import s from "./AboutInfoCounter.module.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Count({ end }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <span ref={ref} className={s.number}>
      {inView ? <CountUp end={end} duration={2} separator=" " /> : 0}
    </span>
  );
}

export default function AboutInfoCounter() {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <Count end={1284} />
        <p className={s.itemText}>хвостиків, що знайшли нову сім’ю</p>
      </li>
      <li className={s.item}>
        <Count end={7} />
        <p className={s.itemText}>років досвіду турботи про тварин</p>
      </li>
      <li className={s.item}>
        <Count end={632} />
        <p className={s.itemText}>вакцинованих та стерилізованих хвостиків</p>
      </li>
      <li className={s.item}>
        <Count end={716} />
        <p className={s.itemText}>хвостиків шукають дім</p>
      </li>
    </ul>
  );
}
