import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import {
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";

const AppbarDesktop = ({ matches }) => {
  return (
      <AppbarContainer>
        <AppbarHeader>My Bags</AppbarHeader>
        <MyList
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
          type="row"
        >
          <ListItemText
            primary="Home"
            sx={{
              cursor: "pointer",
            }}
          />
          <ListItemText
            primary="Categories"
            sx={{
              cursor: "pointer",
            }}
          />
          <ListItemText
            primary="Products"
            sx={{
              cursor: "pointer",
            }}
          />
          <ListItemText
            primary="Contact Us"
            sx={{
              cursor: "pointer",
            }}
          />
          <ListItemButton>
            <ListItemIcon sx={{
              display: "flex",
              justifyContent: "center",
            }}>
              <SearchIcon />
            </ListItemIcon>
          </ListItemButton>
        </MyList>
        <Actions matches={matches} />
      </AppbarContainer>
  );
};

export default AppbarDesktop;
