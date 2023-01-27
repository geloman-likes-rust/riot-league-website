import { useState, useEffect } from "react";
import { fetchChampions } from "../utils/champions";

export default function () {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async function () {
      const [data, error] = await fetchChampions();
      setData(data);
      setError(error);
    })();
  }, []);
  return [data, error];
}
