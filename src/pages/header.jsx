import React from "react";
import logo from "../sources/Logo/Logo.svg"
import '../pages/header.scss'
import Clock from 'react-live-clock';
import {Link} from "react-router-dom";

function Header () {
    return(
        <div className='header'>
            <Link to='/' className='logo'><img src={logo} alt=""/></Link>
            <p>Санкт-Петербург, <Clock format={'HH'} ticking={true} timezone={'RU/Moscow'}/>
                <span className='clock'>:</span>
                <Clock format={'mm'} ticking={true} timezone={'RU/Moscow'}/>
            </p>
            <Link to='/brief' className='link'>Заполнить бриф</Link>
        </div>
    )
}

export default Header