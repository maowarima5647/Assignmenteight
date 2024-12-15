import React from 'react';
import { Link } from 'react-router-dom';

const Cate = ({ category }) => {
  const { id, img, name, price } = category;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className="px-10 py-10 bg-gray-100">
          <img src={img} alt={name} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{price}</p>
          <div className="card-actions">
            <Link to={`/cate/${id}`}>
              <button className="btn rounded-xl">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cate;
