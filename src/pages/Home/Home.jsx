import React, { useState } from 'react'
import './Home.css'

const Home = () => {
  const [text, setText] = useState('')
  return (
    <main className='home__block'>
      <div className='container'>
        <div className="home__inner">
          <h1>To do list (Team work)</h1>
          <br/>
          <form className='todo__form'>
            <input type="text"/>
            <button>Add</button>
            {/* Joodar sdes ty sam sdelaesh, davay I belive in you */}
          </form>
          <ul className='todo__list'>
            <li className='todo__item'>Do Homework</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Home