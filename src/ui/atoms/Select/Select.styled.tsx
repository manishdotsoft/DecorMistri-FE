import { styled } from "@mui/material";

export const SelectFieldParent = styled("div")<{ backgroundColor?: string }>`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  padding: 8px;
  border-radius: 4px;
`;

export const SelectOption = styled("select")`
  padding: 4px 8px;
`;

export const Option = styled("option")`
  background-color: #cfcfcf;
  color: black;
`;
