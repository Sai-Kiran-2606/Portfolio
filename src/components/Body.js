import photo from "../assets/myPhoto2.jpeg";
import { education, projects, experiences } from "../utils/constants";
import ProjectCard from "./ProjectCard";
import EducationCard from "../components/EducationCard";
import { header_logo } from "../utils/constants";
import { useState } from "react";
import emailjs from "emailjs-com";

const Body = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [body, setBody] = useState("");

  const gmailComposeURL =
    "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=saikiranreddykotha260@gmail.com";

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

  const handleFName = (e) => {
    setFName(e.target.value);
  };

  const handleLName = (e) => {
    setLName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleBody = (e) => {
    setBody(e.target.value);
  };

  const handleClearAll = () => {
    setFName("");
    setLName("");
    setEmail("");
    setPhone("");
    setBody("");
  };

  const handleSubmitAll = (e) => {
    e.preventDefault();

    // EmailJS parameters
    const templateParams = {
      firstName: fName,
      lastName: lName,
      email: email,
      phone: phone,
      message: body,
    };

    emailjs
      .send(
        "service_r7uuevi", // Replace with your EmailJS service ID
        "template_3iv3dge", // Replace with your EmailJS template ID
        templateParams,
        "PgZFV2XciVuFXVWHI" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Success...", response);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    handleClearAll();
  };

  return (
    <div className="Body">
      {/* Header */}
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
        className="flex flex-col md:flex-row items-center justify-center pt-24 mb-6 md:pt-20">
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
              <a
                href="https://www.linkedin.com/in/saikiranreddykotha"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  className="w-12 mr-4 rounded-lg hover:cursor-pointer transform transition-transform duration-300 hover:scale-110"
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"></img>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Sai-Kiran-2606?tab=repositories"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  className="w-20 mx-4 rounded-lg hover:cursor-pointer transform transition-transform duration-300 hover:scale-110"
                  src="https://media.licdn.com/dms/image/D5612AQHXyBgH7mnUqg/article-cover_image-shrink_720_1280/0/1691804305878?e=2147483647&v=beta&t=Sy3bXZgFG3usM3i761wUl18W3I-vdBtWtBOGDMnTuCk"></img>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  className="w-12 mx-4 hover:cursor-pointer transform transition-transform duration-300 hover:scale-110"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"></img>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/ReddyKiran72304"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  className="w-12 mx-4 rounded-lg hover:cursor-pointer transform transition-transform duration-300 hover:scale-110"
                  src="https://cdn-icons-png.freepik.com/256/4008/4008218.png?semt=ais_hybrid"></img>
              </a>
            </li>
          </ul>
          <div className="mt-8 flex flex-row">
            <a
              href="../../public/RESUME.pdf"
              download="SaiKiran_Reddy_Kotha_Resume.pdf">
              <button className="hover:cursor-pointer px-2 mr-3 py-2 my-2 lg:px-8 lg:mr-3 lg:py-2 text-xl bg-white text-black rounded-3xl transform transition-transform duration-300 hover:scale-105">
                Resume
              </button>
            </a>
            <a href={gmailComposeURL} target="_blank" rel="noopener noreferrer">
              <button className="hover:cursor-pointer px-2 py-2 my-2 lg:px-8 lg:ml-3 lg:py-2 text-xl bg-white text-black rounded-3xl transform transition-transform duration-300 hover:scale-105">
                saikiranreddykotha260@gmail.com
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Education */}
      <div id="education" className="pt-24">
        <h1 className="text-5xl text-center font-bold text-cyan-100">
          Education
        </h1>
        <div className="flex flex-col py-5 w-10/12 mx-auto bg-minimalBackground text-white font-serif">
          {education.map((edu) => (
            <EducationCard key={edu.college} data={edu} />
          ))}
        </div>
      </div>

      {/* Projects */}
      <div id="projects" className="pt-24 pb-10">
        <h1 className="text-5xl font-bold text-center mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-10/12 mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} data={project} />
          ))}
        </div>
      </div>

      {/* Experience */}
      <div id="experience" className="bg-minimalBackground pt-24 pb-12 px-5">
        <h2 className="text-5xl font-bold text-center mb-8 text-blue-600">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-10/12 mx-auto">
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
        <div className="w-8/12 mx-auto bg-white text-black rounded-lg py-2">
          <div className="flex flex-col lg:flex-row justify-between my-2 gap-x-4">
            <div className="w-full lg:w-1/2 px-4">
              <label className="py-2 text-2xl font-bold block">
                First Name
              </label>
              <input
                type="text"
                className="border-2 border-black border-solid rounded-lg h-10 mb-3 px-2 w-full text-lg"
                placeholder="Enter your first name"
                value={fName}
                onChange={handleFName}
              />
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <label className="py-2 text-2xl font-bold block">Last Name</label>
              <input
                type="text"
                className="border-2 border-black border-solid rounded-lg h-10 mb-3 px-2 w-full text-lg"
                placeholder="Enter your last name"
                value={lName}
                onChange={handleLName}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between my-2 gap-x-4">
            <div className="w-full lg:w-1/2 px-4">
              <label className="py-2 text-2xl font-bold block">Email</label>
              <input
                type="text"
                className="border-2 border-black border-solid rounded-lg h-10 mb-3 px-2 w-full text-lg"
                placeholder="username@example.com"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <label className="py-2 text-2xl font-bold block">Phone</label>
              <input
                type="text"
                className="border-2 border-black border-solid rounded-lg h-10 mb-3 px-2 w-full text-lg"
                placeholder="(XXX)-(XXX)-XXXX"
                value={phone}
                onChange={handlePhone}
              />
            </div>
          </div>
          <div className="px-4">
            <label className="py-2 text-2xl font-bold block">Body</label>
            <textarea
              className="border-2 border-black border-solid rounded-lg h-28 mb-3 px-2 text-lg w-full"
              value={body}
              onChange={handleBody}></textarea>
          </div>
          <div className="flex flex-col xl:flex-row justify-between px-4 my-4 gap-4">
            <button
              className="bg-red-500 text-white text-xl p-2 rounded-lg w-full xl:w-1/2"
              onClick={handleClearAll}>
              Clear All
            </button>
            <button
              className="bg-green-500 text-white text-xl p-2 rounded-lg w-full xl:w-1/2"
              onClick={handleSubmitAll}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
