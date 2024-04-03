import { IoCloseCircleOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import "./index.css"
import { Link } from "react-router-dom";

export default function Menu({ visible, onClose }) {
    return (
        <div className={visible ? "menu-drop" : "menu-hidden"}>
            <IoCloseCircleOutline className="close" onClick={onClose} />
            <div className="topics">
                <Link to={"/"}><IoHomeOutline className="home" /></Link>
                <br />
                <Link to={"/learn-presencial"}><h2>quero aprender - presencial</h2></Link>
                <br />
                <Link to={"/learn-online"}><h2>quero aprender - online</h2></Link>
                <br />
                <Link to={"/learn-all"}><h2>quero aprender - não importa onde</h2></Link>
            </div>
        </div>
    )
}