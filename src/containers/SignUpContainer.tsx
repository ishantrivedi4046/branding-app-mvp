/* eslint-disable no-nested-ternary */
import { Button } from 'antd';
import Header from 'components/Header';
import SignupFormStepOne from 'components/signup/signup-form-component/SignupFormStepOne';
import SignupFormStepThree from 'components/signup/signup-form-component/SignupFormStepThree';
import SignupFormStepTwo from 'components/signup/signup-form-component/SignupFormStepTwo';
import SignupStepComponent from 'components/signup/signup-step-component/SignupStepComponent';
import { InfluencerMethods } from 'constants/influencer.constants';
import {
  InfluencerProfileApiKeys,
  INFLUENCER_PROFILE_API_KEYS_ARRAY,
  SignupApiKeys,
} from 'constants/signup/signup-api.constant';
import { SignupSteps, SIGNUP_FORM_ID } from 'constants/signup/signup.config';
import { sanitizeObjectCompletely } from 'helpers/common.helper';
import { get } from 'lodash';
import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearForm, creatForm, updateForm } from 'redux/actions/form.action';
import { clearInfluencerState } from 'redux/actions/influencer.action';
import { registerInfluencerAction } from 'redux/actions/signup.action';
import { FormContext } from 'redux/context';
import { useParamSelector } from 'redux/selectors/base.selectors';
import { getForm } from 'redux/selectors/form.selector';
import { getInfluencerMethodState } from 'redux/selectors/influencer.selectors';
import { DASHBOARD_HEADER_ROUTE_LIST } from 'routes/header.route';
import { FormValueType } from 'types/reducer/form/form.reducer.types';
import '../styles/container/signup-container.styles.scss';

const SignUpContainer: FC = () => {
  const [step, setStep] = useState<SignupSteps>(SignupSteps.STEP_1);
  const [registering, setRegistering] = useState<boolean>(false);

  const influencerRegisterStatus = useParamSelector(getInfluencerMethodState, {
    method: InfluencerMethods.REGISTER_INFLUENCER,
  });

  const dispatch = useDispatch();
  const history = useNavigate();
  const signupForm = useParamSelector(getForm, {
    form_id: SIGNUP_FORM_ID,
  });

  const getSignupFormField = useCallback(
    (key: string, defaultValue = {}) => get(signupForm, [key], defaultValue),
    [signupForm]
  );

  const updateSignupForm = useCallback(
    (key: string, value: string | string[]) => {
      if (
        INFLUENCER_PROFILE_API_KEYS_ARRAY.includes(
          key as InfluencerProfileApiKeys
        )
      ) {
        const PrevInfluencerProfile = getSignupFormField(
          SignupApiKeys.INFLUENCER_PROFILE
        ) as FormValueType;
        const NewValue = { ...PrevInfluencerProfile, [key]: value };
        dispatch(
          updateForm(SIGNUP_FORM_ID, {
            [SignupApiKeys.INFLUENCER_PROFILE]: NewValue,
          })
        );
      } else {
        dispatch(updateForm(SIGNUP_FORM_ID, { [key]: value }));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [signupForm]
  );

  useEffect(() => {
    dispatch(creatForm(SIGNUP_FORM_ID));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (registering) {
      const loading = get(influencerRegisterStatus, ['loading'], true);
      const error = get(influencerRegisterStatus, ['error'], true);
      if (!loading) {
        if (!error) {
          const state: string | undefined = get(influencerRegisterStatus, [
            'data',
          ]);
          if (state === 'success') {
            dispatch(
              clearInfluencerState(InfluencerMethods.REGISTER_INFLUENCER)
            );
            dispatch(clearForm(SIGNUP_FORM_ID));
            history('/success');
          }
        }
        setRegistering(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [influencerRegisterStatus, registering]);

  const handleNextStep = () => {
    if (step !== SignupSteps.STEP_3) setStep((p) => p + 1);
  };

  const handleSubmit = () => {
    setRegistering(true);
    dispatch(registerInfluencerAction(sanitizeObjectCompletely(signupForm)));
  };

  const handlePrevStep = () => {
    if (step !== SignupSteps.STEP_1) setStep((p) => p - 1);
  };
  const renderContent = useMemo(() => {
    switch (step) {
      case SignupSteps.STEP_1:
        return <SignupFormStepOne />;
      case SignupSteps.STEP_2:
        return <SignupFormStepTwo />;
      case SignupSteps.STEP_3:
        return <SignupFormStepThree />;
      default:
        return <SignupFormStepOne />;
    }
  }, [step]);

  const signupContextValue = useMemo(
    () => ({
      getFromForm: getSignupFormField,
      setIntoForm: updateSignupForm,
    }),
    [getSignupFormField, updateSignupForm]
  );

  const buttonDisable = useMemo(
    () =>
      !getSignupFormField(SignupApiKeys.FIRST_NAME, '') ||
      !getSignupFormField(SignupApiKeys.LAST_NAME, '') ||
      !getSignupFormField(SignupApiKeys.EMAIL, '') ||
      !getSignupFormField(SignupApiKeys.PASSWORD, ''),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [signupForm]
  );

  return (
    <div className='signup-container'>
      <Header routes={DASHBOARD_HEADER_ROUTE_LIST} />
      <div className='signup-container-forms'>
        <SignupStepComponent step={step} />
        <FormContext.Provider value={signupContextValue}>
          {renderContent}
        </FormContext.Provider>
        <div className='signup-container-buttons-container'>
          {step > SignupSteps.STEP_1 && (
            <Button
              className='signup-container-button'
              onClick={handlePrevStep}
            >
              Previous
            </Button>
          )}
          <Button
            className='signup-container-button'
            onClick={
              step === SignupSteps.STEP_3 ? handleSubmit : handleNextStep
            }
            disabled={buttonDisable}
          >
            {step !== SignupSteps.STEP_3
              ? 'Next'
              : !registering
              ? 'Submit'
              : 'Registering.....'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(SignUpContainer);
