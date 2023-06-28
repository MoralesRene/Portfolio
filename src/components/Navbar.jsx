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
      <div className="h-[50px] bg-cyan-500 fixed top-0 right-0 w-full z-[99] flex flex-row-reverse md:hidden"><FaBars className={`text-3xl/8 fixed top-3 right-3 z-[99] text-white`} onClick={handleNav} /></div>
      
      <div className={`absolute ${  nav ? "-left-0" : "-left-full" } duration-[500ms]`}>
             <div  className={`fixed top-0 w-full h-screen flex flex-col items-center justify-center gap-y-3 bg-cyan-700/50 z-20 transition duration-300`}>
        
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
      <div className=" md:block hidden">
      <div className=" fixed top-[35%] transform-y[-35%] ml-5 flex flex-col gap-y-2">
        <a href="#Main" className="p-[10px] bg-gray-100 hover:bg-black hover:text-white shadow-lg shadow-gray-300 rounded-full transition ease-in 300 hover:scale-110 ">
      <AiOutlineHome size={30} />
        </a>
        <a href="#AboutMe" className="p-[10px] bg-gray-100  hover:bg-black hover:text-white shadow-lg shadow-gray-300 rounded-full transition ease-in 300 hover:scale-110  ">
      <BsPerson size={30} />
        </a>
        <a href="#Skills" className="p-[10px] bg-gray-100  hover:bg-black hover:text-white shadow-lg shadow-gray-300 rounded-full transition ease-in 300 hover:scale-110  ">
      <GoStack size={30} />
        </a>
        <a href="#Projects" className="p-[10px] bg-gray-100 hover:bg-black hover:text-white shadow-lg shadow-gray-300 rounded-full transition ease-in 300 hover:scale-110  ">
      <AiOutlineFolderOpen size={30}/>
        </a>
        <a href="#Contact" className="p-[10px] bg-gray-100  hover:bg-black hover:text-white shadow-lg shadow-gray-300 rounded-full transition ease-in 300 hover:scale-110  ">
      <FaRegEnvelope size={30} />
        </a>
      </div>
      </div>
    </nav>

    )
}
export default Navbar
