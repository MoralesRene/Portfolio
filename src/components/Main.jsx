import React from "react";
import NetworkList from "./NetworkList";
function Main() {
    return(
        <section id="Main" style={{backgroundImage: "linear-gradient(135deg,#1c3e49 60%,#06B6D4 60%)"}} 
        className={`pt-[60px] pb-[5px] w-full h-screen  xs:py-[65px] sm:landscape:h-full  md:pt-[80px]  landscape:pb-[30px] 
         bg-[#1c3e49] flex justify-center gap-y-[10px] flex-col items-center relative z-10 lg:h-screen`}>
            <h1 className=" text-3xl text-white lg:text-[34px] font-poppins font-bold">Bienvenido</h1>
            <div className="flex justify-center w-[90%] h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px]">
                <img src="../../img/hand-coding.svg" alt="" />
            </div>
            <div className="flex justify-center items-center flex-col w-[80%] flex-wrap bg-cyan-900 p-2 gap-y-[20px] md:w-[50%] max-w-[400px] md:p-[20px] rounded-lg">
                <span className=" text-white text-center text-3xl tracking-tighter font-nunito font-bold">
                    <strong className="w-full flex flex-col text-base tracking-normal font-semibold font-poppins">Hola mi nombre es</strong>Rene Morales</span>
                <NetworkList />
                <a href="../../public/documents/ReneMorales-CV.pdf" download={"ReneMorales-CV.pdf"} 
                className="text-white p-[20px] bg-cyan-600 relative w-[200px] h-[50px] text-xl
                before:absolute before:bg-cyan-800 before:flex before:hover:w-full before:w-0 before:duration-300 before:h-full before:top-0 before:left-0" 
                style={{transform:"skew(22deg)"}}><span className="absolute top-[25%] translate-y-[-50%] left-[20%] translate-x-[-50%] font-nunito" 
                style={{transform:"skew(-22deg"}}>Descargar CV</span></a>
            </div>
        </section>
    )
}
export default Main