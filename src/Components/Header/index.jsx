import NuKenzie from '../../images/NuKenzie.png'
import './style.css'

const Header = ({showHideLanding}) => {
    return(
        <header>
            <div className="header--flex">
            <figure>
                    <img src={NuKenzie} alt="Logo" className="logo"/>
                    <figcaption>Nu Kenzie logo</figcaption>
                </figure>
                <button className="landing-Page--btn" onClick={showHideLanding}>Início</button>
            </div>
        </header>
    )
}

export default Header