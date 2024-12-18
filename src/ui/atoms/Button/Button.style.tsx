import { styled } from "@mui/material/styles";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
}

export const StyledButton = styled("button")<ButtonProps>(
  ({ theme, primary, backgroundColor, size }) => ({
    display: "inline-block",
    cursor: "pointer",
    border: 0,
    borderRadius: "3em",
    fontWeight: 700,
    lineHeight: 1,
    fontFamily: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    backgroundColor: primary ? "#1ea7fd" : "transparent",
    color: primary ? "white" : "#333",
    boxShadow: !primary ? "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset" : "none",
    ...(backgroundColor && { backgroundColor }),
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
