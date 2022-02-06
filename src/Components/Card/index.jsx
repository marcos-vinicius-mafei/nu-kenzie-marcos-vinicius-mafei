import './style.css'

const Card = ({description,type,maskedValue,removeItem}) =>{
    return(
        <div className={`card ${type}`}>
            <div className="container--column">
                <h3 className="title">{description}</h3>
                <span className="tipo">{type}</span>
            </div>
            <div className="container--row">
                <span className="price">R$ {maskedValue}</span>
                <button className="btn--remove" onClick={removeItem}></button>
            </div>
        </div>
    )
}

export default Card