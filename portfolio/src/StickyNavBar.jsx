import "./StickyNavBar.css";
import github_icon from "./assets/github_icon.jpg";

export default function StickNavBar() {
  return (
    <nav style={{ position: "sticky", top: "0px" }}>
      <ul>
        <li><a href="#project">Projects</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a href="https://github.com/thinhtn3">
            <img src={github_icon} alt="" style={{ width: "45px" }} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
