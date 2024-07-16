import React from 'react';
import mysrc from '../Assets/mission.jpeg'

const Mission = () => {
  return (
    <div className='subcontainer'>
      <div className='content'>
      <h2>Our Mission</h2>
      <p className='p1'>Our mission at Agro Mart is to empower gardeners and farmers by offering a diverse range of products and expert advice, fostering sustainable practices and nurturing beautiful green spaces.</p>
      </div>
      <div className='image-2'>
        <img className="iamg12" src={mysrc}/>
      </div>
    </div>
  );
};

export default Mission;
