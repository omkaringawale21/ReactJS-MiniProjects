import {
  AppBar,
  Box,
  Container,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useUIContext } from "../../context/Context";
import { styled } from "@mui/material/styles";

const mainHeaderData = [
  {
    id: 1,
    name: "Home",
    goTo: "/home",
  },
  {
    id: 2,
    name: "Our Products",
    goTo: "/products",
  },
  {
    id: 3,
    name: "Bolgs",
    goTo: "/blogs",
  },
  {
    id: 4,
    name: "Contact",
    goTo: "/contact",
  },
];

const SelectedItemList = styled(ListItem)(() => ({
  color: "#fff",
  display: "flex",
  alignItems: "center",
  borderRadius: "5px",
  transition: "all 0.3s ease",
  "&:hover, &.Mui-selected": {
    color: "#1b4c85",
    background: "#fff",
  },
  "&:hover": {
    color: "#1b4c85",
    background: "#fff",
  },
}));

const SubAppbarDesktop = () => {
  const { filterItems, handleFiltering } = useUIContext();
  const params = useParams();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const selectedItem = mainHeaderData?.find((curItem) => {
      return curItem.goTo === params["*"];
    });
    let selectedId = selectedItem?.id;
    setSelectedIndex(--selectedId);
  }, [params]);

  const onActive = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <AppBar
      sx={{
        background: "#1b4c85",
        marginTop: 7.9,
      }}
    >
      <Container
        sx={{
          padding: "1rem 0rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FormControl
            sx={{
              width: 200,
            }}
          >
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: "#fff",
                display: "flex",
                alignItems: "center",
              }}
            >
              Select Categories
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              size="medium"
              label="Select Categories"
              sx={{
                color: "#fff",
                outline: "none",
                "&:hover, &.Mui-selected": {
                  color: "#fff",
                  background: "#1b4c85",
                  outline: "none",
                },
              }}
              onChange={(e) => handleFiltering(e)}
            >
              <MenuItem
                value="All"
                sx={{
                  color: "#1b4c85",
                  background: "#fff",
                  "&:hover, &.Mui-selected": {
                    color: "#fff",
                    background: "#1b4c85",
                  },
                }}
              >
                All
              </MenuItem>
              <MenuItem
                value="SmartPhone"
                sx={{
                  color: "#1b4c85",
                  background: "#fff",
                  "&:hover, &.Mui-selected": {
                    color: "#fff",
                    background: "#1b4c85",
                  },
                }}
              >
                SmartPhone
              </MenuItem>
              <MenuItem
                value="DSLR Camera"
                sx={{
                  color: "#1b4c85",
                  background: "#fff",
                  "&:hover, &.Mui-selected": {
                    color: "#fff",
                    background: "#1b4c85",
                  },
                }}
              >
                DSLR Camera
              </MenuItem>
              <MenuItem
                value="LCD TV"
                sx={{
                  color: "#1b4c85",
                  background: "#fff",
                  "&:hover, &.Mui-selected": {
                    color: "#fff",
                    background: "#1b4c85",
                  },
                }}
              >
                LCD TV
              </MenuItem>
              <MenuItem
                value="Sound-Pot"
                sx={{
                  color: "#1b4c85",
                  background: "#fff",
                  "&:hover, &.Mui-selected": {
                    color: "#fff",
                    background: "#1b4c85",
                  },
                }}
              >
                Sound-Pot
              </MenuItem>
              <MenuItem
                value="Front-Camera"
                sx={{
                  color: "#1b4c85",
                  background: "#fff",
                  "&:hover, &.Mui-selected": {
                    color: "#fff",
                    background: "#1b4c85",
                  },
                }}
              >
                Front-Camera
              </MenuItem>
              <MenuItem
                value="SmartWatch"
                sx={{
                  color: "#1b4c85",
                  background: "#fff",
                  "&:hover, &.Mui-selected": {
                    color: "#fff",
                    background: "#1b4c85",
                  },
                }}
              >
                SmartWatch
              </MenuItem>
              <MenuItem
                value="Head-Set"
                sx={{
                  color: "#1b4c85",
                  background: "#fff",
                  "&:hover, &.Mui-selected": {
                    color: "#fff",
                    background: "#1b4c85",
                  },
                }}
              >
                Head-Set
              </MenuItem>
            </Select>
          </FormControl>
          <List
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#fff",
              justifyContent: "space-around",
              marginLeft: "10px",
            }}
          >
            {mainHeaderData.map((item, index) => {
              return (
                <NavLink
                  to={item.goTo}
                  key={index}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <SelectedItemList
                    selected={selectedIndex === index}
                    onClick={(e) => onActive(e, index)}
                  >
                    <ListItemText
                      sx={{
                        fontSize: "15px",
                      }}
                    >
                      {item.name}
                    </ListItemText>
                  </SelectedItemList>
                </NavLink>
              );
            })}
          </List>
        </Box>
      </Container>
    </AppBar>
  );
};

export default SubAppbarDesktop;
