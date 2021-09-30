import React from 'react'

export const StorageGlobalFilter = ({filter, setFilter}) => {
    return (
        <span>
            Search {" "}
            {/* <input value={filterStorage || ""} onChange={e => setFilterStorage(e.target.value)}/> */}
            <input value={"" || filter} onChange={e => setFilter(e.target.value)}/>
        </span>
    )
}
