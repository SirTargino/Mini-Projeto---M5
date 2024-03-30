import "./index.css"
import SampleText from "../Text/SampleText.jsx"

export default function TextImage({ align, title, text, img }) {
    return (
        <div className={align === "left" ? "box-left" : "box-right"}>
            <SampleText
                title={title}
                text={text}
            />
            <img src={img} alt="" className="imgBox"/>
        </div>
    )
}