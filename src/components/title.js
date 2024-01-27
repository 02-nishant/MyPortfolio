const Title = ({ title, desc }) => {
    return (
      <div className="flex flex-col flex-4 font-titleFont">
        <h3 className="text-4xl font-bold capitalize text-red-700">
          {title}
        </h3>
        <h1 className="text-2xl font-semibold uppercase font-light tracking-wide">
          {desc}
        </h1>
      </div>
    );
  };
  
  export default Title;
  