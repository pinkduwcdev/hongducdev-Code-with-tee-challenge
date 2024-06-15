import { IProject } from "@/@types";
import ProjectItem from "@/components/project-item";
import Title from "@/components/title";

const ProjectList: IProject[] = [
  {
    title: "Blog",
    github: "https://github.com/hongducdev/blog",
    link: "https://blog.hongducdev.com",
    lang: ["Next.js", "TailwindCSS", "TypeScript"],
    background: "bg-gradient-digital-water",
  },
  {
    title: "Code with me",
    github: "https://github.com/hongducdev/lofi",
    link: "https://lofi-nine.vercel.app/",
    lang: ["React", "TailwindCSS", "TypeScript"],
    background: "bg-gradient-roseanna",
  },
  {
    title: "hdd.hn",
    github: "https://github.com/hongducdev/hdd.hn",
    link: "https://hdd-hn.vercel.app/",
    lang: ["Next.js", "TailwindCSS", "TypeScript"],
    background: "bg-gradient-summer-dog",
  },
];

const ProjectsPage = () => {
  return (
    <div>
      <Title>Projects</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
        {ProjectList.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </div>
      <p className="mt-10 text-center text-">
        Can see more projects on my{" "}
        <a href="https://github.com/hongducdev">
          <span className="text-zinc-200 z-10 relative after:absolute after:z-[-1] after:h-[2px] after:w-full after:bg-gradient-radar after:bottom-0 after:left-0 after:transition-all after:duration-500 hover:after:h-full">
            Github
          </span>
        </a>
      </p>
    </div>
  );
};

export default ProjectsPage;
