import React from 'react';
import { ADMIN_HEADER_ROUTE_LIST } from 'routes/header.route';
import '../../styles/component/admin-table/admin-header.styles.scss';

const AdminHeader: React.FC = () => (
  <div className='header-container'>
    <div className='title'>
      <span className='text'>Dashboard</span>
    </div>
    <div className='route'>
      {ADMIN_HEADER_ROUTE_LIST.map((route) => (
        <div className='extras' key={route?.value}>
          <a href={route?.value}>{route?.label}</a>
        </div>
      ))}
    </div>
  </div>
);

export default AdminHeader;
