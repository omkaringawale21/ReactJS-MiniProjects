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
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SyncIcon from "@mui/icons-material/Sync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { NavLink } from "react-router-dom";
import { useUIContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const mainHeaderData = [
  {
    id: 1,
    name: "Products",
    icon: <SyncIcon />,
    goTo: "/finalProducts",
  },
  {
    id: 2,
    name: "Favorite WishLists",
    icon: <FavoriteBorderIcon />,
    goTo: "/favoriteLists",
  },
  {
    id: 3,
    name: "LogOut From Account",
    icon: <PermIdentityIcon />,
    goTo: "/login",
  },
];

const AppbarDesktop = () => {
  const { search, setSearch } = useUIContext();
  const [listItems, setListItems] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const emptyList = localStorage.getItem("ShopCartProducts") || [];
    if (emptyList.length == 0) {
      setListItems(emptyList);
    } else if (emptyList.length > 0) {
      const lists = JSON.parse(localStorage.getItem("ShopCartProducts"));
      setListItems(lists);
    }
  }, []);

  const logOut = (goto) => {
    if (goto === "/login") {
      setTimeout(() => {
        navigate("/login");
        setLoading(false);
      }, 5000);
      setLoading(true);
    } else if (goto === "/favoriteLists") {
      setTimeout(() => {
        navigate("/favoriteLists");
      }, 3000);
    } else if (goto === "/finalProducts") {
      setTimeout(() => {
        navigate("/finalProducts");
      }, 3000);
    }
  };

  return (
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
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <Box
              component="img"
              src="./images/web-app-logo.png"
              sx={{
                width: "3.5rem",
                height: "2rem",
              }}
            />
            <Box
              component="span"
              sx={{
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Shopify
            </Box>
          </Box>
          <OutlinedInput
            size="small"
            placeholder="Search Here..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            sx={{
              border: "none",
              paddingRight: 0,
              background: "#fff",
              width: "20rem",
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
          <List
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#fff",
            }}
          >
            {mainHeaderData.map((item) => {
              return (
                <NavLink
                  key={item.id}
                  style={{
                    textDecoration: "none",
                  }}
                  onClick={() => logOut(item.goTo)}
                >
                  <ListItem
                    sx={{
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      "&:hover": {
                        opacity: 0.7,
                      },
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: "2rem",
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        fontSize: "0.8rem",
                      }}
                    >
                      {loading ? "Logging Out" : item.name}
                    </Box>
                  </ListItem>
                </NavLink>
              );
            })}
          </List>
          <NavLink
            to="/shopCartList"
            sx={{
              position: "relative",
              cursor: "pointer",
              "&:hover": {
                opacity: 0.7,
              },
            }}
          >
            <AddShoppingCartIcon
              sx={{
                color: "#edb228",
                position: "relative",
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                top: 5,
                right: "90px",
                padding: "0px 5px",
                background: "#fff",
                color: "#071533",
                borderRadius: "50%",
              }}
            >
              {listItems.length === 0 ? 0 : listItems.length}
            </Typography>
          </NavLink>
        </Box>
      </Container>
    </AppBar>
  );
};

export default AppbarDesktop;
