import {connect} from 'react-redux'
import {completeAllTodos, clearCompleted} from "../actions"
import MainSection from "../components/MainSection"

const mapStateToProps = state =>({
    todosCount: state.todos.length,
    todosList: state.todos
})

const mapDispatchToProps = dispatch =>({
    completeAllTodos: ()=>{dispatch(completeAllTodos())},
    clearCompleted: ()=>{dispatch(clearCompleted())}
})

export default connect(mapStateToProps, mapDispatchToProps)(MainSection)