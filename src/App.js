import './App.css';
import {useState} from 'react'
import MainPage from './Components/MainPage'
import LandingPage from './Components/LandingPage';

function App() {

  const [listTransactions, setListTransactions] = useState([])


  const [landingPage,setLandingPage] = useState(true)

  const showHideLanding = () =>{
    setLandingPage(!landingPage)
  }

  return (
    <div className="App">
      {landingPage? <LandingPage showHideLanding={showHideLanding}/> : <MainPage showHideLanding={showHideLanding} listTransactions={listTransactions} setListTransactions={setListTransactions}/>}
    </div>
  );
}

export default App;
