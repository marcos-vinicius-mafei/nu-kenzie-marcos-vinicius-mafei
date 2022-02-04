

const Card = ({description,value,type}) =>{
    // const classes = "card recebe por props"
    return(
        <div className={"card"}>
            <div className="container--column">
                <h2 className="title">{description}</h2>
                <span className="tipo">{type}</span>
            </div>
            <div className="container--row">
                <span className="price">R$ {value}</span>
                <button className="btn--remove" onClick={"remove"}>{"use react icons"}</button>
            </div>
        </div>
    )
}

export default Card