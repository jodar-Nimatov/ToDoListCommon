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
                    <h1 className='counter__title'>{count}</h1>
                    <div className="counter__btns">
                        <button className='counter__btn' onClick={increment}>+</button>
                        <button className='counter__btn' onClick={decrement}>-</button>
                        <button className='counter__btn' onClick={reset}>reset</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Counter