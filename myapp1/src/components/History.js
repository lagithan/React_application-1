import React from 'react';
import mysrc from '../Assets/history.jpeg'

const History = () => {
  return (
    <div className='subcontainer'>
      <div className='content'>
      <h2 className='head2'>Our History</h2>
      <p className='p1'>Agro Mart started with a passion for gardening and a vision to provide enthusiasts and professionals alike with a reliable source for quality plants, seeds, and gardening supplies.</p>
      </div>
      <div className='image-2'>
        <img className="iamg12" src={mysrc}/>
      </div>
    </div>
  );
};

export default History;
