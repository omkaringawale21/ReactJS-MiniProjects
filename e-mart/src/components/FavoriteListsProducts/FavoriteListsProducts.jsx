import { Box, Container, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import "../../styles/style.css";

const FavoriteListsProducts = () => {
  const [favoriteItemList, setFavoriteItemList] = useState([]);

  useEffect(() => {
    const emptyList = localStorage.getItem("FavoriteProducts") || [];
    if (emptyList.length == 0) {
      setFavoriteItemList(emptyList);
    } else if (emptyList.length > 0) {
      const lists = JSON.parse(localStorage.getItem("FavoriteProducts"));
      setFavoriteItemList(lists);
    }
  }, []);

  const unfavoriteItem = (id) => {
    const item = favoriteItemList.filter((product) => {
      return product.id !== id;
    });
    setFavoriteItemList(item);
    localStorage.setItem("FavoriteProducts", JSON.stringify(item));
    console.log("item", item);
  };

  return (
    <Box>
      <Container>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            background: "#e8ebe9",
            marginBottom: "30px",
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
            our favorite products
          </Typography>
          <Box
            sx={{
              padding: "30px 0px",
            }}
          >
            {favoriteItemList.length === 0 ? (
              <Box
                component="img"
                src="./images/empty-cart.jpg"
                sx={{
                  width: {
                    xs: "140px",
                    sm: "160px",
                    md: "200px",
                    lg: "300px",
                  },
                  height: {
                    xs: "140px",
                    sm: "160px",
                    md: "200px",
                    lg: "300px",
                  },
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                className="empty-cart"
              />
            ) : (
              favoriteItemList.map((product) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "row",
                        lg: "row",
                      },
                      margin: "30px 20px",
                      background: "#fff",
                    }}
                    key={product.id}
                  >
                    <Box
                      sx={{
                        height: "15rem",
                        width: "25rem",
                        padding: "20px",
                      }}
                    >
                      <Box
                        component="img"
                        src={product.imgUrl}
                        alt={product.imgUrl}
                        sx={{
                          height: "100%",
                          width: "100%",
                          borderRadius: "5px",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        height: "100%",
                        width: "100%",
                        padding: "0px 50px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "40px",
                          fontWeight: "700",
                          margin: "10px 0px",
                        }}
                      >
                        {product.prodName}
                      </Typography>
                      <Typography
                        sx={{
                          margin: "10px 0px",
                        }}
                      >
                        {product.specifictn1}
                      </Typography>
                      <Typography
                        sx={{
                          margin: "10px 0px",
                        }}
                      >
                        {product.specifictn2}
                      </Typography>
                      <Typography
                        sx={{
                          margin: "10px 0px",
                        }}
                      >
                        {product.prodBrandName}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          margin: "10px 0px",
                        }}
                      >
                        <Typography
                          sx={{
                            margin: "10px 0px",
                            fontSize: "20px",
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              fontWeight: "700",
                            }}
                          >
                            Price :
                          </Box>{" "}
                          ${product.prodPrice}
                        </Typography>
                        <IconButton
                          sx={{
                            color: "#fff",
                            background: "#071533",
                            marginLeft: "10px",
                            "&:hover": {
                              color: "#fff",
                              background: "#071533",
                              opacity: 0.7,
                            },
                          }}
                          onClick={() => unfavoriteItem(product.id)}
                        >
                          <HeartBrokenIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                );
              })
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FavoriteListsProducts;
