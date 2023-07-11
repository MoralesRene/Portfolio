import { useState } from "react"
import {FaBars,FaRegEnvelope} from "react-icons/fa"
import {BsPerson} from "react-icons/bs"
import {AiOutlineHome,AiOutlineFolderOpen} from "react-icons/ai"
import {GoStack} from "react-icons/go"
import { Link } from "react-scroll"
import OptionNav from "./OptionNav"
function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = ()=>{
        setNav(!nav);
    }
    
    return (
        <nav className="relative">
      <div className="h-[60px] bg-cyan-500 fixed top-0 right-0 w-full z-[99] flex items-center lg:hidden">
        <span className="text-white text-xl font-poppins pl-[12px] w-full word-spacing">Rene Morales</span>
        <FaBars className={`text-3xl/8 fixed top-[14px] right-3 z-[99] text-white`} onClick={handleNav} /></div>
      
      <div className={`absolute ${  nav ? "-left-0" : "-left-full" } duration-[500ms] md:hidden`}>
             <div  className={`fixed landscape:pt-[50px] top-0 w-full h-screen flex flex-col items-center justify-center gap-y-3
              bg-cyan-700/50 z-20 transition duration-300`}>
        
               <div className="flex w-full justify-center items-center relative h-[40px]">
               <Link
                activeClass="active"
                to="Main"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600} 
                onClick={handleNav} className={`cursor-pointer duration-500 absolute top-0 ${nav? "left-[50%] translate-x-[-50%]" : "-left-full"}
                flex flex-row gap-x-3 rounded-full shadow-xl bg-cyan-500/90 hover:bg-cyan-700/90 p-[8px] justify-center items-center  w-[80%]
                 text-white `}>
                <AiOutlineHome className=" text-xl/8"/><span>Inicio</span>
                </Link>
               </div>
               <div className="flex w-full justify-center items-center relative h-[40px]">
               <Link
                activeClass="active"
                to="AboutMe"
                spy={true}
                smooth={true}
                offset={-20}
                duration={600}  
                onClick={handleNav} className={`cursor-pointer duration-[600ms] absolute top-0 
                ${nav? "left-[50%] translate-x-[-50%]" : "-left-full"} flex flex-row gap-x-3 rounded-full shadow-xl bg-cyan-500/90
                 hover:bg-cyan-700/90 p-[8px] justify-center items-center  w-[80%] text-white `}>
                <BsPerson className=" text-xl/8"/><span>Sobre Mi</span>
                </Link>
                </div>
                <div className="flex w-full justify-center items-center relative h-[40px]">
                <Link
                activeClass="active"
                to="Skills"
                spy={true}
                smooth={true}
                offset={-20}
                duration={600} 
                 onClick={handleNav} className={`cursor-pointer duration-700 absolute top-0 
                ${nav? "left-[50%] translate-x-[-50%]" : "-left-full"} flex flex-row gap-x-3 rounded-full shadow-xl bg-cyan-500/90
                 hover:bg-cyan-700/90 p-[8px] justify-center items-center  w-[80%] text-white `}>
                <GoStack className=" text-xl/8"/><span>Habilidades</span>
                </Link>
                </div>
                <div className="flex w-full justify-center items-center relative h-[40px]">
                <Link
                activeClass="active"
                to="Projects"
                spy={true}
                smooth={true}
                offset={-20}
                duration={600} 
                 onClick={handleNav} className={`cursor-pointer duration-[800ms] absolute top-0 
                ${nav? "left-[50%] translate-x-[-50%]" : "-left-full"} flex flex-row gap-x-3 rounded-full shadow-xl bg-cyan-500/90
                 hover:bg-cyan-700/90 p-[8px] justify-center items-center  w-[80%] text-white `}>
                <AiOutlineFolderOpen className=" text-xl/8"/><span>Mis Proyectos</span>
                </Link>
                </div>
                <div className="flex w-full justify-center items-center relative h-[40px]">
                <Link
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-10}
                duration={700} 
                 onClick={handleNav} className={`cursor-pointer duration-[850ms] absolute top-0 
                ${nav? "left-[50%] translate-x-[-50%]" : "-left-full"} flex flex-row gap-x-3 rounded-full shadow-xl bg-cyan-500/90
                 hover:bg-cyan-700/90 p-[8px] justify-center items-center  w-[80%] text-white `}>
                <FaRegEnvelope className=" text-xl/8"/><span>Contacto</span>
                </Link>
                </div>
           </div>
          </div>
          
      <div className=" md:block hidden relative z-[20] lg:hidden">
      <div className={` fixed top-[50%] translate-y-[-50%]  landscape:top-[20%]  ml-5 flex flex-col gap-y-2 duration-[400ms] ${nav? "left-0" : "-left-[200px] md:delay-500 lg:delay-0"}`}>
       <div className="relative w-[60px] h-[60px] flex justify-center items-center justify-items-center">
       <Link
        activeClass="active"
        to="Main"
        spy={true}
        smooth={true}
        offset={-70}
        duration={600} 
        onClick={handleNav} className={`cursor-pointer ease-in-out 
        bg-gray-100 p-[15px] rounded-full border-[1px] border-solid border-black/50 duration-300 relative z-[15] 
        after:absolute after:duration-300 after:w-[0px] after:hover:w-[54px] after:h-0 after:hover:h-[54px] after:z-20 
        after:bg-transparent after:flex after:left-[50%] after:top-[50%] after:translate-y-[-50%] after:translate-x-[-50%] 
        after:rounded-full  after:border-solid after:border-[2px] after:border-transparent after:hover:border-cyan-500
        before:duration-200 before:hover:delay-200 before:z-15 before:bg-black/50 before:text-white before:hover:px-1 
        before:uppercase before:text-xs before:hover:py-[5px] before:hover:ml-1 before:flex before:top-[50%] before:translate-y-[-50%] 
        before:left-full hover:before:opacity-100 before:opacity-0 before:content-['Inicio'] before:absolute`}>
      <AiOutlineHome size={30} />
        </Link>
       </div>
       <div className="relative w-[60px] h-[60px] flex justify-center items-center justify-items-center">
       <Link
        activeClass="active"
        to="AboutMe"
        spy={true}
        smooth={true}
        offset={-20}
        duration={600}   onClick={handleNav} className={`cursor-pointer ease-in-out
         p-[15px] bg-gray-100 rounded-full border-[1px] border-solid border-black/50 duration-300 relative z-[15] 
        after:absolute after:duration-300 after:w-[0px] after:hover:w-[54px] after:h-0 after:hover:h-[54px] after:z-20 
        after:bg-transparent after:flex after:left-[50%] after:top-[50%] after:translate-y-[-50%] after:translate-x-[-50%] 
        after:rounded-full  after:border-solid after:border-[2px] after:border-transparent after:hover:border-cyan-500
        before:duration-200 before:hover:delay-200 before:z-15 before:bg-black/50 before:text-white before:hover:px-1 
        before:uppercase before:text-xs before:hover:py-[5px] before:hover:ml-1 before:flex before:top-[50%] before:translate-y-[-50%] 
        before:left-full hover:before:opacity-100 before:opacity-0 before:content-['Sobre_mi'] before:absolute`}>
      <BsPerson size={30} />
        </Link>
        </div>
        <div className="relative w-[60px] h-[60px] flex justify-center items-center justify-items-center">
        <Link
        activeClass="active"
        to="Skills"
        spy={true}
        smooth={true}
        offset={-20}
        duration={600}  
        onClick={handleNav} className={`cursor-pointer ease-in-out 
         p-[15px] bg-gray-100 rounded-full border-[1px] border-solid border-black/50 duration-300 relative z-[15] 
        after:absolute after:duration-300 after:w-[0px] after:hover:w-[54px] after:h-0 after:hover:h-[54px] after:z-20 
        after:bg-transparent after:flex after:left-[50%] after:top-[50%] after:translate-y-[-50%] after:translate-x-[-50%] 
        after:rounded-full  after:border-solid after:border-[2px] after:border-transparent after:hover:border-cyan-500
        before:duration-200 before:hover:delay-200 before:z-15 before:bg-black/50 before:text-white before:hover:px-1 
        before:uppercase before:text-xs before:hover:py-[5px] before:hover:ml-1 before:flex before:top-[50%] before:translate-y-[-50%] 
        before:left-full hover:before:opacity-100 before:opacity-0 before:content-['Habilidades'] before:absolute`}>
      <GoStack size={30} />
        </Link>
        </div>
        <div className="relative w-[60px] h-[60px] flex justify-center items-center justify-items-center">
        <Link
        activeClass="active"
        to="Projects"
        spy={true}
        smooth={true}
        offset={-20}
        duration={600}  
        onClick={handleNav} className={`cursor-pointer ease-in-out 
         p-[15px] bg-gray-100 rounded-full border-[1px] border-solid border-black/50 duration-300 relative z-[15] 
        after:absolute after:duration-300 after:w-[0px] after:hover:w-[54px] after:h-0 after:hover:h-[54px] after:z-20 
        after:bg-transparent after:flex after:left-[50%] after:top-[50%] after:translate-y-[-50%] after:translate-x-[-50%] 
        after:rounded-full  after:border-solid after:border-[2px] after:border-transparent after:hover:border-cyan-500
        before:duration-200 before:hover:delay-200 before:z-15 before:bg-black/50 before:text-white before:hover:px-1 
        before:uppercase before:text-xs before:hover:py-[5px] before:hover:ml-1 before:flex before:top-[50%] before:translate-y-[-50%] 
        before:left-full hover:before:opacity-100 before:opacity-0 before:content-['Mis_Proyectos'] before:absolute`}>
      <AiOutlineFolderOpen size={30}/>
        </Link>
        </div>
        <div className="relative w-[60px] h-[60px] flex justify-center items-center justify-items-center">
        <Link
        activeClass="active"
        to="Contact"
        spy={true}
        smooth={true}
        offset={-20}
        duration={600}  
        onClick={handleNav} className={`cursor-pointer ease-in-out 
         p-[15px] bg-gray-100 rounded-full border-[1px] border-solid border-black/50 duration-300 relative z-[15] 
        after:absolute after:duration-300 after:w-[0px] after:hover:w-[54px] after:h-0 after:hover:h-[54px] after:z-20 
        after:bg-transparent after:flex after:left-[50%] after:top-[50%] after:translate-y-[-50%] after:translate-x-[-50%] 
        after:rounded-full  after:border-solid after:border-[2px] after:border-transparent after:hover:border-cyan-500
        before:duration-200 before:hover:delay-200 before:z-15 before:bg-black/50 before:text-white before:hover:px-1 
        before:uppercase before:text-xs before:hover:py-[5px] before:hover:ml-1 before:flex before:top-[50%] before:translate-y-[-50%] 
        before:left-full hover:before:opacity-100 before:opacity-0 before:content-['Contactame']  before:absolute`}>
      <FaRegEnvelope size={30} />
        </Link>
        </div>
      </div>
      </div>
      <nav className="hidden lg:flex fixed z-[99] w-full bg-cyan-500 text-white justify-between items-center h-[60px] ">
        <span className="text-white text-xl font-poppins pl-[12px] word-spacing xl:pl-[100px]">
          Rene Morales
        </span>
        <ul className="flex pr-[12px] gap-x-[15px] xl:pr-[100px] font-nunito font-bold tracking-wider">
          <OptionNav name={"Inicio"} id={"Main"}/>
          <OptionNav name={"Sobre mi"} id={"AboutMe"}/>
          <OptionNav name={"Habilidades"} id={"Skills"}/>
          <OptionNav name={"Mis proyectos"} id={"Projects"}/>
          <OptionNav name={"Contacto"} id={"Contact"}/>
        </ul>
      </nav>
    </nav>

    )
}
export default Navbar
