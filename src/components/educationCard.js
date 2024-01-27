const ResumeCard =({course, college, marks}) =>{
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
                <h3 className="text-xl text-gray-400 md:text-2xl font-bold ">
                  {course}
                </h3>
                <p className="text-2xl mt-2 text-gray-200 group-hover:text-red-500 duration-100">
                  {college}
                </p>
              </div>
              <div>
                <p className="px-4 py-2  rounded-lg flex justify-center items-center font-medium">
                  {marks}
                </p>
              </div>
            </div>
        
          </div>
        </div>
      );
};

export default ResumeCard;