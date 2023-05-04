import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
import React from "react";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/banner";

const Banner = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
      <BannerImage src="./images/banner/banner.png" />
      <BannerContent>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Montez', 'cursive'",
          }}
        >
          Hug Collection
        </Typography>
        <BannerTitle variant="h2">New Bags</BannerTitle>
        <BannerDescription variant="subtitle">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
          officia! Deserunt mollitia facere omnis quae repellat quod minima,
          beatae quasi.
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
