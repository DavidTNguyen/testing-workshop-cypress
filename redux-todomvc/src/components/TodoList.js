import React from 'react'
import TodoItem from './TodoItem'


const TodoList = ({filter, todosList, actions})=>(
    <ul className="todoList">
    {todosList.filter(todo=>{
      if(filter==='show_completed'){
        return todo.completed===true
      }else if( filter==='show_active'){
        return todo.completed===false
      }else{
        return todo
      }
    }).map(todo =>
      <TodoItem key={todo.id} todo={todo} {...actions}/>
    )}
  </ul>
)

export default TodoList