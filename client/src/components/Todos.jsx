import React, { useEffect } from 'react'

import { getAllTodos } from '../redux/actions'

import { useDispatch } from 'react-redux'
function Todos() {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllTodos())
    },[])
  return (
    <div>
        TODOS
    </div>
  )
}

export default Todos