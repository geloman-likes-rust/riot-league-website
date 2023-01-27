import { useRef } from "react";
import "./style.css";
export default function ({ name, splash, title }) {
  const spashRef = useRef();
  return (
    <div ref={spashRef} className="champion-page__splash">
      <img
        onLoad={() => spashRef.current.classList.toggle("loaded")}
        className="splash__img"
        src={splash}
        alt=""
      />
      <div className="splash__details">
        <div className="splash__title">{title}</div>
        <div className="splash__name">{name}</div>
      </div>
    </div>
  );
}
