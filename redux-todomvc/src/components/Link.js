import React from 'react'

const Link = ({ active, setFilter, children })=>(
    <a
        className={ active?'selected':""}
        style={{ cursor: 'pointer' }}
        onClick={setFilter}
    >
    {children}
    </a>
)

export default Link