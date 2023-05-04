import React from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SubAppbarMobile from "./SubAppbarMobile";
import SubAppbarDesktop from "./SubAppbarDesktop";

const SubAppbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return <>{matches ? <SubAppbarMobile /> : <SubAppbarDesktop />}</>;
};

export default SubAppbar;
