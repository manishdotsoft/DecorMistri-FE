import { Option } from "./Option";
import { action } from "@storybook/addon-actions";

export default {
  title: "Atoms/Option",
  component: Option,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Default = {
  args: {
    label: "Choose an option",
    options: [
      { value: "key1", label: "Option 1" },
      { value: "key2", label: "Option 2" },
      { value: "key3", label: "Option 3" },
    ],
    value: "key1",
    onChange: action("onChange"),
  },
};

export const Small = {
  args: {
    size: "small",
    options: [
      { value: "key1", label: "Option 1" },
      { value: "key2", label: "Option 2" },
      { value: "key3", label: "Option 3" },
    ],
    value: "key2",
    onChange: action("onChange"),
  },
};

export const Disabled = {
  args: {
    disabled: true,
    options: [
      { value: "key1", label: "Option 1" },
      { value: "key2", label: "Option 2" },
      { value: "key3", label: "Option 3" },
    ],
    value: "key1",
    onChange: action("onChange"),
  },
};
