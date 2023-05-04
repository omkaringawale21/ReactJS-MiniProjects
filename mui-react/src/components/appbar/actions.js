import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import React from "react";
import {
  MyList,
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
} from "../../styles/appbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { Colors } from "../../styles/theme";

const Actions = ({ matches }) => {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;

  return (
    <Component>
      <MyList
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
        type="row"
      >
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
    </Component>
  );
};

export default Actions;
