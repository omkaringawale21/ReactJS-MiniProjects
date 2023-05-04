import {
  AppBar,
  Box,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AppDrawer from "../appdrawer/AppDrawer";
import { useUIContext } from "../../context/Context";

const SubAppbarMobile = () => {
  const { setDrawerOpen } = useUIContext();
  return (
    <>
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
              justifyContent: "space-around",
            }}
          >
            <FormControl
              sx={{
                width: 250,
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
                    outline: "none",
                  },
                }}
              >
                <MenuItem>Ten</MenuItem>
                <MenuItem>Twenty</MenuItem>
                <MenuItem>Thirty</MenuItem>
              </Select>
            </FormControl>
            <IconButton
              sx={{
                color: "#fff",
              }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Container>
      </AppBar>
      <AppDrawer />
    </>
  );
};

export default SubAppbarMobile;
