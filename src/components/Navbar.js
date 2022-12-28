import { Link } from "react-router-dom";
import mrMonopoly from "../mrMonopoly-removebg-preview.png";

export default function Navbar(){
    return(
        <div className="navbar">
                
                <ul className="nav-elements">
                    <li><Link className="link" to="/">Home</Link> </li>
                    <li><img className="nav-logo" src={mrMonopoly} /></li>
                    <li><Link className="link" to="/History" >History</Link></li>
                </ul>
        </div>
    )
}

