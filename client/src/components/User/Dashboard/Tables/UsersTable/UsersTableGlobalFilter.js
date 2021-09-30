import React from 'react'

const UsersTableGlobalFilter = ({filter, setFilter}) => {
    return (
        <div className="users-global-filter">
            <input value={filter} onChange={e => setFilter(e.target.value)} placeholder="Search Users"/>
        </div>
    )
}

export default UsersTableGlobalFilter
