import Title from "./title";
import { useState,useRef } from "react";
import '../index.css'
import Education from "./education";
import Experience from "./experience";
import Skill from "./skill";
import Achieve from "./achievement";



const About = () => {



  const [options, setOptions] = useState([
    { title: "Education" },
    { title: "Professional Skills" },
    { title: "Experience" },
    { title: "Achievement" },
  ]);

  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  return (
    <div  className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="About Myself" desc="" />
      </div>

      <div className="mt-4">
        <ul className="w-full grid grid-cols-4">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setEducationData(index === 0);
                setSkillData(index === 1);
                setExperienceData(index === 2);
                setAchievementData(index === 3);
              }}
              className={`${
                (index === 0 && educationData) ||
                (index === 1 && skillData) ||
                (index === 2 && experienceData) ||
                (index === 3 && achievementData)
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } option-item`}
            >
              {option.title}
            </li>
          ))}
        </ul>
      </div>

      {educationData && <Education />}
      {skillData && <Skill />}
      {experienceData && <Experience />}
      {achievementData && <Achieve />}
    </div>
  );
};

export default About;
