import React from 'react';
import Navbar from '../Navbar';
const Statistics = () => {
    return (
        <div>
        <Navbar></Navbar>

        <div className='text-center mb-7 bg-violet-600 p-11 text-white '>
                <h1 className="text-3xl font-bold">
                Statistics
                </h1>
           <p>Explore the latest gadgets that will take your experience to the next  From
     smart devices <br/>to the coolest accessories, we have it all!</p>
            </div>

            <div>
                <h3 className="text-1xl font-bold">
                Statistics <br />

                <h2 className="text-4xl font-bold text-violet-600 text-center py-7">
          No data to show Statistics
                </h2>
                </h3>
            </div>
        </div>
    );
};

export default Statistics;