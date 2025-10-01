import s from "./Preloader.module.css";

export default function Preloader() {
  const lines = ["THIS IS MY", "FIRST PET-PROJECT"];

  return (
    <div className={s.preloader}>
      <h1 className={s.text}>
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className={s.line}>
            {line.split("").map((char, i) => {
              if (char === " ") return <span key={i}>&nbsp;</span>;
              return (
                <span
                  key={i}
                  style={{ "--delay": `${(i + lineIndex * 10) * 0.05}s` }}
                >
                  {char}
                </span>
              );
            })}
          </div>
        ))}
      </h1>
    </div>
  );
}
