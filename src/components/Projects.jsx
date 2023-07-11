import CardProject from "./CardProject"
function Projects() {
    return (
        <section id="Projects" style={{ backgroundImage: "linear-gradient(315deg,#1c3e49 93%,#06B6D4 93%)" }} className=" border-t border-cyan-500 border-solid grid grid-cols-1 justify-items-center gap-y-[10px] py-[60px]">
            <h1 className="text-2xl font-poppins font-bold tracking-wider text-white"><span className="text-cyan-500">Mis </span>Proyectos</h1>
            <div className="grid grid-cols-1 justify-center justify-items-center gap-y-[30px] ">
                <CardProject
                    skills={"Vite, React, Tailwind, HTML, CSS, Javascript"}
                    title={"Portfolio Personal"}
                    array={[
                        "portfolio-1.jpg",
                        "portfolio-2.jpg",
                        "portfolio-3.jpg",
                        "portfolio-4.jpg",
                    ]}
                    link={"https://github.com/MoralesRene/Portfolio"}
                    description={"Portfolio personal creado a partir de Vite + React. Aprovechando este proyecto, pude aprender a utilizar Tailwind, un framework de CSS muy utilizado actualmente. Tambien para los iconos se utlizo la libreria 'React-icons' y 'React-scroll' para el desplazamiento suave entre secciones"}
                />
            </div>
        </section>
    )
}
export default Projects