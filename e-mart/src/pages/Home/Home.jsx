import { Box } from "@mui/material";
import React from "react";
import MainAppbar from "../../components/appbar/MainAppbar";
import MainBanner from "../../components/banner/MainBanner";
import MultiProducts from "../../components/products/MultiProducts";
import SubAppbar from "../../components/subappbar/SubAppbar";

const Home = () => {
  return (
    <Box>
      <Box>
        <MainAppbar />
        <SubAppbar />
      </Box>
      <Box>
        <MainBanner />
      </Box>
      <Box>
        <MultiProducts />
      </Box>
    </Box>
  );
};

export default Home;
