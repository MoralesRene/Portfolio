import CardProject from "./CardProject"
function Projects() {
    return (
        <section id="Projects" className=" grid grid-cols-1 justify-items-center gap-y-[10px] py-[45px] bg-gray-500/60">
            <h1 className="text-2xl font-nunito font-bold tracking-wider"><span className="text-cyan-700">Mis </span>Proyectos</h1>
            <div className="grid grid-cols-1 justify-center gap-y-[30px] ">
                <CardProject />
                <CardProject />
                <CardProject />
            </div>
        </section>
    )
}
export default Projects