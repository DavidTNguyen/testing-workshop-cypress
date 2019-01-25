import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from "../components/Link"

// stste的選擇和props一樣的就得到一個true
const mapStateToProps = (state, ownProps) =>({
    active : ownProps.filter === state.visibilityFilter
})

// ownProps: container自己擁有的props 
const mapDispatchToProps = (dispatch, ownProps) =>({
    setFilter: ()=> dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)