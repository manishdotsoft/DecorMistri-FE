import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

export interface RadioOption {
  label: string;
  value: string;
}

interface RadioButtonProps {
  label?: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  name: string;
  direction: 'row' | 'column';
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  options,
  selectedValue,
  onChange,
  name,
  direction,
}) => {
  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <RadioGroup
        row={direction === 'row'}
        value={selectedValue}
        onChange={(event) => onChange(event.target.value)}
        name={name}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
