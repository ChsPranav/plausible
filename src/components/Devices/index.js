import React from 'react';
import './devices.css';

const Devices = (props) => {
    // console.log("check");
    // console.log(props);
    return (
        <div ><div className='row'><div className='col-6'><p className='card-text'>Mobile</p> </div><div className='col-6'><p className='card-text'>: {props.value}</p></div><div className='col-6'><p className='card-text'>Desktop</p> </div><div className='col-6'><p className='card-text'>: {props.desktop}</p></div></div></div>
    )
}

export default Devices;
