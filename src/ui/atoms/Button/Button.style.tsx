import { styled, Typography } from "@mui/material";
const StyledButton = styled("div")(
  ({ backgroundColor, color, variant }: any) => ({
    width: 240,
    height: 40,
    backgroundColor: variant === "outlined" ? "transparent" : backgroundColor,
    color,
    border: variant === "outlined" ? `1px solid ${color}` : undefined,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
  })
);

const DisabledButton = styled("div")(() => ({
  width: 240,
  height: 40,
  backgroundColor: "#979797",
  color: "#fff",
  borderRadius: 24,
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  cursor: "pointer",
}));

export { StyledButton, DisabledButton };
