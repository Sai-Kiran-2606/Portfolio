import photo from "../assets/myPhoto2.jpeg";
import { education, projects, experiences } from "../utils/constants";
import ProjectCard from "./ProjectCard";
import EducationCard from "../components/EducationCard";
import { header_logo } from "../utils/constants";

const Body = () => {
  const scrollToAbout = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToEducation = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToExperience = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToProjects = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="Body">
      <div
        id="header"
        className="fixed z-10 bg-minimalBackground text-white font-serif w-full h-24">
        <div className="flex justify-between shadow-lg mx-4">
          <img
            className="my-4 mx-4 w-16 rounded-3xl hover:cursor-pointer transform transition-transform duration-300 hover:scale-105"
            src={header_logo}
          />
          <ul className="flex my-3 mx-4 p-4 text-2xl">
            <button
              className="mx-4 md:inline-block hidden transform transition-transform duration-300 hover:scale-105"
              onClick={() => scrollToAbout("about")}>
              About
            </button>
            <button
              className="mx-4 md:inline-block hidden transform transition-transform duration-300 hover:scale-105"
              onClick={() => scrollToEducation("education")}>
              Education
            </button>
            <button
              className="mx-4 md:inline-block hidden transform transition-transform duration-300 hover:scale-105"
              onClick={() => scrollToProjects("projects")}>
              Projects
            </button>
            <button
              className="mx-4 md:inline-block hidden transform transition-transform duration-300 hover:scale-105"
              onClick={() => scrollToExperience("experience")}>
              Experience
            </button>
            <button
              className="mx-4 md:inline-block hidden transform transition-transform duration-300 hover:scale-105"
              onClick={() => scrollToContact("contact")}>
              Contact
            </button>
            <button className="mx-4 inline-block md:hidden transform transition-transform duration-300 hover:scale-105">
              Menu
            </button>
          </ul>
        </div>
      </div>

      {/* About */}
      <div
        id="about"
        className="flex flex-col md:flex-row items-center justify-center pt-24 pb-10 md:pt-14 md:pb-6">
        <img
          className="md:ml-16 h-96 p-3 object-cover rounded-full"
          src={photo}></img>
        <div className="my-8 ml-16 mr-16 md:py-20 md:px-10 md:mr-20">
          <h1 className="text-5xl mb-2">Hello,</h1>
          <h1 className="text-5xl mb-2">SaiKiran Reddy here.👋</h1>
          <p className="text-2xl italic">Full Stack Developer</p>
          <br />
          <h1 className="text-xl text-justify">
            A passionate full-stack developer with a strong foundation in cloud
            computing and machine learning. With experience in various web and
            server technologies, I bring a versatile skill set that spans
            front-end, back-end, and database management. My expertise includes
            working with frameworks like React, Spring Boot, and tools like AWS,
            enabling me to build scalable, efficient applications.
          </h1>
          <br />
          <h1 className="text-xl text-justify">
            Currently pursuing my Master’s in IT at the University of
            Cincinnati, I’m dedicated to continuous learning and am excited
            about developing solutions that make a real-world impact. Let’s
            create something remarkable together!
          </h1>
          <ul className="flex my-5">
            {/* <li className="text-2xl">Checkout➡️ </li> */}
            <li>
              <img
                className="w-12 mr-4 rounded-lg hover:cursor-pointer transform transition-transform duration-300 hover:scale-110"
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"></img>
            </li>
            <li>
              <img
                className="w-20 mx-4 rounded-lg hover:cursor-pointer transform transition-transform duration-300 hover:scale-110"
                src="https://media.licdn.com/dms/image/D5612AQHXyBgH7mnUqg/article-cover_image-shrink_720_1280/0/1691804305878?e=2147483647&v=beta&t=Sy3bXZgFG3usM3i761wUl18W3I-vdBtWtBOGDMnTuCk"></img>
            </li>
            <li>
              <img
                className="w-12 mx-4 hover:cursor-pointer transform transition-transform duration-300 hover:scale-110"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"></img>
            </li>
            <li>
              <img
                className="w-12 mx-4 rounded-lg hover:cursor-pointer transform transition-transform duration-300 hover:scale-110"
                src="https://cdn-icons-png.freepik.com/256/4008/4008218.png?semt=ais_hybrid"></img>
            </li>
          </ul>
          <div className="mt-8 flex flex-row">
            <button className="hover:cursor-pointer px-2 mr-3 py-2 my-2 lg:px-8 lg:mr-3 lg:py-2 text-xl bg-white text-black rounded-3xl transform transition-transform duration-300 hover:scale-105">
              Resume
            </button>
            <button className="hover:cursor-pointer px-2 py-2 my-2 lg:px-8 lg:ml-3 lg:py-2 text-xl bg-white text-black rounded-3xl transform transition-transform duration-300 hover:scale-105">
              saikiranreddykotha260@gmail.com
            </button>
          </div>
        </div>
      </div>

      {/* Education */}
      <h1
        id="education"
        className="text-5xl text-center font-bold text-cyan-100">
        Education
      </h1>
      <div className="flex flex-col py-5 w-10/12 mx-auto bg-minimalBackground text-white font-serif">
        {education.map((edu) => (
          <EducationCard key={edu.college} data={edu} />
        ))}
      </div>

      {/* Projects */}
      <h1 id="projects" className="text-5xl font-bold text-center pb-8">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-10/12 ml-14 md:ml-28">
        {projects.map((project) => (
          <ProjectCard key={project.title} data={project} />
        ))}
      </div>

      {/* Experience */}
      <div id="experience" className="bg-minimalBackground pt-20 pb-10 px-5">
        <h2 className="text-5xl font-bold text-center mb-8 text-blue-600">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-10/12 ml-14 md:ml-28">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold text-blue-500">
                {exp.title}
              </h3>
              <p className="text-lg text-gray-600">{exp.company}</p>
              <p className="text-md text-gray-500 mb-4">{exp.date}</p>
              <p className="text-gray-700 text-xl">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="bg-minimalBackground text-white pb-24">
        <h1 className="text-center text-5xl font-bold py-4 text-white">
          Contact
        </h1>
        <div className="w-6/12 mx-auto bg-white text-black rounded-lg py-2">
          <div className="flex flex-col lg:flex-row justify-between my-2">
            <div className="ml-10 mr-10">
              <label className="py-2 text-2xl font-bold">First Name</label>
              <input
                type="text"
                className="border-2 border-black border-solid rounded-lg h-10 mb-3 px-1 w-full"></input>
            </div>
            <div className="ml-10 mr-10">
              <label className="py-2 text-2xl font-bold">Last Name</label>
              <input
                type="text"
                className="border-2 border-black border-solid rounded-lg h-10 mb-3 px-1 w-full"></input>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between my-2">
            <div className="ml-10 mr-10">
              <label className="py-2 mr-14 text-2xl font-bold">Email</label>
              <input
                type="text"
                className="border-2 border-black border-solid rounded-lg h-10 mb-3 px-1 w-full"></input>
            </div>
            <div className="ml-10 mr-10">
              <label className="py-2 ml-12 text-2xl font-bold">Phone</label>
              <input
                type="text"
                className="border-2 border-black border-solid rounded-lg h-10 mb-3 px-1 w-full"></input>
            </div>
          </div>
          <div className="ml-10 mr-10">
            <label className="py-2 text-2xl font-bold">Body</label>
            <input
              type="text"
              className="border-2 border-black border-solid rounded-lg h-28 mb-3 px-1 text-lg w-full"></input>
          </div>
          <div className="flex flex-col xl:flex-row justify-between">
            <div className="ml-10 mr-10">
              <button className="bg-red-500 text-white text-xl p-2 my-4 rounded-lg">
                Clear All
              </button>
            </div>
            <div className="ml-10 mr-10">
              <button className="bg-green-500 text-white text-xl p-2 my-4 rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
