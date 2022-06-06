import React from 'react';

import "./Metric.css"
const Metric = (props) => {
    // console.log(props);
    const metricClicked = (e) => {
        // console.log("Hello world");
        // console.log(e.target.innerText);
        props.setMetric(e.target.innerText);

    }
    return (
        <>
            <div className='metric' >
                <h5 className='title' onClick={metricClicked}> {props.title} </h5>
                <h4> {props.value} </h4>
            </div>
        </>
    )
}

export default Metric;