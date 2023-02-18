

export const getTodos = async(setTodoList) => {
  
  
    const response = await fetch('http://localhost:5001/todos')
    const result = await response.json();

    setTodoList(result);


}

export const addTodo = async (todo,setToDo)=>{
  

  const newTodo = await fetch('http://localhost:5001/save',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  },
    body: JSON.stringify(todo),
    
  })

  const savedTodo = await newTodo.json();
  getTodos(setToDo);
  console.log(savedTodo)

}


export const updateTodo = async (todo,setToDo) => {
  const updateTodo = await fetch('http://localhost:5001/update',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  },
    body: JSON.stringify(todo),
    
  })

  const updated = await updateTodo.json();
  getTodos(setToDo);
  console.log(updated)
}


export const deleteTodo = async(id,setToDo) =>{
  const deleteTodo = await fetch('http://localhost:5001/delete',{
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  },
  body: JSON.stringify(id),
  });

  const deleted = await deleteTodo.json();
  getTodos(setToDo);
  console.log(deleted);


}