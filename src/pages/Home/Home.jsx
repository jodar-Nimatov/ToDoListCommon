import React, { useState } from 'react'
import TodoItem from '../../components/TodoItem'
import TodoForm from '../../components/TodoForm'
import './Home.css'

const Home = () => {
  const [todos, setToDos] = useState([])

  const addToDo = (userInput) => {
    if(userInput) {
      const newToDo = {
        id: Math.random().toString(36).substr(2,9),
        text: userInput,
        completed: false
      }
      setToDos([...todos, newToDo])
    }
  }

  const removeTodo = (id) => {
    setToDos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setToDos([...todos.map((todo) => todo.id === id ? {...todo, complete: !todo.completed} : {todo})])
  }

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
          <div className="home__inner">
            <h1>To do list (Team work)</h1>
            <br/>
            <TodoForm 
            addToDo={addToDo}
            />
            <ul className='todo__list'>
              {
                todos.map((todo) => {
                  return (
                  <TodoItem
                  todo={todo}
                  key={todo.id}
                  removeTodo={removeTodo}
                  toggleToDo={handleToggle}
                  />
                  )

                })
              }
            </ul>
          </div>
          <p>{todos.length}</p>
        </div>
      </main>
    </div>
  )
}

export default Home