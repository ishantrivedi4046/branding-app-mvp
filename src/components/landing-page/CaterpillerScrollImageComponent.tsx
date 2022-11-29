import React from 'react';

const CaterpillerScrollImageComponent: React.FC = () => (
  <div className='image-container'>
    <div>
      <img src='images/section6-img-1.svg' alt='micro1' className='image1' />
    </div>
    <div style={{ animationDelay: '0.5s' }}>
      <img src='images/section6-image-2.svg' alt='micro2' className='image2' />
    </div>
    <div style={{ animationDelay: '1s' }}>
      <img src='images/section6-image-3.svg' alt='micro3' className='image3' />
    </div>
    <div style={{ animationDelay: '1.5s' }}>
      <img src='images/cr1.svg' alt='micro1' className='image1' />
    </div>
  </div>
);

export default CaterpillerScrollImageComponent;
