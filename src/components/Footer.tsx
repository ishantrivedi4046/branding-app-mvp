import { ArrowRightOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React, { useState } from 'react';
import '../styles/component/footer.styles.scss';

const FooterComponent: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const handleInputChange = (e: any) => {
    setEmail(e.target.value);
  };
  return (
    <div className='dashboard-footer'>
      <div className='dashboard-footer-content'>
        <div className='dashboard-footer-content-label'>
          SUBSCRIBE TO OUR MAILING LIST TO STAY IN TOUCH WITH THE LATEST
        </div>
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
