import "./Project.css";
import ProjectCard from "./ProjectCard";
import snapcuisine_demo from "./assets/Snapcuisine_demo.gif";
import spotievent_demo from "./assets/spotievent_demo.gif";

export default function Project() {
  return (
    <section id="project">
      <h1 style={{ fontSize: "2.5em", margin: "1.5em 2.5em" }}>Projects</h1>
      <div className="projectList">
        <ProjectCard
          name="SnapCuisine"
          image={snapcuisine_demo}
          description="Identify food simply from a photo and generate a curated list of restaurant based on the inputted food and user's inputted location"
          tech={['JavaScript', 'React', 'NodeJS']}
        />
        <ProjectCard
          name="SpotiEvent"
          image={spotievent_demo}
          description="Finds users Top Artists of the month and display a list of new artist as well as a list of music events happening based on those top artists' genre."
          tech={['JavaScript', 'React', 'NodeJS']}
        />
      </div>
    </section>
  );
}
