import { useState, useEffect } from "react";
import { fetchChampion } from "../utils/champion";

export default function (champion) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async function () {
      const [data, error] = await fetchChampion(champion);
      setData(data);
      setError(error);
    })();
  }, []);
  return [data, error];
}
