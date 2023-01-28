import "./style.css";
import { useState, useEffect, useRef } from "react";
import Skins from "../Skins";
export default function ({ items, setActiveItem }) {
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef();
  const carouselItemsRef = useRef();
  useEffect(() => {
    window.onmouseup = () => setIsDragging(false);
  }, []);
  console.log(isDragging);
  return (
    <div
      ref={carouselRef}
      className="carousel"
      onMouseDown={(event) => {
        setIsDragging(true);
        console.log(event.currentTarget);
      }}
      onMouseMove={({ nativeEvent }) => {
        if (!isDragging) return;
        console.log("Y = ", nativeEvent.offsetY);
      }}
    >
      <div ref={carouselItemsRef} className="carousel__items">
        {items?.map((item, index) => {
          return (
            <div
              onClick={() => setActiveItem(index)}
              key={item.name}
              className="carousel__item"
            >
              <div className="item__image-wrapper">
                <img className="item__image" src={item.image} alt="" />
              </div>
              <div className="item__name">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
