
import { NavLink } from "react-router-dom";
import iconName from './msc.png'
import menu from './cmenu.png'
import { useState, useEffect } from 'react';


const collapse = () => {

}
const Nav = () =>{
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            console.log("Window width:", window.innerWidth);
            if (window.innerWidth < 800) {
                setIsCollapsed(true);
            } else {
                setIsCollapsed(false); 
            }
        };

      
        handleResize();

        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    const handleCollapse = () => {
        setIsCollapsed(prev => !prev);
    }

    return (
        <>
      
      
        <nav className={isCollapsed ? "nav collapsed" : "nav"}>
        <button onClick={handleCollapse} className="collapse-button" style={{ background: "none", border: "none", cursor: "pointer" }}>
            <img
            height={30}
            id="navCollapse"
            src={menu}
            alt="Toggle menu"
            style={{ paddingTop: "20px" }}
            />
      </button>

        {!isCollapsed && (
        <ul>
            <li className="nav-item">
                <div className="nav-row">
                    <img src={iconName} alt="icon-picker" className="nav-icon"/>
                    <NavLink to ="/" id="link-item" className={({isActive})=> isActive ? "nav-link active": "nav-link"}>Home</NavLink>
                </div>
            </li>
            <li className="nav-item">
                <div className="nav-row" >
                    <img src={iconName} alt="icon-picker" className="nav-icon"/>
                    <NavLink to ="/works"  id="link-item" className={({isActive})=> isActive ? "nav-link active": "nav-link"}>Works</NavLink>
                </div>
            </li>
            {/* <li className="nav-item">
                <div className="nav-row">
                    <img src={iconName} alt="icon-picker" class="nav-icon"/>
                    <NavLink to ="/portfolio" id="link-item" className={({isActive})=> isActive ? "nav-link active": "nav-link"}>Portfolio</NavLink>
                </div>
            </li> */}
            <li className="nav-item">
                <div className="nav-row" >
                    <img src={iconName} alt="icon-picker" className="nav-icon"/>
                    <NavLink to = "/about" id="link-item" className={({isActive})=> isActive ? "nav-link active": "nav-link"}>About</NavLink>
                </div>
            </li>
            <li className="nav-item">
                <div className="nav-row" >
                    <img src={iconName} alt="icon-picker" className="nav-icon"/>
                    <NavLink to = "/contact" id="link-item" className={({isActive})=> isActive ? "nav-link active": "nav-link"}>Contact</NavLink>
                </div>
            </li>
        </ul>
        )}
        </nav>

        </>
        

    );
    
};

export default Nav;