import { styled } from "@mui/material";

interface OptionProps {
  size?: "small" | "medium" | "large";
  value?: string;
  disabled?: boolean;
}

export const StyledOption = styled("select")<OptionProps>(
  ({ theme, size, value, disabled }) => ({
    padding: "4px 10px",
    borderRadius: "3px",
    border: disabled ? "1px solid #ccc" : "1px solid #000",
    background: disabled ? "#f5f5f5" : "#fff",
    cursor: disabled ? "not-allowed" : "pointer",

    ...(value === "key1" && {
      background: "#fd5",
    }),

    ...(size === "small" && {
      padding: "10px 16px",
      fontSize: "12px",
    }),
    ...(size === "medium" && {
      padding: "11px 20px",
      fontSize: "14px",
    }),
    ...(size === "large" && {
      padding: "12px 24px",
      fontSize: "16px",
    }),
  })
);
