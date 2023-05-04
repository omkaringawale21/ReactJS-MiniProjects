import {
  AppBar,
  Box,
  Button,
  Container,
  InputAdornment,
  List,
  ListItem,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import SyncIcon from "@mui/icons-material/Sync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { NavLink } from "react-router-dom";

const mainHeaderData = [
  {
    id: 1,
    name: "Compare Products",
    icon: <SyncIcon />,
    goTo: "/products",
  },
  {
    id: 2,
    name: "Favorite WishLists",
    icon: <FavoriteBorderIcon />,
    goTo: "/favoriteLists",
  },
  {
    id: 3,
    name: "Log In My Account",
    icon: <PermIdentityIcon />,
    goTo: "/login",
  },
];

const AppbarMobile = () => {
  return (
    <>
      <AppBar
        sx={{
          background: "#071533",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              component="h2"
              sx={{
                fontSize: "22px",
                color: "#fff",
              }}
            >
              Digitic.
            </Box>
            <OutlinedInput
              size="small"
              placeholder="Search Here..."
              sx={{
                border: "none",
                paddingRight: 0,
                background: "#fff",
                width: "16rem",
                "&:focus": {
                  outline: "none",
                  border: "none",
                },
                borderRadius: "5px",
                overflow: "hidden",
                position: "relative",
              }}
              endAdornment={
                <InputAdornment position="end">
                  <Button
                    edge="end"
                    sx={{
                      background: "#edb228",
                      height: "3rem",
                      color: "#000",
                      "&:hover": {
                        opacity: "0.7",
                        background: "#edb228",
                        color: "#000",
                      },
                    }}
                  >
                    <SearchIcon />
                  </Button>
                </InputAdornment>
              }
            />
            <Box
              sx={{
                position: "relative",
                cursor: "pointer",
              }}
            >
              <AddShoppingCartIcon
                sx={{
                  color: "#edb228",
                }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  top: -10,
                  right: -17,
                  padding: "0px 5px",
                  background: "#fff",
                  color: "#000",
                  borderRadius: "50%",
                }}
              >
                0
              </Typography>
            </Box>
          </Box>
        </Container>
      </AppBar>
      <List
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#fff",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#333231",
          justifyContent: "space-around",
          zIndex: 99,
        }}
      >
        {mainHeaderData.map((item) => {
          return (
            <NavLink
              to={item.goTo}
              key={item.id}
              style={{
                textDecoration: "none",
              }}
            >
              <ListItem
                sx={{
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": {
                    opacity: 0.6,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                  }}
                >
                  {item.icon}
                </Typography>
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    </>
  );
};

export default AppbarMobile;
