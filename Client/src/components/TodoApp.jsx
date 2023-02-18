import React, { useEffect, useState } from 'react'
import { addTodo, getTodos } from '../controllers/TodoController';
import TodoList from './TodoList';

const TodoApp = () => {
  const [formValue,setFormValue] = useState({
    text: '',
    active: false,
  })

  const [todoList,setTodoList] = useState([]);

  useEffect(() =>{

    getTodos(setTodoList);
    
  },[])

  
   
 
  const{text} = formValue;

  const handleChange = (e)=>{
    setFormValue({
      ...formValue,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await addTodo(formValue,setTodoList);
    
    setFormValue({
      text: '',
      active: false,
    })
    
  }



  return (
    <div className='todo-container'>
      <div className="outer-todolist-container">
        <div className="top-text">
          <h1>Todo List</h1>
          <h3>Get things done, one by one.</h3>
          
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={text} name="text" onChange={handleChange} />
          <button> ADD ITEM </button>
        </form>

        <TodoList todos={todoList} setTodo = {setTodoList}></TodoList>
        
      </div>
    </div>
  )
}

export default TodoApp