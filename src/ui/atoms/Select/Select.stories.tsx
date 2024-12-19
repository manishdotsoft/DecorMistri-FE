import Select from "./Select";

export default {
  title: "Atoms/Select",
  component: Select,
};

export const Options = {
  args: {
    label: "Choose an option",
    value: "Bikram1",
    backgroundColor: "#e7e7e7",
    options: ["Bikram1", "Option2", "option3", "Option4", "Option5"],
    onChange: (value: string) => {
      console.log("Selected value:", value);
    },
  },
};
