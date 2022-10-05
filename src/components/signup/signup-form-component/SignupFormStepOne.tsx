import { SIGNUP_LOCATIO_NAME_ARRAY } from 'constants/signup/signup.config';
import React, { FC, useContext } from 'react';
import { Input } from 'antd';
import '../../../styles/component/signup/signup-form/signup-form-step-one.styles.scss';
import SelectionTag from 'shared-resources/SelectionTag';
import { FormContext } from 'redux/context';
import {
  InfluencerProfileApiKeys,
  SignupApiKeys,
} from 'constants/signup/signup-api.constant';
import { get } from 'lodash';
import { validateNumber } from 'helpers/common.helper';

type SignupFormStepOneProps = {};

const SignupFormStepOne: FC<SignupFormStepOneProps> = () => {
  const { setIntoForm, getFromForm } = useContext(FormContext);
  const handleChange = (e: any) => {
    const key = e.target.id;
    const { value } = e.target;
    setIntoForm(key, value);
  };

  const handleMobileNumberChange = (e: any) => {
    const key = e.target.id;
    const { value } = e.target;
    if (validateNumber(value) && value.length <= 15) setIntoForm(key, value);
  };

  const handleClick = (key: string, value: string) => {
    setIntoForm(key, value);
  };

  const influencerProfileData = getFromForm(
    SignupApiKeys.INFLUENCER_PROFILE,
    {}
  );

  return (
    <div className='signup-form'>
      <div className='signup-form-text'>
        <span>CONTACT DETAILS</span>
      </div>
      <div className='signup-form-input-row'>
        <span>01/06</span>
        <Input
          placeholder='First Name'
          value={getFromForm(SignupApiKeys.FIRST_NAME, '') as string}
          id={SignupApiKeys.FIRST_NAME}
          onChange={handleChange}
        />
      </div>
      <div className='signup-form-input-row'>
        <span>02/06</span>
        <Input
          placeholder='Last Name'
          value={getFromForm(SignupApiKeys.LAST_NAME, '') as string}
          id={SignupApiKeys.LAST_NAME}
          onChange={handleChange}
        />
      </div>
      <div className='signup-form-input-row'>
        <span>03/06</span>
        <Input
          placeholder='Email Address'
          type='email'
          id={SignupApiKeys.EMAIL}
          onChange={handleChange}
          value={getFromForm(SignupApiKeys.EMAIL, '') as string}
        />
      </div>
      <div className='signup-form-input-row'>
        <span>04/06</span>
        <Input
          placeholder='Password'
          type='password'
          id={SignupApiKeys.PASSWORD}
          onChange={handleChange}
          value={getFromForm(SignupApiKeys.PASSWORD, '') as string}
        />
      </div>
      <div className='signup-form-input-row'>
        <span>05/06</span>
        <Input
          placeholder='Mobile Number'
          id={InfluencerProfileApiKeys.MOBILE}
          onChange={handleMobileNumberChange}
          value={get(
            influencerProfileData,
            [InfluencerProfileApiKeys.MOBILE],
            ''
          )}
        />
      </div>
      <div className='signup-form-button-row'>
        <span className='lable'>06/06</span>
        <div className='signup-form-button-row-content'>
          <div className='text'>{`I'm Based In`}</div>
          <div className='options'>
            {SIGNUP_LOCATIO_NAME_ARRAY.map((value) => (
              <SelectionTag
                label={value}
                key={value}
                selected={
                  get(
                    influencerProfileData,
                    [InfluencerProfileApiKeys.LOCATION],
                    ''
                  ) === value
                }
                onClick={(tag) =>
                  handleClick(InfluencerProfileApiKeys.LOCATION, tag)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignupFormStepOne;
