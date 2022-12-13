import React from 'react';
import type { ISelectItemProps } from './types';

export const SelectItem = ({
  isDisabled,
  label,
  value,
  ...props
}: ISelectItemProps) => {
  return (
    <option value={value} disabled={isDisabled} {...props}>
      {label}
    </option>
  );
};
