import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import loginImage from "../assets/loginAvatar.png";
import { Link, useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = () => {
    setLoginError(validateForm(loginData));
    setSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(loginError).length === 0 && submit === true) {
      localStorage.setItem("logInDetails", JSON.stringify(loginData));
      setLoader(true);
      if (loginData.email === "admin@agsft.com") {
        setTimeout(() => {
          setLoader(false);
          navigate("/dashboard/statistics");
        }, 2000);
      } else {
        setOpen(true);
        setTimeout(() => {
          setLoader(false);
          navigate("/dashboard/statistics");
        }, 2000);
      }
    }
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submit, loginError]);

  const validateForm = (loginData) => {
    const error = {};

    if (!loginData.email) {
      error.email = "Email is required!";
    }
    if (
      loginData.email &&
      !loginData.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      error.email = "Email is not valid!";
    }
    if (!loginData.password) {
      error.password = "Password is required!";
    }

    return error;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          width: {
            xs: "85%",
            sm: "85%",
            md: "75%",
            lg: "75%",
          },
          height: "50rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            border: "4px solid white",
            height: { xs: "60%", sm: "60%", md: "60%", lg: "70%" },
            width: { xs: "100%", sm: "80%", md: "70%", lg: "65%" },
            borderRadius: "40px",
            padding: "10px",
            overflow: "hidden",

            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
            WebkitBackdropFilter: "blur(8px)",
            background: "rgba(255, 255, 255, 0.662)",
            backdropFilter: "blur(18px)",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "45%",
              borderRadius: "30px",
              display: { xs: "none", md: "none", lg: "flex" },
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(40deg,  #396ca7,#fe9999  )",
              border: "2px solid white",
              boxShadow:
                "rgba(136, 165, 191, 0.28) 6px 2px 6px 0px, rgba(255, 255, 255, 0.8) -6px -2px 6px 0px",
            }}
          >
            <img
              style={{
                objectFit: "contain",
              }}
              src={loginImage}
              alt=""
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "100%", lg: "45%" },
              padding: "1rem 1rem ",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: "28rem",
                  width: "100%",
                  padding: "2rem 1rem",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      fontSize: "30px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                      fontFamily: "'Alata', sans-serif",
                    }}
                  >
                    Hello Again!
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "400",
                      fontFamily: "'Alata', sans-serif",
                    }}
                  >
                    You have been missed!
                  </Typography>
                </Box>
                <Box sx={{ padding: "3rem 0" }}>
                  <Stack
                    gap={2}
                    sx={{ width: "70%", margin: "auto", textAlign: "left" }}
                  >
                    <Box sx={{ height: "4.5rem" }}>
                      <TextField
                        label="Email Address"
                        sx={{
                          background: "white",
                          width: "100%",
                          boxShadow:
                            " rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",
                        }}
                        onChange={handleChange}
                        value={loginData.email}
                        name="email"
                      />
                      <Typography
                        sx={{
                          color: "red",
                          padding: "0",
                          margin: "0",
                          fontSize: "12px",
                        }}
                      >
                        {loginError.email}
                      </Typography>
                    </Box>
                    <Box sx={{ height: "4.5rem" }}>
                      <FormControl
                        sx={{
                          background: "white",
                          width: "100%",
                          boxShadow:
                            " rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",
                        }}
                        variant="outlined"
                      >
                        <InputLabel htmlFor="outlined-adornment-password">
                          Password
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={showPassword ? "text" : "password"}
                          value={loginData.password}
                          name="password"
                          onChange={handleChange}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                      </FormControl>
                      <Typography sx={{ color: "red", fontSize: "12px" }}>
                        {loginError.password}
                      </Typography>
                    </Box>
                  </Stack>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "2rem",
                    }}
                  >
                    <Button
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        fontSize: {
                          xs: "12px",
                          sm: "12px",
                          md: "14px",
                          lg: "14px",
                        },
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "0.4px",
                        color: "rgb(53, 53, 53)",
                        // backgroundColor: " #e6e3ff",
                        background:
                          " linear-gradient(40deg,  #91b8e5,#fabbb2  )",
                        width: {
                          xs: "8rem",
                          sm: "10rem",
                          md: "10rem",
                          lg: "9rem",
                        },
                        border: "2px solid #fff",
                        borderRadius: " 30px ",
                        padding: ".6rem 3rem",

                        transition: "0.2s",
                        boxShadow:
                          " rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                        "&:hover": {
                          letterSpacing: "5px",
                          backgroundColor: " #bcb4ff",
                          boxShadow:
                            " rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
                        },
                      }}
                      onClick={handleLogin}
                      disabled={loader}
                    >
                      {loader ? <span>Varifying...</span> : <span>Login</span>}
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "2rem 0",
                    }}
                  >
                    <Typography sx={{ fontSize: "14px" }}>
                      Not a member?{" "}
                    </Typography>
                    &nbsp; &nbsp;
                    <Typography
                      sx={{
                        textDecoration: "none",
                        color: " #358efb ",
                        fontSize: "14px",
                      }}
                      component={Link}
                      to="/register"
                    >
                      Register now
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Snackbar open={open} autoHideDuration={3000}>
        <Alert
          severity="success"
          sx={{ width: "100%", bgcolor: "green", color: "white" }}
        >
          Logged in successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;
