import "./index.css"
import { CiMoneyBill } from "react-icons/ci";
import { MdMoreTime } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";

export default function Table() {
    return (
        <div className="table">
            <h3>benefícios de estudar com a learn free</h3>
            <br />
            <div className="ticons">
                <div>
                    <CiMoneyBill />
                    <p>poupe dinheiro</p>
                </div>
                <hr />
                <div>
                    <MdMoreTime />
                    <p>estude no seu tempo</p>
                </div>
                <hr />
                <div>
                    <GiStarsStack />
                    <p>destaque-se</p>
                </div>
            </div>
        </div>
    )
}