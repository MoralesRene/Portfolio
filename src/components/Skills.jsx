import Cards from "./Cards"
function Skills() {
    const skills = [
        {
            name:"nodeJS",
            url:"../../img/Skills/node-js-logo.png"
        },
        {
            name:"express",
            url:"../../img/Skills/expressjs-logo.png"
        },
        {
            name:"sequelize",
            url:"../../img/Skills/sequelize-logo.png"
        },
        {
            name:"html",
            url:"../../img/Skills/html-logo.png"
        },
        {
            name:"css",
            url:"../../img/Skills/css-logo.png"
        },
        {
            name:"javascript",
            url:"../../img/Skills/javascript-logo.png"
        },
        {
            name:"react",
            url:"../../img/Skills/reactjs-logo.png"
        },
        {
            name:"vite",
            url:"../../img/Skills/Vite-logo.png"
        },
        {
            name:"tailwind",
            url:"../../img/Skills/Tailwind-logo.png"
        },
        {
            name:"mySQL",
            url:"../../img/Skills/MySQL-Logo.png"
        },
        {
            name:"vs code",
            url:"../../img/Skills/visual-studio-code-logo.png"
        },
        {
            name:"git",
            url:"../../img/Skills/Git-logo.png"
        },
    ]
    return (
        <section id="Skills" style={{backgroundImage: "linear-gradient(45deg,#1c3e49 93%,#06B6D4 93%)"}} className="border-solid border-t border-cyan-500 grid grid-cols-1 justify-items-center gap-y-[10px] md:gap-y-[20px] py-[60px]">
            <h1 className="text-2xl font-poppins font-bold tracking-wider text-white"><span className="text-cyan-500">Habili</span>dades</h1>
       <div className="lg:max-w-[1000px] grid grid-cols-1 justify-items-center gap-y-[10px] sm:grid-cols-2 md:grid-cols-3">
       {
            skills.map((skill,index) => 
                <div key={index} className="flex flex-row justify-around bg-[#f5f5f57a] w-[80%] p-2 rounded-lg shadow-lg shadow-[#6ea9bc86] relative z-[15]
                 before:content-[''] hover:before:bg-[#d0d3d3] before:absolute before:top-0 before:left-0 before:w-0 hover:before:w-full 
                 before:h-full before:-z-10 before:duration-500 before:rounded-lg">
                    <Cards 
                name={skill.name}
                url={skill.url}
                />
                </div>
            )
        }
       </div>
        </section>
    )
}
export default Skills