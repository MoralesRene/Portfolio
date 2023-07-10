import NetworkList from "./NetworkList"
function Networks() {
    return (
       <section id="Network" className="flex justify-center bg-cyan-900">
         <div className="flex flex-col w-full bg-cyan-900 gap-y-[20px] px-[20px] pb-0 pt-[20px] max-w-[800px]">
            <h1 className="flex justify-center text-xl font-nunito text-white ">Hablame o conectate por:</h1>
            <NetworkList 
            name1={"Linkedln"}
            name2={"Github"}
            name3={"Whatsapp"}
            />
        <span className="text-center text-white">
            ©2023. Developed by ReneMorales.
        </span>
        </div>
       </section>
    )
}
export default Networks