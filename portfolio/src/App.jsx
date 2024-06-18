import Landing from "./Landing";
import StickNavBar from "./StickyNavBar";
import Animation from "./Animation";
import Project from "./Project";
import About from "./About";
import Resume from "./Resume";
import "./App.css";

export default function App() {
  return (
    <>
      <StickNavBar />
      <Landing />
      <Project />
      <Resume />
      <About />
    </>
  );
}
