import React, { useEffect, useState } from 'react'
import './Home.css'

const Home = () => {
  const [todos, setToDos] = useState([])
  const [text, setText] = useState('')
  useEffect(()=>{
    console.log(todos);
  })
  return (
    <div className="wrapper">
      <main className='home__block'>
        <div className='container'>
          <form className='todo__form' onSubmit={e=>{
            e.preventDefault()
            setToDos([...todos, {text}])
          }}>
            <input type="text" value={text} onChange={e=>setText(e.target.value)} />
            <button>Add</button>
          </form>
          <ul className='todo__list'>
            {
            todos.map(todo => (
              <li className='todo__item' key={todo.id}>{todo.text}</li>
            ))
            }
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Home