const PopUp = ({title, subtitle, description, setPopUp}) => {
    return (
        <>
            <div className="flex text-white h-auto w-9/10 xl:w-1/3 flex-col container gap-2 p-4 rounded bg-gray-800 justify-center items-center">
                <div>
                    <b onClick={()=> setPopUp(false)} className="cursor-pointer">
                        <span class="icon-[lets-icons--close-ring]"></span>
                    </b>
                </div>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>{description}</p>
            </div>
            <div className="overlay"></div>
        </>
    )
}

export default PopUp
