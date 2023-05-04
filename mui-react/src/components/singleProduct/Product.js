import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/banner";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Colors } from "../../styles/theme";

const Product = ({ id, singleItem }) => {
  const [value, setValue] = useState(0);
  const data = JSON.parse(localStorage.getItem("ITEM"));
  const [productInfo, setProductInfo] = useState(data);

  const orderNow = () => {
    setProductInfo({
        ...productInfo,
        qty: value,
    });
    localStorage.setItem("ITEM", JSON.stringify(productInfo));
  }

  return (
    <BannerContainer>
      <BannerImage src={singleItem.image} />
      <BannerContent>
        <Typography variant="h6">Rating : {singleItem.rating}</Typography>
        <BannerTitle variant="h2">{singleItem.name}</BannerTitle>
        <BannerDescription variant="subtitle">
          {singleItem.description}
        </BannerDescription>
        <Box
          sx={{
            fontSize: "25px",
            marginBottom: "10px",
            fontWeight: "600",
          }}
        >
          Quantity :
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="span"
            sx={{
              background: Colors.secondary,
            }}
          >
            <IconButton
              onClick={() => setValue(value >= 1 ? value - 1 : value)}
            >
              <RemoveIcon />
            </IconButton>
          </Typography>
          <Typography
            variant="span"
            sx={{
              background: Colors.white,
              padding: "8.9px 15px",
              fontSize: "20px",
            }}
          >
            {value}
          </Typography>
          <Typography
            variant="span"
            sx={{
              background: Colors.secondary,
            }}
          >
            <IconButton
              onClick={() => setValue(value <= 4 ? value + 1 : value)}
            >
              <AddIcon />
            </IconButton>
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{
              background: Colors.secondary,
              fontWeight: "600",
              transition: "all 0.3s linear",
              marginTop: "10px",
              color: Colors.white,
              "&:hover": {
                background: Colors.secondary,
                letterSpacing: "2px",
              }
            }}
            onClick={() => orderNow()}
          >
            Order Now
          </Button>
        </Box>
      </BannerContent>
    </BannerContainer>
  );
};

export default Product;
