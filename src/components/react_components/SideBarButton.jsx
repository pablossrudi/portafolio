import React, {useState, useEffect} from "react";
import './SideBarButton.css';
import SideBar from "./SideBar";


const SideBarButton = () => {
    const [hidden, setHidden] = useState(false);
    return (
        <>
            <button className="buttonMenu" onClick={() => {setHidden(!hidden); console.console.log("hola")}}> hola</button>
            {
                hidden ? <SideBar></SideBar>:null
            }
        </>
    );
}

export default SideBarButton;