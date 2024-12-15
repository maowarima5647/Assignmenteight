import React from 'react';
import Banner from './Banner';
import Explore from './Explore';
import Navbar from '../Navbar';
const Home = () => {
    return (
        <div>
             <div className='max-w-6xl mx-auto  bg-purple-500'><Navbar></Navbar>
            <Banner></Banner>
             </div>
             <div>
             <Explore></Explore>
             </div>
           
        
        
        </div>
    );
};

export default Home;