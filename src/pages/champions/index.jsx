import useChampions from "../../hooks/useChampions";
import Card from "../../components/Card";
import "./style.css";
import { Fragment, useState, useEffect } from "react";
import Filter from "../../components/Filter";
export default function () {
  const [data, error] = useChampions();
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    if (!data) return;
    setFiltered(data);
  }, [data]);

  return (
    <div className="champions-page">
      <Filter setFiltered={setFiltered} champions={data} />
      <div className="champions-page__grid">
        {filtered &&
          filtered.map(({ id }) => {
            return (
              <Fragment key={id}>
                <Card champion={id} />
              </Fragment>
            );
          })}
      </div>
    </div>
  );
}
