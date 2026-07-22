import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

import { projects } from "../../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="py-36"
    >
      <Container>

        <SectionTitle
          subtitle="PORTAFOLIO"
          title="Proyectos Destacados"
        />

        <div
          className="
          grid
          md:grid-cols-2
          gap-10
          "
        >

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Projects;