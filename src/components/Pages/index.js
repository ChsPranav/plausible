import React from 'react';
import './Pages.css';

const Pages = ({data}) => {
    const renderPages = () => {
        return (<Renderdata data={data}/>);
       
    }
    const Renderdata=({data})=>{
        return data.map(ele => {
            return ( <div className='row'><div className='col-6'><p className='card-text'>{ele.page}</p> </div><div className='col-6'><p className='card-text'>: {ele.visitors}</p></div></div>
                
            )
        })
    }
    return (
        <div className='page-wrapper'>
            {renderPages()}
        </div>
    )
}

export default Pages;