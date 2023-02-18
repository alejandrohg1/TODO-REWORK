import React from 'react'
import TodoItem from './TodoItem'
const TodoList = ({todos,setTodo}) => {

  
  return (
    <div className='todo-list-container'>
        {todos.map((todo,index) =>  (
          <TodoItem  key={todo._id} id={todo._id} text={todo.text} active = {todo.active} setTodo={setTodo}/>
        ))}
    </div>
  )
}

export default TodoList