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
            name:"mySQL",
            url:"../../img/Skills/MySQL-Logo.png"
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
            name:"redux",
            url:"../../img/Skills/redux-logo.png"
        },
        {
            name:"tailwind",
            url:"../../img/Skills/Tailwind-logo.png"
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
        <section id="Skills" className=" grid grid-cols-1 justify-items-center gap-y-[10px] py-[45px]">
            <h1 className="text-2xl font-nunito font-bold tracking-wider"><span className="text-cyan-700">Apti</span>tudes</h1>
       <div className="grid grid-cols-1 justify-items-center gap-y-[10px] md:grid-cols-3">
       {
            skills.map((skill,index) => 
                <div className="flex flex-row justify-around bg-[#f5f5f5] w-[80%] p-2 rounded-lg shadow-lg shadow-gray-300 relative z-[15]
                 before:content-[''] hover:before:bg-[#d0d3d3] before:absolute before:top-0 before:left-0 before:w-0 hover:before:w-full 
                 before:h-full before:-z-10 before:duration-500 before:rounded-lg">
                    <Cards 
                key={index}
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