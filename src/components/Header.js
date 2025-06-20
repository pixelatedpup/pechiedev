
import { NavLink } from "react-router-dom";
const Header = () => {
    return(
        <div className= "Header">
               <NavLink className= "head" 
               to ="/" 
               id="link-item"
               style={{textDecoration: 'none'}}><h2 id="logo">PECHIEDEV</h2></NavLink> 
               <ul className="options">
                    <li>LANG</li>
                    <li>SWITCH</li>
               </ul>
        </div>
    );
};
export default Header;