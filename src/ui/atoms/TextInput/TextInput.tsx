import React from 'react';
import {
  TextFieldWrapper,
  InputLabelStyled,
  StyledInput,
  ErrorMessage,
} from './TextInput.style';
import useEmailValidation from './customHooks';

type TextInputProps = {
  label?: string;
  placeholder?: string;
  backgroundColor?: string;
  labelColor?: string;
  labelFontSize?: string;
  inputWidth?: string;
  inputPadding?: string;
  inputBorderColor?: string;
  inputBorderRadius?: string;
  inputFontSize?: string;
  type?: 'text' | 'email' | 'password' | 'number';
};

const TextInput = (props: TextInputProps) => {
  const { error, validateEmail } = useEmailValidation();

  const handleChange = (event: any) => {
    const value = event.target.value;
    if (props.type === 'email') {
      validateEmail(value);
    }
  };

  return (
    <TextFieldWrapper backgroundColor={props.backgroundColor}>
      <InputLabelStyled
        htmlFor={props.label}
        labelColor={props.labelColor}
        fontSize={props.labelFontSize}
      >
        {props.label}
      </InputLabelStyled>
      <StyledInput
        id={props.label}
        type={props.type || 'text'}
        placeholder={props.placeholder || props.label}
        width={props.inputWidth}
        padding={props.inputPadding}
        borderColor={error ? '#FF0000' : props.inputBorderColor}
        borderRadius={props.inputBorderRadius}
        fontSize={props.inputFontSize}
        onChange={handleChange}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </TextFieldWrapper>
  );
};

export default TextInput;
