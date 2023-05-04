import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import Products from "./components/products";
import Footer from "./components/footer";
import "@fontsource/montez";
import AppDrawer from "./components/drawer";
import { UIProvider } from "./context";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <UIProvider>
          <Appbar />
          <Banner />
          <Promotions />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0px",
              fontSize: "30px",
              fontWeight: "600",
              fontFamily: "'Montez', 'cursive'",
            }}
          >
            Our Products
          </Box>
          <Products />
          <Footer />
          <AppDrawer />
        </UIProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
