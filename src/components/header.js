import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Project from "./project";

const Header = () => {
    const [brandName, setBrandName] = useState("NISHANT VERMA");

    const [menulinks, setMenuLinks] = useState([
        {
            title: "Home",
            link: "/home",
            id: 1
        },
        {
            title: "Projects",
            link: "/projects",
            id: 2
        },
        {
            title: "About",
            link: "/about",
            id: 4,
        },
    ]);

    const [isSticky, setIsSticky] = useState(false);


    // Function to handle scroll events
    const handleScroll = () => {
        setIsSticky(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    
    return (
        <div className={`h-16 ${isSticky ? "fixed top-0 w-full bg-black " : ""} main flex justify-between items-center px-16`}>
            <div>
                <h1 className="text-2xl font-bold">{brandName}</h1>
            </div>

            <div className="space-x-6">
                {menulinks.map((link) => (
                    <Link key={link.id} to={link.link} className="hover:text-red-500" >
                        {link.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Header;
