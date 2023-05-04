import { Box, Drawer, IconButton } from "@mui/material";
import React from "react";
import agileLogo from "../../assets/agsft-logo.png";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = ({ setOpen, getList, open }) => {
  return (
    <Box className="sidebar-container">
      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        <Box
          className="logo"
          sx={{
            height: { xs: "2rem", sm: "2.5rem", lg: "3.4rem" },
            padding: "1rem .5rem",
            borderBottom: "2px solid slategray",
            
          }}
        >
          <img src={agileLogo} style={{ height: "90%" }} alt="agile-logo" />
        </Box>
        {getList()}
        <IconButton
          sx={{
            background: " rgba(0, 40, 73, 0.268) ",
            position: "absolute",
            top: "2%",
            right: "2%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
            padding: ".2rem",
            color: "white",
            cursor: "pointer",
            "&:hover": {
              background: " rgba(0, 40, 73, 0.368) ",
              color: "white",
            },
          }}
          onClick={() => setOpen(false)}
        >
          <CloseIcon />
        </IconButton>
      </Drawer>
      <Box className="slider-lists" >{getList()}</Box>
    </Box>
  );
};

export default Sidebar;
