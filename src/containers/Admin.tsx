import { Layout } from 'antd';
import { Header, Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import HeaderContent from 'components/Header';
import React from 'react';
import AdminTableContainer from './AdminTableContainer';
import '../styles/container/admin.styles.scss';

interface AdminProps {}
const Admin: React.FC<AdminProps> = () => (
  <Layout hasSider className='admin-layout'>
    <Sider className='admin-layout_sidebar'>
      <div className='sidebar-content'>
        <span>KIT</span>
      </div>
    </Sider>
    <Layout className='admin-container'>
      <Header className='admin-container_header'>
        <HeaderContent />
      </Header>
      <Content className='admin-container_content'>
        <AdminTableContainer />
      </Content>
    </Layout>
  </Layout>
);

export default Admin;
