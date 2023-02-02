import React, { useEffect, useState } from 'react'
import './Home.css'

const Home = () => {
  const [todos, setToDos] = useState([])
  const [text, setText] = useState('')
  // Незнаю как но это надо использовать
  // useEffect(()=>{
  //   console.log(todos);
  // }, [])
  return (
    <div className="wrapper">
      <main className='home__block'>
        <div className='container'>
          <form className='todo__form' onSubmit={e=>{
            e.preventDefault()
            if(text.trim().length){
              setText('')
              setToDos([...todos, {text}])
            }
          }}>
            <input type="text" value={text} onChange={e=>setText(e.target.value)} />
            <button>Add</button>
          </form>
          <ul className='todo__list'>
            {
            todos.map(todo => {
                return (
                  <div className='todoshka'>
                    <li contentEditable={true} className='todo__item' key={todo.id}>{todo.text} <input className='chbx' type="checkbox" /></li>
                    <div className="knopki">
                      <button className='del'>delete</button>
                      <button className='pen'>🖊️</button>
                    </div>
                  </div>
                )
            })
            }
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Home