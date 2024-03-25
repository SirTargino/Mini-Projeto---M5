import "./index.css";
import logo from "../../assets/logo.png"

export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <h1>LEARN FREE</h1>
        </div>
    )
}