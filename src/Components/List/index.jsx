import Card from "../Card"

const List = ({listTransactions}) => {
    return (
        <div className="list--container">
            <nav>
                <ul className="filters">
                    <li>Resumo Financeiro</li>
                    <li><button onClick={"show todos"} className="btn--todos btn--filters">Todos</button></li>
                    <li><button onClick={"show entradas"} className="btn--entradas btn--filters">Entradas</button></li>
                    <li><button onClick={"show todos"} className="btn--despesas btn--filters">Despesas</button></li>
                </ul>
            </nav>
            <ul className="cards--list">
                {listTransactions.map(transaction => <li key={transaction.description}><Card description={transaction.description} value={transaction.value} type={transaction.type}/></li>)}
            </ul>
        </div>
    )
}

export default List