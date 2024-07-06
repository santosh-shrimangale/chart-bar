import React, { useState } from 'react';

import "./Chart.css";
import BarChart from './BarChart';

function Chart() {
    const [isHide, setIsHide] = useState(false);

    return (
        <div className='chart-container'>
            <button className='toggleButton' onClick={() => setIsHide(prev => !prev)}>Show Chart</button>
            {
                isHide ? <BarChart /> : null
            }
        </div>
    )
}

export default Chart ; 