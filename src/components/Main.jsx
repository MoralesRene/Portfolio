import React from "react";


function Main() {
    return(
        <section id="Main" style={{backgroundImage: "linear-gradient(135deg,#1c3e49 60%,#06B6D4 60%)"}} 
        className={`pt-[50px] pb-0 w-full h-screen xs:h-full xs:py-[65px] landscape:h-full landscape:pb-[30px] object-cover
         bg-[#1c3e49] object-center flex justify-center gap-y-[20px] flex-col items-center relative z-10 `}>
            <h1 className=" text-2xl text-white font-poppins font-bold">Bienvenido</h1>
            <div className="flex w-[90%] h-[300px]">
                <img src="../../img/hand-coding.svg" alt="" />
            </div>
            <div className="flex justify-center items-center flex-col w-[80%] flex-wrap bg-cyan-900 p-2 rounded-lg">
                <span className=" text-white text-center text-xl font-poppins font-bold">
                    <span className="w-full flex flex-col ">Hola,</span>mi nombre es Rene Morales</span>
                <span className=" text-white text-center text-xl font-poppins font-bold">
                    <span className=" text-cyan-600 capitalize">Desarrollador </span>Back-end</span>
                <a href="../../public/documents/ReneMorales-CV.pdf" download={"ReneMorales-CV.pdf"} 
                className="text-white p-[20px] bg-cyan-600 relative w-[130px] h-[30px]" 
                style={{transform:"skew(22deg)"}}><span className="absolute top-[9px] left-[16px] w-[100px] font-nunito" 
                style={{transform:"skew(-22deg"}}>Descargar CV</span></a>
            </div>
        </section>
    )
}
export default Main