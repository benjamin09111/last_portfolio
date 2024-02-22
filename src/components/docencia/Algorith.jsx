const Algorith = () => {
    return (
        <div className="">
            <div className='md:flex md:flex-col mb-4 md:items-start items-center w-full'>
                <div className='md:w-2/3'>
                    <p className="text-md text-white">-Algorithmics-</p>
                    <p className="subtitle_section mt-4">Profesor online certificado por <a target="_blank" href="https://algorithmicschool.com/es" className="font-semibold underline text-md text-white cursor-pointer">Algorithmics</a>, luego de una capacitación. Algorithmics es una empresa que enseña tecnología y programación a niños de máximo 18 años.</p>
                </div>
                {
                    /*
<div className="flex justify-center pt-4">
                    <a target="_blank" className="docencia__button p-2 text-white rounded" href="">Ver Certificado</a>
                </div>
                    */
                }
            </div>
            <div className="flex items-center justify-center">
                <img className="w-72" src="/docencia_img.svg" alt="docencia img" />
            </div>
            <div>
                <p className="text-white mt-4 text-center md:text-right ">-- Lecciones certificadas --</p>
                <div className="flex justify-start md:justify-end items-center pt-4 gap-2 flex-wrap">
                    <p className="p-2 rounded border border-gray-800 docencia__ramos bg-gray-900">Python</p>
                    <p className="p-2 rounded border border-gray-800 docencia__ramos bg-gray-900">Programación básica</p>
                    <p className="p-2 rounded border border-gray-800 docencia__ramos bg-gray-900">Roblox Studio</p>
                    <p className="p-2 rounded border border-gray-800 docencia__ramos bg-gray-900">Diseño gráfico</p>
                </div>
            </div>
        </div>
    )
}

export default Algorith