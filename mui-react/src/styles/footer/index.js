import { styled, TextField, Typography } from "@mui/material";
import { Colors } from "../theme";

export const FooterTitle = styled(Typography)(() => ({
  textTransform: "uppercase",
  marginBottom: "1em",
}));

export const SubscribeTf = styled(TextField)(() => ({
  ".MuiInputLabel-root": {
    color: Colors.white,
  },
  ".MuiInputLabel-root::before": {
    color: Colors.white,
  },
}));
