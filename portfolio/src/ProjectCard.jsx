import "./ProjectCard.css";
import logo from "./logo.js";

export default function ({ name, image, description, tech }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt="" style={{ width: "470px" }} />
      <p>{description}</p>
      <div style={{ display: "flex" }}>
        {tech.map((t) => {
          if (logo[t]) {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems:"center",
                  margin: "0em 1em",
                }}
              >
                <img src={logo[t]} alt="" style={{ width: "50px" }} />
                <span>{t}</span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
