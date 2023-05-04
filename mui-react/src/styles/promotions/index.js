import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/montez";

export const PromotionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0px 20px 0px",
  overflow: "hidden",
  background: Colors.secondary,
  [theme.breakpoints.up("md")]: {
    padding: "40px 0px 40px 0px",
  },
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  fontFamily: "'Montez', 'cursive'",
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
  fontSize: "1.5rem",
  color: Colors.white,
}));
