import { useRef } from "react";
import { Link } from "react-router-dom";
import useChampion from "../../hooks/useChampion";
import "./style.css";
export default function ({ champion }) {
  const [data, error] = useChampion(champion);
  const cardRef = useRef();
  return (
    <Link to={`/champions/${champion}`}>
      <div ref={cardRef} className="card">
        <img
          onLoad={() => cardRef.current.classList.toggle("loaded")}
          className="card__img"
          src={data?.image.sprite}
          alt={champion}
        />
        <div className="card__name">{data?.name}</div>
      </div>
    </Link>
  );
}
