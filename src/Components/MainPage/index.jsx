import Header from "../Header"
import Form from "../Form"
import List from "../List"
import TotalMoney from "../TotalMoney"
import {useState} from 'react'


const MainPage = ({showHideLanding,listTransactions,setListTransactions}) =>{

    const [description,setDescription] = useState('')

    const [value,setValue] = useState(0)

    const [type,setType] = useState('entrada')

    const [maskedValue,setMaskedValue] = useState(0)

    const changeValue = (e) =>{
        setValue(Number(e.target.value))
        setMaskedValue(Number(e.target.value))
    }

    const changeDescription = (e) =>{
        setDescription(e.target.value)
    }

    const changeType = (e) =>{
        setType(e.target.value)
        if(e.target.value === 'saida'){
            setValue(value * -1)
        }
    }
    
    const addItem = (event) =>{
        const newItem = {
            description: description,
            type: type,
            value: value
        }
        event.preventDefault()
        setListTransactions([...listTransactions,newItem])
    }

    console.log(value)
    console.log(description)
    console.log(type)
    console.log(listTransactions)

    return(
        <>
            <Header showHideLanding={showHideLanding}/>
            <main>
                <div className="form--total">
                    <Form changeValue={changeValue} changeDescription={changeDescription} changeType={changeType} addItem={addItem}/>
                    <TotalMoney listTransactions={listTransactions}/>
                </div>
                <List listTransactions={listTransactions}/>
            </main>
        </>
    )
}

export default MainPage