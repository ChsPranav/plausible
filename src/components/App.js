import React from 'react';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import rrwebPlayer from 'rrweb-player';
import 'rrweb-player/dist/style.css';


const App = () => {
  
    return (
        <div>
            <Navbar />
            <Dashboard />
        </div>
    )
}


export default App;