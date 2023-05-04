import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Colors } from "../../styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import { useUIContext } from "../../context";
import "@fontsource/montez";
import { useParams } from "react-router-dom";

const MiddleDivider = styled((props) => (
  <Divider
    sx={{
      borderColor: Colors.white,
      margin: "3px 0px",
    }}
    {...props}
  />
))``;

const links = [
  {
    id: 1,
    linkName: "Home",
  },
  {
    id: 2,
    linkName: "Categories",
  },
  {
    id: 3,
    linkName: "Products",
  },
  {
    id: 4,
    linkName: "About Us",
  },
  {
    id: 5,
    linkName: "Contact Us",
  },
];

const SelectedListItemText = styled(ListItemButton)(() => ({
  "&:hover, &.Mui-selected": {
    color: Colors.black,
    background: Colors.white,
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
    const selectedSection = links.find((curItem) => {
      return curItem.linkName == params["*"];
    });
    let selectedId = selectedSection?.id;
    setSelectedIndex(--selectedId);
  }, [params]);

  return (
    <Drawer open={drawerOpen}>
      <Button onClick={() => setDrawerOpen(false)}>
        <CloseIcon
          sx={{
            color: Colors.white,
            position: "absolute",
            right: 10,
            top: 10,
            borderRadius: "50%",
            "&:hover": {
              background: Colors.white,
              color: Colors.shaft,
              transform: "rotate(360deg)",
              transition: "all 0.4s linear",
            },
            zIndex: 99,
          }}
        />
      </Button>
      <Box
        sx={{
          fontFamily: "'Montez', 'cursive'",
          fontSize: "30px",
          display: "flex",
          justifyContent: "center",
          color: Colors.white,
        }}
      >
        My Bags
      </Box>
      <List>
        {links.map((link, index) => {
          return (
            <>
              <SelectedListItemText
                key={link.id}
                selected={selectedIndex === index}
                onClick={(event) => onHandleClick(event, index)}
              >
                <ListItemText>{link.linkName}</ListItemText>
              </SelectedListItemText>
              <MiddleDivider />
            </>
          );
        })}
      </List>
    </Drawer>
  );
};

export default AppDrawer;
