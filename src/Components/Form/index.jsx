

const Form = ({changeValue,changeDescription,changeType,addItem}) => {
    return(
        <div className="container--form">
            <form onSubmit={addItem}>
                <label htmlFor="description">Descrição</label>
                <input type="text" name="description" className="form--description" placeholder="Digite aqui sua descrição" onChange={changeDescription}/>
                <span>Ex: Compra de roupas</span>
                <div className="line--container">
                    <label htmlFor="money">Valor</label>
                    <input type="number" name="money" className="form--money" placeholder="1" onChange={changeValue}/>
                    <select name="type" className="form--type" placeholder="Entrada" onChange={changeType}>
                        <option value="entrada">Entrada</option>
                        <option value="saida">Saída</option>
                    </select>
                </div>
                <button type="submit" className="form--button">Inserir Valor</button>
            </form>
        </div>
    )
}

export default Form