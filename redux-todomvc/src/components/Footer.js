import React from 'react'
import FilterLink from '../containers/FilterLink'
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const FILTER_TITLES = {
    [SHOW_ALL] : "All",
    [SHOW_COMPLETED] : "Completed",
    [SHOW_ACTIVE] : "Active"
}

const Footer = (props)=>{

    const { activeCount, completedCount, onClearCompleted } = props
    const itemWord = activeCount === 1 ? "item": "items"
    return(
        <footer className="footer">
            <span className="todoCount">
                <strong>{activeCount || "No"}</strong> {itemWord} left              
            </span>
            <ul className="filters">
                {Object.keys(FILTER_TITLES).map(filter=>
                    <li key={filter}>
                        <FilterLink filter={filter}>
                         {FILTER_TITLES[filter]}
                        </FilterLink>
                    </li>
                )}
            </ul>
            {
                !!completedCount &&
                <button
                    className="clearCompleted"
                    onClick={onClearCompleted}
                >Clear completed</button>
            }
        </footer>
    )
}

export default Footer