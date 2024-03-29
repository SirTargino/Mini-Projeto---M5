import { IoIosMenu } from "react-icons/io";
import rocket from "../../assets/rocket.svg"
import "./index.css"

export default function Header({ image }) {
    return (
        <div className="header">
            <IoIosMenu className="menu" />
            <h1>learn free</h1>
            <div className="alignImage">
                {image && <img src={rocket} alt="" />}
            </div>
        </div>
    );
}