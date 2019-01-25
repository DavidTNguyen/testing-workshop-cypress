import React from "react"
import TodoTextInput from "./TodoTextInput"

const Header = ({test,addTodo})=>(
    //console.log("我拿到",test)
    //newTodo: 單一個屬性，代表true
    <header className="header">
        <h1>todos</h1>
        <TodoTextInput
            newTodo
            onSave={(text)=>{
                console.log("這裡是新增的onSave----->")
                if(text.length!==0){
                    addTodo(text)
                }
            }}
            placeholder="What needs to be done?"
        />
    </header>


)

export default Header