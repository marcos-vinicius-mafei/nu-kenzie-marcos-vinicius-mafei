import Card from "../Card"
import NoCard from "../../images/NoCard.png"
import './style.css'

const List = ({removeItem,currentList,noFilter,filterEntries,filterOuts}) => {

    return (
        <div className="list--container">
            <nav>
                <ul className="filters">
                    <li className="abstract"><h3>Resumo Financeiro</h3></li>
                    <li><button onClick={noFilter} className="btn--todos btn--filters">Todos</button></li>
                    <li><button onClick={filterEntries} className="btn--entradas btn--filters">Entradas</button></li>
                    <li><button onClick={filterOuts} className="btn--despesas btn--filters">Despesas</button></li>
                </ul>
            </nav>
            <ul className="cards--list">
                {currentList.length > 0?
                currentList.map(transaction => <li key={`${transaction.description} ${transaction.type}`}><Card description={transaction.description} value={transaction.value} type={transaction.type} maskedValue={transaction.maskedValue} removeItem={removeItem}/></li>) : <div className="noCard"><h2 className="noCard--message">Você ainda não possui nenhum lançamento</h2> <figure><img src={NoCard} alt="NoCard images" /> <figcaption>No card found</figcaption></figure></div>}
            </ul>
        </div>
    )
}

export default List