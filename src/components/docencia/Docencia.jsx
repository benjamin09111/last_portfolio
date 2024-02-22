import { useState } from 'react'
import Comments from "./Comments";
import Udp from "./Udp"
import Algorith from './Algorith';
import "./docencia.css"

const Docencia = () => {
    const [docencia, setDocencia] = useState("UDP");
    return (
        <section id="docencia" className="md:bg-gray-950 md:border md:border-gray-800 md:mx-48 md:py-12 md:rounded-3xl flex flex-col justify-center items-center gap-4 mb-4">
            <div className="md:flex md:flex-col md:items-start docencia__content1 md:docencia__content2">
                <h4 className="title_section text-3xl text-center">Área Docencia</h4>
                <div className='flex flex-col flex-wrap md:flex-row gap-4 justify-center items-center mt-4'>
                    <div className={`${docencia === "UDP" ? "clicked" : "button"} cursor-pointer rounded flex gap-2 items-center justify-center pr-2`}>
                        <button className='py-2 pl-2' type='button' onClick={() => setDocencia("UDP")}>Universidad Diego Portales</button>
                        <span onClick={() => setDocencia("UDP")} className={`${docencia === "UDP" ? "icon-[basil--checked-box-outline]" : "icon-[fluent--checkbox-unchecked-20-regular]"} text-xl`}></span>
                    </div>
                    <div className={`${docencia === "Algorithmics" ? "clicked" : "button"} cursor-pointer rounded flex gap-2 items-center justify-center pr-2`}>
                        <button className='py-2 pl-2' type='button' onClick={() => setDocencia("Algorithmics")}>Algorithmics</button>
                        <span onClick={() => setDocencia("Algorithmics")} className={`${docencia === "Algorithmics" ? "icon-[basil--checked-box-outline]" : "icon-[fluent--checkbox-unchecked-20-regular]"} text-xl`}></span>
                    </div>

                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-full px-16 py-6'>
            {
                docencia === "UDP" && (
                    <Udp />
                )
            }
            {
                docencia === "Algorithmics" && (
                    <Algorith />
                )
            }
            </div>
            <Comments />
        </section>
    )
}

export default Docencia

/*
---
import Comments from "./Comments.astro";
import "./docencia.css"
---

<section id="docencia" className="md:bg-gray-950 md:border md:border-gray-800 md:mx-48 md:py-12 md:rounded-3xl flex flex-col px-8 justify-center items-center gap-4 mb-4">
    <div className="md:w-2/3 md:flex md:flex-col md:items-start docencia__content1 md:docencia__content2">
        <h4 className="title_section text-3xl">Área Docencia</h4>
        <p className="text-md">-Universidad Diego Portales-</p>
        <p className="subtitle_section mt-4">Profesor Auxiliar de Programación en C++ desde 2022 y Desarrollo Web 2023. Accede a una encuesta personal: </p>
        <div className="flex justify-center pt-4">
            <a target="_blank" className="docencia__button p-2 text-white rounded" href="https://docs.google.com/forms/d/1PxrCq5QbpPsFgkm30j5AmWOGgd1spFty2ZxCUvSFpqE/viewanalytics">Ver Encuesta</a>
        </div>
    </div>
    <div className="flex items-center justify-center">
        <img className="w-72" src="/docencia_img.svg" alt="docencia img">
    </div>
    <div>
        <p className="text-white mt-4 text-right">-- Ramos enseñados --</p>
        <div className="flex justify-end items-center pt-4 gap-2 flex-wrap">
            <p className="p-2 rounded border border-gray-800 docencia__ramos bg-gray-900">Redes de Datos</p>
            <p className="p-2 rounded border border-gray-800 docencia__ramos bg-gray-900">Desarrollo Web</p>
            <p className="p-2 rounded border border-gray-800 docencia__ramos bg-gray-900">Programación C++</p>
            <p className="p-2 rounded border border-gray-800 docencia__ramos bg-gray-900">Estructura de Datos</p>
        </div>
    </div>
    <Comments />
</section>
*/
