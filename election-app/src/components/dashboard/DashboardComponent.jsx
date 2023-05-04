import { Box, Typography } from "@mui/material";
import React from "react";
import Piechart from "../piechart/Piechart";

const DashboardComponent = () => {



  return (
    <Box className="dashboard-container">
      <Box className="container">
        <Box className="row">
          <Box>
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: "600",
                fontFamily: "'Alata', sans-serif",
                pb: 3,
                color: "#707f8f",
              }}
            >
              Voting Details
            </Typography>
          </Box>
        </Box>
        <Box className="row">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1,1fr)",
                sm: "repeat(2,1fr)",
                md: "repeat(3,1fr)",
                lg: "repeat(3,1fr)",
              },
              gap: "2rem",
              padding: ".2rem 1rem",
            }}
          >
            <Piechart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardComponent;
