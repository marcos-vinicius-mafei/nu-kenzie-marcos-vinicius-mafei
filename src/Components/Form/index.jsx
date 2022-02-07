import './style.css'

const Form = ({changeValue,changeDescription,changeType,addItem}) => {
    return(
        <div className="container--form">
            <form onSubmit={addItem}>
                <div className="container--inputDesc">
                    <label htmlFor="description">Descrição</label>
                    <input type="text" name="description" className="form--description" placeholder="Digite aqui sua descrição" onChange={changeDescription} maxLength="40"/>
                    <span>Ex: Compra de roupas</span>
                </div>
                <div className="line--container">
                    <div className="labels--container">
                        <label htmlFor="money">Valor</label>
                        <input type="number" name="money" className="form--money" placeholder="1" onChange={changeValue}/>
                    </div>
                    <div className="labels--container">
                        <label htmlFor="type">Tipo de valor</label>
                        <select name="type" className="form--type" placeholder="Entrada" onChange={changeType}>
                            <option value="Entrada">Entrada</option>
                            <option value="Despesa">Despesa</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="form--button">Inserir Valor</button>
            </form>
        </div>
    )
}

export default Form