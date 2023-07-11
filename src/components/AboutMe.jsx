import React from "react";

function AboutMe() {
    return (
        <div className="flex justify-center border-solid border-[#06B6D4] bg-[#1c3e49] border-t py-[30px]">
            <section id="AboutMe" className="   flex flex-col items-center gap-y-[10px] py-[50px] max-w-[1000px] md:h-auto">
            <h1  className=" text-white text-center text-[22px] font-poppins font-bold"><span className=" text-cyan-500 capitalize">Sobre</span> Mi</h1>
            <div  className="flex flex-col justify-center items-center gap-y-[10px]  md:flex-row gap-x-[20px] w-[90%] md:flex-wrap md:px-[20px] ">
            <div className=" flex justify-center items-center w-[90%] h-[300px] rounded-full md:w-[45%]">
                <img src="../../img/perfil.png" alt="" className="w-[250px] h-full object-cover  rounded-full bg-white/50 p-2 brightness-75 hover:brightness-100 duration-300" />
                </div>
                <h2 className="text-[26px] md:text-[30px] text-cyan-500 font-poppins tracking-tight -order-1 text-center">Desarrollador Web Full Stack JR</h2>
            <div className="w-[90%] mx-auto text-center p-[7px] rounded-lg bg-white/20 md:w-[45%] h-full md:h-auto flex justify-center items-center">
            <span className=" text-center text-white text-base md:text-lg font-nunito tracking-tight">
                Hace casi un año me propuse la meta de poder ingresar al mundo IT. En ese momento no sabia que habia muchas ramas, por lo cual empece en la 
                mas conocida, el desarrollo Web. Ahora ya con el primer paso dado, y teniendo un poco mas de conocimiento, quiero especializarme en las areas:
                <strong className="font-bold font-poppins text-lg text-cyan-500 uppercase"> front-end</strong> y 
                <strong className="font-bold font-poppins text-lg text-cyan-500 uppercase"> Back-end</strong> ya que ambas son de mi interes. Se que sera un camino aun mas dificil que elegir solo un area, pero se tambien
                que todo el esfuerzo que le ponga valdra la pena.</span>
            </div>
        </div>
        </section>
        </div>
    )
}
export default AboutMe