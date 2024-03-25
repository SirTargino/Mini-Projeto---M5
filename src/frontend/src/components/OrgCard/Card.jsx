import "./index.css"

export default function Card({ name, adress, website, description, contact }) {
    return (
        <div className="card">
            <h3>{name}</h3>
            <div className="card-content">
                <h4>Endereço: {adress}</h4>
                <h4>Website: <a href={website}>{website}</a></h4>
                <h4>Contato: {contact}</h4>
                <p>Descrição: {description}</p>
            </div>
        </div>
    );
}