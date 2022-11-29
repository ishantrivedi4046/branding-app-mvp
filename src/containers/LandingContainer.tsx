/* eslint-disable jsx-a11y/media-has-caption */
import { Carousel, Col } from 'antd';
import AnimatedButton from 'components/button';
import Footer from 'components/Footer';
import Header from 'components/Header';
import AnimatedCard from 'components/landing-page/AnimatedCard';
import CaterpillerScrollImageComponent from 'components/landing-page/CaterpillerScrollImageComponent';
import QNAComponent from 'components/landing-page/QNAComponent';
import WorkingStepsCardComponent from 'components/landing-page/WorkingStepsCardComponent';
import {
  COMMUNITY_ROW_ONE_IMAGES,
  COMMUNITY_ROW_TWO_IMAGES,
  LANDING_PAGE_HEADER_IMAGES,
} from 'constants/home-page.constant';
import withScrollObserver from 'hoc/withScrollObserver';
import React, { useCallback } from 'react';
import { LANDING_HEADER_ROUTE_LIST } from 'routes/header.route';
import '../styles/container/landing-container.styles.scss';

const LandingContainer: React.FC = () => {
  const renderAnimatedText = useCallback((component: any, id: string) => {
    const Component = withScrollObserver(() => component);
    return <Component observerClass={id} animationClass='reveal-text' />;
  }, []);
  return (
    <div className='landing-container'>
      <Header
        routes={LANDING_HEADER_ROUTE_LIST}
        className='landing-container-header'
      />
      <div className='landing-container-content'>
        <div className='landing-container-content-image'>
          <Carousel
            fade={false}
            speed={0}
            dots={false}
            autoplay
            autoplaySpeed={500}
            cssEase='linear'
          >
            {LANDING_PAGE_HEADER_IMAGES.map((p) => (
              <div key={p} className='image-container'>
                <img src={p} alt={p} className='below-image' />
              </div>
            ))}
          </Carousel>
          <img src='images/Group 47.svg' alt='top' className='top-image' />
        </div>
        <div className='landing-container-content-qna'>
          <QNAComponent
            observerClass='qna-container'
            animationClass='peel-in-animation'
          />
        </div>
        <div className='landing-container-content-section-3'>
          {renderAnimatedText(
            <div id='animated-text-1'>
              <div className='title'>How it works</div>
            </div>,
            'animated-text-1'
          )}
          <div className='working-container'>
            <Col>
              <WorkingStepsCardComponent
                step='Sign Up'
                stepCount='01'
                id='sign_up'
                iconPath='images/file.svg'
                styles={{ height: '25.813rem', backgroundColor: '#FF4D24' }}
                observerClass='sign_up'
                animationClass='reveal-card-content'
              />
              <WorkingStepsCardComponent
                step='Connect'
                stepCount='02'
                id='connect'
                iconPath='images/group.svg'
                styles={{ height: '35rem', backgroundColor: '#C4FF78' }}
                observerClass='connect'
                animationClass='reveal-card-content'
              />
              <img src='images/section3-image-c1.svg' alt='group' />
            </Col>
            <Col>
              <img src='images/section3-image-c2.svg' alt='group' />
              <WorkingStepsCardComponent
                step='Create'
                stepCount='03'
                iconPath='images/camera.svg'
                id='create'
                styles={{
                  height: '22.25rem',
                  backgroundColor: '#3CA2F3',
                  marginTop: '1rem',
                }}
                observerClass='create'
                animationClass='reveal-card-content'
              />
              <WorkingStepsCardComponent
                step='Get Paid'
                stepCount='04'
                id='get_paid'
                iconPath='images/money.svg'
                styles={{
                  height: '32.375rem',
                  backgroundColor: '#983535',
                  marginTop: '1rem',
                }}
                observerClass='get_paid'
                animationClass='reveal-card-content'
              />
            </Col>
          </div>
        </div>
        <div className='landing-container-content-section-4'>
          <div className='brand-container'>
            <div className='brand-text'>
              {renderAnimatedText(
                <div id='animated-text-2'>
                  <div className='title'>Get exposed to big brands.</div>
                  <div className='description'>
                    Brands that you share values with. venenatis, quam ultrices
                    turpis duis. A hendrerit hendrerit at ipsum pellentesque sit
                    elit nunc. Ipsum quam id est vel curabitur. Lectus aliquet
                    sit ut augue euismod.
                  </div>
                </div>,
                'animated-text-2'
              )}
            </div>
            <div className='brand-content'>
              <div className='images-container'>
                <div className='brand-card-1'>
                  <img src='images/brand.svg' alt='brand' />
                </div>
                <AnimatedCard
                  observedElementId='wrap--1'
                  containerId='container--1'
                >
                  <img
                    src='images/section4-image.svg'
                    alt='brand-women'
                    className='brand-women'
                  />
                </AnimatedCard>
              </div>
              <div className='gif-container'>
                <AnimatedCard
                  observedElementId='wrap--2'
                  containerId='container--2'
                >
                  {' '}
                  <video className='gif' loop autoPlay muted>
                    <source src='assets/section4-video.mp4' type='video/mp4' />
                  </video>
                </AnimatedCard>

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
              <AnimatedCard
                observedElementId='wrap--3'
                containerId='container--3'
              >
                <img
                  src='images/section5-image-1.svg'
                  alt='expression-images'
                  className='expression-image'
                />
              </AnimatedCard>

              <div className='expression-card' />
            </div>
            <div className='col-2'>
              {renderAnimatedText(
                <div id='animated-text-3'>
                  <div className='title'>
                    Express yourself.
                    <br /> pitch yourself.
                    <br /> Be yourself with RUME.
                  </div>
                  <div className='description'>
                    Make money doing what you love. Mollis elit bibendum
                    interdum venenatis, quam ultrices turpis duis. A hendrerit
                    hendrerit at ipsum pellentesque sit elit nunc. Ipsum quam id
                    est vel curabitur.
                  </div>
                </div>,
                'animated-text-3'
              )}
            </div>
            <div className='col-3'>
              <AnimatedCard
                observedElementId='wrap--4'
                containerId='container--4'
              >
                <video className='gif' loop autoPlay muted>
                  <source src='assets/section5-video.mp4' type='video/mp4' />
                </video>
              </AnimatedCard>
            </div>
          </div>
        </div>
        <div className='landing-container-content-section-6'>
          <div className='micro-influencer-container'>
            <CaterpillerScrollImageComponent />
            <div className='influencer-text-container'>
              {renderAnimatedText(
                <div id='animated-text-4'>
                  <div className='title'>
                    A platform tailored to micro-influencers.
                  </div>
                  <div className='description'>
                    We’re here to show you the ropes and give you the power to
                    level up! A hendrerit hendrerit at ipsum pellentesque sit
                    elit nunc. Ipsum quam id est vel curabitur. Lectus aliquet
                    sit ut augue euismod.
                  </div>
                </div>,
                'animated-text-4'
              )}
            </div>
          </div>
        </div>
        <div className='landing-container-content-section-7'>
          {renderAnimatedText(
            <div id='animated-text-5'>
              <div className='community-title'>
                Join our fast <br /> growing community.
              </div>
            </div>,
            'animated-text-5'
          )}
          <div className='image-rows-container'>
            <Carousel
              slidesToShow={5}
              centerMode
              dots={false}
              draggable
              swipeToSlide
              focusOnSelect
              autoplay
              speed={2000}
              autoplaySpeed={2000}
              cssEase='linear'
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
              autoplay
              speed={2000}
              autoplaySpeed={2000}
              cssEase='linear'
              rtl
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
              {renderAnimatedText(
                <div id='animated-text-6'>
                  <div className='text'>
                    “ RUME simplifies the process of creators networking with
                    their desired businesses or collaborators. It’s motivating
                    and inspiring to use this platform.”
                  </div>
                  <div className='commentor-name'>
                    <div className='name'>Rachel Kennedy</div>
                    <div className='designation'>
                      Fashion Influencer + Content Creator
                    </div>
                  </div>
                </div>,
                'animated-text-6'
              )}
            </div>
          </div>
        </div>
        <div className='landing-container-content-section-9'>
          <img alt='signup-text' src='images/sec9.svg' />
          <AnimatedButton label='Sign Up' value='/signup' />
        </div>
      </div>
      <Footer animateText />
    </div>
  );
};
export default LandingContainer;
