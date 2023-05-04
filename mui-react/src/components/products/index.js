import { Box, Button, Container } from "@mui/material";
import React from "react";
import { products } from "../../data";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "@fontsource/montez";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Colors } from "../../styles/theme";
import { NavLink } from "react-router-dom";

const Products = () => {
  const getSingleProduct = (id) => {
    const product = products.filter((item) => {
        return item.id === id;
    });
    const singleProduct = product.find((product) => product);
    console.log("getSingleProduct", singleProduct);
    localStorage.setItem("ITEM", JSON.stringify(singleProduct));
  };

  return (
    <Container
      sx={{
        margin: "auto",
        display: "block",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: "2rem",
        }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{
              border: "0.1rem solid rgba(0, 0, 0, 0.3)",
              boxShadow:
                "0.2rem 0.3rem 0.3rem rgba(0, 0, 0, 0.3), 0.3rem 0.2rem 0.4rem rgba(0, 0, 0, 0.1)",
              padding: "0.9rem 0.2rem",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{
                  display: {
                    xs: {
                      height: "200",
                    },
                    md: {
                      height: "140",
                    },
                  },
                }}
                image={product.image}
                alt="bag-images"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  sx={{
                    fontFamily: "'Montez', 'cursive'",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {product.name.slice(0, 10) + ".."}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <NavLink
                    to={`/single-product/${product.id}`}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        "&:hover": {
                          letterSpacing: "2px",
                          border: `0.1rem solid ${Colors.danger}`,
                          transition: "all 0.3s linear",
                          color: Colors.danger,
                          background: "#fff",
                        },
                        textDecoration: "none",
                      }}
                      onClick={() => getSingleProduct(product.id)}
                    >
                      Shop Now
                      <AddShoppingCartIcon sx={{ marginLeft: "5px" }} />
                    </Button>
                  </NavLink>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Products;
