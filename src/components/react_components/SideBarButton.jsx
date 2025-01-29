import React, {useState, useEffect} from "react";
import './SideBar.css';
import SideBar from "./SideBar";


const SideBarButton = () => {
    const [hidden, setHidden] = useState(false);
    return (
        <>
            <button className="buttonMenu" onClick={() => {setHidden(!hidden); console.console.log("hola")}}>
                {
                    hidden ? 
                        <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/ffffff/delete-sign.png" alt="delete-sign"/>
                    :
                        <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/ffffff/menu--v6.png" alt="menu--v6"/>
                }
            </button>
            {
                hidden ? <SideBar></SideBar>:null
            }
        </>
    );
}

export default SideBarButton;