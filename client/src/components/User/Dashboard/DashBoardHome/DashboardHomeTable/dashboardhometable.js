import React, {useState, useEffect, useMemo} from 'react'
import {DASHBOARD_HOME_TABLE_COLUMNS} from "./DashboardHomeTableColumns"
import {DashboardHomeFilter} from "./DashboardHomeFilter"
import {useTable,  useGlobalFilter, useSortBy, usePagination} from 'react-table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'

import axios from "axios"

const DashboardHomeTable = () => {
    const [dashboardLogistics, setDashboardLogistics] = useState([])
    const columns = useMemo(() => DASHBOARD_HOME_TABLE_COLUMNS, [])
    const tableData = useMemo(() => dashboardLogistics, [dashboardLogistics])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/logisticsrecords`)
            .then(res => setDashboardLogistics(res.data))
            .catch(err => console.log(err))
    }, [])

    const dashboardHomeTable = useTable({
        columns: columns,
        data: tableData
    } , useGlobalFilter, useSortBy, usePagination)

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
    } = dashboardHomeTable

    const { globalFilter, pageIndex, pageSize} = state

    return (
        <div className="dashboard-home-table">
            <div className="the-dashboard-home-table">
                <DashboardHomeFilter filter={globalFilter} setFilter = {setGlobalFilter}/>
                <table className="hdht" {...getTableProps()}>
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
                    <tbody {...getTableBodyProps}>
                        {
                            page.map(row => {
                                prepareRow(row)
                                return(
                                    <tr {...row.getRowProps()}>
                                        {
                                            row.cells.map(cell => {
                                                return (
                                                    <td {...cell.getCellProps()}>
                                                        {
                                                            cell.render("Cell")
                                                        }
                                                    </td>)
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="lower-table-items">
                    <span>
                        Page {" "}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length} {" "}
                        </strong>
                    </span>
                    <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                        {
                            [5, 10, 20, 25].map((pageSize) => (
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
        </div>
    )
}

export default DashboardHomeTable
