import usePageScroll from "../../hooks/usePageScroll";
import "./style.css";
export default function ({ setFiltered, champions }) {
  const isScrollingDown = usePageScroll();
  return (
    <header className={`grid__header ${isScrollingDown && "hide"}`}>
      <div className="header__search-wrapper">
        <input
          className="header__search"
          onChange={(event) => {
            setFiltered(
              champions.filter(({ name }) => {
                const searchString = event.target.value.toLocaleLowerCase();
                const championName = name.toLocaleLowerCase();
                return championName.includes(searchString);
              })
            );
          }}
          type="text"
          placeholder="search..."
          spellCheck="false"
        />
      </div>
    </header>
  );
}
