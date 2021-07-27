import { Link } from "react-scroll"
const LandingPage = () =>{
    return(
        <div  id="landingPage" className='text-center w-screen h-screen bg-gray-600'>
            <div className=' pt-60 w-4/5 md:w-1/3 h-1/3 border-4 border-yellow-300 m-auto'>Company Big Logo</div>
            <p className='md:p-12  text-white font-montserrat md:text-6xl leading-5'><span className='text-yellow-300 font-bold text-7xl'>P</span>rogramowanie z pasją</p>

            <p className='text-white font-montserrat md:text-xl md:pl-16 md:pr-16'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam repudiandae aspernatur inventore minima, aperiam soluta qui quibusdam vitae facilis nihil amet? Vel, inventore nemo? Modi adipisci aliquid saepe sint, autem ea consequuntur, nostrum cupiditate quasi, tempora ex? Blanditiis, amet totam incidunt numquam est iure nihil obcaecati eos eaque voluptates ab!</p>
            <Link to='WhySection' smooth>
                <button className=" mt-20 w-60 h-20 bg-yellow-300">More...</button> 
            </Link> 
        </div>
    ) 
}

export default LandingPage