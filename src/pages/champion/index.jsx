import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Abilities from "../../components/Abilities";
import Details from "../../components/details";
import Loading from "../../components/Loading";
import Skins from "../../components/Skins";
import Splash from "../../components/Splash";
import useChampion from "../../hooks/useChampion";
import "./style.css";

export default function () {
  const { champion } = useParams();
  const [data, error] = useChampion(champion);
  const championPageRef = useRef();
  return (
    <div ref={championPageRef} className="champion-page">
      <div className="champion-page__primary-content">
        <div className="champion-page__background-img-wrapper">
          <img
            onLoad={() => {
              championPageRef.current.classList.toggle("loaded");
            }}
            className="champion-page__background-img"
            src={data?.image.full}
            alt=""
          />
        </div>
        <Splash
          name={data?.name}
          title={data?.title}
          splash={data?.image.full}
        />
        <Details
          lore={data?.lore}
          role={data?.role[0]}
          difficulty={data?.difficulty}
        />
      </div>
      <Abilities abilities={data?.skills} passive={data?.passive} />
      <Skins skins={data?.skins} />
    </div>
  );
}
