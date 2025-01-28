import React from "react";
import './SideBarButton.css';

const SideBar = () => {
    return (
        <header class="headerSideBar">
            <nav>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#sobre_mi">Sobre Mí</a>
                    </li>
                    <li>
                        <a href="#proyectos">Proyectos</a>
                    </li>
                    <li>
                        <a href="#habilidades">Habilidades</a>
                    </li>
                    <li>
                        <a href="#contactar">Contactar</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default SideBar;