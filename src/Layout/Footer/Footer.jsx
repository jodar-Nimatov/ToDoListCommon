import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__inner">
          <ul className='footer__list'>
              <h4>Contacts (github)</h4>
              <li className='footer__item'>Байгелди: hjdskhooba</li>
              <li className='footer__item'>Олег: Ol-wy</li>
              <li className='footer__item'>Жоодар: Nimatov-Joodar</li>
              <li className='footer__item'>Бактыгуль: Baktygul</li>
          </ul>
          <ul className='footer__list'>
              <h4>Characters</h4>
              <li className='footer__item'>Байгелди Абдыхашим уулу</li>
              <li className='footer__item'>Олег Крохмаль</li>
              <li className='footer__item'>Ниматов Жоодар</li>
              <li className='footer__item'>Бактыгуль Иличбековна</li>
          </ul>
          <ul className='footer__list'>
              <h4>Contuct Us</h4>
              <li className='footer__item'><a href="#">Instagram</a></li>
              <li className='footer__item'><a href="#">Twitter</a></li>
              <li className='footer__item'><a href="#">Youtube</a></li>
              <li className='footer__item'><a href="#">Github</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer