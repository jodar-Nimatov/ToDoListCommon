import React from 'react'
import baktygulEje from '../../people/baktygul.jpg'
import oleg from '../../people/oleg.jpg'
import baki from '../../people/baigeldy.png'
import jodar from '../../people/joodar.png'
import './Faq.css'

const Faq = () => {
    //Это будет наша информация о проекте кто что сделал, как сделал и так далее
    return (
        <div className='faq__block'>
            <div className="container">
                <h2>Информация о проекте</h2>
                {/* Жоодар */}
                <a href="https://www.instagram.com/wilxlln/" ><img src={jodar} alt='Jodar' width='25 px'/></a>
                <h4>Ниматов Жоодарбек (teamLead)</h4>
                <p>Работал над логикой.</p>
                {/* Олегсандер */}
                <img src={oleg} alt='Krohmal Oleg' width='25px'/>
                <h4>Крохмаль Олег</h4>
                <p>Работал над..</p>
                {/* Бактыгуль */}
                <img src={baktygulEje} alt="Baktygul Tynychbekovna" width='25px'/>
                <h4>Бактыгуль Иличбековна</h4>
                <p>Работала над..</p>
                {/* Байгелди */}
                <img src={baki} alt="Abdyhasym uulu Baigeldy" width='25px' />
                <h4>Абдыхашим у. Байгелди</h4>
                <p>Работал над ui и структурой проекта</p>
            </div>
        </div>
    )
}

export default Faq