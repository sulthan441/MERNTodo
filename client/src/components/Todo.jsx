import React from 'react'

function Todo({todo}) {
  return (
    <li className='task'>
        <span >{todo.data}</span>

        <span className='icon'>
            <i className='fas fa-trash'></i>
        </span>
        <span className='icon'>
            <i className='fas fa-pen'></i>
        </span>
    </li>
  )
}

export default Todo