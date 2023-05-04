import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import AppbarMobile from "./appbarMobile";
import AppbarDesktop from "./appbarDesktop";

const Appbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {matches ? (
        <AppbarMobile matches={matches} />
      ) : (
        <AppbarDesktop matches={matches} />
      )}
    </>
  );
};

export default Appbar;
