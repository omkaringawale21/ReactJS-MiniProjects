import {
  Box,
  Button,
  Grid,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { FooterTitle, SubscribeTf } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
  return (
    <Box
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        p: {
          xs: 4,
          md: 10,
        },
        pt: 12,
        pb: 12,
        fontSize: {
          xs: "12px",
          md: "14px",
        },
        mb: {
          xs: 5,
          md: 0,
        },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About Us</FooterTitle>
          <Typography variant="caption2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            blanditiis voluptas id? Voluptas, accusantium natus quos debitis nam
            dignissimos similique!
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}
          >
            <FacebookIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">My Account</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                WishList
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle>newsletter</FooterTitle>
          <Stack>
            <SubscribeTf
              color="primary"
              sx={{
                borderBottom: `1px solid ${Colors.white}`,
              }}
              label="Email Address"
              variant="standard"
            />
            <Button
              sx={{
                color: Colors.white,
                border: `1px solid ${Colors.white}`,
                marginTop: 2,
                "&:hover": {
                  background: Colors.secondary,
                  color: Colors.black,
                },
              }}
            >
              Subscribe
              <SendIcon
                sx={{
                  marginLeft: 2,
                }}
              />
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
