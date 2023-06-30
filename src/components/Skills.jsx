import Cards from "./Cards"
function Skills() {
    const skills = [
        {
            name:"nodeJS",
            url:"../../img/node-js-logo.png"
        },
        {
            name:"express",
            url:"../../img/expressjs-logo.png"
        },
        {
            name:"sequelize",
            url:"../../img/sequelize-logo.png"
        },
        {
            name:"mySQL",
            url:"../../img/MySQL-Logo.png"
        },
        {
            name:"html",
            url:"../../img/html-logo.png"
        },
        {
            name:"css",
            url:"../../img/css-logo.png"
        },
        {
            name:"javascript",
            url:"../../img/javascript-logo.png"
        },
        {
            name:"react",
            url:"../../img/reactjs-logo.png"
        },
        {
            name:"tailwind",
            url:"../../img/Tailwind-logo.png"
        },
        {
            name:"vs code",
            url:"../../img/visual-studio-code-logo.png"
        },
        {
            name:"git",
            url:"../../img/Git-logo.png"
        },
    ]
    return (
        <section id="Skills" className=" grid grid-cols-1 justify-items-center gap-y-[10px] py-[45px]">
            <h1 className="text-2xl font-nunito font-bold tracking-wider"><span className="text-cyan-700">Apti</span>tudes</h1>
        {
            skills.map((skill,index) => 
                <div className="flex flex-row justify-around bg-[#f5f5f5] w-[80%] p-2 rounded-lg shadow-lg shadow-gray-300 relative z-[15] before:content-[''] hover:before:bg-[#d0d3d3] before:absolute before:top-0 before:left-0 before:w-0 hover:before:w-full before:h-full before:-z-10 before:duration-500 before:rounded-lg">
                    <Cards 
                key={index}
                name={skill.name}
                url={skill.url}
                />
                </div>
            )
        }
        </section>
    )
}
export default Skills