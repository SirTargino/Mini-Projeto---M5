import "./index.css"

export default function SampleText({ title, text }) {
    return (
        <div className="text-container">
            <div className="sampleText">
                <h3>{title}</h3>
                <br />
                <p>{text}</p>
            </div>
        </div>
    )
}