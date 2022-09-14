import { Button } from 'antd';
import React from 'react';
import '../styles/component/header.styles.scss';

const HeaderContent: React.FC = () => (
  <div className='header-container'>
    <div className='title'>
      <span className='text'>Dashboard</span>
    </div>
    <div className='extras'>
      <Button>LOGOUT</Button>
    </div>
  </div>
);

export default HeaderContent;
