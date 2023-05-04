import { Box, Button, Container, Typography, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import "../../styles/style.css";
import { NavLink, useNavigate } from "react-router-dom";
import SyncIcon from "@mui/icons-material/Sync";

const ShopCartProducts = () => {
  const [shopCartItemList, setShopCartItemList] = useState([]);
  const [dataUpdated, setDataUpdated] = useState([]);
  const navigation = useNavigate();
  const [navOpenAddress, setNavOpenAddress] = useState(false);

  useEffect(() => {
    const emptyList = localStorage.getItem("ShopCartProducts") || [];
    if (emptyList.length === 0) {
      setShopCartItemList(emptyList);
    } else if (emptyList.length > 0) {
      const lists = JSON.parse(localStorage.getItem("ShopCartProducts"));
      setShopCartItemList(lists);
    }
  }, []);

  const improveQty = (id) => {
    const addition = shopCartItemList.filter((productId) => {
      return productId.id === id;
    });
    const increment = addition.find((productQuantity) => {
      return productQuantity;
    });
    const adding =
      increment.qty >= 0 && increment.qty < 5 ? increment.qty++ : increment.qty;
    const updatedArr = {
      ...increment,
      qty: adding,
    };
    shopCartItemList.map((products) => {
      if (products.id === id && products.prodName === increment.prodName) {
        dataUpdated.push(updatedArr);
        document.location.reload();
      }
    });
    localStorage.setItem("ShopCartProducts", JSON.stringify(shopCartItemList));
    console.log("increment", shopCartItemList);
  };

  const decreaseQty = (id) => {
    const addition = shopCartItemList.filter((productId) => {
      return productId.id === id;
    });
    const increment = addition.find((productQuantity) => {
      return productQuantity;
    });
    const substracting =
      increment.qty >= 0 && increment.qty > 0 ? increment.qty-- : increment.qty;
    const updatedArr = {
      ...increment,
      qty: substracting,
    };
    shopCartItemList.map((products) => {
      if (products.id === id && products.prodName === increment.prodName) {
        dataUpdated.push(updatedArr);
        document.location.reload();
      }
    });

    localStorage.setItem("ShopCartProducts", JSON.stringify(shopCartItemList));
    console.log("substracting", shopCartItemList);
  };

  const removeFromShopCart = (id) => {
    const updatedData = shopCartItemList.filter((removeItem) => {
      return removeItem.id !== id;
    });
    setTimeout(() => {
      document.location.reload();
    }, 500);
    setShopCartItemList(updatedData);
    localStorage.setItem("ShopCartProducts", JSON.stringify(updatedData));
  };

  const isShopListEmptyLink = (link) => {
    if ("/address" === link && shopCartItemList.length > 0) {
      setTimeout(() => {
        navigation("/address");
        setNavOpenAddress(false);
      }, 3000);
    } else if (shopCartItemList.length === 0) {
      alert("Please Add Products!");
      setTimeout(() => {
        document.location.reload();
      }, 3000);
    }
    setNavOpenAddress(true);
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
            shopping cart
          </Typography>
          <Box
            sx={{
              padding: "30px 0px",
              width: "100%",
              height: "100%",
            }}
          >
            {shopCartItemList.length === 0 ? (
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
                  marginBottom: "30px",
                }}
                className="empty-cart"
              />
            ) : (
              shopCartItemList.map((product) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
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
                        $
                        {product.qty === 0
                          ? product.prodPrice
                          : product.prodPrice * product.qty}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#071533",
                          fontSize: "20px",
                          fontWeight: "600",
                        }}
                      >
                        Quantity:
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          paddingBottom: "20px",
                        }}
                      >
                        <Button
                          sx={{
                            color: "#fff",
                            background: "#071533",
                            "&:hover": {
                              color: "#fff",
                              background: "#071533",
                              opacity: 0.7,
                            },
                          }}
                          onClick={() => improveQty(product.id)}
                        >
                          <AddIcon />
                        </Button>
                        <Box
                          component="span"
                          sx={{
                            color: "#071533",
                            background: "#fff",
                            padding: 1,
                            fontSize: "25px",
                          }}
                        >
                          {product.qty}
                        </Box>
                        <Button
                          sx={{
                            color: "#fff",
                            background: "#071533",
                            "&:hover": {
                              color: "#fff",
                              background: "#071533",
                              opacity: 0.7,
                            },
                          }}
                          onClick={() => decreaseQty(product.id)}
                        >
                          <RemoveIcon />
                        </Button>
                      </Box>
                      <Box
                        sx={{
                          marginBottom: "20px",
                        }}
                      >
                        <IconButton
                          sx={{
                            color: "#fff",
                            background: "#071533",
                            "&:hover": {
                              color: "#fff",
                              background: "#071533",
                              opacity: 0.7,
                            },
                          }}
                          onClick={() => removeFromShopCart(product.id)}
                        >
                          <RemoveShoppingCartIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                );
              })
            )}
          </Box>
          <NavLink
            style={{
              display: "flex",
              justifyContent: "center",
              textDecoration: "none",
            }}
            onClick={() => isShopListEmptyLink("/address")}
          >
            <Button
              sx={{
                color: "#fff",
                background: "#071533",
                marginBottom: "10px",
                marginTop: "-50px",
                "&:hover": {
                  color: "#fff",
                  background: "#071533",
                  opacity: 0.7,
                },
              }}
            >
              {navOpenAddress ? <SyncIcon /> : "Add Address"}
            </Button>
          </NavLink>
          <Box
            sx={{
              padding: "20px 0px",
              display: "flex",
              justifyContent: "center",
              fontSize: "25px",
              fontWeight: "600",
              background: "#071533",
              color: "#fff",
            }}
          >
            Total Price: $
            {shopCartItemList.reduce((total, productPrice) => {
              return total + productPrice.prodPrice * productPrice.qty;
            }, 0)}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ShopCartProducts;
