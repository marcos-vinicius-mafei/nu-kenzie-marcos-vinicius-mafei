import Header from "../Header"
import Form from "../Form"
import List from "../List"
import TotalMoney from "../TotalMoney"
import {useState} from 'react'
import AlertCard from "../AlertCard"
import './style.css'

const MainPage = ({showHideLanding,listTransactions,setListTransactions}) =>{

    const [description,setDescription] = useState('')

    const [value,setValue] = useState(0)

    const [type,setType] = useState('Entrada')

    const [maskedValue,setMaskedValue] = useState(0)

    const [alert,setAlert] = useState(false)

    const [message,setMessage] = useState('')

    const showAlert = () =>{
        setAlert(true)
    }

    const hideAlert = () =>{
        setAlert(false)
    }

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
                setCurrentList([...listTransactions,newItem])
                const buttons = document.querySelectorAll('.btn--filters')
                buttons.forEach(button =>{
                    button.classList.remove('active--btn')
                } )
                const allFilter = document.querySelector('.btn--todos')
                allFilter.classList.add('active--btn')
            }else{
                setMessage("Você já possui uma transação com essa descrição")
                showAlert()
                setTimeout(() => {hideAlert()},6000)
            }
         }else{
            setMessage("É necessário inserir uma descrição e um valor para adicionar uma transação")
            showAlert()
            setTimeout(() => {hideAlert()},6000)
         }
    }

    const removeItem = (e) =>{
        const btn = e.target
        const card = btn.closest(".card")
        const cardName = card.children[0].children[0]
        const filterParam = cardName.innerText
        const cardType = card.children[0].children[1]
        const filterParam2 = cardType.innerText
        const filtered = listTransactions.filter(item => item.description !== filterParam || item.type !== filterParam2)
        setListTransactions(filtered)
        setCurrentList(filtered)
        const buttons = document.querySelectorAll('.btn--filters')
        buttons.forEach(button =>{
            button.classList.remove('active--btn')
        } )
        const allFilter = document.querySelector('.btn--todos')
        allFilter.classList.add('active--btn')
    }

    const [currentList,setCurrentList] = useState(listTransactions)

    const noFilter = (e) =>{
        const buttons = document.querySelectorAll('.btn--filters')
        buttons.forEach(button =>{
            if(button !== e.target){
                button.classList.remove('active--btn')
            }
        } )
        e.target.classList.add('active--btn')
        setCurrentList(listTransactions)
    }

    const filterEntries = (e) =>{
        const buttons = document.querySelectorAll('.btn--filters')
        buttons.forEach(button =>{
            if(button !== e.target){
                button.classList.remove('active--btn')
            }
        } )
        e.target.classList.add('active--btn')
        const filtered = listTransactions.filter(item => item.type === 'Entrada')
        setCurrentList(filtered)
    }

    const filterOuts = (e) =>{
        const buttons = document.querySelectorAll('.btn--filters')
        buttons.forEach(button =>{
            if(button !== e.target){
                button.classList.remove('active--btn')
            }
        } )
        e.target.classList.add('active--btn')
        const filtered = listTransactions.filter(item => item.type === 'Despesa')
        setCurrentList(filtered)
    }

    return(
        <>  {alert && <AlertCard message={message} hideAlert ={hideAlert}/>}
            <Header showHideLanding={showHideLanding}/>
            <main className="main--home">
                <div className="form--total">
                    <Form changeValue={changeValue} changeDescription={changeDescription} changeType={changeType} addItem={addItem}/>
                    {listTransactions.length > 0 && <TotalMoney listTransactions={listTransactions}/>}
                </div>
                <List listTransactions={listTransactions} removeItem={removeItem} noFilter={noFilter} filterEntries={filterEntries} filterOuts={filterOuts} currentList={currentList}/>
            </main>
        </>
    )
}

export default MainPage