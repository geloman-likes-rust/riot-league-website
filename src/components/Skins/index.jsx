import "./style.css";
import { useState } from "react";
import useChampion from "../../hooks/useChampion";
import Carousel from "../Carousel";
export default function ({ skins }) {
  const [activeSkin, setActiveSkin] = useState(0);
  return (
    <div className="skin-section">
      <div className="skin">
        <Carousel items={skins} setActiveItem={setActiveSkin} />
      </div>
    </div>
  );
}
