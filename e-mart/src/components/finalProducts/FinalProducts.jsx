import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../styles/style.css";
import StripeCheckout from "react-stripe-checkout";
import GooglePayButton from "@google-pay/button-react";

const FinalProducts = () => {
  const [shopItemList, setShopItemList] = useState([]);
  const [address, setAddress] = useState([]);

  useEffect(() => {
    const emptyList = localStorage.getItem("ShopCartProducts") || [];
    if (emptyList.length == 0) {
      setShopItemList(emptyList);
    } else if (emptyList.length > 0) {
      setShopItemList(JSON.parse(localStorage.getItem("ShopCartProducts")));
      setAddress(JSON.parse(localStorage.getItem("Address")));
    }
  }, []);

  const onToken = (token) => {
    console.log("onToken", token);
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
            paddingBottom: "20px",
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
            total final products
          </Typography>
          {shopItemList.length == 0 ? (
            <Box
              sx={{
                marginTop: "40px",
              }}
            >
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
            </Box>
          ) : (
            <TableContainer>
              <Table
                sx={{ width: "100%", height: "100%" }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow
                    sx={{
                      background: "#071533",
                    }}
                  >
                    <TableCell
                      sx={{
                        textTransform: "capitalize",
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      product image
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        textTransform: "capitalize",
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      product name
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        textTransform: "capitalize",
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      product brand
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        textTransform: "capitalize",
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      product price
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        textTransform: "capitalize",
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      product quantity
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {shopItemList?.map((productDtls) => {
                    return (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          borderBottom: "2px solid #000",
                        }}
                        key={productDtls.id}
                      >
                        <TableCell>
                          <Box component="span">
                            {" "}
                            <Box
                              component="img"
                              src={productDtls.imgUrl}
                              alt={productDtls.imgUrl}
                              sx={{
                                width: "7rem",
                                height: "7rem",
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                borderRadius: "50%",
                                overflow: "hidden",
                              }}
                            />
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            textAlign: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: "600",
                            }}
                          >
                            {productDtls.prodName}
                          </Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            textAlign: "center",
                          }}
                        >
                          <Typography>{productDtls.prodBrandName}</Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            textAlign: "center",
                          }}
                        >
                          <Typography>${productDtls.prodPrice}</Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            textAlign: "center",
                          }}
                        >
                          <Typography>{productDtls.qty}</Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          <Box
            sx={{
              textAlign: "right",
              fontSize: "20px",
              textTransform: "capitalize",
              paddingRight: "20px",
              paddingTop: "10px",
              paddingBottom: "10px",
              fontWeight: "600",
              background: "#071533",
              color: "#fff",
            }}
          >
            $ total price :
            {shopItemList?.reduce((total, productPrice) => {
              return total + productPrice.prodPrice * productPrice.qty;
            }, 0)}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "10px",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            {address?.map((add) => {
              return (
                <>
                  Address:
                  <Box
                    component="span"
                    sx={{
                      marginLeft: "10px",
                    }}
                  >
                    {add.address}
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      marginLeft: "10px",
                    }}
                  >
                    {add.pincode}
                  </Box>
                </>
              );
            })}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: {
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
              margin: "20px 0px",
            }}
          >
            <Box
              component="img"
              src="./images/card_img.png"
              alt="card_img"
              sx={{
                width: "240px",
                height: "40px",
                margin: "0px 10px",
              }}
            />
            <StripeCheckout
              token={onToken}
              name="Payemnt Using Card"
              currency="INR"
              amount={shopItemList.reduce((total, productPrice) => {
                return total + productPrice.prodPrice * productPrice.qty * 100;
              }, 0)}
              stripeKey="pk_test_51MokMwSIfxFKrfYYo4xuV3dV5HskVewdjNPmVcmCycFXuBy6xXMCxV8ZBpEgdOVcLQIwZyDvpL1fwWvi8hLVDRMj00b5uydiBD"
              sx={{
                margin: "0px 10px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px 0px",
            }}
          >
            <GooglePayButton
              environment="TEST"
              paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                  {
                    type: "CARD",
                    parameters: {
                      allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                      allowedCardNetworks: ["MASTERCARD", "VISA"],
                    },
                    tokenizationSpecification: {
                      type: "PAYMENT_GATEWAY",
                      parameters: {
                        gateway: "example",
                        gatewayMerchantId: "exampleGatewayMerchantId",
                      },
                    },
                  },
                ],
                merchantInfo: {
                  merchantId: "12345678901234567890",
                  merchantName: "Demo Merchant",
                },
                transactionInfo: {
                  totalPriceStatus: "FINAL",
                  totalPriceLabel: "Total",
                  totalPrice: "1000.00",
                  currencyCode: "USD",
                  countryCode: "US",
                },
              }}
              onLoadPaymentData={(paymentRequest) => {
                console.log("load payment data", paymentRequest);
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FinalProducts;
