import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Navbar';

const CategoryDetails = () => {
    const {id} = useParams();
   
    const data = useLoaderData();
    const Id = parseInt(id);
    const cate = data.find(cate =>cate.id === Id)
   const {img,name,price,ram,storage,display,graphics,button} = cate;




   const handleaddcart = () =>{

   }
    return (
        <div>
            <Navbar></Navbar>
            <div className='text-center mb-7 bg-violet-600 p-11 text-white '>
                <h1 className="text-3xl font-bold">
                    Products details
                </h1>
           <p>Explore the latest gadgets that will take your experience to the next  From
     smart devices <br/>to the coolest accessories, we have it all!</p>
            </div>
        <div className='flex justify-center  shadow-2xl -mt-11 p-5 bg-slate-200 w-1/2 rounded-lg mx-auto mb-7 px-7'>
        <div>
        <img src={img } alt="" />  
        </div>
        <div className='px-7'>
            <h2 className="text-2xl font-bold">{name}</h2>
        <p> price: {price}</p>
        <h2 className="text-1xl font-bold">specification:</h2>
            <p>1: {ram}</p>
            <p>2: {storage}</p>
            <p>1: {display}</p>
            <p>2: {graphics}</p>
        
            <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2" />
</div>

<button onClick={handleaddcart} className='btn bg-violet-500 text-white'>{button}</button>
<button className='btn outline-indigo-600'>wish list </button>

        </div>
        
        </div>
        </div>
    );
};

export default CategoryDetails;