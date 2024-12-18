import { styled } from '@mui/system';

export const TextFieldWrapper = styled('div')<{ backgroundColor?: string }>`
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  padding: 8px;
  border-radius: 4px;
`;

export const InputLabelStyled = styled('label')`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 800;
  font-size: 24px;
`;

export const StyledInput = styled('input')`
  width: 50%;
  padding: 10px;
  border: 2px solid #000;
  border-radius: 4px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;
