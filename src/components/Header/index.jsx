import leagueIcon from "../../assets/league-icon.svg";
import "./style.css";

export default function () {
  return (
    <header className="header">
      <img className="header__icon" src={leagueIcon} alt="league-icon" />
    </header>
  );
}
