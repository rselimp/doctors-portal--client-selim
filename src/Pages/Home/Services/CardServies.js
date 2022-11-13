import React from 'react';

const CardServies = ({service}) => {
    const {name, description, icon} = service
    return (
        <div className="card bg-sky-50 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={icon} alt="" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
  </div>
</div>
    );
};

export default CardServies;