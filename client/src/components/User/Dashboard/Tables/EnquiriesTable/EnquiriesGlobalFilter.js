import React from 'react'

export const EnquiriesGlobalFilter = ({filter, setFilter}) => {
    return (
        <span>
            <input placeholder="Search Table" value={filter || ""} onChange={e => setFilter(e.target.value)}/>
        </span>
    )
}
