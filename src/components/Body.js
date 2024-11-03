import photo from "../assets/myPhoto.jpeg";
const Body = () => {
    return(
        <div>
            <div className="flex justify-between m-4 p-4">
                <h1>Hi. I'm SaiKiran Reddy Kotha, a full stack developer proficient in React, Java and Spring Boot.</h1>
                <img className="w-3/12 h-2/4" src={photo}></img>
            </div>
        </div>
    );
};

export default Body;