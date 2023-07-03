import React from "react";

function AboutMe() {
    return (
        <section id="AboutMe" className="bg-[#cdcdcd] flex flex-col items-center gap-y-[10px] py-[50px]">
            <h1  className=" text-white text-center text-2xl font-poppins font-bold"><span className=" text-cyan-600 capitalize">Sobre</span> Mi</h1>
            <div className=" flex justify-center items-center w-[90%] h-[300px] rounded-full">
                <img src="../../img/perfil.png" alt="" className="w-[250px] h-full object-cover  rounded-full bg-white/50 p-2 brightness-75 hover:brightness-100 duration-300" />
                </div>
            <div className="w-[90%] mx-auto text-center p-[7px] rounded-lg bg-white/50">
            <span className=" text-center text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis praesentium perspiciatis sed fugit iusto aliquid dolores repudiandae mollitia, voluptatem enim. Reiciendis accusantium odit facere placeat possimus nobis doloremque, corrupti est!</span>
            </div>
        </section>
    )
}
export default AboutMe