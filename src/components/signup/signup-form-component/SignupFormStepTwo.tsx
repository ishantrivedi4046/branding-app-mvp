import {
  SignupFormHobbyName,
  SIGNUP_FORM_HOBBY_NAME_ARRAY,
  SIGNUP_FORM_PURPOSE_ARRAY,
} from 'constants/signup/signup.config';
import React, { FC, memo, useContext, useMemo, useState } from 'react';
import '../../../styles/component/signup/signup-form/signup-form-step-two.styles.scss';
import { Button, Input } from 'antd';
import SelectionTag from 'shared-resources/SelectionTag';
import { FormContext } from 'redux/context';
import {
  InfluencerProfileApiKeys,
  SignupApiKeys,
} from 'constants/signup/signup-api.constant';
import { cloneDeep, get, isEmpty } from 'lodash';
import { PlusOutlined } from '@ant-design/icons';
import { validateNumber } from 'helpers/common.helper';

const SignupFormStepTwo: FC = () => {
  const [inputHobby, setInputHobby] = useState<string>();
  const { setIntoForm, getFromForm } = useContext(FormContext);

  const influencerProfileData = useMemo(
    () => getFromForm(SignupApiKeys.INFLUENCER_PROFILE, {}),
    [getFromForm]
  );

  const handleChange = (e: any) => {
    const key = e?.target.id;
    const value = e?.target.value;
    setIntoForm(key, value);
  };

  const handleFollowersChange = (e: any) => {
    const key = e?.target.id;
    const value = e?.target.value;
    if (validateNumber(value)) {
      setIntoForm(key, value);
    }
  };

  const handleInterestsClick = (value: string) => {
    const interests = cloneDeep(
      get(influencerProfileData, InfluencerProfileApiKeys.INTERESTS, [])
    ) as Array<string>;

    if (interests.includes(value)) {
      setIntoForm(
        InfluencerProfileApiKeys.INTERESTS,
        interests.filter((interest) => interest !== value)
      );
    } else {
      setIntoForm(InfluencerProfileApiKeys.INTERESTS, [
        ...(interests as Array<string>),
        value,
      ]);
    }
  };

  const handleAddTagClick = () => {
    if (inputHobby) {
      handleInterestsClick(inputHobby);
      SIGNUP_FORM_HOBBY_NAME_ARRAY.push(inputHobby as SignupFormHobbyName);
      setInputHobby('');
    }
  };

  const handleInputHobbyChange = (e: any) => {
    setInputHobby(e.target.value);
  };

  return (
    <div className='signup-form-step-2'>
      <div className='text'>
        <span>TELL US ABOUT YOU</span>
      </div>
      <div className='input-row'>
        <span>01/07</span>
        <Input
          placeholder='/Your Instagram Handle'
          id={InfluencerProfileApiKeys.INSTAGRAM}
          onChange={handleChange}
          value={get(
            influencerProfileData,
            [InfluencerProfileApiKeys.INSTAGRAM],
            ''
          )}
        />
      </div>
      <div className='input-row'>
        <span>02/07</span>
        <Input
          placeholder='/Your TikTok Handle'
          id={InfluencerProfileApiKeys.TIKTOK}
          onChange={handleChange}
          value={get(
            influencerProfileData,
            [InfluencerProfileApiKeys.TIKTOK],
            ''
          )}
        />
      </div>
      <div className='fillup-row'>
        <span>03/07</span>
        <div className='fillup-row-content'>
          <span>I HAVE</span>
          <Input
            placeholder='10k'
            id={InfluencerProfileApiKeys.INSTAGRAM_FOLLOWERS}
            onChange={handleFollowersChange}
            value={get(
              influencerProfileData,
              [InfluencerProfileApiKeys.INSTAGRAM_FOLLOWERS],
              ''
            )}
          />
          <span>Instagram Followers</span>
        </div>
      </div>
      <div className='fillup-row'>
        <span>04/07</span>
        <div className='fillup-row-content'>
          <span>I HAVE</span>
          <Input
            placeholder='10k'
            id={InfluencerProfileApiKeys.TIKTOK_FOLLOWERS}
            onChange={handleFollowersChange}
            value={get(
              influencerProfileData,
              [InfluencerProfileApiKeys.TIKTOK_FOLLOWERS],
              ''
            )}
          />
          <span>TikTok Followers</span>
        </div>
      </div>
      <div className='button-row'>
        <span className='lable'>05/07</span>
        <div className='button-row-content'>
          <span className='button-row-content-text'>{`I'm Interested In`}</span>
          <div className='button-row-content-options'>
            {SIGNUP_FORM_HOBBY_NAME_ARRAY.map((value) => (
              <SelectionTag
                label={value}
                key={value}
                selected={get(
                  influencerProfileData,
                  [InfluencerProfileApiKeys.INTERESTS],
                  []
                ).includes(value)}
                onClick={(tag) => handleInterestsClick(tag)}
              />
            ))}
            <Input
              className='editable-tag'
              placeholder='Type Here'
              onChange={handleInputHobbyChange}
              value={inputHobby}
            />
            <Button
              disabled={isEmpty(inputHobby)}
              onClick={handleAddTagClick}
              icon={<PlusOutlined />}
            />
          </div>
        </div>
      </div>
      <div className='button-row'>
        <span className='lable'>06/07</span>
        <div className='button-row-content'>
          <span className='button-row-content-text'>{`I'm Here For`}</span>
          <div className='button-row-content-options'>
            {SIGNUP_FORM_PURPOSE_ARRAY.map((value) => (
              <SelectionTag
                label={value}
                key={value}
                selected={
                  get(
                    influencerProfileData,
                    [InfluencerProfileApiKeys.TERMS],
                    ''
                  ) === value
                }
                onClick={(tag) => {
                  setIntoForm(InfluencerProfileApiKeys.TERMS, tag);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='textarea-row'>
        <span className='lable'>07/07</span>
        <div className='textarea-row-content'>
          <div className='textarea-row-content-text'>
            Help Brands get to know you more. Write your bio
          </div>
          <textarea
            rows={6}
            placeholder='Kaitie to send lame example bio'
            onChange={handleChange}
            id={InfluencerProfileApiKeys.BIO}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(SignupFormStepTwo);
