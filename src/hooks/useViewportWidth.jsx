import { useState, useEffect } from "react";
export default function () {
  const [viewPortWidth, setViewPortWidth] = useState(0);
  useEffect(() => {
    setViewPortWidth(window.innerWidth);
    window.onresize = () => setViewPortWidth(window.innerWidth);
  }, []);
  return viewPortWidth;
}
