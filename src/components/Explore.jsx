import React, { useEffect, useState } from 'react';
import Cate from './cate';

const Explore = () => {
  const [category, setCategory] = useState([]); // All categories
  const [selectedCategory, setSelectedCategory] = useState(''); // Selected category

  useEffect(() => {
    fetch('/category.json')  // Make sure this path is correct
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  // Filter categories based on selectedCategory
  const filteredCategories = selectedCategory
    ? category.filter((cate) => cate.type.toLowerCase() === selectedCategory.toLowerCase())
    : category;

  console.log(filteredCategories); // Log to check the filtered categories

  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-black py-7 m-7">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="grid grid-cols-1 md:grid-2 lg:grid-cols-3 gap-8">
        <div className="bg-slate-100 w-1/2 rounded-lg mx-auto">
          <button
            className="btn rounded-2xl bg-white m-5"
            onClick={() => setSelectedCategory('')}
          >
            All Products
          </button>
          <button
            className="btn rounded-2xl bg-white m-5"
            onClick={() => setSelectedCategory('laptop')}
          >
            Laptops
          </button>
          <button
            className="btn rounded-2xl bg-white m-5"
            onClick={() => setSelectedCategory('mobile')}
          >
            Phones
          </button>
          
         
          <button
            className="btn rounded-2xl bg-white m-5"
            onClick={() => setSelectedCategory('watch')}
          >
            Watch
          </button>
        </div>
        {/* Render filtered categories */}
        {filteredCategories.map((cate) => (
          <Cate category={cate} key={cate.id} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
