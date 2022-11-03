import { Button, Input, notification } from 'antd';
import Header from 'components/Header';
import { SignInKeys, SIGNIN_FORM_ID } from 'constants/sigin-container.constant';
import { sanitizeObjectCompletely } from 'helpers/common.helper';
import { get } from 'lodash';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  authLoginAction,
  authLoginClearAction,
} from 'redux/actions/auth.action';
import { clearForm, creatForm, updateForm } from 'redux/actions/form.action';
import {
  isUserLoggedIn,
  loginErrorState,
} from 'redux/selectors/auth.selectors';
import { useParamSelector } from 'redux/selectors/base.selectors';
import { getForm } from 'redux/selectors/form.selector';
import { DASHBOARD_HEADER_ROUTE_LIST } from 'routes/header.route';
import '../styles/container/signin-container.styles.scss';

const SignInContainer = () => {
  const dispatch = useDispatch();
  const loggedInUserState = useSelector(isUserLoggedIn);
  const loginError = useSelector(loginErrorState);
  const history = useNavigate();
  const [signingIn, setSigningIn] = useState<boolean>(false);
  const signinForm = useParamSelector(getForm, {
    form_id: SIGNIN_FORM_ID,
  });

  const getSignupFormField = useCallback(
    (key: string, defaultValue = {}) => get(signinForm, [key], defaultValue),
    [signinForm]
  );

  const updateSigninForm = useCallback(
    (key: string, value: string | string[]) => {
      dispatch(updateForm(SIGNIN_FORM_ID, { [key]: value }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [signinForm]
  );

  useEffect(() => {
    if (loggedInUserState) {
      dispatch(clearForm(SIGNIN_FORM_ID));
      setSigningIn(false);
      history('/admin');
    } else if (loginError) {
      notification.error({
        message: loginError,
      });
      dispatch(authLoginClearAction());
      setSigningIn(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInUserState, loginError]);

  useEffect(() => {
    dispatch(creatForm(SIGNIN_FORM_ID));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEmailChange = (e: any) => {
    updateSigninForm(SignInKeys.EMAIL, e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    updateSigninForm(SignInKeys.PASSWORD, e.target.value);
  };

  const handleSigninClick = () => {
    setSigningIn(true);
    dispatch(authLoginAction(sanitizeObjectCompletely(signinForm)));
  };

  const buttonDisable = useMemo(
    () =>
      !getSignupFormField(SignInKeys.EMAIL, '') ||
      !getSignupFormField(SignInKeys.PASSWORD, ''),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [signinForm]
  );

  return (
    <div className='signin-container'>
      <Header routes={DASHBOARD_HEADER_ROUTE_LIST} />
      <div className='signin-container-form'>
        <div className='signin-container-form-title'>
          <span>SIGN IN TO RUME</span>
        </div>
        <div className='signin-container-form-content'>
          <div className='signin-container-form-content-text'>
            <span>SIGN IN DETAILS</span>
          </div>
          <div className='signin-container-form-content-input-row'>
            <span>01/02</span>
            <Input
              placeholder='Email Address'
              type='email'
              value={getSignupFormField(SignInKeys.EMAIL, '')}
              onChange={handleEmailChange}
            />
          </div>
          <div className='signin-container-form-content-input-row'>
            <span>02/02</span>
            <Input
              type='password'
              placeholder='Password'
              value={getSignupFormField(SignInKeys.PASSWORD, '')}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <div className='button-container'>
          <Button
            className='submit-button'
            onClick={handleSigninClick}
            disabled={buttonDisable}
          >
            {signingIn ? 'Signing In...' : 'Sign In'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignInContainer;
