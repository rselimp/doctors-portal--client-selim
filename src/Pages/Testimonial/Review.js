import React from 'react';

const Review = ({rvw}) => {
    const {name,img,review,location} = rvw
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
                <p>{review}</p>
            <div className="card-actions justify-start mt-4">
            <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="" />
            </div>
                </div>" 
            <div>
                <h1>{name}</h1>
                <h2>{location}</h2>
            </div>
    </div>
  </div>
</div>
    );
};

export default Review;