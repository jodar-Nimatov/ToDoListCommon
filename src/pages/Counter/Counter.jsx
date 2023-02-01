import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(1)
    return (
        <div className="counter__block">
            <div className='container'>
                <div className="counter__inner">

                </div>
            </div>
        </div>
  )
}

export default Counter