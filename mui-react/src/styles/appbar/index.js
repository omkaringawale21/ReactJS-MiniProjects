import { List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../../styles/theme";
import "@fontsource/montez";

// Container
export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

// Header
export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontFamily: "'Montez', 'cursive'",
  fontSize: "4em",
  color: Colors.secondary,
}));

export const MyList = styled(List)(() => ({
  display: "type" === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`,
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));
