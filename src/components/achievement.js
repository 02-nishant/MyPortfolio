import AchieveCard from "./achieveCard";
import { useState } from "react";
import '../index.css'

const Achieve =()=>{

    const [achieve, setAchieve] = useState([
        {
         desc:"Secured All India Rank 626 in NIMCET 2022, National Level MCA Entrance Examination Organised By National Institute Of Technology, Jamshedpur"
        }
       
      ]);

    return(
        <div className="w-full  border-b-[1px] border-b-black">

        <div className="py-12 font-titleFont">
              <h1 className="text-5xl font-bold ml-10">Achievement</h1>
        </div>
  
        <div className="mt-10 ml-5 border-l-[7px] border-white border-opacity-50 flex flex-col gap-10">
        {achieve.map((a) => (
            <AchieveCard desc={a.desc} />
          ))}
        </div>
     
   
      </div>
    );

};
export default Achieve;