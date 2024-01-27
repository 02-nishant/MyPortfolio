
import { useState } from "react";
import '../index.css'
import ResumeCard from "./educationCard";

const Education = () => {
  

  const [education, setEducation] = useState([
    {
      course: "Masters in Computer Applications (2022-2025)",
      college:"National Institute Of Technology Agartala ,Tripura",
      marks: "CGPA: 8.55"
    },
    {
        course: "Bachelor of Science,Mathematics  (2017-2020)",
        college:"College of Commerce, Arts & Science, Magadh University, Patna",
        marks: "Percentage: 73.75"
      },
      {
        course: "Senior Secondary School (2015-2017)",
        college:"ST. Anne’s High School, C.B.S.E, Patna",
        marks: "Percentage: 76.4"
      },
      {
        course: "Secondary School (2014-2015)",
        college:"S.R. Vidyapeeth, C.B.S.E, Patna",
        marks: "CGPA: 9.2"
      }
   
  ]);


  return (
    <div className="w-full  border-b-[1px] border-b-black">

      <div className="py-12 font-titleFont">
            <h1 className="text-5xl font-bold ml-10">Education</h1>
      </div>

      <div className="mt-10 ml-5 border-l-[7px] border-white border-opacity-50 flex flex-col gap-10">
      {education.map((education) => (
          <ResumeCard course={education.course} college={education.college} marks={education.marks} />
        ))}
      </div>
   
 
    </div>
  );
};

export default Education;
