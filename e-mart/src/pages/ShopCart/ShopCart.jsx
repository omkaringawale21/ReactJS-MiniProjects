import { Box } from "@mui/material";
import React from "react";
import MainAppbar from "../../components/appbar/MainAppbar";
import ShopCartProducts from "../../components/shopCartProducts/ShopCartProducts";
import SubAppbar from "../../components/subappbar/SubAppbar";

const ShopCart = () => {
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
        <ShopCartProducts />
      </Box>
    </Box>
  );
};

export default ShopCart;
