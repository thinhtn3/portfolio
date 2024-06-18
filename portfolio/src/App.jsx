import Landing from "./Landing";
import StickNavBar from "./StickyNavBar";
import Animation from "./Animation";
import Project from "./Project";
import About from "./About";
import Resume from "./Resume";
import { BrowserRouter, Link } from 'react-router-dom';
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <StickNavBar />
      <Landing />
      <Project />
      <Resume />
      <About />
    </BrowserRouter>
  );
}
