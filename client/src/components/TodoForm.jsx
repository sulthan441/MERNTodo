import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { addNewTodo } from '../redux/actions'
function TodoForm() {

    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(text))
        console.log("first")
        setText("");

    }
    const onInputChange = (e) => {
        e.preventDefault();
        setText(e.target.value);
    }
    return (
        <form action="" onSubmit={onFormSubmit}>
            <input className='input' onChange={onInputChange} type="text" value={text} placeholder='enter new todo.....' />
        </form>
    )
}

export default TodoForm