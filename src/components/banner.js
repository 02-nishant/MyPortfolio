import { useEffect, useRef } from "react";
import ab from "../assets/images/ab.png";
import Typed from 'typed.js';

const Banner = () => {

    const e = useRef(null);
    useEffect(() => {
        const typed = new Typed(e.current, {
          strings: ["FrontEnd Developer", "BackEnd Developer", "Full Stack Developer", ], 
        
          startDelay: 100,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 10,
          loop: true,
        });
    
      
        return () => {
          typed.destroy();
        };
      }, []);

    return (
        <div className="flex items-center">
            <div className="w-full flex justify-center">
                <div>
                    <h3 className="mt-2 text-3xl font-semibold">Hello, I am</h3>
                    <h1 className="mt-2 text-5xl font-bold">NISHANT VERMA</h1>
                    <h2 className="mt-2 text-3xl">a <span className="font-bold underline" ref={e}></span></h2>
                    <p className="mt-2">Transforming ideas into digital magic, one line of code at a time.<br />
                        Passionate about crafting seamless experiences in the vast world of <br />Full Stack Development.
                        Excited to embark on new coding adventures!</p>



                    <br />
                    <br />
                    <div className="flex">
                        <a className=" text-2xl px-3 py-2 rounded-full bg-green-200" href="/contact" style={{ border: '1px solid', color: 'black' }}>Contact Me</a>
                        <div className="ml-3 flex">
                            <a  href="https://www.facebook.com/profile.php?id=100007658747492"><i className=" fab fa-facebook text-5xl"></i></a>
                            <a href="https://github.com/02-nishant"> <i className="fab fa-github text-5xl ml-5"></i></a>
                            <a href="https://www.linkedin.com/in/nishant-verma-84a6aa223/" ><i className="fab fa-linkedin text-5xl ml-5"></i></a>
                        </div>
                    </div>

                </div>
            </div>


            <div className="w-full flex justify-center">
                <img className=" shadow-large" src={ab} style={{ maxWidth: '60%', height: '80%', borderRadius: '15%', margin: '20px' }} />
            </div>
        </div>
    );
};

export default Banner;