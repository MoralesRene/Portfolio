function Cards({name,url,index}) {
    return (
        <figure className="flex  w-[90%] h-[150px] justify-evenly items-center">
            <div className="w-[50%] h-full flex justify-center items-center">
            <img src={`${url}`} className=" p-[5px] h-auto w-full"/>
            </div>
            <h2 className=" font-nunito text-xl capitalize w-[100px] text-center">{name}</h2>
        </figure>
    )
}
export default Cards