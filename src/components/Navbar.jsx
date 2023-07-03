import { useEffect, useState } from "react"
import {FaBars,FaRegEnvelope} from "react-icons/fa"
import {BsPerson} from "react-icons/bs"
import {AiOutlineHome,AiOutlineFolderOpen} from "react-icons/ai"
import {GoStack} from "react-icons/go"
function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = ()=>{
        setNav(!nav);
    }
    
    return (
        <nav className="relative">
      <div className="h-[50px] bg-cyan-500 fixed top-0 right-0 w-full z-[99] flex md:hidden items-center"><span className="text-white text-xl font-poppins px-2 w-full word-spacing">Rene Morales</span><FaBars className={`text-3xl/8 fixed top-3 right-3 z-[99] text-white`} onClick={handleNav} /></div>
      
      <div className={`absolute ${  nav ? "-left-0" : "-left-full" } duration-[500ms] md:hidden`}>
             <div  className={`fixed landscape:pt-[50px] top-0 w-full h-screen flex flex-col items-center justify-center gap-y-3 bg-cyan-700/50 z-20 transition duration-300`}>
        
               <div className="flex w-full justify-center items-center relative h-[40px]">
               <a href="#Main" onClick={handleNav} className={`duration-500 absolute top-0 ${nav? "left-[50%] translate-x-[-50%]" : "-left-full"} flex flex-row gap-x-3 rounded-full shadow-xl bg-cyan-500/90 hover:bg-cyan-700/90 p-[8px] justify-center items-center  w-[80%] text-white `}>
                <AiOutlineHome className=" text-xl/8"/><span>Inicio</span>
                </a>
               </div>
               <div className="flex w-full justify-center items-center relative h-[40px]">
                <a  href="#AboutMe" onClick={handleNav} className={`duration-[600ms] absolute top-0 ${nav? "left-[50%] translate-x-[-50%]" : "-left-full"} flex flex-row gap-x-3 rounded-full shadow-xl bg-cyan-500/90 hover:bg-cyan-700/90 p-[8px] justify-center items-center  w-[80%] text-white `}>
                <BsPerson className=" text-xl/8"/><span>Sobre Mi</span>
                </a>
                </div>
                <div className="flex w-full justify-center items-center relative h-[40px]">
                <a  href="#Skills" onClick={handleNav} className={`duration-700 absolute top-0 ${nav? "left-[50%] translate-x-[-50%]" : "-left-full"} flex flex-row gap-x-3 rounded-full shadow-xl bg-cyan-500/90 hover:bg-cyan-700/90 p-[8px] justify-center items-center  w-[80%] text-white `}>
                <GoStack className=" text-xl/8"/><span>Aptitudes</span>
                </a>
                </div>
                <div className="flex w-full justify-center items-center relative h-[40px]">
                <a  href="#Projects" onClick={handleNav} className={`duration-[800ms] absolute top-0 ${nav? "left-[50%] translate-x-[-50%]" : "-left-full"} flex flex-row gap-x-3 rounded-full shadow-xl bg-cyan-500/90 hover:bg-cyan-700/90 p-[8px] justify-center items-center  w-[80%] text-white `}>
                <AiOutlineFolderOpen className=" text-xl/8"/><span>Mis Proyectos</span>
                </a>
                </div>
                <div className="flex w-full justify-center items-center relative h-[40px]">
                <a  href="#Contact" onClick={handleNav} className={`duration-[850ms] absolute top-0 ${nav? "left-[50%] translate-x-[-50%]" : "-left-full"} flex flex-row gap-x-3 rounded-full shadow-xl bg-cyan-500/90 hover:bg-cyan-700/90 p-[8px] justify-center items-center  w-[80%] text-white `}>
                <FaRegEnvelope className=" text-xl/8"/><span>Contacto</span>
                </a>
                </div>
           </div>
          </div>
          <div className="h-[50px] bg-cyan-500 fixed top-0 right-0 w-full z-[99] flex items-center"><span className="text-white text-xl font-poppins px-2 w-full word-spacing">Rene Morales</span><FaBars className={`text-3xl/8 fixed top-3 right-3 z-[99] text-white`} onClick={handleNav} /></div>
      <div className=" md:block hidden relative z-[15]">
      <div className={`fixed top-[35%] transform-y[-35%] ml-5 flex flex-col gap-y-2 duration-300 ${nav? "left-0" : "-left-[200px] md:delay-500 lg:delay-0"}`}>
        <a href="#Main" onClick={handleNav} className={`p-[15px] bg-gray-100   rounded-full transition ease-in 300 relative z-[15] 
        after:absolute after:duration-300 after:w-[0px] after:hover:w-[54px] after:h-0 after:hover:h-[54px] after:z-20 
        after:bg-transparent after:flex after:left-[50%] after:top-[50%] after:translate-y-[-50%] after:translate-x-[-50%] 
        after:rounded-full  after:border-solid after:border-[2px] after:border-transparent after:hover:border-cyan-500
        before:duration-200 before:hover:delay-200 before:z-15 before:bg-black/50 before:text-white before:hover:px-1 
        before:uppercase before:text-xs before:hover:py-[5px] before:hover:ml-1 before:flex before:top-[50%] before:translate-y-[-50%] 
        before:left-full hover:before:opacity-100 before:opacity-0 before:content-['Inicio'] before:absolute`}>
      <AiOutlineHome size={30} />
        </a>
        <a href="#AboutMe" onClick={handleNav} className={`p-[15px] bg-gray-100   rounded-full transition ease-in 300 relative z-[15] 
        after:absolute after:duration-300 after:w-[0px] after:hover:w-[54px] after:h-0 after:hover:h-[54px] after:z-20 
        after:bg-transparent after:flex after:left-[50%] after:top-[50%] after:translate-y-[-50%] after:translate-x-[-50%] 
        after:rounded-full  after:border-solid after:border-[2px] after:border-transparent after:hover:border-cyan-500
        before:duration-200 before:hover:delay-200 before:z-15 before:bg-black/50 before:text-white before:hover:px-1 
        before:uppercase before:text-xs before:hover:py-[5px] before:hover:ml-1 before:flex before:top-[50%] before:translate-y-[-50%] 
        before:left-full hover:before:opacity-100 before:opacity-0 before:content-['Sobre_mi'] before:absolute`}>
      <BsPerson size={30} />
        </a>
        <a href="#Skills" onClick={handleNav} className={`p-[15px] bg-gray-100   rounded-full transition ease-in 300 relative z-[15] 
        after:absolute after:duration-300 after:w-[0px] after:hover:w-[54px] after:h-0 after:hover:h-[54px] after:z-20 
        after:bg-transparent after:flex after:left-[50%] after:top-[50%] after:translate-y-[-50%] after:translate-x-[-50%] 
        after:rounded-full  after:border-solid after:border-[2px] after:border-transparent after:hover:border-cyan-500
        before:duration-200 before:hover:delay-200 before:z-15 before:bg-black/50 before:text-white before:hover:px-1 
        before:uppercase before:text-xs before:hover:py-[5px] before:hover:ml-1 before:flex before:top-[50%] before:translate-y-[-50%] 
        before:left-full hover:before:opacity-100 before:opacity-0 before:content-['Aptitudes'] before:absolute`}>
      <GoStack size={30} />
        </a>
        <a href="#Projects" onClick={handleNav} className={`p-[15px] bg-gray-100   rounded-full transition ease-in 300 relative z-[15] 
        after:absolute after:duration-300 after:w-[0px] after:hover:w-[54px] after:h-0 after:hover:h-[54px] after:z-20 
        after:bg-transparent after:flex after:left-[50%] after:top-[50%] after:translate-y-[-50%] after:translate-x-[-50%] 
        after:rounded-full  after:border-solid after:border-[2px] after:border-transparent after:hover:border-cyan-500
        before:duration-200 before:hover:delay-200 before:z-15 before:bg-black/50 before:text-white before:hover:px-1 
        before:uppercase before:text-xs before:hover:py-[5px] before:hover:ml-1 before:flex before:top-[50%] before:translate-y-[-50%] 
        before:left-full hover:before:opacity-100 before:opacity-0 before:content-['Mis_Proyectos'] before:absolute`}>
      <AiOutlineFolderOpen size={30}/>
        </a>
        <a href="#Contact" onClick={handleNav} className={`p-[15px] bg-gray-100   rounded-full transition ease-in 300 relative z-[15] 
        after:absolute after:duration-300 after:w-[0px] after:hover:w-[54px] after:h-0 after:hover:h-[54px] after:z-20 
        after:bg-transparent after:flex after:left-[50%] after:top-[50%] after:translate-y-[-50%] after:translate-x-[-50%] 
        after:rounded-full  after:border-solid after:border-[2px] after:border-transparent after:hover:border-cyan-500
        before:duration-200 before:hover:delay-200 before:z-15 before:bg-black/50 before:text-white before:hover:px-1 
        before:uppercase before:text-xs before:hover:py-[5px] before:hover:ml-1 before:flex before:top-[50%] before:translate-y-[-50%] 
        before:left-full hover:before:opacity-100 before:opacity-0 before:content-['Contactame']  before:absolute`}>
      <FaRegEnvelope size={30} />
        </a>
      </div>
      </div>
    </nav>

    )
}
export default Navbar
