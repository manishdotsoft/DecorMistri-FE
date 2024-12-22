import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const ToasterContainer = styled(Box)(({ theme }) => ({
  position: "fixed",

  display: "flex",
  flexDirection: "column",
}));

// export const Header = styled(Box)(({ theme }) => ({
//   background: "green",
// }));
