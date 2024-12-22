import { styled } from "@mui/material";

export const SelectFieldParent = styled("div")<{ backgroundColor?: string }>`
  background-color: ${(props) => props.backgroundColor || "#f9f9f9"};
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: inline-block;
  min-width: 200px;

  &:hover {
    background-color: ${(props) => props.backgroundColor || "#f0f0f0"};
  }
`;

export const SelectOption = styled("select")`
  width: 100%;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #ffffff;
  color: #333;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  }
`;

export const Option = styled("option")`
  font-size: 14px;
  padding: 4px 8px;
  background-color: #ffffff;
  color: #000;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;
