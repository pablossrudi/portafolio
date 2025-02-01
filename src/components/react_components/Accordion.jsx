import React, { useState, useEffect } from "react"
import './Accordion.css';

const AccordionH = () => {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1280) {
                setHidden(true);
            } else {
                setHidden(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="sobre_mis_habilidades">
            <div className="container_top">
                <h3>Sobre mis habilidades</h3>
                <button className="button" onClick={() => setHidden(!hidden)}>
                    {
                        hidden ? (
                            <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/ffffff/chevron-down.png" alt="chevron-down"/>
                        )    
                        : 
                        (
                        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/ffffff/chevron-up.png" alt="chevron-up"/>
                        )
                    }
                </button>
            </div>

            <div className={`no_hidde ${hidden ? "hidden" : ""}`}>
                <p>
                    Me esfuerzo por mantenerme actualizado con las últimas
                    tecnologías y mejores prácticas. Esto me permite aportar
                    soluciones innovadoras y optimizar procesos, siempre
                    alineado con los objetivos del proyecto y las
                    necesidades del equipo
                </p>
                <p>
                    En situaciones de presión,
                    mantengo una gestión del estrés eficiente, priorizando
                    tareas y cumpliendo plazos sin sacrificar calidad.
                    También valoro la retroalimentación constructiva y
                    siempre estoy dispuesto a escuchar y compartir ideas.
                </p>
            </div>
        </div>
    );
}

const AccordionE = () => {
    const [hidden, setHidden] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1280) {
                setHidden(true);
            } else {
                setHidden(false);
            }
        };

        // Añadir el event listener al cambiar el tamaño de la ventana
        window.addEventListener('resize', handleResize);

        // Llamar a la función de tamaño inicial para establecer el estado correcto
        handleResize();

        // Limpiar el event listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };

        
    }, []);
    return (   
        <div className="educacion">
            <div className="container_top">
                <h3>Educación</h3>
                <button className="button" style={{marginRight: '-2.5%'}} onClick={() => setHidden(!hidden)}>
                    {
                        hidden ? <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/ffffff/chevron-down.png" alt="chevron-down"/>    
                        : <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/ffffff/chevron-up.png" alt="chevron-up"/>    
                    }
                    
                </button>
            </div>

            <div className={`no_hidde ${hidden ? "hidden" : ""}`}>
            <ul>
                        <li>
                            <div>
                                <h4>Universidad del Bío-Bío, Concepción</h4>
                            </div>
                            <p>Ingeniería Civil en Informática | 2017 - 2022</p>
                        </li>
                        <li>
                            <div>
                                <h4>E-Camp Edutecno</h4>
                            </div>
                            <p>Full Stack Java Trainee | 2024 - 2025</p>
                        </li>
                    </ul>

                    <div className="footerA">
                        <div className="container-titulos">
                            <a className="descargar-titulos" href="" target="_blank"
                                ><img
                                    className="icon_descargar"
                                    width="25"
                                    height="25"
                                    src="https://img.icons8.com/ios-filled/50/ffffff/google-drive--v2.png"
                                    alt="google-drive--v2"
                                /><span className="descargar-content"
                                    >Titulos y certificados</span
                                ></a
                            >
                        </div>
                    </div>
            </div>
        </div>   
    );
}

export {AccordionH, AccordionE};




