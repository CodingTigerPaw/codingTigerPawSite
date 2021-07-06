import Tiger from '../img/tiger.jpg'
const AboutSection = () => {
    return(
        <div id="aboutSection" className="container bg-gray-600 mt-8 md:mt-0 m-auto h-screen flex flex-col md:flex-row-reverse">
            <div className=" md:w-1/2 md:pt-32 md:pl-4">
                <img src={Tiger} alt="not working..." className=" md:hidden w-full h-72 md:h-auto ml-auto mr-auto md:w-full md:mt-0 imgShapeMobile  border-t-4 border-b-4 border-yellow-300" />
                <img src={Tiger} alt="not working..." className=" hidden md:inline w-5/6 md:h-auto ml-auto mr-auto md:w-full mt-4 md:mt-0 imgShapeRight  border-t-4 border-b-4 border-yellow-300" />
            </div>
            <div className=' md:p-8 md:pt-24  md:w-1/2 text-center text-white font-montserrat pt-8 pr-2 pl-2 text-xs md:text-lg leading-5'>
                <h1 className="text-4xl tracking-widest"><span className="text-yellow-300 font-bold text-5xl">T</span>ytuł</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aperiam eos nobis, quis, ratione eum obcaecati, voluptatem quod perspiciatis ad voluptas facere tempora repellat. Soluta temporibus dolor eius aliquid. Fuga eius molestias tempora, repellat quae et minus nam autem ipsum expedita, perspiciatis aliquid eos labore! Natus asperiores amet reiciendis nam corporis neque tempore sint qui nobis laborum, earum quidem perspiciatis recusandae possimus mollitia culpa doloribus temporibus, tempora voluptatem quis! Ab alias, dolorem quaerat eius voluptatibus expedita quidem incidunt deserunt laudantium dolores corporis at ipsum nulla neque ut quod ratione delectus natus nihil accusamus, ea cupiditate? Culpa possimus architecto quod, animi accusantium vero laudantium sequi ab earum ullam iusto saepe, voluptates fuga nostrum. Expedita earum laudantium beatae voluptates architecto quisquam autem sapiente voluptate! Totam dicta in ut sapiente qui maxime deserunt aspernatur asperiores rem quo, tempore dolores, reiciendis provident est modi nulla voluptatibus eligendi esse id?
                </p>
            </div>
        </div>
    )
}
export default AboutSection