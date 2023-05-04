import { Box } from "@mui/material";
import React from "react";
import AddressInfo from "../../components/addressInfo/AddressInfo";
import MainAppbar from "../../components/appbar/MainAppbar";
import SubAppbar from "../../components/subappbar/SubAppbar";

const Address = () => {
  return (
    <Box>
      <Box>
        <MainAppbar />
        <SubAppbar />
      </Box>
      <Box
        sx={{
          marginTop: "11rem",
        }}
      >
        <AddressInfo />
      </Box>
    </Box>
  );
};

export default Address;
