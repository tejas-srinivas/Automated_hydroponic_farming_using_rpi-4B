import React from 'react'
import axios from 'axios';
import moment from 'moment/moment';
import { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
} from "chart.js";

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);


const DashChart = () => {
    const [chartData, setChartData] = useState([])
    const fetchSensorData = async () => {
        try {
            const response = await axios.get("http://localhost:5001/sensor_data")
                // console.log(response.data)
                setChartData(response.data) 
        }
        catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
        fetchSensorData()
        const intervalId = setInterval(fetchSensorData, 61000);

        return () => clearInterval(intervalId);
    }, [])


    if(chartData){
        const phChartData = chartData.map(value => ({ x: value.ph,y: value.timestamp}))
        const ecChartData = chartData.map(value => ({ x: value.ec,y: value.timestamp}))
        //console.log(tempChartData)
        const data = {
            labels: phChartData.map(value => moment(value.y).format('LT')),
            datasets: [
                {
                    fill: true,
                    label: "pH of Nutrient Solution",
                    data: phChartData.map(value => value.x),
                    borderColor: 'hsl(250, 60%, 61%)',
                    // backgroundColor: '#dd10e7',
                    pointBorderColor:'green',
                    tension:0.4
                },
                {
                    fill: true,
                    label: "ec of Nutrient Solution",
                    data: ecChartData.map(value => value.x),
                    borderColor: 'hsl(120, 90%, 29%)',
                    // backgroundColor: 'hsl(252, 33%, 12%)'
                    pointBorderColor:'hsl(250, 60%, 61%)',
                    tension:0.4,
                    
                }
            ]
        }

        const options = {
            responsive:true,
            elements: {
            point:{
                radius:5,
                borderWidth: 1.5,
                hoverRadius:4
                }
            }
            
        }

        

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    )
    }
}

export default DashChart