const ProjectCard = (props) => {
  //console.log(props.data);
  const project = props.data;
  return (
    <div>
      <div className="justify-between h-full bg-white text-black pt-4 px-4 rounded-xl transform transition-transform duration-300 hover:scale-105">
        <div>
          <h1 className="text-3xl">{project.title}</h1>
          <p className="italic text-lg mt-1">{project.techStack}</p>
          <h3 className="text-xl my-3">{project.description}</h3>
          <button className="my-2 p-2 bg-green-700 rounded-xl text-xl font-bold hover:cursor-pointer">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
