import { Box } from "@mui/material";
import React from "react";
import MainAppbar from "../../components/appbar/MainAppbar";
import FavoriteListsProducts from "../../components/FavoriteListsProducts/FavoriteListsProducts";
import SubAppbar from "../../components/subappbar/SubAppbar";

const FavoriteLists = () => {
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
        <FavoriteListsProducts />
      </Box>
    </Box>
  );
};

export default FavoriteLists;
