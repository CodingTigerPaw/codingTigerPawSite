import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
const MenuButtonSkills = () =>{
    return(
        <div className='hidden sm:flex sm:flex-col group'>
            <div className='text-center w-20 h-40 ml-2 bg-yellow-300 menuShape cursor-pointer group-hover:bg-gray-700 '>
                <FontAwesomeIcon icon={faCode} className="text-gray-700 text-4xl mt-6 group-hover:text-yellow-300 "></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default MenuButtonSkills