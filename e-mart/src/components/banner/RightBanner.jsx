import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const subSlides = [
  {
    id: 1,
    imgSrc: "./images/catbanner-01.jpg",
    info: "best sale",
    title: "laoptop max",
    details: "from $1699.00 or $64.62/mo.",
  },
  {
    id: 2,
    imgSrc: "./images/catbanner-02.jpg",
    info: "15% off",
    title: "smartwatch 7",
    details: "shop the latest brand styles and colors",
  },
  {
    id: 3,
    imgSrc: "./images/catbanner-03.jpg",
    info: "new arrival",
    title: "buy i pad air",
    details: "from $599.00 or $49.91/mo. for 12 mo.",
  },
  {
    id: 4,
    imgSrc: "./images/catbanner-04.jpg",
    info: "free engraving",
    title: "airpod max",
    details: "high - fidelity playback & ultra - low distortion",
  },
];

const RightBanner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        margin: "15px 0px",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          },
          gap: "13px",
        }}
      >
        {subSlides.map((items) => {
          return (
            <Box
              sx={{
                position: "relative",
              }}
              key={items.id}
            >
              <Box
                component="img"
                src={items.imgSrc}
                sx={{
                  width: "18rem",
                  height: "11rem",
                  borderRadius: "10px",
                  position: "relative",
                }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  top: 20,
                  left: 13,
                  fontSize: "14px",
                  textTransform: "capitalize",
                  color: "red",
                }}
              >
                {items.info}
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  top: 45,
                  left: 13,
                  fontSize: "19px",
                  textTransform: "capitalize",
                  fontWeight: "600",
                }}
              >
                {items.title}
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  top: 80,
                  left: 13,
                  width: 120,
                  fontSize: "15px",
                  textTransform: "capitalize",
                }}
              >
                {items.details}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default RightBanner;
