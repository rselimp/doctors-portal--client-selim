import React from 'react';
import treat from '../../assets/images/treatment.png';

const Treatment = () => {
    return (
        <div className="hero mt-8 mx-8">
  <div className="hero-content flex-col lg:flex-row gap-20">
    <img src={treat} className="max-w-sm rounded-lg shadow-2xl" alt='' />
    <div>
      <h1 className="text-5xl font-bold w-3/4">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6 w-3/4">It is a long Established fact that a reader will be distractedby the readable content of a page when looking at its layout.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Treatment;