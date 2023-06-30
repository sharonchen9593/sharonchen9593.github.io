import SectionHeader from "./SectionHeader";
import { projects } from "./content";
import Card from "./Card";

const Projects = () => {
  return (
    <div>
      <SectionHeader title="Projects" className="projects-header" />
      <div className="projects-list">
        {projects.map((project) => {
          return <Card {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
