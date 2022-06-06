import React from 'react';
import './card.css';
import Heading from './heading.js';
function card(props) { 
    //console.log(props);
    if (props.title === 'Top pages') {
        return (
            <div className='card'>
                <Heading data={
                        props.title
                    }
                    toppages={
                        props.data
                    }
                    entrypage={
                        props.data2
                    }
                    exitpage={
                        props.data3
                    }/>
            </div>
        );
    } else if (props.title === "Devices") {
        return(<div className='card'><Heading data={
            props.title
        }
        value={
            props.value
        }
        desktop={
            props.desktop
        }
        browser={props.Browser}
        os={props.os}/>
</div>);
        
    }else if (props.title === "Countries") {
        return(<div className='card'><Heading data={
            props.title
        }
        city={
            props.city
        }
        country={
            props.country
        }
        region={props.region}/>
</div>);
        
    }

    return (
        <div className='card'>
            <Heading data={
                props.title
            }/>
        </div>
    );
}
export default card;
