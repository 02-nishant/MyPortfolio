
const AchieveCard =({desc}) =>{
    return (
        <div className="w-full h-1/4 group flex ">
            
          <div className="w-10 h-[6px] bg-purple-200 bg-opacity-50 mt-16 relative">
            <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-purple-200 bg-opacity-50">
              <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-orange-700 duration-100"></span>
            </span>
          </div>

          <div className="w-full bg-blue bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
            <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
              <div>
                <p className="text-2xl mt-2 text-gray-200 group-hover:text-red-500 duration-100">
                  {desc}
                </p>
              </div>
              
            </div>
        
          </div>
        </div>
      );
};

export default AchieveCard;