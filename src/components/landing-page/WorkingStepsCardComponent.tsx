import React from 'react';
import '../../styles/component/landing-page/workingStepCard.styles.scss';

interface WorkingStepsCardProps {
  stepCount: string;
  iconPath: string;
  step: string;
  styles: { height: string; backgroundColor: string; marginTop?: string };
}
const WorkingStepsCardComponent: React.FC<WorkingStepsCardProps> = (
  props: WorkingStepsCardProps
) => {
  const { step, stepCount, iconPath, styles } = props;
  return (
    <div className='working-step-card' key={stepCount} style={{ ...styles }}>
      <div className='working-step-card__header'>
        <img src={iconPath} alt='working-step-icon' className='icon' />
        <span className='count'>{stepCount}</span>
      </div>
      <div className='working-step-card__body'>
        <div className='step-name'>{step}</div>
        <div className='step-description'>
          Mollis elit bibendum interdum venenatis, quam ultrices turpis duis. A
          hendrerit hendrerit at ipsum pellentesque sit elit nunc.{' '}
        </div>
      </div>
    </div>
  );
};

export default WorkingStepsCardComponent;
