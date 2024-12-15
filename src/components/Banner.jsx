import React from 'react';
import bannerimg from '../assets/img file/banner (2).jpg'
const Banner = () => {
    return (
        <div>
            <div className='text-center text-white py-5 my-5 '>
    <h1 className='text-5xl font-bold my-5'>
    Upgrade Your Tech Accessorize with<br/> Gadget
     Heaven Accessories
    </h1>
    <h3 className='py-5'> Explore the latest gadgets that will
       take your experience to the next level. From smart devices to the coolest 
       accessories, we have it all!</h3>
       <button className="btn rounded-2xl text-2xl text-purple-700">Shop Now</button>
  </div>

 




<div className='  shadow-2xl  p-5  rounded-xl mx-auto  top-5 mb-80 reletive'>
<img className='h-80 w-1/2 -right-8 left-80 rounded-xl absolute' src={bannerimg} alt="" />

</div>

  



        </div>
    );
};

export default Banner;