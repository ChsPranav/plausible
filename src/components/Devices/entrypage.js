import React from 'react';
import './devices.css';

const Devices = (props) => {
  const Renderpages =(info)=>{
    return (<div className='row'><div className='col-6'> {info.entry_page}</div><div className='col-6'> {info.visitors}</div></div>);
  }
  const Renderpages2 =(info)=>{
    return (<div className='row'><div className='col-6'> {info.exit_page}</div><div className='col-6'> {info.visitors}</div></div>);
  }
  const Renderpages3 =(info)=>{
    return (<div className='row'><div className='col-6'> {info.browser}</div><div className='col-6'> {info.visitors}</div></div>);
  }
  const Renderpages4 =(info)=>{
    return (<div className='row'><div className='col-6'> {info.os}</div><div className='col-6'> {info.visitors}</div></div>);
  }
  const Renderpages5 =(info)=>{
    return (<div className='row'><div className='col-6'> {info.country}</div><div className='col-6'> {info.visitors}</div></div>);
  }
  const Renderpages6 =(info)=>{
    return (<div className='row'><div className='col-6'> {info.region}</div><div className='col-6'> {info.visitors}</div></div>);
  }
  const Renderpages7 =(info)=>{
    return (<div className='row'><div className='col-6'> {info.city}</div><div className='col-6'> {info.visitors}</div></div>);
  }

    //console.log(props);
    if(props.check==="0"){
      return (
        <div ><br /><div className='row'><div className='col-6'>Entrypage </div><div className='col-6'> Unique Entrances</div></div>{props.data.map(Renderpages)}</div>
    )
    }else if(props.check==="1"){
      return (
        <div ><br /><div className='row'><div className='col-6'>Exit Page </div><div className='col-6'> Unique exit</div></div>{props.data.map(Renderpages2)}</div>
    )
    }else if(props.check==="2"){
      return (
        <div ><br /><div className='row'><div className='col-6'>Browser </div><div className='col-6'> Visitors</div></div>{props.data.map(Renderpages3)}</div>
    )
    }else if(props.check==="3"){
      return (
        <div ><br /><div className='row'><div className='col-6'>Operating System </div><div className='col-6'> Visitors</div></div>{props.data.map(Renderpages4)}</div>
    )
    }else if(props.check==="4"){
      return (
        <div ><br /><div className='row'><div className='col-6'>Country</div><div className='col-6'> Visitors</div></div>{props.data.map(Renderpages5)}</div>
    )
    }else if(props.check==="5"){
      return (
        <div ><br /><div className='row'><div className='col-6'>regions</div><div className='col-6'> Visitors</div></div>{props.data.map(Renderpages6)}</div>
    )
    }
    else if(props.check==="6"){
      return (
        <div ><br /><div className='row'><div className='col-6'>city</div><div className='col-6'> Visitors</div></div>{props.data.map(Renderpages7)}</div>
    )
    }
    
}

export default Devices;
