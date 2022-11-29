import { useCardTiltHook } from 'custom-hooks/useCardTiltHook';
import React, { ReactNode } from 'react';

interface AnimatedCardProps {
  observedElementId: string;
  containerId: string;
  children: ReactNode;
}
const AnimatedCard: React.FC<AnimatedCardProps> = ({
  observedElementId,
  containerId,
  children,
}) => {
  useCardTiltHook(observedElementId, containerId);

  return (
    <div className='wrap ' id={observedElementId}>
      <div className='container ' id={containerId}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedCard;
