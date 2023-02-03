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
            <input className='main-inp' placeholder='Add your todo' type="text" value={text} onChange={e=>setText(e.target.value)} />
            <button className='main-btn'>➕</button>
          </form>
          <ul className='todo__list'>
            {
            todos.map(todo => {
                return (
                  <div className='todoshka'>
                    <li contentEditable={true} className='todo__item' key={todo.id}><input className='chbx' type="checkbox"/>{todo.text}</li>
                      <div className="knopki">
                        <button className='pen'>🖊️</button>
                        <button className='del'>DELETE</button>
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