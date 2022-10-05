/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import '../styles/shared-resources/selectionTag.styles.scss';

interface SelectionTagProps {
  selected: boolean;
  label: string;
  onClick: (value: string) => void;
}

const SelectionTag: React.FC<SelectionTagProps> = ({
  selected,
  label,
  onClick,
}) => (
  <div
    className={selected ? 'selected-tag' : 'non-selected-tag'}
    id={label}
    onClick={() => onClick(label)}
  >
    {label}
  </div>
);

export default SelectionTag;
