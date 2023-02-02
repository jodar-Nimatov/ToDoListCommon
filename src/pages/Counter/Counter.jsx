import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0)

    const initialState = 0


    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(() => initialState)
    }

    return (
        <div className="counter__block">
            <div className='container'>
                <div className="counter__inner">
                    <h1>{count}</h1>
                    <button onClick={increment}>+</button>
                    <button onClick={decrement}>-</button>
                    <button onClick={reset}>reset</button>
                </div>
            </div>
        </div>
  )
}

export default Counter