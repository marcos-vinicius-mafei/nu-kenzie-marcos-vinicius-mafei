import ImageLanding from '../../images/ImageLanding.svg'
import NuKenzie from '../../images/NuKenzie.png'

const LandingPage = ({showHideLanding})=>{
    return (
        <main className="main--landing">
            <div className="container--landing">
                <figure>
                    <img src={NuKenzie} alt="Logo" className="logo"/>
                    <figcaption>Nu Kenzie logo</figcaption>
                </figure>
                <h1 className="description--landing">
                    Centralize o controle das suas finanças
                </h1>
                <span className="finished--description">de forma rápida e segura</span>
                <button className="btn--landing" onClick={showHideLanding}>Iniciar</button>
            </div>
             <figure>
                    <img src={ImageLanding} alt="landing page showcase" className="landing--page--img"/>
                    <figcaption>Nu Kenzie showcase</figcaption>
            </figure>
        </main>
    )
}

export default LandingPage