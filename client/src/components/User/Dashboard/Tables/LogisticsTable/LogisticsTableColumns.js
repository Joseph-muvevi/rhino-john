// grouping headers
export const GROUPED_LOGISTICS_COLUMNS = [
    {
        Header: "Personal Info",
        columns: [
            {
                Header : "Full Names",
                accessor: "fullnames"
            },
            {
                Header : "Email",
                accessor: "email"
            },
        ]
    }, 
    {
        Header: "Logistics Info",
        columns: [
            {
                Header : "Company",
                accessor: "company"
            },
            {
                Header : "Country Departed",
                accessor: "departurecountry"
            },
            {
                Header : "City Departed",
                accessor: "departurecity"
            },
            {
                Header : "Country Arrived",
                accessor: "arrivalcountry"
            },
            {
                Header : "City Arrived",
                accessor: "arrivalcity"
            },
            {
                Header : "Pieces",
                accessor: "pieces"
            },
        ]
    }
]