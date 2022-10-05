import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';
import { LANDING_HEADER_ROUTE_LIST } from 'routes/header.route';
import '../styles/container/landing-container.styles.scss';

const LandingContainer: React.FC = () => (
  <div className='landing-container'>
    <Header
      routes={LANDING_HEADER_ROUTE_LIST}
      className='landing-container-header'
    />
    <div className='landing-container-content'>
      <div className='landing-container-content-image'>
        <img src='public/images/landingTop.svg' alt='top' />
        <div className='top-images'>
          <img src='public/images/rec1.png' alt='rec-1' className='image-1' />
          <img src='public/images/rec2.png' alt='rec-2' className='image-2' />
          <img src='public/images/rec3.png' alt='rec-3' className='image-3' />
          <img src='public/images/rec4.png' alt='rec-4' className='image-4' />
        </div>
        <div className='landing-container-content-image-text'>
          <div className='lable'>
            <span>FOR INFLUENCERS</span>
            <span>.</span>
            <span>MOST RECENT CAMPAIGN</span>
          </div>
          <div className='title'>
            <span>GEORGES ANTONI</span>
            <span>FOR ELLE MAGAZINE</span>
          </div>
        </div>
      </div>
      <div className='landing-container-content-qna'>
        <div className='landing-container-content-qna-lable'>
          <span>WHAT IS KIT?</span>
        </div>
        <div className='landing-container-content-qna-title'>
          <span>
            KIT IS A TOOL THAT SIMPLIFIELS THE NETWORKING PROCESS BETWEEN{' '}
            <span className='highlighted-text'>BRANDS </span> AND{' '}
            <span className='highlighted-text'>INFLUENCERS</span> BY GIVING EACH
            GROUP DIRECT EXPOSURE TO EACH OTHER.
          </span>
        </div>
      </div>
      <div className='landing-container-content-image'>
        <img src='public/images/landingBottom.svg' alt='bottom' />
        <div className='landing-container-content-image-text'>
          <div className='lable'>
            <span>FOR BUSINESSES</span>
          </div>
          <div className='title'>
            <span>GAIN FULL ACCESS TO THE LARGEST</span>
            <span>MICRO-INFLUENCER & CONTENT</span>
            <span>CREATOR DATA-BASE</span>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default LandingContainer;
