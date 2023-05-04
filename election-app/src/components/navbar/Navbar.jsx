import { Avatar, Button, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import agileLogo from "../../assets/agsft-logo.png";
import SyncIcon from "@mui/icons-material/Sync";

const Navbar = ({ handleSlider }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const handleLogout = () => {
    setLoader(true);
    localStorage.removeItem("loginDetails");
    localStorage.removeItem("registerDetails");

    setTimeout(() => {
      setLoader(false);
      navigate("/login");
    }, 2000);
  };

  let loginDetails = JSON.parse(localStorage.getItem("logInDetails"));
  let registerDetails = JSON.parse(localStorage.getItem("registerDetails"));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "4rem",
        bgcolor: "#fff",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
        borderBottom: "2px solid gray",
        position: "fixed",
        width: "100%",
        zIndex: "1004",
        padding: "0 1rem",
      }}
    >
      <IconButton
        sx={{ display: { xs: "flex", sm: "block", md: "none", lg: "none" } }}
        onClick={handleSlider}
        className="menu-bar"
      >
        <MenuIcon sx={{ color: "black" }} />
      </IconButton>
      <Box
        className="logo"
        sx={{ height: { xs: "2rem", sm: "2.5rem", lg: "3.4rem" } }}
      >
        <img src={agileLogo} style={{ height: "90%" }} alt="agile-logo" />
      </Box>

      <Box
        className="user-info"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: "2rem",
        }}
      >
        <Avatar
          sx={{
            width: 27,
            height: 27,
            marginRight: "1rem",
            bgcolor: "#98b3e0",
            display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
            cursor: "pointer",

            alignItems: "center",
          }}
        />
        {loginDetails && (
          <Typography
            sx={{
              marginRight: "1rem",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "6rem",
              fontSize: "14px",
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
            }}
          >
            {loginDetails?.email}
          </Typography>
        )}
        {registerDetails && !loginDetails && (
          <Typography
            sx={{
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
              marginRight: ".5rem",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "6rem",
              fontSize: "14px",
            }}
          >
            {registerDetails?.firstname} {registerDetails?.lastname}
          </Typography>
        )}

        <Button
          sx={{
            backgroundColor: "#5090ff",
            color: "white",
            width: { xs: "3rem", sm: "5rem", md: "5rem", lg: "6rem" },
            fontSize: { xs: "10px", sm: "12px", md: "12px", lg: "14px" },
            "&:hover": { backgroundColor: "#5090ff" },
          }}
          onClick={handleLogout}
          disabled={loader}
        >
          {loader ? <SyncIcon /> : <span>Logout</span>}
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
