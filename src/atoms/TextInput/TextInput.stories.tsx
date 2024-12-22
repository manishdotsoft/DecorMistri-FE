import TextInput from './TextInput';

export default {
  title: 'Atoms/TextInput',
  component: TextInput,
};

export const Email = {
  args: {
    label: 'Enter Email',
    placeholder: 'Enter Your Email',
  },
};

export const FirstName = {
  args: {
    label: 'First name',
    placeholder: 'Enter First Name',
  },
};

export const LastName = {
  args: {
    label: 'Last name',
    placeholder: 'Enter Last Name',
    backgroundColor: 'red',
  },
};
