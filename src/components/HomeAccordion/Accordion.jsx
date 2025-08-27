import { useState, useRef } from "react";
import s from "./Accordion.module.css";
import accordionData from "../../../accordionData.json";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]); // масив для посилань на елементи

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Часті запитання</h2>

      <div className={s.accordion}>
        {accordionData.map((item, index) => (
          <div key={index} className={s.item}>
            <div onClick={() => toggleIndex(index)} className={s.header}>
              <span className={s.icon}>
                {activeIndex === index ? "-" : "+"}
              </span>
              {item.question}
            </div>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className={`${s.content} ${activeIndex === index ? s.open : ""}`}
              style={{
                maxHeight:
                  activeIndex === index
                    ? contentRefs.current[index]?.scrollHeight + "px"
                    : "0px",
              }}
            >
              <div className={s.contentInner}>{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
