import React from 'react'
import '../css/todoitem.css'


const TodoItem = ({todo, toggleToDo, removeTodo}) => {
  return (
    <li className='todo__item' key={todo.id}>
        <div className={todo.complete ? "item-text strike" : "item-text"} onClick={() => toggleToDo(todo.id)}>
          {todo.text}
        </div>
        <div className='todo__delete' onClick={() => removeTodo(todo.id)}>
          Удалить
        </div>
    </li>
  )
}

export default TodoItem