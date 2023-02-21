import React, { useState } from 'react'


import {addN}
function TodoForm() {

    const [text, setText] = useState("")
    const onFormSubmit = () => {

    }
    const onInputChange = (e) => {
        e.preventDefault();
        setText(e.target.value);
    }
    return (
        <form action="" onSubmit={onFormSubmit}>
            <input className='input' onChange={onInputChange} type="text" placeholder='enter new todo.....' />
        </form>
    )
}

export default TodoForm