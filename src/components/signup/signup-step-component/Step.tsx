import classNames from 'classnames';
import React, { FC, memo } from 'react';
import '../../../styles/component/signup/signup-step/step.styles.scss';

interface StepProps {
  step: boolean;
  children: string;
}

const Step: FC<StepProps> = ({ step, children }) => (
  <div
    className={classNames('step', {
      'active-step': step,
    })}
  >
    <span>{children}</span>
  </div>
);
export default memo(Step);
