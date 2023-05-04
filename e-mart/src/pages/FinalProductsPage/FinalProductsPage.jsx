import { Box } from "@mui/material";
import React from "react";
import MainAppbar from "../../components/appbar/MainAppbar";
import FinalProducts from "../../components/finalProducts/FinalProducts";
import SubAppbar from "../../components/subappbar/SubAppbar";

const FinalProductsPage = () => {
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
        <FinalProducts />
      </Box>
    </Box>
  );
};

export default FinalProductsPage;
