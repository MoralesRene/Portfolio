function Cards({name,url,index}) {
    return (
        <figure className="flex gap-x-1 w-[90%] h-[150px] justify-around items-center">
            <div className="w-[50%] h-full flex justify-center items-center">
            <img src={`${url}`} className="h-auto w-full"/>
            </div>
            <h2 className=" font-nunito text-xl capitalize">{name}</h2>
        </figure>
    )
}
export default Cards