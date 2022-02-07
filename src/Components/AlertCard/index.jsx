import './style.css'
import {TiDeleteOutline} from 'react-icons/ti';

const AlertCard = ({message,hideAlert}) => {
    return(
        <div className="alert--card">
            <span className="alert--message">{message}</span>
            <button className="btn--alert" onClick={hideAlert}><TiDeleteOutline size='25px' color="white"/></button>
        </div>
    )
}

export default AlertCard