import {useState} from "react"
import projects from "../../data/projects.json"
import images from "../../data/images.js"
import tools from "../../data/icontool.js"
import PopUp from "./PopUp.jsx"
import "./projects.css"

const olderProyect = {
    "title": "File System C++",
    "subtitle":"Simulación sistema de archivos",
    "description":"Tarea final del curso de sistemas operativos en donde se simula un file system solamente con código C++, mediante una estructura de árbol creada se agregan, eliminan y mueven archivos o carpetas a diferentes rutas creadas.",
    "tools": ["c++"],
    "github":"",
    "youtube":"https://www.youtube.com/watch?v=kdRlOmmDSP0",
    "demo":"",
    "year":"2023",
    "keyword":"Software C++",
    "type":"Universidad"
}

const Projects = () => {
    const [popUp, setPopUp] = useState(false);

    return (
        <section id="proyects" classNameName="flex flex-col px-8 justify-center items-center gap-12 mb-4">
            <div classNameName="md:flex md:w-2/3 md:ml-4 md:justify-end">
                <div className="projects__title flex flex-col items-end ">
                    <h3 className="text-3xl">Proyectos</h3>
                    <p className="text-right">Conoce mis proyectos realizados desde 2022. Se ordenan por fecha de creación.</p>
                </div>
            </div>
            <div className="flex flex-col md:px-24 gap-8 md:w-full md:items-start md:flex-row flex-wrap md:justify-center md:mb-16">
                {projects.map((project, index) => (
                    <article className="h-2 flex bg-gray-950 flex-col border border-gray-900 rounded md:w-96 md:h-auto">
                        {
                            popUp && (
                                <PopUp title={project.title} subtitle={project.subtitle} description={project.description} setPopUp={setPopUp}/>
                            )
                        }
                        <div className="h-8 flex gap-1 items-center justify-end px-4 py-6">
                            {
                                project.important !== "" && (<p className="bg-yellow-600 p-1 rounded text-xs">{project.important}</p>)
                            }
                            <p className="bg-blue-400 p-1 rounded text-xs">{project.keyword}</p>
                            <p className="bg-red-700 p-1 rounded text-xs">{project.type}</p>
                        </div>
                        <div className="bg-cover bg-center flex items-center justify-center w-full h-60"
                        style={{backgroundImage: `url(${images[index]})`}}>
                        </div>
                        <div className="flex flex-col px-1">
                            <div className="flex pl-1 pt-1 pb-1 text-xl">
                                <h4 className="title__proyect">{project.title}</h4>
                            </div>
                            <div className="flex px-1 text-md title__subproyect">
                                <h5>{project.subtitle}</h5>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="flex gap-4 pt-2 pl-1 items-center justify-start w-full text-2xl">
                                    <p className="text-xs">Herramientas</p>
                                    {
                                        project.tools.map(tool => (
                                            <span className={`${tools[tool]}`}>
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="py-4 px-1 text-md text__proyect">
                                {project.description.length > 100 ? (
                                    <div className="flex gap-1 justify-center items-center flex-col">
                                        {project.description.slice(0,100)+"..."}
                                        <b className="outline rounded w-1/2 cursor-pointer text-center" onClick={()=>setPopUp(true)}>
                                            Leer completo
                                        </b>
                                    </div>
                                ) : project.description.slice(0,100)}
                            </div>
                            <div className="flex items-center justify-start gap-2 pl-1">
                                <p className="underline">Acciones: </p>
                                {
                                    project.youtube != "" &&
                                    <a className="text-4xl hover:text-gray-700" target="_blank" href={project.youtube}>
                                        <span className="icon-[mdi--youtube]"></span>
                                    </a>
                                }
                                {
                                    project.github != "" &&
                                    <a className="text-4xl hover:text-gray-700" target="_blank" href={project.github}>
                                        <span classname="icon-[mdi--github]"></span>
                                    </a>
                                }
                                {
                                    project.demo != "" &&
                                    <a className="text-4xl hover:text-gray-700" target="_blank" href={project.demo}>
                                        <span className="icon-[icon-park-outline--upload-web]"></span>
                                    </a>
                                }
                            </div>
                            <div className="flex justify-end pr-4 pb-2">
                                <p className="p-1 bg-gray-900 text-white rounded text-xs">{project.year}</p>
                            </div>
                        </div>
                    </article>
                ))}

                <article className="project__container flex bg-gray-950 flex-col border border-gray-900 rounded md:w-96">
                    <div className="h-8 flex gap-1 items-center justify-end px-4 py-6">
                        <p className="bg-blue-400 p-1 rounded text-xs">{olderProyect.keyword}</p>
                        <p className="bg-red-700 p-1 rounded text-xs">{olderProyect.type}</p>
                    </div>
                    <div className="bg-cover bg-center flex items-center justify-center w-full h-60"
                    style={{backgroundImage: "url(/proyect_4.webp)"}}>
                    </div>
                    <div className="flex flex-col px-1">
                        <div className="flex pl-1 pt-1 pb-1 text-xl">
                            <h4 className="title__proyect">{olderProyect.title}</h4>
                        </div>
                        <div className="flex px-1 text-md title__subproyect">
                            <h5>{olderProyect.subtitle}</h5>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="flex gap-4 pt-2 pl-1 items-center justify-start w-full text-2xl">
                                <p className="text-xs">Herramientas</p>
                                <img className="w-8" src="/logoc.png" alt="c++" />
                            </div>
                        </div>
                        <div className="py-4 px-1 text-md text__proyect">
                                {olderProyect.description.length > 100 ? (
                                    <div className="flex gap-1 justify-center items-center flex-col">
                                        {olderProyect.description.slice(0,100)+"..."}
                                        <b className="outline rounded w-1/2 cursor-pointer text-center" onClick={()=>setPopUp(true)}>
                                            Leer completo
                                        </b>
                                    </div>
                                ) : olderProyect.description.slice(0,100)}
                        </div>
                        <div className="flex items-center justify-start gap-2 pl-1">
                            <p className="underline">Acciones: </p>
                            <a className="text-4xl hover:text-gray-700" target="_blank" href={olderProyect.youtube}>
                                
                            </a>
                        </div>
                        <div className="flex justify-end pr-4 pb-2">
                            <p className="p-1 bg-gray-900 text-white rounded text-xs">{olderProyect.year}</p>
                        </div>
                    </div>
                </article>
            </div>
            <div className="projects__title mb:flex flex-col items-end hidden">
                <div className="flex flex-col items-end">
                    <h3 className="text-2xl">Proyectos</h3>
                    <p className="text-right">Conoce mis proyectos realizados desde 2022. Se ordenan por fecha de creación.</p>
                    <div className="tools hidden md:block">
                        <h4>Tecnologías dominantes y utilizadas en los proyectos</h4>
                    </div>
                </div>
            </div>
            <div id="knowledge" className="tools md:w-2/3 md:flex md:flex-col md:items-start">
                <h4 className="text-3xl title_section">Conocimientos</h4>
                <p className="subtitle_section">Experiencia en diferentes herramientas debido a cursos y la universidad, además de prácticas profesionales.</p>
                <div className="px-2 py-8 text-6xl flex items-center justify-center flex-wrap gap-4">
                    <span className={tools["javascript"]}></span>
                    <span className={tools["mongodb"]}></span>
                    <span className={tools["handlebars"]}></span>
                    <span className={tools["react"]}></span>
                    <span className={tools["astro"]}></span>
                    <span className={tools["python"]}></span>
                    <span className={tools["psql"]}></span>
                    <span className={tools["nodejs"]}></span>
                    <span className={tools["bootstrap"]}></span>
                    <span className={tools["vite"]}></span>
                    <span className={tools["html"]}></span>
                    <span className={tools["css"]}></span>
                    <span className={tools["tailwind"]}></span>
                </div>
            </div>
        </section>
    )
}

export default Projects