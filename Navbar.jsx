import { Link } from "react-router-dom";
import "./Navbar.css"
import pic from "../assets/pic.png"
function Navbar(){
    return(
        <nav className="Navbar">
            <img src={pic} alt="Logo" className="Logo"/>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login/Signup</Link></li>
                <li><Link to="/order">Order Food</Link></li>
                <li><Link to="/reviews">Reviews and Feedback</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;
