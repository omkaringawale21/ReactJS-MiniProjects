import { Box, Container } from "@mui/material";
import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const MainBanner = () => {
  return (
    <Box
      sx={{
        marginTop: 20,
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "space-between",
            },
            alignItems: "center",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
            },
          }}
        >
          <LeftBanner />
          <RightBanner />
        </Box>
      </Container>
    </Box>
  );
};

export default MainBanner;
