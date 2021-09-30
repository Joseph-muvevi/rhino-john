import React, {useState, useEffect, useMemo} from 'react'
import {useTable, useSortBy, useGlobalFilter, usePagination} from "react-table"
import {ENQUIRIES_TABLE_COLUMNS} from "./EnquiriesTableColumns"
import axios from "axios"
import {EnquiriesGlobalFilter} from './EnquiriesGlobalFilter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'

const EnquiriesTable = () => {
    const [enquiries, setEnquiries] = useState([])
    const tableData = useMemo(() => enquiries, [enquiries])
    const columns = useMemo(() => ENQUIRIES_TABLE_COLUMNS, [])

    useEffect(() => {
        axios.get("http://localhost:8080/api/quotation")
            .then((res) => setEnquiries(res.data))
            .catch(err => console.log(err))
    })

    const enquiriesTableInstance = useTable({
        columns: columns,
        data: tableData
    }, useGlobalFilter, useSortBy, usePagination)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        previousPage,
        nextPage,
        canNextPage,
        canPrevousPage,
        prepareRow,
        pageOptions,
        setPageSize,
        state,
        setGlobalFilter
    } = enquiriesTableInstance

    const { globalFilter, pageIndex, pageSize} = state

    return (
        <div className="dash-tables">
            <EnquiriesGlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps)}>
                                            {column.render("Header")}
                                            <span>
                                                {column.isSorted ? (column.isSortedDesc ? <FontAwesomeIcon icon={faSortDown}/>: <FontAwesomeIcon icon={faSortUp}/> ) : "" }
                                            </span>
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map(row => {
                            prepareRow(row)
                            return(
                                <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell => (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    ))
                                }
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div>
                <span>
                    Page {" "}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length} {"  "}
                    </strong>
                </span>
                <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                    {
                        [5, 10, 15, 20].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))
                    }
                </select>
                <button onClick={() => previousPage()} disabled={!canPrevousPage}>Previous</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
            </div>
        </div>
    )
}

export default EnquiriesTable
