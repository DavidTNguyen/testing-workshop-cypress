import React from 'react'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'


const MainSection = ({todosCount, todosList, completeAllTodos, clearCompleted})=>{
    const completedCount = function(){
        return todosList.reduce((acc, acu)=>{
            //console.log("----->收到",todosList)
            return acu.completed ? acc+1 : acc
        },0)
    }
       
    return(
    <section className="main">
        <span>
            <input 
                className="toggleAll"
                type="checkbox"
                readOnly
            />
            <label onClick={completeAllTodos}/>
        </span>
        <VisibleTodoList />
        <Footer
            onClearCompleted={clearCompleted}
            completedCount={completedCount()}
            activeCount={todosCount - completedCount()}
        />

    </section>
    )
}

export default MainSection;