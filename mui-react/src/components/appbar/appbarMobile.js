import { IconButton } from "@mui/material";
import React from "react";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
import Actions from "./actions";
import { useUIContext } from "../../context";

const AppbarMobile = ({ matches }) => {
  const { setDrawerOpen } = useUIContext();

  return (
    <AppbarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">
        My Bags
      </AppbarHeader>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
};

export default AppbarMobile;
