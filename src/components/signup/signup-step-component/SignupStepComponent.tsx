import React, { FC, memo } from 'react';
import { SignupSteps } from 'constants/signup/signup.config';
import Step from './Step';
import '../../../styles/component/signup/signup-step/signup-step.styles.scss';

interface SignupStepComponentProps {
  step: SignupSteps;
}

const SignupStepComponent: FC<SignupStepComponentProps> = ({ step }) => (
  <div className='signup-step '>
    <div className='signup-step-text'>SIGN UP TO KIT TODAY</div>
    <div className='signup-step-content'>
      <Step key={SignupSteps.STEP_1} step={step === SignupSteps.STEP_1}>
        STEP 01
      </Step>
      <Step key={SignupSteps.STEP_2} step={step === SignupSteps.STEP_2}>
        STEP 02
      </Step>
      <Step key={SignupSteps.STEP_3} step={step === SignupSteps.STEP_3}>
        STEP 03
      </Step>
    </div>
  </div>
);

export default memo(SignupStepComponent);
