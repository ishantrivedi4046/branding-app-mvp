import { Button, Carousel, Col } from 'antd';
import Footer from 'components/Footer';
import Header from 'components/Header';
import WorkingStepsCardComponent from 'components/landing-page/WorkingStepsCardComponent';
import {
  COMMUNITY_ROW_ONE_IMAGES,
  COMMUNITY_ROW_TWO_IMAGES,
} from 'constants/home-page.constant';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LANDING_HEADER_ROUTE_LIST } from 'routes/header.route';
import '../styles/container/landing-container.styles.scss';

const LandingContainer: React.FC = () => {
  const history = useNavigate();
  const handleSignUpButtonClick = () => {
    history('/signup');
  };
  return (
    <div className='landing-container'>
      <Header
        routes={LANDING_HEADER_ROUTE_LIST}
        className='landing-container-header'
      />
      <div className='landing-container-content'>
        <div className='landing-container-content-image'>
          <img src='images/head1.svg' alt='top' />
        </div>
        <div className='landing-container-content-qna'>
          <img src='images/sec2.svg' alt='section-2' />
        </div>
        <div className='landing-container-content-section-3'>
          <div className='title'>How it works</div>
          <div className='working-container'>
            <Col>
              <WorkingStepsCardComponent
                step='Sign Up'
                stepCount='01'
                iconPath='images/file.svg'
                styles={{ height: '25.813rem', backgroundColor: '#FF4D24' }}
              />
              <WorkingStepsCardComponent
                step='Connect'
                stepCount='02'
                iconPath='images/group.svg'
                styles={{ height: '35rem', backgroundColor: '#C4FF78' }}
              />
              <img src='images/image1.svg' alt='group' />
            </Col>
            <Col>
              <img src='images/image2.svg' alt='group' />
              <WorkingStepsCardComponent
                step='Create'
                stepCount='03'
                iconPath='images/camera.svg'
                styles={{
                  height: '22.25rem',
                  backgroundColor: '#3CA2F3',
                  marginTop: '1rem',
                }}
              />
              <WorkingStepsCardComponent
                step='Get Paid'
                stepCount='04'
                iconPath='images/money.svg'
                styles={{
                  height: '32.375rem',
                  backgroundColor: '#983535',
                  marginTop: '1rem',
                }}
              />
            </Col>
          </div>
        </div>
        <div className='landing-container-content-section-4'>
          <div className='brand-container'>
            <div className='brand-text'>
              <div className='title'>Get exposed to big brands.</div>
              <div className='description'>
                Brands that you share values with. venenatis, quam ultrices
                turpis duis. A hendrerit hendrerit at ipsum pellentesque sit
                elit nunc. Ipsum quam id est vel curabitur. Lectus aliquet sit
                ut augue euismod.
              </div>
            </div>
            <div className='brand-content'>
              <div className='images-container'>
                <div className='brand-card-1'>
                  <img src='images/brand.svg' alt='brand' />
                </div>
                <img
                  src='images/brandWomen.svg'
                  alt='brand-women'
                  className='brand-women'
                />
              </div>
              <div className='gif-container'>
                <img src='assets/brandImage.gif' alt='gif' className='gif' />
                <div className='brand-card-2'>
                  <img src='images/zim.svg' alt='brand' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='landing-container-content-section-5'>
          <div className='expression-container'>
            <div className='col-1'>
              <img
                src='images/image3.svg'
                alt='expression-images'
                className='expression-image'
              />
              <div className='expression-card' />
            </div>
            <div className='col-2'>
              <div className='title'>
                Express yourself.
                <br /> pitch yourself.
                <br /> Be yourself with RUME.
              </div>
              <div className='description'>
                Make money doing what you love. Mollis elit bibendum interdum
                venenatis, quam ultrices turpis duis. A hendrerit hendrerit at
                ipsum pellentesque sit elit nunc. Ipsum quam id est vel
                curabitur.
              </div>
            </div>
            <div className='col-3'>
              <img src='assets/expression.gif' alt='gif' className='gif' />
            </div>
          </div>
        </div>
        <div className='landing-container-content-section-6'>
          <div className='micro-influencer-container'>
            <div className='image-container'>
              <img src='images/micro1.jpeg' alt='micro1' className='image1' />
              <img src='images/micro2.svg' alt='micro2' className='image2' />
              <img src='assets/micro3.gif' alt='micro3' className='gif' />
            </div>
            <div className='influencer-text-container'>
              <div className='title'>
                A platform tailored to micro-influencers.
              </div>
              <div className='description'>
                We’re here to show you the ropes and give you the power to level
                up! A hendrerit hendrerit at ipsum pellentesque sit elit nunc.
                Ipsum quam id est vel curabitur. Lectus aliquet sit ut augue
                euismod.
              </div>
            </div>
          </div>
        </div>
        <div className='landing-container-content-section-7'>
          <div className='community-title'>
            Join our fast <br /> growing community.
          </div>
          <div className='image-rows-container'>
            <Carousel
              slidesToShow={5}
              centerMode
              dots={false}
              draggable
              swipeToSlide
              focusOnSelect
            >
              {COMMUNITY_ROW_ONE_IMAGES.map((p) => (
                <div key={p} className='image-container'>
                  <img src={p} alt={p} />
                </div>
              ))}
            </Carousel>
            <Carousel
              slidesToShow={5}
              centerMode
              draggable
              dots={false}
              swipeToSlide
              focusOnSelect
            >
              {COMMUNITY_ROW_TWO_IMAGES.map((p) => (
                <div key={p} className='image-container'>
                  <img src={p} alt={p} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className='landing-container-content-section-8'>
          <div className='comment-section'>
            <img className='commentor' src='images/sec8.svg' alt='commentor' />
            <div className='comment'>
              <div className='text'>
                “ RUME simplifies the process of creators networking with their
                desired businesses or collaborators. It’s motivating and
                inspiring to use this platform.”
              </div>
              <div className='commentor-name'>
                <div className='name'>Rachel Kennedy</div>
                <div className='designation'>
                  Fashion Influencer + Content Creator
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='landing-container-content-section-9'>
          <img alt='signup-text' src='images/sec9.svg' />
          <Button className='signup-button' onClick={handleSignUpButtonClick}>
            Sign Up
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingContainer;
