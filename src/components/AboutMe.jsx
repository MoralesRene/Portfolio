import React from "react";

function AboutMe() {
    return (
        <div className="flex justify-center bg-[#cdcdcd] ">
            <section id="AboutMe" className="bg-[#cdcdcd] flex flex-col items-center gap-y-[10px] py-[50px] max-w-[1000px]">
            <h1  className=" text-white text-center text-2xl font-poppins font-bold"><span className=" text-cyan-600 capitalize">Sobre</span> Mi</h1>
            <div  className="flex flex-col items-center gap-y-[10px] md:flex-row gap-x-[20px] w-[90%] md:flex-wrap md:px-[20px] md:h-[300px]">
            <div className=" flex justify-center items-center w-[90%] h-[300px] rounded-full md:w-[45%]">
                <img src="../../img/perfil.png" alt="" className="w-[250px] h-full object-cover  rounded-full bg-white/50 p-2 brightness-75 hover:brightness-100 duration-300" />
                </div>
            <div className="w-[90%] mx-auto text-center p-[7px] rounded-lg bg-white/50 md:w-[45%] h-full flex justify-center items-center">
            <span className=" text-center text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis praesentium 
                perspiciatis sed fugit iusto aliquid dolores repudiandae mollitia, voluptatem enim.
                 Reiciendis accusantium odit facere placeat possimus nobis doloremque, corrupti est!</span>
            </div>
        </div>
        </section>
        </div>
    )
}
export default AboutMe