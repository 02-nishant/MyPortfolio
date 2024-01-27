
import { useState } from "react";
import '../index.css'
import ExperienceCard from "./experienceCard";

const Experience = () => {
  

  const [experience, setExperience] = useState([
    {
     role:"IT and Web Development Intern",
     company:"BasketHunt Private Limited",
     desc:"I collaborated with the IT team to conduct comprehensive security of assessments and tests on the Moodle site identifying vulnerabilities and implementing robust solutions and ensuring a seamless e-learning experience ",
     date:"July 17 2023 – Sept 19 2023",
    },

  ]);


  return (
    <div className="w-full  border-b-[1px] border-b-black">

      <div className="py-12 font-titleFont">
            <h1 className="text-5xl font-bold ml-10">Experience</h1>
      </div>

      <div className="mt-10 ml-5 border-l-[7px] border-white border-opacity-50 flex flex-col gap-10">
      {experience.map((exp) => (
          <ExperienceCard role={exp.role} company={exp.company} desc={exp.desc} date={exp.date} />
        ))}
      </div>
   
 
    </div>
  );
};

export default Experience;
