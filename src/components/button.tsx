import { uniqueId } from 'lodash';
import React from 'react';
import '../styles/component/animatedButtonStyles.scss';

interface AnimatedButtonProps {
  label: string;
  value?: string;
}
const AnimatedButton: React.FC<AnimatedButtonProps> = ({ label, value }) => (
  <a
    href={value}
    className='h-button'
    data-text={label}
    aria-label={label}
    key={value}
  >
    {label?.split('').map((ch) => (
      <span key={uniqueId()}>{ch}</span>
    ))}
  </a>
);

export default AnimatedButton;
