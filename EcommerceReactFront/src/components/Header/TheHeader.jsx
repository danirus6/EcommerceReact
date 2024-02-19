import React from 'react'
import { Link } from 'react-router-dom'
import './TheHeader.styles.scss'

const TheHeader = () => {
    return (
        <nav className='header'>
                <Link className='header__link' to ='/'>Home</Link>
                <Link className='header__link' to = '/form'>Register</Link>
                <Link className='header__link' to = ''>Login</Link>
                <Link className='header__link' to = ''>Profile</Link>
        </nav>
    )
}

export default TheHeader

// En la línea 10, la de register, ¿el enlace es a Form?