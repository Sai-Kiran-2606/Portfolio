import SNIST from "../assets/SNIST.png";

const EducationCard = (props) => {
  //console.log(props.data);
  const education = props.data;
  return (
    <div className="my-6 border border-white border-solid bg-cyan-100 text-black rounded-xl mx-4 p-4 transform transition-transform duration-300 hover:scale-105">
      <h1 className="text-3xl font-bold">{education.college}</h1>
      <p className="italic text-lg">{education.degree}</p>
      <h3 className="text-xl my-3">{education.relevantCoursework}</h3>
    </div>
  );
};

export default EducationCard;
