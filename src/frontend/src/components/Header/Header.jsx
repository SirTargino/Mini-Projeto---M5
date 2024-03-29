import { IoIosMenu } from "react-icons/io";
import rocket from "../../assets/rocket.svg"
import "./index.css"
import { useState } from "react";
import Menu from "../Menu/Menu.jsx";

export default function Header({ image }) {
    const [showMenu, setShowMenu] = useState(false)

    const dropMenu = () => setShowMenu(!showMenu)
    
    return (
        <div className="header">
            <IoIosMenu className="menu" onClick={dropMenu}/>
            {showMenu && <Menu visible={showMenu} onClose={()=> setShowMenu(false)}/>}
            <h1>learn free</h1>
            <div className="alignImage">
                {image && <img src={rocket} alt="" />}
            </div>
        </div>
    );
}