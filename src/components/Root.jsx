import React from 'react';

import { Outlet } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer'
const Root = () => {
    return (
        <div>
        
          
            <Outlet></Outlet>
           <Footer></Footer> 
        </div>
    );
};

export default Root;