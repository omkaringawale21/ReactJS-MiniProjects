import {
  Box,
  Container,
  Card,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { useUIContext } from "../../context/Context";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../../styles/style.css";

const MultiProducts = () => {
  const {
    newFilterItems,
    search,
  } = useUIContext();
  const [favoriteItemList, setFavoriteItemList] = useState([]);
  const [shopCartItemList, setShopCartItemList] = useState([]);

  const addFavoriteItem = (id) => {
    const selectedProduct = newFilterItems.filter((product) => {
      return product.id === id;
    });
    const obj = selectedProduct.find((singleObj) => {
      return singleObj;
    });
    favoriteItemList.push({ ...obj, qty: 0 });
    localStorage.setItem("FavoriteProducts", JSON.stringify(favoriteItemList));
  };

  const addShopCartItem = (id) => {
    const selectedProduct = newFilterItems.filter((product) => {
      return product.id === id;
    });
    const obj = selectedProduct.find((singleObj) => {
      return singleObj;
    });
    shopCartItemList.push({ ...obj, qty: 0 });
    localStorage.setItem("ShopCartProducts", JSON.stringify(shopCartItemList));
  };

  return (
    <Box>
      <Container>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            background: "#e8ebe9",
          }}
        >
          <Typography
            sx={{
              fontSize: "50px",
              textTransform: "capitalize",
              display: "flex",
              justifyContent: "center",
              fontWeight: "700",
              color: "#071533",
            }}
          >
            our products
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
            }}
          >
            {newFilterItems
              .filter((filteringSearch) =>
                search.toLowerCase() === ""
                  ? filteringSearch
                  : filteringSearch.prodName.toLowerCase().includes(search.toLowerCase())
              )
              .map((product) => {
                return (
                  <Box
                    sx={{
                      display: "block",
                      margin: "auto",
                      position: "relative",
                    }}
                    key={product.id}
                  >
                    <Card
                      sx={{
                        margin: "30px 0px",
                      }}
                      className="cart-box"
                    >
                      <Box
                        component="img"
                        src={product.imgUrl}
                        alt={product.imgUrl}
                        sx={{
                          width: "16rem",
                          height: "16rem",
                          padding: 4,
                          cursor: "pointer",
                          position: "relative",
                        }}
                        className="cart-image"
                      />
                      <Typography
                        sx={{
                          position: "absolute",
                          top: 140,
                          right: 10,
                          display: "flex",
                          flexDirection: "column",
                          opacity: 0,
                        }}
                        className="cart-buttons"
                      >
                        <IconButton
                          sx={{
                            margin: "5px 0px",
                            color: "#fff",
                            background: "#071533",
                            "&:hover": {
                              color: "#fff",
                              background: "#071533",
                              opacity: 0.8,
                            },
                          }}
                          onClick={() => addFavoriteItem(product.id)}
                        >
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton
                          sx={{
                            margin: "5px 0px",
                            color: "#fff",
                            background: "#071533",
                            "&:hover": {
                              color: "#fff",
                              background: "#071533",
                              opacity: 0.8,
                            },
                          }}
                          onClick={() => addShopCartItem(product.id)}
                        >
                          <AddShoppingCartIcon />
                        </IconButton>
                      </Typography>
                    </Card>
                  </Box>
                );
              })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MultiProducts;
