import React, { Component } from 'react'
import TodoTextInput from './TodoTextInput'

export default class TodoItem extends Component{
    
    state = {
        editing: false
    }
    
    handleDoubleClick = ()=>{
        this.setState({editing: true})
    }

    handleSave = (id, text)=>{
        console.log("這裡是modify和delet的onSave----->")
        if(text.length ===0){
            this.props.deleteTodo(id)
        }else{
            this.props.editTodo(id, text)
        }
        this.setState({editing: false})
    }

    render(){ 
        const {todo, completeTodo, deleteTodo} = this.props
        let element

        if(this.state.editing){
            element = (
                <TodoTextInput 
                    text={todo.text}
                    onSave={(text) => this.handleSave(todo.id, text)} />
            )
        }else{
            element = (
                <div className="view" >
                    <input className="toggle"
                            type="checkbox"
                            checked={todo.completed} 
                            onChange={()=> completeTodo(todo.id)}
                           
                    />
                    <label onDoubleClick={this.handleDoubleClick}>{todo.text}</label>
                    <button className="destroy"
                        onClick={()=> deleteTodo(todo.id)}/>
                </div>
            )
        }

        

        return(
            <li>{element}</li>
        )
    }
}