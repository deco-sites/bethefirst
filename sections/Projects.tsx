export interface Projects {
  /**
   * @title
   */
  name: string;
  image: {
    src: string;
    alt: string;
  };
  link: string;
  order: "order-1" | "order-2";
}

export interface Props {
  title: string;
  projects: Projects[];
}

export default function Projects({ title, projects }: Props) {
  return (
    <div className="bg-[#263424] py-20">
      <div className="container">
        <h2 className="text-8xl text-white mb-16">
          Latest <span className="block font-bold">Projects</span>
        </h2>
        <ul className="grid grid-cols-2 border border-slate-800">
          {projects.map((project, index) => (
            <li className="flex" key={index}>
              <a href={project.link} className="grid grid-cols-2 w-full">
                <div className={`p-4 ${project.order}`}>
                  <h3 className="text-white font-bold">{project.name}</h3>
                </div>
                <div
                  className={`${
                    project.order === "order-1" ? "order-2" : "order-1"
                  } flex`}
                >
                  <img
                    src={project.image.src}
                    alt={project.image.alt}
                    className="w-full"
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-16">
          <a href="#" className="btn btn-wide btn-circle">Contact Us</a>
        </div>
      </div>
    </div>
  );
}
