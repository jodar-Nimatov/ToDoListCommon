import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import TodoList from './TodoList';

const TodoForm = () => {
    // const [text, setText] = useState('')

    // Будем делать с использованием redux!
    //const dispatch = useDispatch

    return (
        <form onSubmit={(e) => {
            // if(text.trim().length){
            //     setText('')
            //     e.preventDefault()
            // }else{
            //     e.preventDefault()
            // }
        }}>
            <input value={text} onChange={(e)=>setText(e.target.value)} type="text"/>
            <button>Add</button>
            <TodoList/>
        </form>
    )
}

export default TodoForm