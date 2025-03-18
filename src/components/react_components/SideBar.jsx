import React from "react";
import './SideBar.css';

const SideBar = () => {
    return (
        <header className="headerSideBar">
            <nav>
                <ul>
                    <li>
                        <a className="a" href="#home">Home</a>
                    </li>
                    <li>
                        <a className="a" href="#sobre_mi">Sobre Mí</a>
                    </li>
                    <li>
                        <a className="a" href="#proyectos">Proyectos</a>
                    </li>
                    <li>
                        <a className="a" href="#habilidades">Habilidades</a>
                    </li>
                    <li>
                        <a className="a" href="#contactar">Contactar</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default SideBar;