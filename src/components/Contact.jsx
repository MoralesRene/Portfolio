import {VscSend} from "react-icons/vsc"
function Contact() {
    return (
        <footer id="Contact" className="flex flex-col justify-center gap-y-[20px] items-center w-full  bg-cyan-500 pt-[50px]  pb-[25px]">
            <h1  className="text-white text-2xl font-poppins font-bold tracking-wide py-[5px]" ><span className="text-cyan-900 ">Contac</span>tame</h1>
            <form action="https://getform.io/f/f6f511a9-6f65-4cb9-ab95-8fbba4e49ec1" encType="multipart/form-data" method="POST" className="rounded-xl px-2 py-[20px]  flex flex-col gap-y-[20px] justify-center 
             bg-cyan-800/70 w-[90%] text-white md:w-[600px] lg:max-w-[800px]">
                <label htmlFor="name" className="w-[80%] self-center text-xl capitalize">Nombre</label>
                <input type="text" placeholder="Nombre"  id="name" name="name"
                className=" self-center indent-1 w-[80%] border-t-0 border-l-0 border-r-0 border-b-[3px] outline-none
                 border-cyan-500 bg-transparent placeholder:text-white/50 hover:placeholder:text-white"/>
                <label htmlFor="numberPhone" className="w-[80%] self-center text-xl capitalize">Telefono</label>
                <input type="number" placeholder="telefono"  id="numberPhone"  name="phone"
                className=" self-center indent-1 w-[80%] border-t-0 border-l-0 border-r-0 border-b-[3px] outline-none
                 border-cyan-500 bg-transparent placeholder:text-white/50 hover:placeholder:text-white"/>
                <label htmlFor="email" className=" w-[80%] self-center text-xl capitalize">Correo</label>
                <input type="email"  placeholder="email@example.com" id="email" name="email"
                className=" self-center indent-1 w-[80%] border-t-0 border-l-0 border-r-0 border-b-[3px] outline-none bg-transparent
                 border-cyan-500  placeholder:text-white/50 hover:placeholder:text-white"/>
                <label htmlFor="Asunto" className="w-[80%] self-center text-xl capitalize">Asunto</label>
                <input type="text" placeholder="" id="Asunto" name="subject"
                className="self-center indent-1 w-[80%] border-t-0 border-l-0 border-r-0 border-b-[3px] outline-none
                 border-cyan-500 bg-transparent placeholder:text-white/50 hover:placeholder:text-white"/>
                <label htmlFor="message" className="w-[80%] self-center text-xl capitalize">Mensaje</label>
                <textarea name="message" id="message" cols="30" rows="5" placeholder="Escriba su mensaje" 
                className="w-[80%] self-center border-t-[3px] border-l-[3px] border-r-[3px] border-b-[3px] outline-none text-black
                 border-cyan-500 bg-white placeholder:text-black/50 hover:placeholder:text-black"></textarea>
                 <button type="submit" className="gap-x-[5px] items-center flex w-[80%] py-[8px] self-center justify-center bg-cyan-500 hover:bg-cyan-800 duration-200">
                <span className="font-poppins text-base  font-bold tracking-widest">Enviar</span>
                <VscSend />
                 </button>
            </form>
        </footer>
    )
}
export default Contact