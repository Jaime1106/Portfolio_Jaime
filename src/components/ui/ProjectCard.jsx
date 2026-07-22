import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Badge from "./Badge";

function ProjectCard({ project }) {
  return (
    <article
      className="
      group
      bg-slate-900
      rounded-3xl
      overflow-hidden
      border
      border-slate-800
      hover:border-blue-500
      transition-all
      duration-300
      hover:-translate-y-2
      "
    >
      <img
        src={project.image}
        alt={project.title}
        className="
        w-full
        h-60
        object-cover
        group-hover:scale-105
        transition
        duration-500
        "
      />

      <div className="p-7">

        <p className="text-blue-400 text-sm">

          {project.category}

        </p>

        <h3 className="text-2xl font-bold mt-2">

          {project.title}

        </h3>

        <p className="text-slate-400 mt-4">

          {project.shortDescription}

        </p>

        <div className="flex flex-wrap gap-2 mt-6">

          {project.technologies.map((tech) => (

            <Badge key={tech}>

              {tech}

            </Badge>

          ))}

        </div>

        <div className="flex gap-5 mt-8">

          <a
            href={project.github}
            target="_blank"
          >
            <FaGithub size={22}/>
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
            >
              <FaExternalLinkAlt size={20}/>
            </a>
          )}

        </div>

      </div>
    </article>
  );
}

export default ProjectCard;