import { SelectFieldParent, SelectOption, Option } from "./Select.styled";
import { useState } from "react";

type SelectProps = {
  label?: string;
  value?: string;
  backgroundColor?: string;
  options: string[]; // Array of options to be displayed
  onChange: (value: string) => void; // Callback to handle value changes
};

const SelectOptions = ({
  label,
  value,
  backgroundColor,
  options,
  onChange,
}: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState(options[0] || value);
  // const [searchTerm, setSearchTerm] = useState("");

  const handleSelectChange = (event: any) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    onChange(newValue);
  };

  // const handleSearchChange = (event: any) => {
  //   setSearchTerm(event.target.value);
  // };

  return (
    <>
      <SelectFieldParent style={{ backgroundColor }}>
        {label && <label>{label}</label>}

        {/* <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search your option"
        /> */}
        <SelectOption
          as="select"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          {options.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
          {/* {options
            .filter((option) => option.toLowerCase().includes(searchTerm))
            .map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))} */}
        </SelectOption>
      </SelectFieldParent>
    </>
  );
};

export default SelectOptions;
