import { useState } from "react";

const ExperienceCard = ({experience, index}) => {
    const [isOpen, setIsOpen] = useState(false);

  // Alternate left and right card positioning
    const alignment = index % 2 === 0 ? 'mr-auto' : 'ml-auto';
    const bgColor = index % 2 === 0 ? 'bg-white text-gray-800' : 'bg-yellow-400 text-white';

    return (
        <div className={`mb-8 w-5/12 ${alignment}`}>
        <div className={`${bgColor} p-4 rounded-lg shadow-lg`}>
            <div className="flex items-center mb-1">
            {/* <div className="bg-yellow-400 w-4 h-4 rounded-full mr-4"></div> */}
            <h3 className="text-xl font-semibold">{experience.title}</h3>
            </div>
            <p className="text-gray-500 mb-2">{experience.company} • {experience.date}</p>
            {isOpen && <p className="text-gray-700">{experience.description}</p>}
            <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${bgColor} mt-2`} 
            >
            {isOpen ? "Show Less" : "Show More"}
            </button>
        </div>
        </div>
    );
  };

  export default ExperienceCard;