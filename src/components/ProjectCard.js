import { useNavigate } from "react-router-dom";

const ProjectCard = (props) => {
  //console.log(props.data);
  const project = props.data;
  return (
    <div>
      <div className="p-6 justify-between h-full bg-white text-black rounded-xl transform transition-transform duration-300 hover:scale-105">
        <div>
          <h1 className="text-3xl">{project.title}</h1>
          <p className="italic text-lg mt-1">{project.techStack}</p>
          <h3 className="text-xl my-3">{project.description}</h3>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <button className="my-2 p-2 bg-green-700 rounded-xl text-xl font-bold hover:cursor-pointer">
              View Project
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
