

const TotalMoney = ({listTransactions}) => {
    return(
        <div className="total--money">
            <h3>Valor Total:</h3>
            <h3>{listTransactions.reduce((acc,transaction) =>{ return acc + transaction.value},0)}</h3>
        </div>
    )
}

export default TotalMoney