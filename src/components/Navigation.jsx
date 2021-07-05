import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-scroll"
import MenuButtonWhy from "./MenuButtons/MenuButtonWhy"
import MenuButtonSkills from "./MenuButtons/MenuButtonSkills"
import MenuButtonAbout from "./MenuButtons/MenuButtonAbout"
import MenuButtonContact from "./MenuButtons/MenuButtonContact"
import MenuButtonPrice from "./MenuButtons/MenuButtonPrice"

const Navigation = () =>{
    return(
        <>
        <div className="h-24 bg-gray-700 navShape sticky top-0 z-10">
            <Link to='landingPage' smooth spy>
                <div className="absolute ml-12 text-4xl text-white hidden lg:inline cursor-pointer">company name</div>
            </Link>

            <div className="hidden md:flex md:flex-row-reverse mr-48 ">
                <Link to='WhySection' smooth spy>
                    <MenuButtonWhy/>
                </Link>
               <Link to='skillsSection' smooth spy >
                    <MenuButtonSkills/>
               </Link>
                <MenuButtonAbout/>
                <MenuButtonContact/>
                <MenuButtonPrice/>

            </div>
            <FontAwesomeIcon  onClick= {()=>{console.log('click')}} icon={faBars} className=" absolute ml-4 mt-3 text-4xl md:hidden cursor-pointer hover:text-yellow-300"/>

            <div className="absolute right-0 top-4 mr-8 text-white text-2xl">LOGO</div>
        </div>
        <div className=" hidden text-center font-lato pt-4 z-20 absolute top-20 w-60 h-16 bg-yellow-300">1</div>
        <div className=" hidden text-center font-lato pt-4 z-20 absolute top-40 w-60 h-16 bg-yellow-300">2</div>
        <div className=" hidden text-center font-lato pt-4 z-20 absolute top-60 w-60 h-16 bg-yellow-300">3</div>
        <div className=" hidden text-center font-lato pt-4 z-20 absolute top-80 w-60 h-16 bg-yellow-300">4</div>
        <div className=" hidden text-center font-lato pt-4 z-20 absolute top-100 w-60 h-16 bg-yellow-300">5</div>
        </>
    )

}

export default Navigation