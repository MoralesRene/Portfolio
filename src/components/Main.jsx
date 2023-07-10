import React from "react";
function Main() {
    return(
        <section id="Main" style={{backgroundImage: "linear-gradient(135deg,#1c3e49 60%,#06B6D4 60%)"}} 
        className={`pt-[60px] pb-[5px] w-full h-screen  xs:py-[65px] sm:landscape:h-full lg:landscape:h-screen landscape:pb-[30px] object-cover
         bg-[#1c3e49] object-center flex justify-center gap-y-[10px] flex-col items-center relative z-10 lg:h-screen`}>
            <h1 className=" text-2xl text-white lg:text-3xl font-poppins font-bold">Bienvenido</h1>
            <div className="flex w-[90%] h-[300px] lg:h-[400px] xl:h-[500px]">
                <img src="../../img/hand-coding.svg" alt="" />
            </div>
            <div className="flex justify-center items-center flex-col w-[80%] flex-wrap bg-cyan-900 p-2 gap-y-[10px] md:w-[50%] max-w-[400px] md:p-[20px] rounded-lg">
                <span className=" text-white text-center text-base lg:text-xl font-poppins font-bold">
                    <span className="w-full flex flex-col ">Hola</span>mi nombre es Rene Morales</span>
                <span className=" text-white text-center text-base lg:text-xl font-poppins font-bold">
                    <span className=" text-cyan-600 capitalize">Desarrollador </span>Full Stack JR</span>
                <a href="../../public/documents/ReneMorales-CV.pdf" download={"ReneMorales-CV.pdf"} 
                className="text-white p-[20px] bg-cyan-600 relative w-[130px] h-[30px] before:absolute before:bg-cyan-800 before:flex before:hover:w-full before:w-0 before:duration-300 before:h-full before:top-0 before:left-0" 
                style={{transform:"skew(22deg)"}}><span className="absolute top-[9px] left-[16px] w-[100px] font-nunito" 
                style={{transform:"skew(-22deg"}}>Descargar CV</span></a>
            </div>
        </section>
    )
}
export default Main