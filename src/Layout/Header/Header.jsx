import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../people/logo.svg'
import './Header.css'

const Header = () => {
    return (
    <header className='header'>
        <div className="container">
            <div className="header__inner">
                <Link to="/"><img src={logo} width='35px' alt="Team Work Todo List" className='header__logo' /></Link>
                <ul className='header__list'>
                    <li className='header__item home'><Link to="">Home</Link></li>
                    <li className='header__item important'><Link to="/counter">Counter</Link></li>
                    <li className='header__item faq'><Link to="/faq">FAQ</Link></li>
                </ul>
            </div>
        </div>
    </header>
    )
}

export default Header