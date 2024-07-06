import React from 'react'
import CHART_DATA from './data';
import { motion } from 'framer-motion';

function BarChart() {
    return (
        <div className='chart'>

            {
                CHART_DATA.map((chart) => {
                    return (
                        <>
                            <motion.div key={chart.id} initial={{ height: 0 }}
                                animate={{ height: chart.ticketCount * 7 }}
                                exit={{ height: 0 }}
                                style={{ backgroundColor: chart.colour }}
                            ><span className='tooltips'>Legal{chart.name}</span></motion.div>
                            <p className='y-para'>Number Of tickets</p>
                            <p className='x-para'>Departments</p>
                        </>
                    )
                })
            }

        </div>
    )
}

export default BarChart