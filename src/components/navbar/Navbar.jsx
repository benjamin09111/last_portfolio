import { useState, useEffect } from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import "./navbar.css"

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <nav className={`app__navbar ${visible ? '' : 'app__navbar--hidden'} lg:px-16 flex px-6 py-4 justify-between bg-black`}>
            <div className="flex gap-2 items-center">
                <b className="text-2xl">BMP</b>
                <div className='md:hidden'>
                    <a target='_blank' className='underline text-md' href="https://www.youtube.com/@tutoprogra1513">Tutoprogra on YouTube</a>
                </div>
            </div>
            <div className='hidden gap-3 pl-4 w-full items-center justify-end md:flex'>
                <a className="hover:text-gray-400" href="#home">Inicio</a>
                <a className="hover:text-gray-400" href="#about">Sobre mí</a>
                <a className="hover:text-gray-400" href="#proyects">Proyectos</a>
                <a className="hover:text-gray-400" href="#knowledge">Habilidades</a>
                <a className="hover:text-gray-400" href="#docencia">Docencia</a>
                <a className="hover:text-gray-400" href="#contact">Contacto</a>
            </div>
            <div className='md:hidden'>
                {
                    !toggleMenu && (< GiHamburgerMenu
                        className='cursor-pointer'
                        color='#fff'
                        fontSize={27}
                        onClick={() => setToggleMenu(true)}
                    />)
                }
                {toggleMenu && (
                    <div className='app__navbar-smallscreen_overlay slide-bottom'>
                        <div className='button-close-container'>
                            <button
                                className='app__navbar-button-exit'
                                style={{ border: 'none' }}
                                onClick={() => setToggleMenu(false)}
                            >
                                &times;
                            </button>
                        </div>
                        <ul className='app__navbar-smallscreen-links'>
                            <a className="navbar__link-r hover:bg-gray-950" onClick={() => setToggleMenu(false)} href="#home">Inicio</a>
                            <a className="navbar__link-r hover:bg-gray-950" onClick={() => setToggleMenu(false)} href="#about">Sobre mí</a>
                            <a className="navbar__link-r hover:bg-gray-950" onClick={() => setToggleMenu(false)} href="#projects">Proyectos</a>
                            <a className="navbar__link-r hover:bg-gray-950" onClick={() => setToggleMenu(false)} href="#knowledge">Habilidades</a>
                            <a className="navbar__link-r hover:bg-gray-950" onClick={() => setToggleMenu(false)} href="#docencia">Docencia</a>
                            <a className="navbar__link-r hover:bg-gray-950" onClick={() => setToggleMenu(false)} href="#contact">Contacto</a>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar