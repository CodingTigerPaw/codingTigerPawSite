import Tiger from '../img/tiger.jpg'
const InfoSection = () => {
    return(
        <div className="container bg-gray-600 mt-8 md:mt-0 m-auto h-screen flex flex-col md:flex-row-reverse">
            <div className=" md:w-1/2 md:pt-32 md:pl-4">
                <img src={Tiger} alt="not working..." className=" w-5/6 h-70 md:h-auto ml-auto mr-auto md:w-full mt-4 md:mt-0 imgShapeLeft border-4 border-yellow-300" />
            </div>
            <div className=' md:p-8 md:w-1/2 text-center text-white font-montserrat pt-8 pr-2 pl-2 text-xs md:text-lg leading-5'>
                <h1>tytuł</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis maiores, impedit rerum quibusdam aspernatur delectus esse assumenda. Libero debitis quasi, porro eum fugit corrupti dolorum perferendis et eligendi aut necessitatibus sed veritatis neque dolores veniam explicabo laudantium distinctio est vel id ea, temporibus repellendus voluptates! Nihil et blanditiis alias unde pariatur accusantium sequi consequatur error aperiam eos nobis, quis, ratione eum obcaecati, voluptatem quod perspiciatis ad voluptas facere tempora repellat. Soluta temporibus dolor eius cumque voluptatem eum amet quis maxime quos, delectus aliquid. Fuga eius molestias tempora, repellat quae et minus nam autem ipsum expedita, perspiciatis aliquid eos labore! Natus asperiores amet reiciendis nam corporis neque tempore sint qui nobis laborum, earum quidem perspiciatis recusandae possimus mollitia culpa doloribus temporibus, tempora voluptatem quis! Ab alias, dolorem quaerat eius voluptatibus expedita quidem incidunt deserunt laudantium dolores corporis at ipsum nulla neque ut quod ratione delectus natus nihil accusamus, ea cupiditate? Culpa possimus architecto quod, animi accusantium vero laudantium sequi ab earum ullam iusto saepe, voluptates fuga nostrum. Expedita earum laudantium beatae voluptates architecto quisquam autem sapiente voluptate! Totam dicta in ut sapiente qui maxime deserunt aspernatur asperiores rem quo, tempore dolores, reiciendis provident est modi nulla voluptatibus eligendi esse id?
                </p>
            </div>
        </div>
    )
}
export default InfoSection