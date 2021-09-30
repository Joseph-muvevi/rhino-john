import React from 'react'

export const LogisticsGlobalFilter = ({filter, setFilter}) => {
    return (
        <span>
            <input placeholder="Search Table" value={filter || ""} onChange={e => setFilter(e.target.value)}/>
        </span>
    )
}
