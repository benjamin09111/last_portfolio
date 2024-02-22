const Udp = () => {
    return (
        <div className="">
            <div className='md:flex md:flex-col mb-4 md:items-start items-center w-full'>
                <div className='md:w-2/3'>
                    <p className="text-md text-white">-Universidad Diego Portales-</p>
                    <p className="subtitle_section mt-4">Profesor Auxiliar de Programación en C++ desde 2022 y Desarrollo Web 2023. Accede a una encuesta personal: </p>
                </div>
                <div className="flex justify-center pt-4">
                    <a target="_blank" className="docencia__button p-2 text-white rounded" href="https://docs.google.com/forms/d/1PxrCq5QbpPsFgkm30j5AmWOGgd1spFty2ZxCUvSFpqE/viewanalytics">Ver Encuesta</a>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img className="w-72" src="/docencia_img2.svg" alt="docencia img" />
            </div>
            <div>
                <p className="text-white mt-4 text-center md:text-right ">-- Ramos enseñados --</p>
                <div className="flex justify-start md:justify-end items-center pt-4 gap-2 flex-wrap">
                    <p className="p-2 rounded border border-gray-800 docencia__ramos bg-gray-900">Redes de Datos</p>
                    <p className="p-2 rounded border border-gray-800 docencia__ramos bg-gray-900">Desarrollo Web</p>
                    <p className="p-2 rounded border border-gray-800 docencia__ramos bg-gray-900">Programación C++</p>
                    <p className="p-2 rounded border border-gray-800 docencia__ramos bg-gray-900">Estructura de Datos</p>
                </div>
            </div>
        </div>
    )
}

export default Udp
