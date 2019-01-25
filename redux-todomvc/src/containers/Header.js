import Header from "../components/Header"
import { connect }from 'react-redux'
import {addTodo} from '../actions'

// const mapStateToProps = state => ({
//     test: state
// })

export default connect(null, {addTodo})(Header)