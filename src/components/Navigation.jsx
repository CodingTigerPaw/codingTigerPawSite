import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import MenuButtonWhy from "./MenuButtons/MenuButtonWhy"
import MenuButtonSkills from "./MenuButtons/MenuButtonSkills"
import MenuButtonAbout from "./MenuButtons/MenuButtonAbout"
import MenuButtonContact from "./MenuButtons/MenuButtonContact"
import MenuButtonPrice from "./MenuButtons/MenuButtonPrice"

const Navigation = () =>{
    return(
        <div className="h-24 bg-gray-700 navShape sticky top-0 z-10">
            <div className="absolute ml-12 text-4xl text-white hidden lg:inline">company name</div>
 
            <div className="hidden md:flex md:flex-row-reverse mr-48">
                <MenuButtonWhy/>
                <MenuButtonSkills/>
                <MenuButtonAbout/>
                <MenuButtonContact/>
                <MenuButtonPrice/>

            </div>
            <FontAwesomeIcon  onClick= {()=>{console.log('click')}} icon={faBars} className=" absolute ml-4 mt-3 text-4xl md:hidden cursor-pointer hover:text-yellow-300"/>

            <div className="absolute right-0 top-4 mr-8 text-white text-2xl">LOGO</div>
        </div>
    )

}

export default Navigation