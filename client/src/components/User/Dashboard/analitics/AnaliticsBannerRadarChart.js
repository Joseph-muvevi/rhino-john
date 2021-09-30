import React, {useState, useEffect} from 'react'
import axios from "axios"
import { Pie } from "react-chartjs-2"

const AnaliticsBannerRadarChart = () => {
    const [chartData, setChartData] = useState({})
    const [wareHouseType, setWareHouseType] = useState([])
    const [pieces, setPieces] = useState([])


    const Chart = () => {
        let empwarehouseType = []
        let empPieces = []

        axios.get("http://localhost:8080/api/storageshipment")
            .then(res => {
                console.log(res.data)
                for (const dataObj of res.data){
                    empwarehouseType.push(dataObj.warehousetype)
                    empPieces.push(parseInt(dataObj.pieces))
                    console.log(empwarehouseType)
                }
                setChartData({
                    labels: [
                        "climatecontrolled",
                        "public",
                        "private",
                        "distribution",
                    ],
                    datasets: [{
                        label: "Warehouse type against pieces",
                        data: empPieces,
                        backgroundColor: [
                            "#656565",
                            "#565656",
                            "#383433",
                            "#131111"
                        ],
                        borderColor: "#1f1f1f",
                        fill: true
                    }]
                })
            })
            .catch(er => console.log(er))
    }

    useEffect(() => {
        Chart()
    }, [])
    return (
        <div>
            <Pie data={chartData} options={{responsive: true}}/>
        </div>
    )
}

export default AnaliticsBannerRadarChart
