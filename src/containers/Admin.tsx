import { Layout } from 'antd';
import { Header, Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import HeaderContent from 'components/admin-table/AdminHeader';
import React, { useEffect } from 'react';
import '../styles/container/admin.styles.scss';
import { useNavigate } from 'react-router-dom';
import { localStorageService } from 'services/LocalStorageService';
import { useDispatch } from 'react-redux';
import { authLoginCompletedAction } from 'redux/actions/auth.action';
import AdminTableContainer from './AdminTableContainer';

interface AdminProps {}
const Admin: React.FC<AdminProps> = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      !localStorageService.getAuthToken() ||
      localStorageService.isTokenExpired()
    ) {
      history('/logout');
    } else {
      dispatch(authLoginCompletedAction());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
};

export default Admin;
