import {AiFillLinkedin,AiFillGithub,AiOutlineWhatsApp} from "react-icons/ai"
function Networks() {
    return (
        <div className="flex flex-col w-full bg-cyan-900 gap-y-[20px] px-[20px] pb-0 pt-[20px]">
            <h1 className="flex justify-center text-xl font-nunito text-white ">Mis Redes</h1>
            <ul className="flex text-white justify-center gap-x-[15px]">
                <li className="flex flex-col items-center justify-center gap-y-[5px]">
                    <AiFillLinkedin size={35} />
                    <a href="https://www.linkedin.com/in/rene-morales-/" className="font-nunito text-base">Linkedln</a>
                </li>
                <li className="flex flex-col items-center justify-center gap-y-[5px]">
                    <AiFillGithub size={35}/>
                    <a href="https://github.com/MoralesRene?tab=repositories" className="font-nunito text-base">Github</a>
                </li>
                <li className="flex flex-col items-center justify-center gap-y-[5px]">
                    <AiOutlineWhatsApp size={35}/>
                    <a href="#" className="font-nunito text-base">Whatsapp</a>
                </li>
            </ul>
        <span className="text-center text-white">
            ©2023. Developed by ReneMorales.
        </span>
        </div>
    )
}
export default Networks