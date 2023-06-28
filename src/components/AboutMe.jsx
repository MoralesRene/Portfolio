import React from "react";

function AboutMe() {
    return (
        <div className="bg-[#cdcdcd] flex flex-col gap-y-[10px] py-[40px]">
            <h1 id="AboutMe" className=" text-white text-center text-xl font-poppins font-bold"><span className=" text-cyan-600 capitalize">Sobre</span> Mi</h1>
            <div className="w-[90%] mx-auto text-center p-[7px] rounded-lg bg-white/50">
            <span className=" text-center text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis praesentium perspiciatis sed fugit iusto aliquid dolores repudiandae mollitia, voluptatem enim. Reiciendis accusantium odit facere placeat possimus nobis doloremque, corrupti est!</span>
            </div>
        </div>
    )
}
export default AboutMe