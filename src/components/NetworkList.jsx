import {AiFillLinkedin,AiFillGithub,AiOutlineWhatsApp} from "react-icons/ai"
function NetworkList({name1,name2,name3}) {
    return (
        <ul className="flex text-white justify-center gap-x-[15px]">
                <li className="flex flex-col items-center justify-center gap-y-[5px]">
                <a href="https://www.linkedin.com/in/rene-morales-/" target="_blank" className="font-nunito text-base flex justify-center flex-col items-center  justify-items-center">
                    <AiFillLinkedin size={35} />
                    {name1}</a>
                </li>
                <li className="flex flex-col items-center justify-center gap-y-[5px]">
                <a href="https://github.com/MoralesRene" target="_blank" className="font-nunito text-base flex justify-center flex-col items-center  justify-items-center">
                    <AiFillGithub size={35}/>
                    {name2}</a>
                </li>
                <li className="flex flex-col items-center justify-center gap-y-[5px]">
                <a href="https://api.whatsapp.com/send?phone=541122880232&text=Hola%20,te%20escribo%20porque
%20vi%20tu%20portfolio%20y%20me%20interesa%20trabajar%20con%20usted." className="font-nunito text-base flex justify-center flex-col items-center  justify-items-center" target="_blank">
                    <AiOutlineWhatsApp size={35}/>
                   {name3}</a>
                </li>
            </ul>
    )
}
export default NetworkList