import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, useParams } from "react-router-dom";
import { useUIContext } from "../../context/Context";

const MiddleDivider = styled((props) => (
  <Divider
    sx={{
      borderColor: "#1b4c85",
      margin: "3px 0px",
    }}
    {...props}
  />
))``;

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

const SelectedListItemText = styled(ListItemButton)(() => ({
  "&:hover, &.Mui-selected": {
    color: "#fff",
    background: "#1b4c85",
  },
}));

const AppDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useUIContext();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const params = useParams();

  const onHandleClick = (event, index) => {
    setOpen(!open);
    setSelectedIndex(index);
  };

  useEffect(() => {
    const selectedSection = mainHeaderData.find((curItem) => {
      return curItem.linkName == params["*"];
    });
    let selectedId = selectedSection?.id;
    setSelectedIndex(--selectedId);
  }, [params]);

  return (
    <Drawer
      open={drawerOpen}
      sx={{
        width: 250,
        "& .MuiDrawer-paper": {
          width: 250,
        },
      }}
    >
      <Button onClick={() => setDrawerOpen(false)}>
        <CloseIcon
          sx={{
            color: "#1b4c85",
            position: "absolute",
            right: 10,
            top: 10,
            borderRadius: "50%",
            "&:hover": {
              background: "#fff",
              color: "#37383b",
              transform: "rotate(360deg)",
              transition: "all 0.4s linear",
            },
            zIndex: 99,
          }}
        />
      </Button>
      <Box
        sx={{
          fontSize: "30px",
          display: "flex",
          justifyContent: "center",
          fontWeight: "600",
          color: "#1b4c85",
        }}
      >
        Digitc.
      </Box>
      <List>
        {mainHeaderData.map((link, index) => {
          return (
            <Box key={link.id}>
              <NavLink
                to={link.goTo}
                style={{
                  textDecoration: "none",
                  color: "#1b4c85",
                }}
              >
                <SelectedListItemText
                  selected={selectedIndex === index}
                  onClick={(event) => onHandleClick(event, index)}
                >
                  <ListItemText>{link.name}</ListItemText>
                </SelectedListItemText>
              </NavLink>
              <MiddleDivider />
            </Box>
          );
        })}
      </List>
    </Drawer>
  );
};

export default AppDrawer;
