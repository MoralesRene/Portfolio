import CardProject from "./CardProject"
function Projects() {
    return (
        <section id="Projects" className=" grid grid-cols-1 justify-items-center gap-y-[10px] py-[60px] bg-gray-500/60">
            <h1 className="text-2xl font-poppins font-bold tracking-wider"><span className="text-cyan-700">Mis </span>Proyectos</h1>
            <div className="grid grid-cols-1 justify-center gap-y-[30px] sm:grid-cols-2 ">
                <CardProject
                    skills={"HTML,CSS,Javascript, NodeJS, Sequelize, Express, MySQL"}
                    title={"Titulo Proyecto"}
                    array={[
                        "Default.jpg",
                        "Default.jpg",
                        "Default.jpg",
                        "Default.jpg",
                    ]}
                    link={"https://github.com/MoralesRene"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit.Earum ex tenetur facere porro eius. Similique, tempora fugiat distinctio, sit nostrum corrupti dicta quo doloribus possimus sint laudantium nulla laboriosam expedita."}
                />
                <CardProject
                    skills={"HTML,CSS,Javascript, NodeJS, Sequelize, Express, MySQL"}
                    title={"Titulo Proyecto"}
                    array={[
                        "Default.jpg",
                        "Default.jpg",
                        "Default.jpg",
                        "Default.jpg",
                    ]}
                    link={"https://github.com/MoralesRene"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit.Earum ex tenetur facere porro eius. Similique, tempora fugiat distinctio, sit nostrum corrupti dicta quo doloribus possimus sint laudantium nulla laboriosam expedita."}
                />
            </div>
        </section>
    )
}
export default Projects