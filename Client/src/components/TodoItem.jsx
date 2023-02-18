import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { fontSize } from '@mui/system';
import { Checkbox } from '@mui/material';
import { updateTodo } from '../controllers/TodoController';
import { deleteTodo } from '../controllers/TodoController';

const TodoItem = ({id,text,active,setTodo}) => {
  const [isActive, setisActive] = useState(active);


  const pruebaId = (idDelete)=>{
   deleteTodo({
    _id:idDelete
   },setTodo);
  }

  const handleUpdate = ()=>{
    setisActive(!isActive)
    
    updateTodo({
      _id: id,
      active: !active,
      text,
    },setTodo)
  }
 
  return (
    <div className='todo-item'>
      <h2 className={`label  ${isActive ? "done": ''}`} >{text}</h2>
      <div className="item-buttons">
        <Checkbox checked={isActive} color="secondary" size='large' style={{color:'white'}} onChange={handleUpdate}></Checkbox>
        
        <DeleteIcon style={{color: 'white',cursor:'pointer'}} onClick={()=>pruebaId(id)} fontSize='large' ></DeleteIcon>
        
        
      </div>
    </div>
  )
}

export default TodoItem