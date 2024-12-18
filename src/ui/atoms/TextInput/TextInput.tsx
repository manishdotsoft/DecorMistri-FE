import React from 'react';

import {
  TextFieldWrapper,
  InputLabelStyled,
  StyledInput,
} from './TextInput.style';

type TextInputProps = {
  label?: string;
  placeholder?: string;
  backgroundColor?: string;
};

const TextInput = (props: TextInputProps) => {
  return (
    <TextFieldWrapper backgroundColor={props.backgroundColor}>
      <InputLabelStyled htmlFor={props.label}>{props.label}</InputLabelStyled>
      <StyledInput
        id={props.label}
        type="text"
        placeholder={props.placeholder || props.label}
      />
    </TextFieldWrapper>
  );
};

export default TextInput;
