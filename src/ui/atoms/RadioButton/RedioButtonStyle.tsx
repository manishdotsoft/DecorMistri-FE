import { styled } from '@mui/material/styles';
import { FormControl, FormLabel, RadioGroup } from '@mui/material';

export const StyledFormControl = styled(FormControl)({
  marginBottom: '16px',
});

export const StyledFormLabel = styled(FormLabel)({
  fontSize: '16px',
  fontWeight: 'bold',
  fontFamily: 'sans-serif',
  marginBottom: '8px',
});

export const StyledRadioGroup = styled(RadioGroup)({
  display: 'flex',
});
