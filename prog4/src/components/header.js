import {Link} from "react-router-dom";
import  HeaderStyle from "./header.module.css";

const Header = () =>{
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" className={HeaderStyle.navLink}>Home</Link>
                </li>
                <li>
                    <Link to="/contact" className={HeaderStyle.navLink}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;