import React, {useEffect, useState} from 'react';
import Pages from "../Pages";
import Entry from '../Devices/entrypage';
import Devices from '../Devices';
function Heading(props) {
    // console.log(props)
    const redir=(e)=>{
        setpages(e.target.innerText);
    }
    const redir2=(e)=>{
        setregion(e.target.innerText);
    }
    const redir3=(e)=>{
        setdevice(e.target.innerText);
    }
    const section2 =(props)=>{
        const value=pages; 
        if(value==="Top pages"){
            return( <div>
                <div className="row">
                <div className="col-lg-6 column">
                    <h3>Top Pages</h3>
                </div>
                <div className="col-lg-6 column2">
                    <a className="nav-link active">Top pages</a>
                    <a className="nav-link" onClick={redir}>Entrypages</a>
                    <a className="nav-link" onClick={redir}>ExitPages</a>
                </div>
            </div><Pages data={props.toppages}/>
            </div>
            );
              
        }
        else if(value==='Entrypages'){
            return(<div>
                <div className="row">
                <div className="col-lg-6 column">
                    <h3>Entry pages</h3>
                </div>
                <div className="col-lg-6 column2">
                    <a className="nav-link" onClick={redir}>Top pages</a>
                    <a className="nav-link active">Entrypages</a>
                    <a className="nav-link" onClick={redir}>ExitPages</a>
                </div>
            </div><Entry data={props.entrypage} check="0"/>
            </div>
            );
        }
        else if(value === "ExitPages"){
            return(<div>
                <div className="row">
                <div className="col-lg-6 column">
                    <h3>Exit pages</h3>
                </div>
                <div className="col-lg-6 column2">
                    <a className="nav-link" onClick={redir}>Top pages</a>
                    <a className="nav-link" onClick={redir}>Entrypages</a>
                    <a className="nav-link active">ExitPages</a>
                </div><Entry data={props.exitpage} check="1"/>
            </div>
            </div>
            );
        }
    }
    const section3 =(props)=>{
        const value=area; 
        if(value==="countries"){
            return(<div>
                <div className="row">
                <div className="col-lg-6 column">
                    <h3>Countries</h3>
                </div>
                <div className="col-lg-6 column2">
                    <a className="nav-link active">countries</a>
                    <a className="nav-link" onClick={redir2}>Regions</a>
                    <a className="nav-link" onClick={redir2}>cities</a>
                </div>
            </div><Entry data={props.country} check="4"/>
            </div>
            );
              
        }
        else if(value==='Regions'){
            return(<div>
                <div className="row">
                <div className="col-lg-6 column">
                    <h3>Regions</h3>
                </div>
                <div className="col-lg-6 column2">
                    <a className="nav-link" onClick={redir2}>countries</a>
                    <a className=" nav-link active">Regions</a>
                    <a className="nav-link" onClick={redir2}>cities</a>
                </div>
            </div><Entry data={props.region} check="5"/>
            </div>
            );
        }
        else if(value === "cities"){
            return(<div>
                <div className="row">
                <div className="col-lg-6 column">
                    <h3>cities</h3>
                </div>
                <div className="col-lg-6 column2">
                    <a className="nav-link" onClick={redir2}>countries</a>
                    <a className="nav-link" onClick={redir2}>Regions</a>
                    <a className="nav-link active">cities</a>
                </div>
            </div><Entry data={props.city} check="6"/>
            </div>
            );
        }
    }
    const section4 =(props)=>{
        //console.log(props);
        const value=device; 
        if(value==="Size"){
            return(<div>
                <div className="row">
                <div className="col-lg-6 column">
                    <h3>Devices</h3>
                </div>
                <div className="col-lg-6 column2">
                    <a className="nav-link active" >Size</a>
                    <a className="nav-link" onClick={redir3}>Browser</a>
                    <a className="nav-link" onClick={redir3}>OS</a>
                </div>
            </div><Devices value={props.value} desktop={props.desktop} />
            </div>
            );
              
        }
        else if(value==='Browser'){
            return(<div>
                <div className="row">
                <div className="col-lg-6 column">
                    <h3>Devices</h3>
                </div>
                <div className="col-lg-6 column2">
                    <a className="nav-link" onClick={redir3}>Size</a>
                    <a className="nav-link active" >Browser</a>
                    <a className="nav-link" onClick={redir3}>OS</a>
                </div>
            </div><Entry data={props.browser} check="2"/>
            </div>
            );
        }
        else if(value === "OS"){
            return(<div>
                <div className="row">
                <div className="col-lg-6 column">
                    <h3>Devices</h3>
                </div>
                <div className="col-lg-6 column2">
                    <a className="nav-link" onClick={redir3}>Size</a>
                    <a className="nav-link" onClick={redir3}>Browser</a>
                    <a className="nav-link active">OS</a>
                </div>
            </div><Entry data={props.os} check="3"/>
            </div>
            );
        }
    }
    const [pages, setpages] = useState("Top pages");
    const [area, setregion] = useState("countries");
    const [device, setdevice] = useState("Size");
    if (props.data === "Top Sources") {
        return (    <div>
            <div className="row">
                <div className="col-lg-6 column">
                    <h3>Top Sources</h3>
                </div>
                <div className="col-lg-6 column2">
                    <a className="nav-link">All</a>
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Campaigns</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">UTM Medium</a></li>
            <li><a className="dropdown-item" href="/">UTM Source</a></li>
            <li><a className="dropdown-item" href="/">UTM Campaigns</a></li>
          </ul>
                </div>
            </div> <div className='nodata'> Not data Yet</div>
            </div>
        );
    } else if (props.data === "Top pages") {
        return (
            <div> {section2(props)} </div>
        );
    }else if (props.data === "Countries") {
        return (
            <div> {section3(props)}</div>
        );
    }else if (props.data === "Devices") {
        return (
            <div> {section4(props)}</div>
        );
    }
}

export default Heading;
