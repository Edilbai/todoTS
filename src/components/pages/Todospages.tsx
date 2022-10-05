import React , {useState, useEffect} from 'react';
import { TodoForm } from '../TodoForm';
import { TodoList } from '../Todolist';
import { ITodo } from '../../interfaces';

export const Todopages:React.FC =()=>{
	
const [todos,setTodos]=useState<ITodo[]>([])


useEffect(()=>{
  
  const save = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
  setTodos(save)
},[])
localStorage.setItem('todos',JSON.stringify(todos) );
// useEffect(()=>{
//   localStorage.setItem('todos' ,JSON.stringify(todos))

// },[todos])

const addHandler = (title:string)=>{
  const newTodo:ITodo={
    title:title,
    id:Date.now(),
    completed:false
  }
  // setTodos([newTodo, ...todos])
  setTodos(prev=>[newTodo, ...prev])
}
// const toggleHandler=(id:number)=>{
//  setTodos(prev=>prev.map(todo=>{
// if(todo.id===id)
// {
//   todo.completed=!todo.completed
// }
// return todo
//  }
//  ))
// }
const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }
const removeHandler=(id:number)=>{
  const question = window.confirm('Вы действительно хотите удалить элемент?')
  if(question)
setTodos(prev => prev.filter(todo=>todo.id !==id))
}


	return(
		<>
 <TodoForm add={addHandler} />
<TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
		</>
	)
}
