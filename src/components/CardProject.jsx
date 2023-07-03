import { useState } from "react"
import {VscChevronLeft,VscChevronRight} from "react-icons/vsc"
function CardProject() {
    const arrayImg=[
        "Default.jpg",
        "Default.jpg",
        "Default.jpg",
        "Default.jpg",
    ] 
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
        <figure className="flex flex-col w-[90%] h-[380px] justify-center items-center justify-self-center relative gap-y-[10px]">
            <div className="absolute flex justify-center items-center w-full gap-x-[80%] top-[20%] translate-y-[20%] z-10 ">
                <VscChevronLeft className={`opacity-0 duration-300  hover:opacity-100 w-[36px] h-[36px] text-black/70`} onClick={prev}/>
                <VscChevronRight className={`opacity-0 duration-300  hover:opacity-100 w-[36px] h-[36px] text-black/70`} onClick={next}/>
            </div>
            <div className="w-[200px] h-full overflow-hidden relative duration-300 ease-linear">
                <figure style={{transform:`translateX(-${position * 100}%)`}} className={`ease-linear flex flex-1 w-[calc(${arrayImg.length * 100}%)] h-full absolute left-0 top-0 duration-300`}>
                {
                    arrayImg.map((img,i)=>
                        <img key={i} src={`../../img/ProjectImages/${img}`} className="w-full h-full"/>
                    )
                }
                </figure>
            </div>
            <div className="flex flex-col gap-y-[10px]  bg-cyan-700/40 text-white p-3 rounded-b-xl rounded-bl-xl">
                <h1 className="text-center font-nunito text-2xl">Titulo Projecto</h1>
                <p className="text-center font-nunito text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ex tenetur facere porro eius. Similique, tempora fugiat distinctio, sit nostrum corrupti dicta quo doloribus possimus sint laudantium nulla laboriosam expedita.</p>
            </div>
        </figure>
    )
}
export default CardProject