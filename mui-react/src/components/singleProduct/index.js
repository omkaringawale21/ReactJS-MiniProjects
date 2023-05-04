import { Container, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Appbar from "../appbar/index";
import { useParams } from "react-router";
import theme from "../../styles/theme";
import Product from "./Product";

const SingleProduct = () => {
  const { id } = useParams();
  const singleItem = JSON.parse(localStorage.getItem("ITEM"));

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Appbar />
        <Product id={id} singleItem={singleItem} />
      </Container>
    </ThemeProvider>
  );
};

export default SingleProduct;
