import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import "./index.css"

export default function Customfooter(){
    return (
        <footer>
            <p>learn free api</p>
            <p>desenvolvido por: joão targino</p>
            <p>contato: <a href="mailto:joaotarginodev@gmail.com">joaotarginodev@gmail.com</a></p>
            <a href="https://www.linkedin.com/in/joão-targino/"><FaLinkedin /></a>
            <a href="https://github.com/SirTargino"><FaGithubSquare /></a>
        </footer>
    )
}