import React from 'react';
import '../styles/container/dashboard.styles.scss';
import { Button } from 'antd';
import FooterComponent from 'components/Footer';
import Header from 'components/Header';
import { DASHBOARD_HEADER_ROUTE_LIST } from 'routes/header.route';
import { useNavigate } from 'react-router-dom';

const DashboardContainer: React.FC = () => {
  const history = useNavigate();
  const handleGoToHome = () => {
    history('/home');
  };
  return (
    <div className='dashboard-container'>
      <Header routes={DASHBOARD_HEADER_ROUTE_LIST} />
      <div className='dashboard-image'>
        <div className='image-container'>
          <img src='images/successfullsubmission.svg' alt='success-img' />
          <Button className='home_button' onClick={handleGoToHome}>
            Go Back To Home
          </Button>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default DashboardContainer;
