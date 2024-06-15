import { IProject } from "@/@types";
import { RiExternalLinkLine, RiGithubFill } from "react-icons/ri";

interface ProjectItemProps {
  project: IProject;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <div className="group relative w-[350px] h-[350px] rounded-md overflow-hidden border border-transparent transition-all duration-300 ease-in-out hover:border-zinc-300">
      <div
        className={`absolute inset-0 ${project.background} transition-opacity duration-300 ease-in-out group-hover:opacity-0`}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-2 p-3 w-full h-full">
        <h3 className="text-5xl font-semibold text-zinc-800 group-hover:text-zinc-50">
          {project.title}
        </h3>
        <div className="flex flex-row space-x-5 absolute bottom-5">
          {project.lang.map((lang) => (
            <div
              key={lang}
              className="text-zinc-800 group-hover:text-zinc-50 font-semibold text-sm"
            >
              {lang}
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center space-x-3 absolute top-5 right-5">
          <a
            href={project.github}
            target="_blank"
            className="text-zinc-800 hover:text-zinc-700 group-hover:text-zinc-50 transition-all duration-300 ease-in-out text-3xl"
          >
            <RiGithubFill />
          </a>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              className="text-zinc-800 hover:text-zinc-700 group-hover:text-zinc-50 transition-all duration-300 ease-in-out text-3xl"
            >
              <RiExternalLinkLine />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
