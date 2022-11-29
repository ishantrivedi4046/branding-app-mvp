import React, { FC, memo } from 'react';
import { BasicOptionTypes } from 'types/components/admin-table/AdminTable.type';
import '../styles/component/header.styles.scss';
import AnimatedButton from './button';

interface HeaderProps {
  className?: string;
  routes: Array<BasicOptionTypes<string>>;
}

const Header: FC<HeaderProps> = ({ className, routes }) => (
  <div className={`header ${className}`}>
    <div className='title'>
      <img src='images/rume_logo.svg' alt='logo' className='rume-logo' />
    </div>
    <div className='header-route'>
      {routes?.map((route) => (
        // eslint-disable-next-line react/jsx-key
        <AnimatedButton label={route?.label} value={route?.value} />
      ))}
    </div>
  </div>
);

export default memo(Header);
