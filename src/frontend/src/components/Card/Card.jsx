import "./index.css"

export default function Card({name, adress, website, description, contact}){
    return(
        <div className="card">
            <h4>Nome: {name}</h4>
            <p>Endereço: {adress}</p>
            <p>Website: {website}</p>
            <p>Descrição: {description}</p>
            <p>Contato: {contact}</p>
        </div>
    )
}