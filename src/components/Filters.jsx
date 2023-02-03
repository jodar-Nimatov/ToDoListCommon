import React from 'react'

const Filters = () => {
  return (
    // Baki:
    // Это филтры для сортировки дел, 
    // можно выбрать все, завершенные и активные
    // (можно еще добавить цвета для сортировки по сложности но это уже для умных)
    <div className='filters__block'>
        <h4>Show</h4>
        <select className='filters'>
            <option className='filters__item' value="all">All</option>
            <option className='filters__item' value="completed">Completed</option>
            <option className='filters__item' value="active">Active</option>
        </select>
    </div>
  )
}

export default Filters