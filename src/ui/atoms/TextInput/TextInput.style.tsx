import { styled } from '@mui/system';

export const TextFieldWrapper = styled('div')<{ backgroundColor?: string }>`
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  padding: 8px;
  border-radius: 4px;
`;

export const InputLabelStyled = styled('label')<{
  labelColor?: string;
  fontSize?: string;
}>`
  display: block;
  margin-bottom: 8px;
  font-size: ${(props) => props.fontSize || '20px'};
  font-weight: 800;
  font-family: sans-serif;
  color: ${(props) => props.labelColor || '#000'};
`;

export const StyledInput = styled('input')<{
  width?: string;
  padding?: string;
  borderColor?: string;
  borderRadius?: string;
  fontSize?: string;
}>`
  width: ${(props) => props.width || '50%'};
  padding: ${(props) => props.padding || '10px'};
  border: 2px solid ${(props) => props.borderColor || '#000'};
  border-radius: ${(props) => props.borderRadius || '4px'};
  font-size: ${(props) => props.fontSize || '16px'};
  outline: none;
  font-family: sans-serif;

  &:focus {
    border-color: #007bff;
  }
`;

export const ErrorMessage = styled('span')`
  color: #ff0000;
  font-size: 12px;
  margin-top: 4px;
  display: block;
  font-weight: bold;
  position: relative;
  text-align: left;
  font-family: sans-serif;
`;
