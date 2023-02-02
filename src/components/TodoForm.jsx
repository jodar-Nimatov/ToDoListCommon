import React, { useState } from 'react'


const TodoForm = ({addToDo}) => {
    const [userInput, setUserInput] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addToDo(userInput)
        setUserInput('')
    }
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            handleSubmit(e)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={userInput}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Введите задачу..."
            />
            <button>Add</button>
        </form>
    )
}

export default TodoForm