import React from 'react'
import { Link } from 'react-router-dom'
import './TheHeader.styles.css'

const TheHeader = () => {
    return (
        <nav className = 'header'>
            <div>
                <span><Link className= 'header__link' to ='/'>Home</Link></span>
                <span><Link className= 'header__link' to = '/form'>Register</Link></span> 
                <span><Link className= 'header__link' to = ''>Login</Link></span>
                <span><Link className= 'header__link' to = ''>Profile</Link></span>
            </div>
        </nav>
    )
}

export default TheHeader

// En la línea 10, la de register, ¿el enlace es a Form?