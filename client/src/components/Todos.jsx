import React, { useEffect } from 'react'
import Todo from './Todo'
import { getAllTodos } from '../redux/actions'

import { useDispatch ,useSelector } from 'react-redux'
function Todos() {

    const dispatch = useDispatch()

    const todos = useSelector(state =>state.todos);

    useEffect(()=>{
        dispatch(getAllTodos())
    },[])
  return (
    <article>
      <ul>
        {
          todos.map((todo,i)=>{
            return(
              <Todo key ={i} todo ={todo}
              />
            )
          })
        }
      </ul>
    </article>
  )
}

export default Todos