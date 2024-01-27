import c from '../assets/images/cpp.png';
import sb from '../assets/images/sb.png';
import '../index.css'

const Skill = () => {
    return (
        <div className="w-full  border-b-[1px] border-b-black">

            <div className="py-12 font-titleFont">
                <h1 className="text-5xl font-bold ml-10">Skills</h1>
            </div>

            <div className="mt-4 ">
                <h1 className="font-bold" style={{ marginLeft: "5rem", marginBottom: "2rem"}}>WEB TECHNOLOGY</h1>
                <ul className="w-full grid grid-cols-3">
                    <li className="skill-item" style={{ marginLeft: "5rem", textAlign: "center" }}>
                      <i class="fa-brands fa-html5 text-7xl" /><br/> <b>HTML</b> 
                    </li>
                    <li className="skill-item" style={{ marginLeft: "5rem", textAlign: "center" }}>
                    <i class="fa-brands fa-css3-alt text-7xl" /><br/> <b>CSS</b>
                    </li>
                    <li className="skill-item" style={{ marginLeft: "5rem", textAlign: "center" }}>
                    <i class="fa-brands fa-js text-7xl" /> <br/> <b>JavaScript</b>
                    </li>
                </ul>
            </div>

            <div className="mt-4 ">
                <h1 className="font-bold" style={{ marginLeft: "5rem", marginBottom: "2rem" }}>LANGUAGE/DATABASE</h1>
                <ul className="w-full grid grid-cols-3">
                    <li className="skill-item" style={{ marginLeft: "5rem", textAlign: "center" }}>
                      <img src={c} style={{ marginLeft:"9rem", width: "6rem", height: "6rem" }} />  <br/> <b>C++</b> 
                    </li>
                    <li className="skill-item" style={{ marginLeft: "5rem", textAlign: "center" }}>
                    <i class="fa-brands fa-java text-7xl" /><br/> <b>JAVA</b>
                    </li>
                    <li className="skill-item" style={{ marginLeft: "5rem", textAlign: "center" }}>
                    <i class="fa-solid fa-database text-7xl" /> <br/> <b>MySQL</b>
                    </li>
                </ul>
            </div>

            <div className="mt-4 ">
                <h1 className="font-bold" style={{ marginLeft: "5rem", marginBottom: "2rem"}}>FRAMEWORKS</h1>
                <ul className="w-full grid grid-cols-3">
                    <li className="skill-item" style={{ marginLeft: "5rem", textAlign: "center" }}>
                      <i class="fa-brands fa-react text-7xl" /><br/> <b>REACT JS</b> 
                    </li>
                    <li className="skill-item" style={{ marginLeft: "5rem", textAlign: "center" }}>
                    <img src={sb} style={{ marginLeft:"9rem", width: "5rem", height: "5rem" }} /><br/> <b>SPRING BOOT</b>
                    </li>
                    
                </ul>
            </div>

        </div>
    );
};

export default Skill;