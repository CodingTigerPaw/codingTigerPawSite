import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
const MenuButtonContact = () =>{
    return(
        <div className='hidden sm:flex sm:flex-col group'>
            <div className='text-center w-20 h-40 ml-2 bg-yellow-300 menuShape cursor-pointer group-hover:bg-gray-700 '>
                <FontAwesomeIcon icon={faPhone} className="text-gray-700 text-4xl mt-6 group-hover:text-yellow-300 "></FontAwesomeIcon>
            </div>
        </div>
    )
}
<test>
<lorem></lorem>
</test>
export default MenuButtonContact