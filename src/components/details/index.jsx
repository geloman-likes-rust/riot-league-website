import "./style.css";
const DIFFICULTY = {
  1: "low",
  2: "moderate",
  3: "high",
};
export default function ({ role, difficulty, lore }) {
  return (
    <div className="champion-page__champion-details">
      <div className="champion-details__tags">
        <div className="tags__role">
          <span className="role__key">role</span>
          <span className="role__value">{role}</span>
        </div>
        <div className="tags__difficulty">
          <div className="difficulty__text">
            <div className="text__key">difficulty</div>
            <div className="text__value">{DIFFICULTY[difficulty]}</div>
          </div>
        </div>
      </div>
      <div className="champion-details__lore">{lore}</div>
    </div>
  );
}
