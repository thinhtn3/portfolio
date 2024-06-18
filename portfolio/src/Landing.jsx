import headshot from "./assets/headshot.jpg";
import "./Landing.css";
import react_icon from "./assets/react_icon.svg";
import js_icon from "./assets/javascript_icon.jpg";
import nodejs_icon from "./assets/node_js.jpg";

export default function Landing() {
  return (
    <>
      <div class="parallelogram" id="one"></div>
      <div class="parallelogram" id="two"></div>
      <div class="parallelogram" id="three"></div>
      <div class="parallelogram" id="four"></div>
      <div class="parallelogram" id="five"></div>
      <div class="parallelogram" id="six"></div>

      <div style={{ display: "flex", alignItems: "center", height: "90vh" }}>
        <div style={{ margin: "0em 6em" }}>
          <h1 className="banner" style={{ fontSize: "4em" }}>
            Hello! I'm Thinh.
          </h1>
          <h2 style={{ color: "#575759", border: "0px", fontSize: "1.5em" }}>
            Aspiring Software Engineer with interest in Web Development, Machine
            Learning, and Cloud
          </h2>
          <div className="tech" style={{ display: "flex" }}>
            <h3 style={{ color: "#575759", border: "0px", fontSize: "1.25em" }}>
              Current Tech Stack:
            </h3>
            <div className="image" style={{ margin: "0em 2em" }}>
              <img src={js_icon} alt="" style={{ margin: "0em 0.5em" }} />
              <img src={nodejs_icon} alt="" style={{ margin: "0em 0.5em" }} />
              <img src={react_icon} alt="" style={{ margin: "0em 0.5em" }} />
            </div>
          </div>
        </div>

        <img
          src={headshot}
          alt="Profile Headshot"
          style={{
            borderRadius: "50% 50% 67% 33% / 41% 28% 72% 59%",
            width: "400px",
          }}
        />
      </div>
    </>
  );
}
