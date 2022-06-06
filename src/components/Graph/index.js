import React from 'react';

import "./Graph.css";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
function graph(timeSeries) {
    // console.log(timeSeries);

    // console.log(timeSeries);

    // console.log(data);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'visitors vs date'
            }
        }
    };
    if (timeSeries.data.length === 0) {
        // console.log("true");
        return (<div><img src='.\..\public\images\loading.gif'></img></div>);
    }
    const time = timeSeries.data.map(ele => ele.date);
    let y = [];

    if (timeSeries.yaxis === 'UNIQUE VISITORS') {
        y = timeSeries.data.map((ele) => ele.visitors)
    }
    else if (timeSeries.yaxis === 'TOTAL PAGEVIEW') {
        // console.log('hello world');
        y = timeSeries.data.map((ele) => {
            // console.log(ele);
            return ele.pageviews
        })
    }
    else if (timeSeries.yaxis === 'BOUNCE RATE') {
        y = timeSeries.data.map((ele) => {
            if (ele.bounce_rate === null) {
                return 0;
            }
            return ele.bounce_rate;
        });
    }
    else if (timeSeries.yaxis === 'VISIT DURATION') {
        y = timeSeries.data.map((ele) => {
            if (ele.visit_duration === null) {
                return 0;
            }
            return ele.visit_duration;
        });
    }

    // console.log(y);
    const data = {
        labels: time,
        datasets: [
            {
                label: 'visitors',
                data: y,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)'
            },
        ]
    };
    // console.log(data)
    return (<Line className="graph" options={options}
        data={data} />);
}


export default graph;