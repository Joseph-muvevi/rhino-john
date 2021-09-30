import React, {
    useState, 
    useEffect, 
    // useMemo
} from 'react'
import axios from "axios"
import { Line } from "react-chartjs-2"

const AnaliticsBannerLineChart = () => {
    const [chartData, setChartData] = useState({})
    // const [pieces, setPieces] = useState([])
    // const [dateIn, setDateIn] = useState([])

    const shipmentURL = "http://localhost:8080/api/storageshipment"
  
    const Chart = () => {
        let empPiece = []
        let empDateIn = []

        axios.get(shipmentURL)
            .then(res => {
                // console.log(res.data);
                for (const dataObj of res.data){
                    empPiece.push(parseInt(dataObj.pieces))
                    empDateIn.push(dataObj.datein)
                }
                // console.log(empPiece)
                // console.log(empDateIn)
                setChartData({
                    labels: empDateIn,
                    datasets: [{
                        label: "Pieces against Date authored",
                        data: empPiece,
                        backgroundColor: "#656565",
                        borderColor: "#656565",
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
            <Line style={{width: "100%"}} data={chartData} options={{
                        responsive:true,
                        title: { text: "THICCNESS SCALE", display: true },
                        scales:{
                            yAxes:[ {
                                ticks:{
                                    beginAtZero: true
                                }
                            }
                            ]
                        }
                    }}/>
        </div>
    )
}

export default AnaliticsBannerLineChart
