import { useState } from "react"
import {VscChevronLeft,VscChevronRight} from "react-icons/vsc"
import {AiOutlineGithub} from "react-icons/ai"
import {GoVideo} from "react-icons/go"
function CardProject({skills,description,title,array,link}) {
     const arrayImg = array
    const [position,setPosition]= useState(0)
    const next = ()=>{
        if (position==arrayImg.length-1) {
            setPosition(arrayImg.length-1)
        }else{
            setPosition(position+1)
        }
    }
    const prev = ()=>{
        if (position!=0) {
            setPosition(position-1)
        }else{
            setPosition(0)
        }
    }
    
    return (
        <figure className="flex flex-col w-[90%] h-[500px] flex-wrap justify-center md:max-w-[400px] items-center justify-self-center relative">
            
            <div className="w-[100%] h-[200px] overflow-hidden relative duration-300 ease-linear flex">
                <figure style={{transform:`translateX(-${position * 100/arrayImg.length}%)`,width:`calc(${arrayImg.length * 100}%)`}} className={`ease-linear flex
                 h-full absolute left-0 top-0 duration-300 rounded-xl gap-x-[5px]`}>
                {
                    arrayImg.map((img,i)=>
                        <img key={i} src={`../../img/ProjectImages/${img}`} className="w-full h-full rounded-xl "/>
                    )
                }
                </figure>
                <div className="absolute flex justify-center items-center w-full gap-x-[75%] top-[50%] translate-y-[-50%] z-10 ">
                <VscChevronLeft className={`opacity-0 duration-300  hover:opacity-100 w-[36px] h-[36px] text-black/70`} onClick={prev}/>
                <VscChevronRight className={`opacity-0 duration-300  hover:opacity-100 w-[36px] h-[36px] text-black/70`} onClick={next}/>
            </div>
            </div>
            <div className="flex flex-col gap-y-[10px] mt-[10px]  bg-cyan-700/40 text-white p-3 ">
                <h1 className="text-center font-nunito text-2xl">{title}</h1>
                <p className="text-center font-nunito text-sm">
                    {description}</p>
            </div>
            <span className="bg-cyan-900/70 relative z-10 text-cyan-400  p-3 font-poppins text-sm">Tecnologias Utilizadas: <strong className="text-xs font-medium text-white">
                {skills}
                </strong>
            </span>
            <span className="flex w-full  h-[40px]">
                <div className="flex p-1 gap-x-[5px] items-center justify-center bg-cyan-900 hover:bg-black/80 duration-200 w-[50%] rounded-bl-xl relative">
                    <a href={`${link}`} target="_blank" className="flex  items-center gap-x-[5px] p-1">
                    <AiOutlineGithub size={30} className=" text-white"/>
                    <span className="text-white text-xs font-nunito ">Repositorio</span>
                    </a>
                </div>
                <div className="flex p-1 gap-x-[5px] justify-center items-center w-[50%] bg-white hover:bg-gray-200 duration-200 rounded-br-xl relative">
                <a href="#" target="_blank" className="flex  items-center gap-x-[5px] p-1">
                <GoVideo size={30}/>
                <span className="text-xs font-nunito capitalize">Ver Demo</span>
                </a>
                </div>
            </span>
        </figure>
    )
}
export default CardProject