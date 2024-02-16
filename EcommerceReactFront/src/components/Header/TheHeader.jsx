import React from 'react'
import { Link } from 'react-router-dom'
import './TheHeader.styles.css'

const TheHeader = () => {
    return (
        <nav className = 'header'>
            <div>Header
                <span><Link className= 'header__link' to =''>Home</Link></span>
                <span><Link className= 'header__link' to = ''>Register</Link></span> 
                <span><Link className= 'header__link' to = ''>Login</Link></span>
                <span><Link className= 'header__link' to = ''>Profile</Link></span>
            </div>
        </nav>
    )
}

export default TheHeader

// En la línea 10, la de register, creo que habria que poner un enlace a Form 