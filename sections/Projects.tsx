export interface Projects {
   name: string;
   image: {
      src: string;
      alt: string;
   };
   link: string
}

export interface Props {
   title: string;
   projects: Projects[];
}

export default function Projects({ title, projects }: Props) {
   return (
      <div className="bg-emerald-950 py-20">
         <div className="container">
            <h2 className="text-6xl text-white font-bold">{title}</h2>
            <ul>
               {projects.map((project, index) => (
                  <li>
                     <a href={project.link}>
                        <div>
                           <h3>{project.name}</h3>
                        </div>
                        <div>
                           <img src={project.image.src} alt={project.image.alt} />
                        </div>
                     </a>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}
