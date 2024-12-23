import React from "react";
import { StyledOption } from "./Option.styles";
import PropTypes from "prop-types";

interface OptionProps {
  label?: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}

export const Option: React.FC<OptionProps> = ({
  label,
  options,
  value,
  onChange,
  size,
  disabled,
  ...props
}) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <StyledOption
        value={value}
        onChange={onChange}
        disabled={disabled}
        // size={size}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledOption>
    </div>
  );
};
