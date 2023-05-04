import { Box } from "@mui/material";
import React from "react";
import MainAppbar from "../../components/appbar/MainAppbar";
import MultiProducts from "../../components/products/MultiProducts";
import SubAppbar from "../../components/subappbar/SubAppbar";

const Products = () => {
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
        <MultiProducts />
      </Box>
    </Box>
  );
};

export default Products;
