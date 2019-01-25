import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import * as TodoActions from '../actions'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => ({
    todosList: state.todos,
    filter : state.visibilityFilter
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList