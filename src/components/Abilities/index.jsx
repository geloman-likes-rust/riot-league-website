import "./style.css";
import { ClockClockwise } from "phosphor-react";
import { useState, useRef, useEffect } from "react";
import Video from "../Video";
const ABILITY_KEY = ["Q", "W", "E", "R"];
export default function ({ abilities, passive }) {
  const [activeSkill, setActiveSkill] = useState(0);

  return (
    <div className="abilities">
      <div className="abilities__preview abilities__preview--first">
        <div className="abilities__preview-title">abilities</div>
        <div className="abilities__preview-images">
          {abilities?.map((ability, index) => {
            return (
              <div
                onClick={() => {
                  setActiveSkill(index);
                  console.log("onClick");
                }}
                key={ability.name}
                className={`preview-images__image-wrapper ${
                  index === activeSkill ? "toggle-active-skill" : ""
                }`}
              >
                <img
                  draggable={false}
                  className="preview-images__image"
                  src={ability.image}
                  alt=""
                />
              </div>
            );
          })}
        </div>
        <div className="abilities__preview-description">
          <div className="preview-description__cooldown-wrapper">
            <ClockClockwise
              className="preview-description__cooldown-icon"
              weight="bold"
              size={32}
            />
            <span className="preview-description__cooldown">
              {abilities && abilities[activeSkill].cooldown[0]}s
            </span>
          </div>
          <div className="abilities__preview-name">
            <span className="name__key">{ABILITY_KEY[activeSkill]}</span> -{" "}
            {abilities && abilities[activeSkill].name}
          </div>
          <div className="preview-description__description fade-in-ability-description">
            {abilities && abilities[activeSkill].description}
          </div>
        </div>
      </div>
      <div className="abilities__preview abilities__preview--second">
        <Video activeSkill={activeSkill} abilities={abilities} />
      </div>
    </div>
  );
}
