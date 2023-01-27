import "./style.css";
export default function ({ abilities, activeSkill }) {
  return (
    <>
      {abilities?.map((ability, index) => {
        return (
          <div
            key={ability.name}
            className={`preview__video-wrapper ${
              index === activeSkill ? "toggle-active-video" : ""
            }`}
          >
            <video className="preview__video" autoPlay={true} muted loop>
              <source
                src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${ability.key}/ability_${ability.key}_${ability.id}1.webm`}
                type="video/webm"
              />
              <source
                src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${ability.key}/ability_${ability.key}_${ability.id}1.mp4`}
                type="video/mp4"
              />
            </video>
          </div>
        );
      })}
    </>
  );
}
