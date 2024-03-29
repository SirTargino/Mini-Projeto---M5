import { IoCloseCircleOutline } from "react-icons/io5";
import "./index.css"

export default function Menu({visible, onClose}) {
    return (
        <div className={visible ? "menu-drop" : "menu-hidden" }>
            <IoCloseCircleOutline className="close" onClick={onClose}/>
            <div className="topics">
                <br />
                <a href="#"><h2>quero aprender - presencial</h2></a>
                <br />
                <a href="#"><h2>quero aprender - online</h2></a>
                <br />
                <a href="#"><h2>quero ajudar</h2></a>
            </div>
        </div>
    )
}