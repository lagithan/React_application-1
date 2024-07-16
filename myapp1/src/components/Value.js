import React from 'react';
import mysrc from '../Assets/value.jpeg'

const Values = () => {
  return (
    <div className='subcontainer'>
      <div className='content'>
      <h2>Our Values</h2>
      <p className='p1'>At Agro Mart, we value integrity, innovation, and environmental responsibility. We prioritize transparency in our operations, constantly innovate to improve customer experience, and promote sustainable gardening practices.</p>
      </div>
      <div className='image-2'>
        <img className="iamg12" src={mysrc}/>
      </div>
    </div>
  );
};

export default Values;
