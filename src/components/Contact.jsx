function Contact() {
    return (
        <footer className="flex flex-col justify-center gap-y-[20px] items-center w-full  bg-cyan-500 pt-[20px] pb-[25px]">
            <h1 id="Contact" className="text-white text-2xl font-nunito font-bold tracking-wide py-[5px]" ><span className="text-cyan-900 ">Contac</span>tame</h1>
            <form action="" method="POST" className="rounded-xl px-2 py-[20px]  flex flex-col gap-y-[20px] justify-center  bg-cyan-800/70 w-[90%] text-white">
                <label htmlFor="name" className="w-[80%] self-center text-xl capitalize">Nombre</label>
                <input type="text" placeholder="Nombre"  id="name" 
                className=" self-center indent-1 w-[80%] border-t-0 border-l-0 border-r-0 border-b-[3px] outline-none
                 border-cyan-500 bg-transparent placeholder:text-white/50 hover:placeholder:text-white"/>
                <label htmlFor="lastName" className="w-[80%] self-center text-xl capitalize">Apellido</label>
                <input type="text" placeholder="Apellido"  id="lastName" 
                className=" self-center indent-1 w-[80%] border-t-0 border-l-0 border-r-0 border-b-[3px] outline-none
                 border-cyan-500 bg-transparent placeholder:text-white/50 hover:placeholder:text-white"/>
                <label htmlFor="number" className=" w-[80%] self-center text-xl capitalize">Telefono</label>
                <input type="number" maxLength={11} placeholder="Telefono" id="number" 
                className=" self-center indent-1 w-[80%] border-t-0 border-l-0 border-r-0 border-b-[3px] outline-none bg-transparent
                 border-cyan-500  placeholder:text-white/50 hover:placeholder:text-white"/>
                <label htmlFor="email" className="w-[80%] self-center text-xl capitalize">Correo</label>
                <input type="email" placeholder="email@example.com" id="email" 
                className="self-center indent-1 w-[80%] border-t-0 border-l-0 border-r-0 border-b-[3px] outline-none
                 border-cyan-500 bg-transparent placeholder:text-white/50 hover:placeholder:text-white"/>
                <label htmlFor="message" className="w-[80%] self-center text-xl capitalize">Mensaje</label>
                <textarea name="" id="message" cols="30" rows="5" placeholder="Escriba su mensaje" 
                className="w-[80%] self-center border-t-[3px] border-l-[3px] border-r-[3px] border-b-[3px] outline-none text-white
                 border-cyan-500 bg-white placeholder:text-black/50 hover:placeholder:text-black"></textarea>
            </form>
        </footer>
    )
}
export default Contact