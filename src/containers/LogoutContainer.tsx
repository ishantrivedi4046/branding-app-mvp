import { Spin } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authLogoutAction } from 'redux/actions/auth.action';
import { isUserLoggedIn } from 'redux/selectors/auth.selectors';
import '../styles/container/logout-container.styles.scss';

const LogoutContainer = () => {
  const loggedInUserState = useSelector(isUserLoggedIn);
  const dispatch = useDispatch();
  const history = useNavigate();
  useEffect(() => {
    if (!loggedInUserState) {
      history('/home');
    }
    dispatch(authLogoutAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInUserState]);

  return (
    <div className='logout-container'>
      <Spin tip='Logging out...' />
    </div>
  );
};

export default LogoutContainer;
