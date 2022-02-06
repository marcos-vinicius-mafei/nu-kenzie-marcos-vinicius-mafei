import Header from "../Header"
import Form from "../Form"
import List from "../List"
import TotalMoney from "../TotalMoney"
import {useState} from 'react'


const MainPage = ({showHideLanding,listTransactions,setListTransactions}) =>{

    const [description,setDescription] = useState('')

    const [value,setValue] = useState(0)

    const [type,setType] = useState('Entrada')

    const [maskedValue,setMaskedValue] = useState(0)

    const changeValue = (e) =>{
        setValue(Number(e.target.value))
        setMaskedValue(Number(e.target.value))
        if(type === 'Despesa'){
            setValue(-Math.abs(Number(e.target.value)))
        }else{
            setValue(Math.abs(Number(e.target.value)))
        }
    }

    const changeDescription = (e) =>{
        setDescription(e.target.value)
    }

    const changeType = (e) =>{
        setType(e.target.value)
        if(e.target.value === 'Despesa'){
            setValue(-Math.abs(value))
            console.log('hi')
            console.log(value)
        }else{
            setValue(Math.abs(value))
        }
    }
    
    const addItem = (event) =>{
        const newItem = {
            description: description,
            type: type,
            value: value,
            maskedValue: maskedValue
        }
        event.preventDefault()
        if(description !== '' && ( value !== 0 || maskedValue !== 0)){
            if(listTransactions.find(item => item.description === newItem.description && item.type === newItem.type) === undefined){
                setListTransactions([...listTransactions,newItem])
                console.log('hello')
                setCurrentList([...listTransactions,newItem])
            }else{
                window.alert("Você já possui uma transação com essa descrição")
            }
         }else{
             window.alert("É necessário inserir uma descrição e um valor para adicionar uma transação")
         }
    }

    const removeItem = (e) =>{
        const btn = e.target
        const card = btn.closest(".card")
        const cardName = card.children[0].children[0]
        const filterParam = cardName.innerText
        const cardType = card.children[0].children[1]
        const filterParam2 = cardType.innerText
        console.log(filterParam2)
        const filtered = listTransactions.filter(item => item.description !== filterParam || item.type !== filterParam2)
        setListTransactions(filtered)
        setCurrentList(filtered)
    }

    const [currentList,setCurrentList] = useState(listTransactions)

    const noFilter = () =>{
        setCurrentList(listTransactions)
    }

    const filterEntries = () =>{
        const filtered = listTransactions.filter(item => item.type === 'Entrada')
        setCurrentList(filtered)
    }

    const filterOuts = () =>{
        const filtered = listTransactions.filter(item => item.type === 'Despesa')
        setCurrentList(filtered)
    }

    console.log(type)

    return(
        <>
            <Header showHideLanding={showHideLanding}/>
            <main>
                <div className="form--total">
                    <Form changeValue={changeValue} changeDescription={changeDescription} changeType={changeType} addItem={addItem}/>
                    <TotalMoney listTransactions={listTransactions}/>
                </div>
                <List listTransactions={listTransactions} removeItem={removeItem} noFilter={noFilter} filterEntries={filterEntries} filterOuts={filterOuts} currentList={currentList}/>
            </main>
        </>
    )
}

export default MainPage