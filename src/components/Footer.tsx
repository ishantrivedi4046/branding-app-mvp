import { ArrowRightOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import withScrollObserver from 'hoc/withScrollObserver';
import React, { useCallback, useState } from 'react';
import '../styles/component/footer.styles.scss';

interface FooterComponentProps {
  animateText?: boolean;
}
const FooterComponent: React.FC<FooterComponentProps> = ({ animateText }) => {
  const [email, setEmail] = useState<string>('');
  const handleInputChange = (e: any) => {
    setEmail(e.target.value);
  };
  const renderAnimatedText = useCallback(
    (component: any, id: string) => {
      if (animateText) {
        const Component = withScrollObserver(() => component);
        return <Component observerClass={id} animationClass='reveal-text' />;
      }
      return component;
    },
    [animateText]
  );
  return (
    <div className='dashboard-footer'>
      <div className='dashboard-footer-content'>
        {renderAnimatedText(
          <div id='dashboard-footer-content-label'>
            <div
              className='dashboard-footer-content-label'
              style={{ visibility: animateText ? 'hidden' : 'visible' }}
            >
              SUBSCRIBE TO OUR MAILING LIST TO STAY IN TOUCH WITH THE LATEST
            </div>
          </div>,
          'dashboard-footer-content-label'
        )}

        <div className='dashboard-footer-content-input'>
          <Input
            value={email}
            placeholder='EMAIL ADDRESS'
            bordered={false}
            onChange={handleInputChange}
          />
          <span>
            <ArrowRightOutlined />
          </span>
        </div>
        <div className='dashboard-footer-content-link'>
          <a href='/home'>INSTAGRAM</a>
          <a href='/home'>FACEBOOK</a>
          <a href='/home'>LINKEDIN</a>
        </div>
      </div>
      <div className='dashboard-footer-text'>RUME</div>
    </div>
  );
};

export default FooterComponent;
