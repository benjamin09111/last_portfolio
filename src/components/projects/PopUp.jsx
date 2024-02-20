const PopUp = ({data}) => {
    return (
        <>
            <div className="flex text-white w-9/10 xl:w-1/3 flex-col container gap-2 p-4 rounded bg-gray-500 justify-center items-center">
                <div className="w-full text-right">
                    <b className="text-2xl text-gray-400 cursor-pointer" onClick={()=> data.setPopUp(false)}>
                        <span className="icon-[lets-icons--close-ring]"></span>
                    </b>
                </div>
                <h2 className="text-2xl title_section">{data.title}</h2>
                <h3 className="text-gray-600">Realizado en {data.date}</h3>
                <p className="p-4 bg-gray-950 rounded-xl text-gray-400">{data.description}</p>
            </div>
            <div className="overlay"></div>
        </>
    )
}

export default PopUp
