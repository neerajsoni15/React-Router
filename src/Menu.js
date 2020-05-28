import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';


const Menu = () =>{
    return(
        <div className = "ListStyle">
            <ul>
                <li><Link to = ""> Home </Link></li>
                <li><Link to = "About"> About </Link></li>
                <li><Link to = "Contact"> Contact </Link></li>
                <input type= "text" className="inputField" placeholder ="Search ..." />
            <button className ="SerachBtn">Search</button>
            </ul>
        </div>
    )
}

export default Menu